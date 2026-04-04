import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent, ProjectsGridComponent, SkillsSectionComponent } from '../../components';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ProjectsGridComponent, SkillsSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main id="main-content">
      <app-hero />
      <app-projects-grid />
      <app-skills-section />
    </main>
  `,
})
export class HomeComponent {}
