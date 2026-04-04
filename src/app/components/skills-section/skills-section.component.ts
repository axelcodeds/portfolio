import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
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
import { LanguageService } from '../../services';

interface Skill {
  name: string;
  icon: IconDefinition;
  category: 'frontend' | 'backend' | 'data' | 'devops';
  delay: number;
}

@Component({
  selector: 'app-skills-section',
  imports: [FontAwesomeModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950" aria-labelledby="skills-heading">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="mb-16 text-center">
          <h2
            id="skills-heading"
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-4"
          >
            {{ t().skills.heading }}
          </h2>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto">
            {{ t().skills.subtitle }}
          </p>
        </div>

        <!-- Skills Carousel (Desktop Only) -->
        <div class="hidden sm:block overflow-hidden bg-slate-900 border border-slate-800 rounded-lg p-8">
          <div class="flex gap-6 animate-scroll">
            @for (skill of skillsWithDuplicates; track $index) {
              <div
                class="shrink-0 w-32 h-32 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-lg hover:border-emerald-600 transition-all duration-300 group card-glow"
                [style.animation-delay]="skill.delay + 'ms'"
              >
                <div class="text-center">
                  <fa-icon
                    [icon]="skill.icon"
                    class="text-4xl text-emerald-400 group-hover:text-emerald-300 transition-colors"
                  />
                  <p class="text-xs text-slate-300 mt-2 font-semibold">{{ skill.name }}</p>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Skills Grid (Mobile Only) -->
        <div class="sm:hidden grid grid-cols-2 gap-4">
          @for (skill of skills; track $index) {
            <div
              class="flex flex-col items-center justify-center bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-emerald-600 transition-all duration-300 group card-glow"
            >
              <fa-icon
                [icon]="skill.icon"
                class="text-4xl text-emerald-400 group-hover:text-emerald-300 transition-colors mb-2"
              />
              <p class="text-sm text-slate-300 font-semibold text-center">{{ skill.name }}</p>
            </div>
          }
        </div>
      </div>

      <style>
        @keyframes scroll {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll div {
          animation: fadeInSlide 0.8s ease-out forwards;
        }

        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      </style>
    </section>
  `,
})
export class SkillsSectionComponent {
  private readonly languageService = inject(LanguageService);

  protected readonly t = this.languageService.t;

  protected readonly skills: Skill[] = [
    // Frontend
    { name: 'Angular', icon: faAngular, category: 'frontend', delay: 0 },
    { name: 'TypeScript', icon: faCode, category: 'frontend', delay: 100 },

    // Backend
    { name: 'Java', icon: faJava, category: 'backend', delay: 200 },
    { name: 'Spring Boot', icon: faServer, category: 'backend', delay: 300 },
    { name: 'Python', icon: faPython, category: 'backend', delay: 400 },

    // Data
    { name: 'PostgreSQL', icon: faDatabase, category: 'data', delay: 500 },
    { name: 'MongoDB', icon: faHardDrive, category: 'data', delay: 600 },

    // DevOps
    { name: 'Docker', icon: faDocker, category: 'devops', delay: 700 },
    { name: 'Git', icon: faGit, category: 'devops', delay: 800 },
    { name: 'Linux', icon: faTools, category: 'devops', delay: 900 },
  ];

  protected readonly skillsWithDuplicates = [...this.skills, ...this.skills];
}
