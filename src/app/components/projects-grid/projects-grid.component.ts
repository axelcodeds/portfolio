import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { LanguageService } from '../../services';
import { FLAGSHIP_PROJECTS } from '../../models/projects.constant';

@Component({
  selector: 'app-projects-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCardComponent],
  template: `
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950" aria-labelledby="projects-heading">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="mb-16">
          <h2
            id="projects-heading"
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-4"
          >
            {{ t().projects.heading }}
          </h2>
          <p class="text-lg text-slate-400 max-w-2xl">
            {{ t().projects.subtitle }}
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (project of projects; track project.id) {
            <app-project-card [project]="project" />
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsGridComponent {
  private readonly languageService = inject(LanguageService);

  protected readonly t = this.languageService.t;
  protected readonly projects = FLAGSHIP_PROJECTS;
}
