// i18n utility functions for dynamic language switching

import { translations, type Language, availableLanguages } from './translations';

export interface TranslationData {
  [key: string]: any;
}

// 翻訳データを格納する変数
let currentLanguage: Language = 'ja';

// 翻訳データを初期化
export function initTranslations(language: Language = 'ja') {
  currentLanguage = language;
}

// 翻訳を取得する関数
export function t(key: string, fallback?: string): string {
  const keys = key.split('.');
  let value: any = translations[currentLanguage];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // フォールバックとして日本語を試す
      if (currentLanguage !== 'ja') {
        let fallbackValue: any = translations['ja'];
        for (const fallbackKey of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fallbackKey in fallbackValue) {
            fallbackValue = fallbackValue[fallbackKey];
          } else {
            fallbackValue = undefined;
            break;
          }
        }
        if (fallbackValue) {
          return fallbackValue;
        }
      }
      return fallback || key;
    }
  }
  
  return typeof value === 'string' ? value : (fallback || key);
}

// 言語を変更する関数
export function changeLanguage(language: Language) {
  currentLanguage = language;
  
  // ページ内のすべてのi18n要素を更新
  updatePageTranslations();
  
  // カスタムイベントを発火
  window.dispatchEvent(new CustomEvent('languageChanged', {
    detail: { language }
  }));
}

// ページ内の翻訳を更新する関数
export function updatePageTranslations() {
  const elements = document.querySelectorAll('[data-i18n-key]');
  
  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n-key');
    if (key) {
      const translation = t(key);
      if (element.tagName === 'INPUT' && element.getAttribute('type') === 'text') {
        (element as HTMLInputElement).placeholder = translation;
      } else {
        element.textContent = translation;
      }
    }
  });
}

// 現在の言語を取得
export function getCurrentLanguage(): Language {
  return currentLanguage;
}

// 初期化時に翻訳データを読み込む
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = (localStorage.getItem('selectedLanguage') as Language) || 'ja';
  initTranslations(savedLanguage);
  updatePageTranslations();
});
