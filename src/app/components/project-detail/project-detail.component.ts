import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LanguageService } from '../../services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, FontAwesomeModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="min-h-screen bg-slate-950 text-slate-100">
      <!-- Back Button -->
      <nav class="pt-8 px-4 sm:px-6 lg:px-8">
        <a
          routerLink="/"
          class="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
        >
          <fa-icon [icon]="faArrowLeft" />
          {{ t().common.backHome }}
        </a>
      </nav>

      <!-- Hero Section -->
      <section class="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl sm:text-5xl font-bold mb-4">{{ projectData()?.title }}</h1>
          <p class="text-xl text-slate-400 mb-6">{{ projectData()?.subtitle }}</p>

          <div class="flex flex-wrap gap-3">
            <span class="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full font-mono">
              {{ projectData()?.status }}
            </span>
            <span class="px-3 py-1 bg-emerald-900 text-emerald-200 text-sm rounded-full font-mono">
              {{ projectData()?.domain }}
            </span>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <div class="py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto space-y-16">
          <!-- Problem Section -->
          <section>
            <h2 class="text-3xl font-bold mb-6 text-emerald-400">Problem Solved</h2>
            <p class="text-lg text-slate-300 leading-relaxed mb-4">
              {{ projectData()?.problem }}
            </p>
          </section>

          <!-- Features Section -->
          <section>
            <h2 class="text-3xl font-bold mb-6 text-emerald-400">Core Features</h2>
            <ul class="space-y-3">
              @for (feature of projectData()?.features; track feature) {
                <li class="flex items-start gap-3">
                  <span class="text-emerald-400 mt-1">✓</span>
                  <span class="text-slate-300">{{ feature }}</span>
                </li>
              }
            </ul>
          </section>

          <!-- Architecture Section -->
          <section>
            <h2 class="text-3xl font-bold mb-6 text-emerald-400">Technical Architecture</h2>
            <div
              class="bg-slate-900 border border-slate-800 rounded-lg p-6 font-mono text-sm text-slate-300 overflow-x-auto"
            >
              <pre>{{ projectData()?.architecture }}</pre>
            </div>
          </section>

          <!-- Tech Stack Section -->
          <section>
            <h2 class="text-3xl font-bold mb-6 text-emerald-400">Tech Stack</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Frontend -->
              <div class="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h3 class="font-bold text-emerald-400 mb-4">Frontend</h3>
                <ul class="space-y-2">
                  @for (tech of projectData()?.techStack.frontend; track tech) {
                    <li class="text-slate-300">• {{ tech }}</li>
                  }
                </ul>
              </div>

              <!-- Backend -->
              <div class="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h3 class="font-bold text-emerald-400 mb-4">Backend</h3>
                <ul class="space-y-2">
                  @for (tech of projectData()?.techStack.backend; track tech) {
                    <li class="text-slate-300">• {{ tech }}</li>
                  }
                </ul>
              </div>

              <!-- Data -->
              <div class="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h3 class="font-bold text-emerald-400 mb-4">Data & DevOps</h3>
                <ul class="space-y-2">
                  @for (tech of projectData()?.techStack.data; track tech) {
                    <li class="text-slate-300">• {{ tech }}</li>
                  }
                </ul>
              </div>
            </div>
          </section>

          <!-- Challenges Section -->
          <section>
            <h2 class="text-3xl font-bold mb-6 text-emerald-400">Technical Challenges</h2>
            <div class="space-y-6">
              @for (challenge of projectData()?.challenges; track challenge.title) {
                <div class="bg-slate-900 border border-slate-800 rounded-lg p-6">
                  <h3 class="font-bold text-emerald-400 mb-2">{{ challenge.title }}</h3>
                  <p class="text-slate-300">{{ challenge.solution }}</p>
                </div>
              }
            </div>
          </section>

          <!-- Future Improvements Section -->
          <section>
            <h2 class="text-3xl font-bold mb-6 text-emerald-400">Future Improvements</h2>
            <ul class="space-y-3">
              @for (improvement of projectData()?.futureImprovements; track improvement) {
                <li class="flex items-start gap-3">
                  <span class="text-emerald-400 mt-1">→</span>
                  <span class="text-slate-300">{{ improvement }}</span>
                </li>
              }
            </ul>
          </section>

          <!-- CTA Section -->
          <section class="mt-12 pt-12 border-t border-slate-800">
            <div class="text-center">
              <a
                routerLink="/"
                class="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors card-glow"
              >
                {{ t().common.backHome }}
              </a>
            </div>
          </section>
        </div>
      </div>
    </article>
  `,
})
export class ProjectDetailComponent {
  private readonly languageService = inject(LanguageService);
  private readonly route = inject(ActivatedRoute);

  protected readonly t = this.languageService.t;
  protected readonly faArrowLeft = faArrowLeft;

  private readonly projectId = this.route.snapshot.paramMap.get('id') as string;

  protected readonly projectData = computed(() => {
    const projects = this.t().projects as any;
    return projects[this.projectId];
  });
}
