import i18next from 'i18next';

export const languages = {
  ja: '日本語',
  en: 'English',
  zh: '中文',
  es: 'Español'
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'ja';

export async function initI18n(lng: Language = defaultLanguage) {
  await i18next.init({
    lng,
    fallbackLng: defaultLanguage,
    debug: false,
    resources: {
      ja: {
        translation: (await import('./locales/ja/translation.json')).default
      },
      en: {
        translation: (await import('./locales/en/translation.json')).default
      },
      zh: {
        translation: (await import('./locales/zh/translation.json')).default
      },
      es: {
        translation: (await import('./locales/es/translation.json')).default
      }
    }
  });
}

export function t(key: string, options?: any): string {
  return i18next.t(key, options);
}

export function getCurrentLanguage(): Language {
  return (i18next.language as Language) || defaultLanguage;
}

export function changeLanguage(lng: Language) {
  return i18next.changeLanguage(lng);
}
