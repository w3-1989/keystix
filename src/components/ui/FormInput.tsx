import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-[12px] text-brand-grey-200">{label}</label>
        <input
          ref={ref}
          {...rest}
          className="text-[13px] px-3 py-2 border border-brand-grey-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-light-blue-300"
        />
      </div>
    );
  },
);

FormInput.displayName = "FormInput";

export default FormInput;