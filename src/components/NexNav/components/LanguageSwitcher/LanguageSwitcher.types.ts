export type LanguageOption = {
  code: string;
  label: string;
  icon?: string; // optional flag/icon URL
};

export type LanguageSwitcherProps = {
  currentLocale: string;
  options: LanguageOption[];
  onChange: (code: string) => void;
};
