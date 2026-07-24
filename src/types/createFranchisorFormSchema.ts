import {z} from "zod"
import { roles } from "../constance/roles";
export const createFranchisorFormSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.email(),
    role: z.enum(
      roles,
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

export type FormFields = z.infer<typeof createFranchisorFormSchema>;