import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <article
      class="group bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-600/10 transition-all duration-300 flex flex-col h-full"
    >
      <!-- Icon & Header -->
      <div class="flex items-start justify-between mb-4">
        <div class="text-4xl">{{ project().icon }}</div>
        <span
          class="inline-block px-3 py-1 rounded-full text-xs font-semibold"
          [class]="getStatusClass()"
        >
          {{ project().status }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold text-slate-100 mb-2">
        {{ title() }}
      </h3>

      <!-- Domain Badge -->
      <p class="text-sm text-emerald-400 font-mono mb-3">
        {{ project().domain }}
      </p>

      <!-- Description -->
      <p class="text-slate-400 text-sm leading-relaxed mb-6 grow">
        {{ description() }}
      </p>

      <!-- Tech Stack -->
      <div class="mb-6">
        <p class="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3">Tech Stack</p>
        <div class="flex flex-wrap gap-2">
          @for (tech of project().stack; track tech) {
            <span
              class="inline-block bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded border border-slate-700 group-hover:border-emerald-600 transition-colors"
            >
              {{ tech }}
            </span>
          }
        </div>
      </div>

      <!-- CTA Link -->
      <a
        [routerLink]="['/project', project().id]"
        class="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors self-start"
      >
        {{ t().projects.viewDetails }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="group-hover:translate-x-1 transition-transform"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </article>
  `,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();

  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
  protected readonly language = this.languageService.language;

  protected readonly title = computed(() =>
    this.language() === 'es' ? this.project().titleEs : this.project().titleEn,
  );

  protected readonly description = computed(() =>
    this.language() === 'es' ? this.project().descriptionEs : this.project().descriptionEn,
  );

  getStatusClass(): string {
    const baseClass = 'font-semibold';
    const statusClasses = {
      Planned: `${baseClass} bg-slate-800 text-slate-300 border border-slate-700`,
      'In Progress': `${baseClass} bg-amber-900/30 text-amber-300 border border-amber-700/50`,
      Live: `${baseClass} bg-emerald-900/30 text-emerald-300 border border-emerald-700/50`,
    };
    return statusClasses[this.project().status];
  }
}
