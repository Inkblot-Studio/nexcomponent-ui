export type LanguageOption = {
    code: string;
    label: string;
    icon?: string;
};
export type LanguageSwitcherProps = {
    currentLocale: string;
    options: LanguageOption[];
    onChange: (code: string) => void;
};
