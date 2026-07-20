import type { ReactNode } from "react";

type FormSectionProps = {
  label: string;
  children: ReactNode;
};

export default function FormSection({ label, children }: FormSectionProps) {
  return (
    <div className="mb-8 ">
      <h3 className="font-dm-sans font-medium text-[14px] mb-4">{label}</h3>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}
