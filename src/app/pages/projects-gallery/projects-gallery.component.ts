import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services';
import { ProjectCardComponent } from '../../components';
import { FLAGSHIP_PROJECTS } from '../../models/projects.constant';

@Component({
  selector: 'app-projects-gallery',
  imports: [RouterLink, ProjectCardComponent],
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
        <div class="max-w-6xl mx-auto">
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">{{ t().projects.heading }}</h1>
          <p class="text-xl text-slate-400 mb-12">{{ t().projects.subtitle }}</p>

          <!-- Projects Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (project of projects; track project.id) {
              <app-project-card [project]="project" />
            }
          </div>
        </div>
      </section>
    </article>
  `,
})
export class ProjectsGalleryComponent {
  private readonly languageService = inject(LanguageService);

  protected readonly t = this.languageService.t;
  protected readonly projects = FLAGSHIP_PROJECTS;
}
