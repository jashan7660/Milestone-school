import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "hi";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  isHindi: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  isHindi: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      return (localStorage.getItem("site-lang") as Lang) || "en";
    } catch {
      return "en";
    }
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("site-lang", l);
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, isHindi: lang === "hi" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
