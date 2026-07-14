import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

const formSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    companyEmail: z.string().email(),
    role: z.enum(
      [
        "CEO / Founder",
        "COO (Chief Operating Officer)",
        "Head of Operations",
        "Business Development Manager",
        "Executive Assistant / Chief of Staff",
      ],
      { error: "Role is Required" },
    ),
    password: z
      .string()
      .min(8, "Must be at least 8 characters")
      .max(64, "Must be at most 64 characters")
      .regex(/[a-z]/, "Must contain a lowercase letter")
      .regex(/[A-Z]/, "Must contain an uppercase letter")
      .regex(/[0-9]/, "Must contain a number")
      .regex(/[^a-zA-Z0-9]/, "Must contain a special character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormFields = z.infer<typeof formSchema>;

export default function AccountCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <main className="flex justify-center align-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-4"
      >
        <div className="flex flex-row gap-4">
          <label className="flex flex-col">
            First Name
            <input
              {...register("firstName")}
              type="text"
              placeholder="John"
            />
            {errors.firstName && (
              <div className="text-red-500">{errors.firstName.message}</div>
            )}
          </label>

          <label className="flex flex-col">
            Last Name
            <input
              {...register("lastName")}
              type="text"
              placeholder="Doe"
            />
            {errors.lastName && (
              <div className="text-red-500">{errors.lastName.message}</div>
            )}
          </label>
        </div>
        <label className="flex flex-col">
          Company Email
          <input
            {...register("companyEmail")}
            type="text"
            placeholder="Enter your email address..."
          />
          {errors.companyEmail && (
            <div className="text-red-500">{errors.companyEmail.message}</div>
          )}
        </label>

        <label className="flex flex-col">
          Role
          <select
            {...register("role")}
            name="role"
            id="role"
            defaultValue="Select your role"
          >
            <option value="Select your role" disabled>
              Select your role
            </option>
            <option value="CEO / Founder">CEO / Founder</option>
            <option value="COO (Chief Operating Officer)">
              COO (Chief Operating Officer)
            </option>
            <option value="Head of Operations">Head of Operations</option>
            <option value="Business Development Manager">
              Business Development Manager
            </option>
            <option value="Executive Assistant / Chief of Staff">
              Executive Assistant / Chief of Staff
            </option>
          </select>
          {errors.role && (
            <div className="text-red-500">{errors.role.message}</div>
          )}
        </label>

        <label className="flex flex-col">
          Password
          <input
            {...register("password")}
            type="text"
            placeholder="Enter your password"
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </label>
        <label className="flex flex-col">
          Confirm Password
          <input
            {...register("confirmPassword")}
            type="text"
            placeholder="Confirm your password..."
          />
          {errors.confirmPassword && (
            <div className="text-red-500">{errors.confirmPassword.message}</div>
          )}
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Continue"}
        </button>
      </form>
    </main>
  );
}
