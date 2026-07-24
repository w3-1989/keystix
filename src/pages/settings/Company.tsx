// Save file and insert path to company table
// Check first to see if data exists and populate tables 
// Add business email from users table
import SettingsActionBar from "../../components/SettingsActionBar";
import { useForm } from "react-hook-form";
import FormSection from "../../components/ui/FormSection";
import FormInput from "../../components/ui/FormInput";
import CompanyLogoUploader from "../../components/ui/CompanyLogoUploader";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  companySchema,
  type CompanyFormValues,
} from "../../types/CompanyFormValuesSchema";
import { useState } from "react";
import getUserId from "../../helper/getUserId";
import { supabase } from "../../config/supabaseClient";

export default function Company() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, errors },
  } = useForm<CompanyFormValues>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      companyName: "",
      tradingName: "",
      industry: "",
      yearEstablished: undefined,
      numberOfLocations: undefined,
      businessEmail: "",
      businessPhoneNumber: "",
      website: "",
      businessRegistrationNumber: "",
      vatNumber: "",
      country: "",
      currency: "",
    },
  });

  const companyDetailsFields: {
    name: keyof CompanyFormValues;
    label: string;
    placeholder?: string;
    valueAsNumber?: boolean;
  }[] = [
    {
      name: "companyName",
      label: "Company Name",
      placeholder: "The Amazing Company",
    },
    {
      name: "tradingName",
      label: "Trading Name",
      placeholder: "Same as company name, if different",
    },
    {
      name: "industry",
      label: "Industry",
      placeholder: "e.g. Ecommerce, Retail, Hospitality",
    },
    {
      name: "yearEstablished",
      label: "Year Established",
      placeholder: "e.g. 2020",
      valueAsNumber: true,
    },
    {
      name: "numberOfLocations",
      label: "Number of Locations",
      placeholder: "e.g. 5",
      valueAsNumber: true,
    },
  ];

  const contactDetailsFields: {
    name: keyof CompanyFormValues;
    label: string;
    placeholder?: string;
  }[] = [
    {
      name: "businessEmail",
      label: "Business Email",
      placeholder: "hello@yourcompany.com",
    },
    {
      name: "businessPhoneNumber",
      label: "Business Phone Number",
      placeholder: "e.g. 01234 567890",
    },
    { name: "website", label: "Website", placeholder: "www.yourcompany.com" },
  ];

  const legalDetailsFields: {
    name: keyof CompanyFormValues;
    label: string;
    placeholder?: string;
  }[] = [
    {
      name: "businessRegistrationNumber",
      label: "Business Registration Number",
      placeholder: "e.g. 12345678",
    },
    {
      name: "vatNumber",
      label: "VAT / Tax Number",
      placeholder: "e.g. GB123456789",
    },
  ];

  const locationDetailsFields: {
    name: keyof CompanyFormValues;
    label: string;
    placeholder?: string;
  }[] = [
    { name: "country", label: "Country", placeholder: "e.g. United Kingdom" },
    { name: "currency", label: "Currency", placeholder: "e.g. GBP" },
  ];

  const [file, setFile] = useState<File | null>(null);

  const onSave = (data: CompanyFormValues) => {
    async function saveBusinessData() {
      const userId = await getUserId();

      const { data: company, error } = await supabase
        .from("company")
        .insert({
          name: data.companyName,
          trading_name: data.tradingName,
          industry: data.industry,
          year_established: data.yearEstablished,
          number_of_locations: data.numberOfLocations,
          company_email: data.businessEmail,
          company_phone_number: data.businessPhoneNumber,
          website: data.website,
          business_registration_number: data.businessRegistrationNumber,
          vat: data.vatNumber,
          country: data.country,
          currency: data.currency,
        })
        .select()
        .single();

      if (error || !company) {
        console.log("error inserting business info ", error);
        return;
      }

      const { error: updateError } = await supabase
        .from("users")
        .update({ company_id: company.id })
        .eq("id", userId);

      if (updateError) {
        console.log("Error adding company id", updateError);
      }
    }
    saveBusinessData();
  };

  return (
    <form
      onSubmit={handleSubmit(onSave)}
      className="pl-4 pr-4 m-3 h-full flex flex-col"
    >
      <div className="mb-4">
        <SettingsActionBar onCancel={() => reset()} isDirty={isDirty} />
      </div>

      <div className="flex gap-8 mt-4 flex-1 min-h-0">
        <div className="flex-1">
          <FormSection label="General Information">
            {companyDetailsFields.map((field) => (
              <FormInput
                key={field.name}
                label={field.label}
                placeholder={field.placeholder}
                error={errors[field.name]?.message}
                {...register(field.name, {
                  valueAsNumber: field.valueAsNumber,
                })}
              />
            ))}
          </FormSection>
          <FormSection label="Contact">
            {contactDetailsFields.map((field) => (
              <FormInput
                key={field.name}
                label={field.label}
                placeholder={field.placeholder}
                error={errors[field.name]?.message}
                {...register(field.name)}
              />
            ))}
          </FormSection>
          <FormSection label="Legal">
            {legalDetailsFields.map((field) => (
              <FormInput
                key={field.name}
                label={field.label}
                placeholder={field.placeholder}
                error={errors[field.name]?.message}
                {...register(field.name)}
              />
            ))}
          </FormSection>
          <FormSection label="Region & Currency">
            {locationDetailsFields.map((field) => (
              <FormInput
                key={field.name}
                label={field.label}
                placeholder={field.placeholder}
                error={errors[field.name]?.message}
                {...register(field.name)}
              />
            ))}
          </FormSection>
        </div>

        <div className="shrink-0 self-start">
          <CompanyLogoUploader file={file} setFile={setFile} />
        </div>
      </div>
    </form>
  );
}
