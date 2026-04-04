import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../services';

@Component({
  selector: 'app-language-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      (click)="toggleLanguage()"
      [attr.aria-label]="currentLang() === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'"
      class="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path
          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        />
        <path d="M2 12h20" />
      </svg>
      <span class="font-mono font-semibold">{{ currentLang().toUpperCase() }}</span>
    </button>
  `,
})
export class LanguageToggleComponent {
  private readonly languageService = inject(LanguageService);

  protected readonly currentLang = this.languageService.language;

  protected toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
}
