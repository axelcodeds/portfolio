import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FontAwesomeModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-slate-950 border-t border-slate-800 text-slate-400">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <!-- Brand -->
          <div>
            <h3 class="text-lg font-bold text-slate-100 mb-4">{{ t().footer.brand }}</h3>
            <p class="text-sm text-slate-500">{{ t().footer.tagline }}</p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-semibold text-slate-100 mb-4">{{ t().footer.navigation }}</h4>
            <nav class="space-y-2 text-sm flex gap-1">
              <a routerLink="/" class="hover:text-emerald-400 transition-colors">Home</a>
              <a routerLink="/about" class="hover:text-emerald-400 transition-colors"
                >{{ t().nav.about }}
              </a>
              <a routerLink="/contact" class="hover:text-emerald-400 transition-colors"
                >{{ t().nav.contact }}
              </a>
            </nav>
          </div>

          <!-- Social Links -->
          <div>
            <h4 class="font-semibold text-slate-100 mb-4">{{ t().footer.connect }}</h4>
            <div class="flex gap-4">
              <a
                href="https://github.com/axeldiego"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                class="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-full hover:border-emerald-600 hover:text-emerald-400 transition-colors"
              >
                <fa-icon [icon]="faGithub" />
              </a>
              <a
                href="https://linkedin.com/in/axeldiego"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                class="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-full hover:border-emerald-600 hover:text-emerald-400 transition-colors"
              >
                <fa-icon [icon]="faLinkedin" />
              </a>
              <a
                href="mailto:contact@axeldiego.dev"
                aria-label="Email"
                class="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-full hover:border-emerald-600 hover:text-emerald-400 transition-colors"
              >
                <fa-icon [icon]="faEnvelope" />
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div
          class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500"
        >
          <p>{{ t().footer.copyright }}</p>
          <p class="text-xs">{{ t().footer.builtWith }}</p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faEnvelope = faEnvelope;
}
