type SettingsActionBarProps = {
  onCancel: () => void;
  isDirty?: boolean;
};

export default function SettingsActionBar({onCancel, isDirty}: SettingsActionBarProps) {

  return (
    <main className="flex flex-row justify-between  ">
      <div className="flex flex-col">
        <h3 className="font-adelphi">Company</h3>
        <p className="text-[12px] font-dm-sans text-brand-grey-200">
          Manage your business details and keep your data up to date.
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <button onClick={onCancel} type="button" className="w-[64px] h-[32px] border text-[12px] cursor-pointer border-brand-grey-100 rounded-[4px]">
          Cancel
        </button>
        <button disabled={!isDirty} type="submit" className="w-[64px] h-[32px] border text-[12px] cursor-pointer bg-brand-light-blue-300 text-white rounded-[4px]">
          Save
        </button>
      </div>
    </main>
  );
}
