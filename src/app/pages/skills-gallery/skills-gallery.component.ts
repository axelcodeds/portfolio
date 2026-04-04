import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faJava,
  faAngular,
  faPython,
  faGit,
  faDocker,
  faGitAlt,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faServer,
  faHardDrive,
  faTools,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

interface Skill {
  name: string;
  icon: IconDefinition;
  category: 'frontend' | 'backend' | 'data' | 'devops';
}

@Component({
  selector: 'app-skills-gallery',
  imports: [RouterLink, FontAwesomeModule],
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
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">{{ t().skills.heading }}</h1>
          <p class="text-xl text-slate-400 mb-12">{{ t().skills.subtitle }}</p>

          <!-- Skills Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            @for (skill of skills; track skill.name) {
              <div
                class="flex flex-col items-center justify-center bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-600/20 transition-all duration-300 group card-glow"
              >
                <fa-icon
                  [icon]="skill.icon"
                  class="text-5xl text-emerald-400 mb-4 group-hover:text-emerald-300 transition-colors"
                />
                <p class="font-semibold text-slate-100 text-center text-sm sm:text-base">
                  {{ skill.name }}
                </p>
                <p class="text-xs text-emerald-400 mt-2 font-mono">{{ skill.category }}</p>
              </div>
            }
          </div>
        </div>
      </section>
    </article>
  `,
})
export class SkillsGalleryComponent {
  private readonly languageService = inject(LanguageService);

  protected readonly t = this.languageService.t;

  protected readonly skills: Skill[] = [
    // Frontend
    { name: 'Angular', icon: faAngular, category: 'frontend' },
    { name: 'TypeScript', icon: faCode, category: 'frontend' },

    // Backend
    { name: 'Java', icon: faJava, category: 'backend' },
    { name: 'Spring Boot', icon: faServer, category: 'backend' },
    { name: 'Python', icon: faPython, category: 'backend' },

    // Data
    { name: 'PostgreSQL', icon: faDatabase, category: 'data' },
    { name: 'MongoDB', icon: faHardDrive, category: 'data' },

    // DevOps
    { name: 'Docker', icon: faDocker, category: 'devops' },
    { name: 'Git', icon: faGit, category: 'devops' },
    { name: 'Linux', icon: faTools, category: 'devops' },
  ];
}
