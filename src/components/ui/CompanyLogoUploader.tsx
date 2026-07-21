import { useState, useRef } from "react";
import type { DragEvent, ChangeEvent, FormEvent } from "react";
import { UploadCloud } from "lucide-react";

export default function CompanyLogoUploader() {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleDrag(e: DragEvent<HTMLFormElement | HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // store the file in state here, then upload to Supabase
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      // store the file in state here too
    }
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
      <h3 className="font-dm-sans font-medium text-[14px]">Company Logo</h3>

      <div className="w-36 h-36 rounded-2xl bg-brand-light-blue-300 flex items-center justify-center overflow-hidden">
        {/* swap for your actual logo mark / uploaded preview image */}
      </div>

      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
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