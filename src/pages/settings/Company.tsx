import SettingsActionBar from "../../components/SettingsActionBar";
import { useForm } from "react-hook-form";
import FormSection from "../../components/ui/FormSection";
import FormInput from "../../components/ui/FormInput";
import CompanyLogoUploader from "../../components/ui/CompanyLogoUploader";

type CompanyFormValues = {
  companyName: string;
  tradingName: string;
  industry: string;
  yearEstablished: number | undefined;
  numberOfLocations: number | undefined;
  businessEmail: string;
  businessPhoneNumber: number | undefined;
  website: string;
  businessRegistrationNumber: string;
  vatNumber: string;
  country: string;
  currency: string;
};

export default function Company() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<CompanyFormValues>({
    defaultValues: {
      companyName: "",
      tradingName: "",
      industry: "",
      yearEstablished: undefined,
      numberOfLocations: undefined,
      businessEmail: "",
      businessPhoneNumber: undefined,
      website: "",
      businessRegistrationNumber: "",
      vatNumber: "",
      country: "",
      currency: "",
    }, // whatever you loaded from Supabase
  });

  const companyDetailsFields: {
    name: keyof CompanyFormValues;
    label: string;
    placeholder?: string;
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
    },
    {
      name: "numberOfLocations",
      label: "Number of Locations",
      placeholder: "e.g. 5",
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

  const onSave = (data: CompanyFormValues) => {
    console.log(data); // Supabase update call goes here later
  };
  return (
    <form
      onSubmit={handleSubmit(onSave)}
      className="pl-4 pr-4 m-3  h-full flex flex-col"
    >
      <div className="mb-4">
        <SettingsActionBar onCancel={() => reset()} isDirty={isDirty} />
      </div>

      <div className="flex gap-8 mt-4 flex-1 min-h-0">
        <div className="flex-1 ">
          <FormSection label="General Information">
            {companyDetailsFields.map((field) => (
              <FormInput
                key={field.name}
                label={field.label}
                placeholder={field.placeholder}
                {...register(field.name)}
              />
            ))}
          </FormSection>
          <FormSection label="Contact">
            {contactDetailsFields.map((field) => (
              <FormInput
                key={field.name}
                label={field.label}
                placeholder={field.placeholder}
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
                {...register(field.name)}
              />
            ))}
          </FormSection>
        </div>

        <div className="shrink-0 self-start">
          <CompanyLogoUploader />
        </div>
      </div>
    </form>
  );
}
