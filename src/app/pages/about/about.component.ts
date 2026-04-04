import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services';

@Component({
  selector: 'app-about',
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
          <h1 class="text-4xl sm:text-5xl font-bold mb-8">{{ t().about.heading }}</h1>

          <!-- Main Bio -->
          <div class="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>{{ t().about.bio1 }}</p>
            <p>{{ t().about.bio2 }}</p>
            <p>{{ t().about.bio3 }}</p>
          </div>

          <!-- Core Values -->
          <div class="mt-12 space-y-6">
            <h2 class="text-2xl font-bold text-emerald-400">{{ t().about.valuesHeading }}</h2>
            <ul class="space-y-3">
              @for (value of t().about.values; track value.title) {
                <li class="flex items-start gap-3">
                  <span class="text-emerald-400 mt-1">→</span>
                  <span class="text-slate-300"
                    ><strong>{{ value.title }}:</strong> {{ value.description }}</span
                  >
                </li>
              }
            </ul>
          </div>

          <!-- CTA -->
          <div class="mt-12 pt-12 border-t border-slate-800">
            <p class="text-slate-400 mb-6">{{ t().about.buildTagline }}</p>
            <a
              routerLink="/contact"
              class="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors card-glow"
            >
              {{ t().about.getInTouchCta }}
            </a>
          </div>
        </div>
      </section>
    </article>
  `,
})
export class AboutComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
}
