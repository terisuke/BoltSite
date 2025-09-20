import type { Locales } from '../types';

// サポートされている言語
export const SUPPORTED_LOCALES: Locales[] = ['ja', 'en', 'zh', 'es'];

// デフォルト言語
export const DEFAULT_LOCALE: Locales = 'ja';

// パスから言語コードを取得
export function getLocaleFromPathname(pathname: string): Locales {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (SUPPORTED_LOCALES.includes(firstSegment as Locales)) {
    return firstSegment as Locales;
  }
  
  return DEFAULT_LOCALE;
}

// 言語コードからパスプレフィックスを取得
export function getPathPrefix(locale: Locales): string {
  return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

// 現在のパスから言語を除いたパスを取得
export function getPathWithoutLocale(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  const prefix = getPathPrefix(locale);
  
  if (prefix && pathname.startsWith(prefix)) {
    return pathname.slice(prefix.length) || '/';
  }
  
  return pathname;
}

// 翻訳ファイルを読み込み
export async function loadTranslation(locale: Locales) {
  try {
    const translation = await import(`../locales/${locale}/translation.json`);
    return translation.default;
  } catch (error) {
    console.warn(`Failed to load translation for locale: ${locale}`, error);
    // フォールバックとしてデフォルト言語の翻訳を読み込み
    const fallbackTranslation = await import(`../locales/${DEFAULT_LOCALE}/translation.json`);
    return fallbackTranslation.default;
  }
}

// ネストされた翻訳キーを取得
export function getTranslation(translations: any, key: string): string {
  const keys = key.split('.');
  let value = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // キーが見つからない場合はキー自体を返す
    }
  }
  
  return typeof value === 'string' ? value : key;
}

// 言語名を取得
export function getLanguageName(locale: Locales): string {
  const names: Record<Locales, string> = {
    ja: '日本語',
    en: 'English',
    zh: '中文',
    es: 'Español'
  };
  
  return names[locale] || locale;
}

// 言語フラグを取得
export function getLanguageFlag(locale: Locales): string {
  const flags: Record<Locales, string> = {
    ja: '🇯🇵',
    en: '🇺🇸',
    zh: '🇨🇳',
    es: '🇪🇸'
  };
  
  return flags[locale] || '🌐';
}