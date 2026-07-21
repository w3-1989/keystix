import { useRef, useState, useMemo, useEffect } from "react";
import type { DragEvent, ChangeEvent, FormEvent } from "react";
import { UploadCloud } from "lucide-react";
import DOMPurify from "dompurify";

const ALLOWED_TYPES = ["image/svg+xml", "image/png", "image/jpeg"];
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

export default function CompanyLogoUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const previewUrl = useMemo(() => {
    if (!file) return null;
    return URL.createObjectURL(file);
  }, [file]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  async function validateAndSetFile(selected: File) {
    setError(null);

    if (!ALLOWED_TYPES.includes(selected.type)) {
      setError("Please upload an SVG, PNG, or JPEG file.");
      return;
    }

    if (selected.size > MAX_FILE_SIZE) {
      setError("File is too large. Max size is 2MB.");
      return;
    }

    if (selected.type === "image/svg+xml") {
      const rawText = await selected.text();
      const cleanText = DOMPurify.sanitize(rawText, {
        USE_PROFILES: { svg: true, svgFilters: true },
      });
      const cleanFile = new File([cleanText], selected.name, { type: "image/svg+xml" });
      setFile(cleanFile);
      return;
    }

    setFile(selected);
  }

  function handleDrag(e: DragEvent<HTMLFormElement | HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) validateAndSetFile(dropped);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];
    if (selected) validateAndSetFile(selected);
  }

  function onClick() {
    inputRef.current?.click();
  }

  return (
    <form
      id="form-file-upload"
      onDragEnter={handleDrag}
      onSubmit={(e: FormEvent) => e.preventDefault()}
      className="relative flex flex-col items-center gap-6 w-[330px] p-6 bg-white border border-brand-grey-100 rounded-2xl"
    >
      <h3 className="font-adelphi text-[22px]">Company Logo</h3>

      <div className="w-36 h-36 rounded-2xl bg-brand-grey-100 flex items-center justify-center overflow-hidden">
        {previewUrl && <img src={previewUrl} alt="Company logo preview" className="w-24 h-24 object-contain" />}
      </div>

      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        accept="image/svg+xml,image/png,image/jpeg"
        onChange={handleChange}
        className="hidden"
      />

      <label
        htmlFor="input-file-upload"
        className="w-full border-2 border-dashed border-brand-grey-200 bg-brand-grey-50 rounded-2xl py-8 flex flex-col items-center gap-2 cursor-pointer"
      >
        <UploadCloud size={36} className="text-brand-grey-200" />
        <p className="font-dm-sans text-[14px] text-black">Drag a photo here</p>
        <p className="font-dm-sans text-[12px] text-brand-grey-200">OR</p>
        <button
          type="button"
          onClick={onClick}
          className="bg-brand-light-blue-300 text-white text-[13px] rounded-lg px-4 py-2"
        >
          Upload Photo
        </button>
      </label>

      {error && <p className="text-[12px] text-red-500">{error}</p>}

      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className="absolute inset-0 rounded-2xl border-2 border-brand-light-blue-300 bg-brand-light-blue-300/10"
        ></div>
      )}
    </form>
  );
}