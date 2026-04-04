import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';

interface NavItem {
  labelKey: keyof ReturnType<LanguageService['t']>['nav'];
  href: string;
  isExternal?: boolean;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, LanguageToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800"
    >
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div class="flex items-center justify-between h-16">
          <a
            routerLink="/"
            class="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors font-mono"
          >
            &lt;AD /&gt;
          </a>

          <!-- Desktop navigation -->
          <div class="hidden md:flex items-center gap-8">
            <ul class="flex items-center gap-8" role="list">
              @for (item of navItems(); track item.labelKey) {
                <li>
                  @if (item.isExternal) {
                    <a
                      [href]="item.href"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-slate-400 hover:text-emerald-400 font-medium transition-colors"
                    >
                      {{ t().nav[item.labelKey] }}
                    </a>
                  } @else {
                    <a
                      [routerLink]="item.href"
                      class="text-slate-400 hover:text-emerald-400 font-medium transition-colors"
                    >
                      {{ t().nav[item.labelKey] }}
                    </a>
                  }
                </li>
              }
              <li>
                <a
                  href="/resume.pdf"
                  download
                  class="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-500 transition-colors"
                >
                  {{ t().nav.resume }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              </li>
            </ul>
            <app-language-toggle />
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center gap-2">
            <app-language-toggle />
            <button
              type="button"
              class="p-2 text-slate-400 hover:text-emerald-400"
              [attr.aria-expanded]="mobileMenuOpen()"
              aria-controls="mobile-menu"
              (click)="toggleMobileMenu()"
            >
              <span class="sr-only">Open main menu</span>
              @if (mobileMenuOpen()) {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              } @else {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  aria-hidden="true"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              }
            </button>
          </div>
        </div>

        <!-- Mobile menu -->
        @if (mobileMenuOpen()) {
          <div id="mobile-menu" class="md:hidden pb-4">
            <ul class="flex flex-col gap-4" role="list">
              @for (item of navItems(); track item.labelKey) {
                <li>
                  @if (item.isExternal) {
                    <a
                      [href]="item.href"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="block text-slate-400 hover:text-emerald-400 font-medium transition-colors"
                    >
                      {{ t().nav[item.labelKey] }}
                    </a>
                  } @else {
                    <a
                      [routerLink]="item.href"
                      class="block text-slate-400 hover:text-emerald-400 font-medium transition-colors"
                      (click)="closeMobileMenu()"
                    >
                      {{ t().nav[item.labelKey] }}
                    </a>
                  }
                </li>
              }
              <li>
                <a
                  href="/resume.pdf"
                  download
                  class="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-500 transition-colors"
                >
                  {{ t().nav.resume }}
                </a>
              </li>
            </ul>
          </div>
        }
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  private readonly languageService = inject(LanguageService);

  protected readonly mobileMenuOpen = signal(false);
  protected readonly t = this.languageService.t;

  protected readonly navItems = signal<NavItem[]>([
    { labelKey: 'projects', href: '/projects' },
    { labelKey: 'skills', href: '/skills' },
    { labelKey: 'about', href: '/about' },
    { labelKey: 'contact', href: '/contact' },
  ]);

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
