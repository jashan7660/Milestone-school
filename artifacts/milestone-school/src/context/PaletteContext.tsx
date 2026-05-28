import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type PaletteId = "classic" | "purple" | "crimson" | "forest" | "ocean" | "midnight";

export interface Palette {
  id: PaletteId;
  nameEN: string;
  nameHI: string;
  primary: string;
  secondary: string;
  preview: [string, string];
}

export const PALETTES: Palette[] = [
  {
    id: "classic",
    nameEN: "Classic Blue",
    nameHI: "क्लासिक नीला",
    primary: "#2563EB",
    secondary: "#10B981",
    preview: ["#2563EB", "#10B981"],
  },
  {
    id: "purple",
    nameEN: "Royal Purple",
    nameHI: "रॉयल पर्पल",
    primary: "#7C3AED",
    secondary: "#F59E0B",
    preview: ["#7C3AED", "#F59E0B"],
  },
  {
    id: "crimson",
    nameEN: "Crimson & Gold",
    nameHI: "क्रिमसन गोल्ड",
    primary: "#DC2626",
    secondary: "#F97316",
    preview: ["#DC2626", "#F97316"],
  },
  {
    id: "forest",
    nameEN: "Forest Green",
    nameHI: "फॉरेस्ट ग्रीन",
    primary: "#15803D",
    secondary: "#D97706",
    preview: ["#15803D", "#D97706"],
  },
  {
    id: "ocean",
    nameEN: "Ocean Teal",
    nameHI: "ओशन टील",
    primary: "#0D9488",
    secondary: "#0EA5E9",
    preview: ["#0D9488", "#0EA5E9"],
  },
  {
    id: "midnight",
    nameEN: "Midnight Rose",
    nameHI: "मिडनाइट रोज़",
    primary: "#4338CA",
    secondary: "#E11D48",
    preview: ["#4338CA", "#E11D48"],
  },
];

interface PaletteContextValue {
  palette: Palette;
  setPalette: (id: PaletteId) => void;
}

const PaletteContext = createContext<PaletteContextValue>({
  palette: PALETTES[0],
  setPalette: () => {},
});

export function PaletteProvider({ children }: { children: ReactNode }) {
  const [paletteId, setPaletteId] = useState<PaletteId>(() => {
    if (typeof window === "undefined") return "classic";
    return (localStorage.getItem("ms-palette") as PaletteId) ?? "classic";
  });

  useEffect(() => {
    localStorage.setItem("ms-palette", paletteId);
    document.documentElement.setAttribute("data-palette", paletteId);
  }, [paletteId]);

  const palette = PALETTES.find(p => p.id === paletteId) ?? PALETTES[0];

  return (
    <PaletteContext.Provider value={{ palette, setPalette: setPaletteId }}>
      {children}
    </PaletteContext.Provider>
  );
}

export function usePalette() {
  return useContext(PaletteContext);
}
