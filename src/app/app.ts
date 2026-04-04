import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, ScrollIndicatorComponent, FooterComponent } from './components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ScrollIndicatorComponent, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-header />
    <router-outlet />
    <app-footer />
    <app-scroll-indicator />
  `,
  styles: `
    :host {
      display: block;
      min-height: 100vh;
    }
  `,
})
export class App {}
