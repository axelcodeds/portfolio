import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="min-h-screen bg-slate-950 text-slate-100">
      <!-- Back Navigation -->
      <nav class="pt-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <a
          routerLink="/"
          class="inline-block text-emerald-400 hover:text-emerald-300 font-semibold transition-colors mb-8"
        >
          ← {{ t().common.backHome }}
        </a>
      </nav>

      <!-- Hero Section -->
      <section class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">{{ t().contact.heading }}</h1>
          <p class="text-xl text-slate-400 mb-12">{{ t().contact.subtitle }}</p>

          <!-- Contact Methods -->
          <div class="space-y-8">
            <!-- Email -->
            <div class="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h2 class="text-2xl font-bold text-emerald-400 mb-4">{{ t().contact.email }}</h2>
              <a
                href="mailto:contact@axeldiego.dev"
                class="text-lg text-slate-300 hover:text-emerald-400 transition-colors break-all"
              >
                contact@axeldiego.dev
              </a>
              <p class="text-slate-400 mt-2">{{ t().contact.emailHint }}</p>
            </div>

            <!-- GitHub -->
            <div class="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h2 class="text-2xl font-bold text-emerald-400 mb-4">{{ t().contact.github }}</h2>
              <a
                href="https://github.com/axeldiego"
                target="_blank"
                rel="noopener noreferrer"
                class="text-lg text-slate-300 hover:text-emerald-400 transition-colors"
              >
                github.com/axeldiego →
              </a>
              <p class="text-slate-400 mt-2">{{ t().contact.githubHint }}</p>
            </div>

            <!-- LinkedIn -->
            <div class="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h2 class="text-2xl font-bold text-emerald-400 mb-4">{{ t().contact.linkedin }}</h2>
              <a
                href="https://linkedin.com/in/axeldiego"
                target="_blank"
                rel="noopener noreferrer"
                class="text-lg text-slate-300 hover:text-emerald-400 transition-colors"
              >
                linkedin.com/in/axeldiego →
              </a>
              <p class="text-slate-400 mt-2">{{ t().contact.linkedinHint }}</p>
            </div>
          </div>

          <!-- Response Note -->
          <div class="mt-12 p-6 bg-emerald-900/20 border border-emerald-800/30 rounded-lg">
            <p class="text-emerald-300">{{ t().contact.opportunitiesNote }}</p>
          </div>
        </div>
      </section>
    </article>
  `,
})
export class ContactComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
}
