import { Injectable, signal, computed, effect } from '@angular/core';
import { Language, translations, Translations } from './translations';

const STORAGE_KEY = 'portfolio_language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly currentLanguage = signal<Language>(this.detectLanguage());

  readonly language = this.currentLanguage.asReadonly();
  readonly t = computed(() => translations[this.currentLanguage()]);

  constructor() {
    // Save language preference whenever it changes
    effect(() => {
      const lang = this.currentLanguage();
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang;
      }
    });
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
  }

  toggleLanguage(): void {
    this.currentLanguage.update((current) => (current === 'en' ? 'es' : 'en'));
  }

  private detectLanguage(): Language {
    // 1. Check localStorage for saved preference
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'es') {
        return saved;
      }

      // 2. Detect from browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('es')) {
        return 'es';
      }
    }

    // 3. Default to English
    return 'en';
  }
}
