export const LANGUAGES = {
  UK: {
    name: "uk - українська",
    example: "Мова інтерфейсу",
  },
  EN: {
    name: "en - English",
    example: "Language",
  },
  FR: {
    name: "fr - français",
    example: "Langue",
  },
} as const;

type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];

export function getRandomLanguage(excludeLanguage?: string): Language {
  let languageValues = Object.values(LANGUAGES);

  if (excludeLanguage) {
    languageValues = languageValues.filter(
      (lang) => lang.name !== excludeLanguage,
    );
  }

  const randomIndex = Math.floor(Math.random() * languageValues.length);
  return languageValues[randomIndex];
}

export function getLanguageExample(languageName: string): string {
  const language = Object.values(LANGUAGES).find(
    (lang) => lang.name === languageName,
  );
  return language ? language.example : "";
}
