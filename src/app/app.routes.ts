import { Routes } from '@angular/router';
import { HomeComponent, AboutComponent, ContactComponent, SkillsGalleryComponent, ProjectsGalleryComponent } from './pages';
import { ProjectDetailComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsGalleryComponent,
  },
  {
    path: 'project/:id',
    component: ProjectDetailComponent,
  },
  {
    path: 'skills',
    component: SkillsGalleryComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
