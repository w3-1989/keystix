import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-[12px] text-brand-grey-200">{label}</label>
        <input
          ref={ref}
          {...rest}
          className={`text-[13px] px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 ${
            error
              ? "border-red-400 focus:ring-red-400"
              : "border-brand-grey-100 focus:ring-brand-light-blue-300"
          }`}
        />
        {error && <p className="text-[11px] text-red-500">{error}</p>}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";

export default FormInput;
