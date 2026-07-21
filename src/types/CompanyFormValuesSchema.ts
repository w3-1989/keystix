// schemas/company.ts
import { z } from "zod";

export const companySchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  tradingName: z.string().optional(),
  industry: z.string().optional(),
  yearEstablished: z
    .number({ error: "Enter a valid year" })
    .int()
    .min(1800, "Enter a valid year")
    .max(new Date().getFullYear(), "Year can't be in the future")
    .optional(),
  numberOfLocations: z
    .number({ error: "Enter a whole number" })
    .int()
    .min(1, "Must have at least 1 location")
    .optional(),
  businessEmail: z.email("Enter a valid email address"),
  businessPhoneNumber: z
    .string()
    .min(7, "Enter a valid phone number")
    .regex(/^[0-9+\s()-]+$/, "Enter a valid phone number"),
  website: z
    .string()
    .regex(
      /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/,
      "Enter a valid website URL",
    )
    .optional(),
  businessRegistrationNumber: z
    .string()
    .min(5, "Registration number looks too short")
    .max(20, "Registration number looks too long")
    .optional(),
  vatNumber: z
    .string()
    .min(4, "VAT number looks too short")
    .max(20, "VAT number looks too long")
      .optional(),
  country: z.string().min(1, "Country is required"),
  currency: z
    .string()
    .regex(/^[A-Z]{3}$/, "Use a 3-letter currency code, e.g. GBP"),
});

export type CompanyFormValues = z.infer<typeof companySchema>;
