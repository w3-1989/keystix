import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router";
export default function NewFeatures() {
  const navigate = useNavigate();

  function onSubmit() {
    navigate("/dashboard/suggest-features");
  }

  return (
    <main className="flex flex-col m-4 p-4 rounded-[8px] bg-white">
      <div className="flex flex-row gap-2 items-center mb-2">
        <Sparkles size={14} className="text-brand-light-blue-300" />
        <p className="font-dm-sans text-[12px]">New Features Coming Soon!</p>
      </div>
      <div>
        <p className="font-dm-sans text-[12px] text-gray-300 mb-4">
          We're building smarter tools and a smoother experience, shaped by what
          you've been asking for. Got an idea? We'd love to hear it.
        </p>
        <button className="bg-brand-light-blue-300 w-full rounded-[8px] p-2 cursor-pointer  text-white text-[12px]" onClick={() => onSubmit()}>Suggest Feature</button>
      </div>
    </main>
  );
}
