export const languages = {
  ja: "日本語",
  en: "English",
  zh: "中文",
  es: "Español",
  ko: "한국어",
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = "ja";

// 翻訳ファイルを直接インポートする関数
export async function loadTranslations(lng: Language) {
  try {
    switch (lng) {
      case "ja":
        return (await import("./locales/ja/translation.json")).default;
      case "en":
        return (await import("./locales/en/translation.json")).default;
      case "zh":
        return (await import("./locales/zh/translation.json")).default;
      case "es":
        return (await import("./locales/es/translation.json")).default;
      case "ko":
        return (await import("./locales/ko/translation.json")).default;
      default:
        return (await import("./locales/ja/translation.json")).default;
    }
  } catch (error) {
    console.warn(`Failed to load translation for locale: ${lng}`, error);
    return (await import("./locales/ja/translation.json")).default;
  }
}

// ネストされた翻訳キーを取得する関数
export function getTranslation(translations: any, key: string): string {
  const keys = key.split(".");
  let value = translations;

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      return key; // キーが見つからない場合はキー自体を返す
    }
  }

  return typeof value === "string" ? value : key;
}
