// components/ComingSoon.tsx
import { Rocket } from "lucide-react";

type ComingSoonProps = {
  message?: string;
};

export default function ComingSoon({
  message = "We're working on this page. Check back soon.",
}: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6">
      <div className="bg-brand-grey-50 border border-brand-grey-100 rounded-full p-4 mb-4">
        <Rocket size={28} className="text-brand-light-blue-300" />
      </div>
      <h2 className="font-adelphi text-[22px] text-black mb-1">Coming Soon</h2>
      <p className="font-dm-sans text-[13px] text-brand-grey-200 max-w-[320px]">
        {message}
      </p>
    </div>
  );
}