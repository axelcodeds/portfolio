import { Project } from './project';

export const FLAGSHIP_PROJECTS: Project[] = [
  {
    id: 'fitflow',
    titleEn: 'FitFlow',
    titleEs: 'FitFlow',
    descriptionEn:
      'Gym membership and operations platform with automatic subscriptions, payment processing, and coach scheduling.',
    descriptionEs:
      'Plataforma de membresías de gimnasio con suscripciones automáticas, procesamiento de pagos y programación de entrenadores.',
    domain: 'Gym Operations',
    status: 'Planned',
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Stripe'],
    icon: '💪',
  },
  {
    id: 'beautyhub',
    titleEn: 'BeautyHub',
    titleEs: 'BeautyHub',
    descriptionEn:
      'Appointment booking system for beauty services with staff coordination, service catalog, and customer history.',
    descriptionEs:
      'Sistema de reservas para servicios de belleza con coordinación de personal, catálogo de servicios e historial de clientes.',
    domain: 'Beauty Services',
    status: 'Planned',
    stack: ['Angular', 'Spring Boot', 'MySQL', 'MongoDB', 'Calendar API'],
    icon: '💅',
  },
  {
    id: 'lexilearn',
    titleEn: 'LexiLearn',
    titleEs: 'LexiLearn',
    descriptionEn:
      'Learning assistant with content upload, text analysis, text-to-speech, and vocabulary tracking for language learners.',
    descriptionEs:
      'Asistente de aprendizaje con carga de contenido, análisis de texto, texto a voz y seguimiento de vocabulario.',
    domain: 'EdTech',
    status: 'Planned',
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'ML/NLP'],
    icon: '📚',
  },
];
