import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services';

interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email';
}

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="min-h-screen flex items-center justify-center pt-20 sm:pt-24 lg:pt-16 px-4 sm:px-6 lg:px-8 bg-slate-950"
      aria-labelledby="hero-heading"
    >
      <div class="max-w-4xl mx-auto text-center">
        <!-- Terminal-style greeting -->
        <div
          class="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-emerald-400 px-4 py-2 rounded-lg text-sm font-mono mb-6"
        >
          <span class="text-slate-500">$</span>
          <span>{{ t().hero.greeting }}</span>
          <span class="animate-blink">_</span>
        </div>

        <!-- Name -->
        <h1
          id="hero-heading"
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 mb-4"
        >
          {{ t().hero.name }}
        </h1>

        <!-- Tagline -->
        <p class="text-xl sm:text-2xl text-emerald-400 font-semibold mb-6">
          {{ t().hero.tagline }}
        </p>

        <!-- Bio -->
        <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          {{ t().hero.bio }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            routerLink="/projects"
            class="inline-flex items-center justify-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors min-w-40 card-glow"
          >
            {{ t().hero.viewProjects }}
          </a>
          <a
            routerLink="/contact"
            class="inline-flex items-center justify-center bg-slate-900 text-emerald-400 border border-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors min-w-40"
          >
            {{ t().hero.getInTouch }}
          </a>
        </div>

        <!-- Social Links -->
        <nav aria-label="Social links">
          <ul class="flex items-center justify-center gap-6" role="list">
            @for (social of socialLinks(); track social.label) {
              <li>
                <a
                  [href]="social.href"
                  [attr.aria-label]="social.label"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:border-emerald-600 hover:text-emerald-400 transition-colors"
                >
                  @switch (social.icon) {
                    @case ('github') {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                        />
                      </svg>
                    }
                    @case ('linkedin') {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                        />
                      </svg>
                    }
                    @case ('email') {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    }
                  }
                </a>
              </li>
            }
          </ul>
        </nav>
      </div>
    </section>
  `,
})
export class HeroComponent {
  private readonly languageService = inject(LanguageService);

  protected readonly t = this.languageService.t;

  protected readonly socialLinks = signal<SocialLink[]>([
    {
      label: 'GitHub',
      href: 'https://github.com/axeldiego',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/axeldiego',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:contact@axeldiego.dev',
      icon: 'email',
    },
  ]);
}
