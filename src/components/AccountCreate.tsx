// Create Auth Context (Need to go threw on lesson)

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import Icon from "../assets/brand/icon_lb.svg?react";
import { Check, X } from "lucide-react";
import { roles } from "../constance/roles";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { Controller } from "react-hook-form";
import {
  createFranchisorFormSchema,
  type FormFields,
} from "../types/createFranchisorFormSchema";
import { createNewUser } from "../api/createNewUser";
import { useNavigate } from "react-router";

export default function AccountCreate() {
  const {
    register,
    control,
    watch,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(createFranchisorFormSchema),
  });

  const navigate = useNavigate()

  const password = watch("password");

  const requirements = [
    { label: "Minimum 8 characters", test: (val: string) => val.length >= 8 },
    {
      label: "Must contain one number",
      test: (val: string) => /[0-9]/.test(val),
    },
    {
      label: "Must contain one uppercase letter",
      test: (val: string) => /[A-Z]/.test(val),
    },
    {
      label: "Must contain one symbol",
      test: (val: string) => /[^a-zA-Z0-9]/.test(val),
    },
  ];
  //Config backend, create user and store additional info in table
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await createNewUser(
        data.companyEmail,
        data.password,
        data.firstName,
        data.lastName,
        data.role,
      );
      reset();
      navigate("/dashboard/home")
    } catch (error) {
      console.error(error);
      setError("root", {
        message:
          "Something went wrong creating your account. Please try again.",
      });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen w-fill">
      <div className="flex flex-col justify-center items-center gap-2 mb-4">
        <Icon className="w-10 h-10 mb-2" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-adelphi font-medium uppercase text-[24px]">
            Your World. Your System.
          </h1>
          <p className="font-dm-sans font-normal text-brand-grey-200 text-[16px]">
            Create your Keystix account{" "}
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-4 max-w-[360px] "
      >
        <div className="flex flex-row gap-4">
          <label className="flex flex-col text-brand-grey-200 text-[12px]">
            First Name
            <input
              {...register("firstName")}
              type="text"
              placeholder="John"
              className="p-2 mt-2 border-1 text-black placeholder:text-brand-grey-200 border-brand-grey-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-light-blue-300"
            />
            {errors.firstName && (
              <div className="text-red-500 mt-0.5">
                {errors.firstName.message}
              </div>
            )}
          </label>

          <label className="flex flex-col text-brand-grey-200 text-[12px]">
            Last Name
            <input
              {...register("lastName")}
              type="text"
              placeholder="Doe"
              className="p-2 mt-2 border-1 text-black placeholder:text-brand-grey-200 border-brand-grey-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-light-blue-300"
            />
            {errors.lastName && (
              <div className="text-red-500 mt-0.5">
                {errors.lastName.message}
              </div>
            )}
          </label>
        </div>
        <label className="flex flex-col text-brand-grey-200 text-[12px]">
          Company Email
          <input
            {...register("companyEmail")}
            type="text"
            placeholder="Enter your email address..."
            className="p-2 mt-2 border-1 text-black placeholder:text-brand-grey-200 border-brand-grey-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-light-blue-300"
          />
          {errors.companyEmail && (
            <div className="text-red-500 mt-0.5">
              {errors.companyEmail.message}
            </div>
          )}
        </label>

        <label className="flex flex-col text-brand-grey-200 text-[12px]">
          Role
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <Listbox value={field.value ?? ""} onChange={field.onChange}>
                <ListboxButton className="w-full mt-2 p-2 border border-brand-grey-100 rounded-lg text-left flex justify-between items-center cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-light-blue-300">
                  <span
                    className={
                      field.value ? "text-black " : "text-brand-grey-200"
                    }
                  >
                    {field.value || "Select your role"}
                  </span>
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className=" w-(--button-width) mt-2 rounded-xl border border-brand-grey-100 bg-white p-2 space-y-1 focus:outline-none"
                >
                  {roles.map((role) => (
                    <ListboxOption
                      key={role}
                      value={role}
                      className="px-3 py-2 text-[12px] rounded-lg cursor-pointer data-focus:bg-brand-light-blue-300/10"
                    >
                      {role}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            )}
          />
          {errors.role && (
            <div className="text-red-500 mt-0.5">{errors.role.message}</div>
          )}
        </label>

        <label className="flex flex-col text-brand-grey-200 text-[12px]">
          Password
          <input
            {...register("password")}
            type="password"
            placeholder="Enter your password"
            className="p-2 mt-2 border-1 text-black placeholder:text-brand-grey-200 border-brand-grey-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-light-blue-300"
          />
          {errors.password && (
            <div className="text-red-500 mt-0.5">{errors.password.message}</div>
          )}
        </label>
        <label className="flex flex-col text-brand-grey-200 text-[12px]">
          Confirm Password
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirm your password..."
            className="p-2 mt-2 border-1 text-black placeholder:text-brand-grey-200 border-brand-grey-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-light-blue-300"
          />
          {errors.confirmPassword && (
            <div className="text-red-500 mt-0.5 ">
              {errors.confirmPassword.message}
            </div>
          )}
        </label>
        <div className="flex flex-col gap-1 mt-2">
          {requirements.map(({ label, test }) => {
            const passed = test(password || "");
            return (
              <div
                key={label}
                className={`flex items-center gap-2 text-[12px] ${
                  passed ? "text-brand-light-blue-300" : "text-brand-grey-200"
                }`}
              >
                {passed ? <Check size={14} /> : <X size={14} />}
                {label}
              </div>
            );
          })}
        </div>
        <button
          className="w-full text-[12px] h-[40px] bg-brand-light-blue-300 text-white rounded-lg"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Continue"}
        </button>
        {errors.root && (
          <div className="text-red-500 text-[12px] text-center">
            {errors.root.message}
          </div>
        )}
        <div className="flex justify-center text-center text-brand-grey-200">
          <p className="text-[12px] max-w-[] ">
            By continuing, you acknowledge that you understand and agree to the{" "}
            <span className="underline cursor-pointer">Terms & Conditions</span>{" "}
            and <span className="underline cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </form>
    </main>
  );
}
