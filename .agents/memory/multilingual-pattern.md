---
name: Multilingual wiring pattern
description: How to wire new components/pages to the en/hi translation system in this project
---

## Rule
All translatable UI falls into two patterns:

### Sections (reusable components)
```tsx
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";
const { lang } = useLanguage();
const t = SITE[lang].sectionKey;
```
Add the section's typed shape to `SiteT` in `translations.ts` and implement the key in both `SITE.en` and `SITE.hi`.

### Pages (full-page routes)
```tsx
const { lang } = useLanguage();
const isHindi = lang === "hi";
// All strings: isHindi ? "हिंदी टेक्स्ट" : "English text"
// All arrays: isHindi ? [...hindi items] : [...english items]
```

**Why:** Pages have very heterogeneous data (complex nested arrays, icons, colors) that don't fit a simple key-value map. Sections are reused across pages and benefit from the shared SITE object.

**How to apply:** When adding a new section, add its type to `SiteT`, implement in both `SITE.en` and `SITE.hi` in `translations.ts`. When adding a new page, use inline ternary pattern — no changes to translations.ts needed unless it's a reusable section.

## Location of translation data
`artifacts/milestone-school/src/i18n/translations.ts` — `SITE.en` and `SITE.hi` objects, `SiteT` interface at the bottom.

## LanguageContext
`artifacts/milestone-school/src/context/LanguageContext.tsx` — provides `lang` ("en"|"hi") and `setLang`. Persists to localStorage automatically.
