import { ChangeDetectionStrategy, Component, HostListener, effect, inject, signal } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-scroll-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (showIndicator()) {
      <div
        class="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-40 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="text-slate-600"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    }
  `,
})
export class ScrollIndicatorComponent {
  protected readonly showIndicator = signal(true);

  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = this.document.documentElement.scrollHeight;
    const threshold = 100;

    this.showIndicator.set(scrollPosition < documentHeight - threshold);
  }

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      this.showIndicator.set(false);
    }
  }
}
