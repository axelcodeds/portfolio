export type Language = 'en' | 'es';

export interface Translations {
  // Header
  nav: {
    projects: string;
    skills: string;
    about: string;
    contact: string;
    resume: string;
  };

  // Hero
  hero: {
    greeting: string;
    name: string;
    tagline: string;
    bio: string;
    viewProjects: string;
    getInTouch: string;
  };

  // Projects Grid
  projects: {
    heading: string;
    subtitle: string;
    viewDetails: string;
    viewAll: string;
    fitflow: {
      title: string;
      description: string;
      subtitle: string;
      status: string;
      domain: string;
      problem: string;
      features: string[];
      architecture: string;
      techStack: {
        frontend: string[];
        backend: string[];
        data: string[];
      };
      challenges: Array<{ title: string; solution: string }>;
      futureImprovements: string[];
    };
    beautyhub: {
      title: string;
      description: string;
      subtitle: string;
      status: string;
      domain: string;
      problem: string;
      features: string[];
      architecture: string;
      techStack: {
        frontend: string[];
        backend: string[];
        data: string[];
      };
      challenges: Array<{ title: string; solution: string }>;
      futureImprovements: string[];
    };
    lexilearn: {
      title: string;
      description: string;
      subtitle: string;
      status: string;
      domain: string;
      problem: string;
      features: string[];
      architecture: string;
      techStack: {
        frontend: string[];
        backend: string[];
        data: string[];
      };
      challenges: Array<{ title: string; solution: string }>;
      futureImprovements: string[];
    };
  };

  // Skills
  skills: {
    heading: string;
    subtitle: string;
  };

  // About
  about: {
    heading: string;
    bio1: string;
    bio2: string;
    bio3: string;
    valuesHeading: string;
    values: Array<{ title: string; description: string }>;
    getInTouchCta: string;
    buildTagline: string;
  };

  // Contact
  contact: {
    heading: string;
    subtitle: string;
    email: string;
    emailHint: string;
    github: string;
    githubHint: string;
    linkedin: string;
    linkedinHint: string;
    opportunitiesNote: string;
  };

  // Footer
  footer: {
    brand: string;
    tagline: string;
    navigation: string;
    connect: string;
    copyright: string;
    builtWith: string;
  };

  // Common
  common: {
    loading: string;
    error: string;
    backToPortfolio: string;
    backHome: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      projects: 'Projects',
      skills: 'Skills',
      about: 'About',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      greeting: 'echo "Hello, I\'m"',
      name: 'Axel Diego',
      tagline: 'Building Full-Stack Solutions with Java & Angular',
      bio:
        'Junior Full-Stack Developer focused on creating practical, well-structured applications. ' +
        'I combine Spring Boot backends with Angular frontends to deliver complete solutions that solve real problems.',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
    },
    projects: {
      heading: 'Featured Projects',
      subtitle: 'Three flagship projects showcasing full-stack capabilities and product thinking.',
      viewDetails: 'View Details',
      viewAll: 'Explore All Projects',
      fitflow: {
        title: 'FitFlow Membership Platform',
        description:
          'Gym operations platform with card payments, automatic subscriptions, and coach scheduling.',
        subtitle: 'Complete gym management system for memberships, billing, and operations',
        status: 'Planned',
        domain: 'Gym Operations',
        problem:
          'Gym owners struggle to manage member lifecycles, recurring billing, and coach schedules manually. This creates friction in onboarding, payment failures, and scheduling conflicts. FitFlow automates the entire workflow.',
        features: [
          'Member registration and profile management',
          'Stripe integration for card payments with PCI compliance',
          'Automatic subscription renewals with retry logic',
          'Coach schedule booking system with availability',
          'Member activity tracking and attendance logs',
          'Admin dashboard for revenue insights',
          'Email notifications for renewals and expiring memberships',
        ],
        architecture: `
┌─────────────────────────────────────┐
│       Angular Frontend (SPA)         │
│   - Member Portal                   │
│   - Coach Dashboard                 │
│   - Admin Console                   │
└──────────────┬──────────────────────┘
               │
      ┌────────┴────────┐
      │                 │
┌─────▼──────────────────▼──────┐
│   Spring Boot REST API        │
│   - Auth Service              │
│   - Member Service            │
│   - Subscription Engine        │
│   - Booking Service           │
└──────────────┬─────────────────┘
      ┌────────┴─────────┬─────────────┐
      │                  │             │
┌─────▼─────┐   ┌────────▼──┐   ┌─────▼──┐
│PostgreSQL │   │   Redis   │   │ Stripe │
│(Members,  │   │ (Cache)   │   │  API   │
│ Schedule) │   │           │   │        │
└───────────┘   └───────────┘   └────────┘
        `,
        techStack: {
          frontend: ['Angular 21', 'TypeScript', 'RxJS', 'TailwindCSS', 'Stripe.js'],
          backend: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JPA/Hibernate'],
          data: ['PostgreSQL', 'Redis', 'Docker', 'AWS EC2'],
        },
        challenges: [
          {
            title: 'Subscription Renewal Logic',
            solution:
              'Built a robust state machine to handle subscription renewals with exponential backoff retry logic. When Stripe fails, the system retries with increasing delays and logs all attempts for audit purposes.',
          },
          {
            title: 'PCI Compliance & Payment Security',
            solution:
              'Never stored card data locally. Implemented server-side integration with Stripe using webhooks and idempotent API calls to prevent duplicate charges.',
          },
        ],
        futureImprovements: [
          'Mobile app for members to book classes on-the-go',
          'AI-powered coach recommendations based on member preferences',
          'Integration with fitness tracking APIs (Apple Health, Google Fit)',
          'Automated email sequences for member engagement',
          'Multitenancy support for gym chains',
        ],
      },
      beautyhub: {
        title: 'BeautyHub Appointment Manager',
        description:
          'Beauty services booking system with staff coordination and customer history tracking.',
        subtitle: 'Smart scheduling platform for beauty salons with staff and customer management',
        status: 'Planned',
        domain: 'Beauty Services',
        problem:
          'Beauty salon owners manage appointments via phone calls and spreadsheets. This leads to double bookings, no-shows, and poor customer experience. BeautyHub centralizes bookings, staff schedules, and service history.',
        features: [
          'Service catalog (manicure, pedicure, esthetics, etc.) with pricing',
          'Real-time appointment availability based on staff schedules',
          'Customer booking portal with calendar view',
          'Staff shift management and availability tracking',
          'Customer history with service notes and preferences',
          'SMS/Email reminders 24h before appointments',
          'Admin dashboard for revenue tracking and staff performance',
          'Customer rating and review system',
        ],
        architecture: `
┌────────────────────────────────────┐
│   Angular Frontend (SPA + PWA)     │
│   - Customer Booking Portal        │
│   - Staff Mobile App               │
│   - Admin Dashboard                │
└──────────────┬─────────────────────┘
               │
      ┌────────┴────────┐
      │                 │
┌─────▼──────────────────▼──────┐
│   Spring Boot REST API        │
│   - Auth Service              │
│   - Appointment Service       │
│   - Staff Service             │
│   - Notification Engine       │
└──────────────┬─────────────────┘
      ┌────────┴─────────┬──────────┐
      │                  │          │
┌─────▼─────┐   ┌────────▼──┐  ┌──▼────┐
│PostgreSQL │   │ MongoDB   │  │Twilio │
│(Schedule) │   │(Notes &   │  │(SMS/  │
│           │   │ Prefs)    │  │Email) │
└───────────┘   └───────────┘  └───────┘
        `,
        techStack: {
          frontend: ['Angular 21', 'TypeScript', 'RxJS', 'TailwindCSS', 'Service Worker (PWA)'],
          backend: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'Twilio SDK'],
          data: ['PostgreSQL', 'MongoDB', 'Docker', 'AWS RDS + DocDB'],
        },
        challenges: [
          {
            title: 'Optimistic Locking for Overbooking Prevention',
            solution:
              'Implemented optimistic concurrency control with version numbers. When two staff members try to book the same slot simultaneously, the database rejects the second write and forces a refresh.',
          },
          {
            title: 'Scheduling Conflicts & Time Zone Handling',
            solution:
              'Used database constraints and application-level validation with Java LocalDateTime to prevent overlapping appointments. Stored all times in UTC and converted to user timezone on frontend.',
          },
        ],
        futureImprovements: [
          'Integration with Google Calendar and Outlook',
          'AI-powered appointment reminders to reduce no-shows',
          'Automated pricing suggestions based on demand',
          'Package deals and gift certificate management',
          'Multi-location support for salon chains',
        ],
      },
      lexilearn: {
        title: 'LexiLearn Study Companion',
        description:
          'Educational tool for learning with content analysis, text-to-speech, and vocabulary tracking.',
        subtitle: 'Intelligent study tool that extracts unknown vocabulary and generates audio for learning',
        status: 'Planned',
        domain: 'EdTech',
        problem:
          'Students reading in a second language encounter unknown words and lose comprehension. Digital reading tools don\'t provide context-aware vocabulary support. LexiLearn extracts vocabulary automatically and helps students master new words.',
        features: [
          'Upload learning materials (PDF, EPUB, TXT)',
          'Automatic vocabulary extraction and term frequency analysis',
          'Context-aware definitions with usage examples',
          'Text-to-speech generation with adjustable speed',
          'Spaced repetition review system for vocabulary retention',
          'Personal vocabulary flashcards with progress tracking',
          'Reading statistics and comprehension insights',
          'Export study materials to Anki format',
        ],
        architecture: `
┌────────────────────────────────────┐
│     Angular Frontend (SPA)         │
│   - Document Upload                │
│   - Reading Interface              │
│   - Vocabulary Dashboard           │
│   - Flashcard Reviewer             │
└──────────────┬─────────────────────┘
               │
      ┌────────┴────────┐
      │                 │
┌─────▼──────────────────▼──────┐
│   Spring Boot REST API        │
│   - Auth Service              │
│   - Document Parser           │
│   - NLP Engine (vocabulary)   │
│   - Review Service (SRS)      │
│   - TTS Service               │
└──────────────┬─────────────────┘
      ┌────────┴─────────┬──────────────┐
      │                  │              │
┌─────▼─────┐   ┌────────▼──┐  ┌──────▼────┐
│PostgreSQL │   │ MongoDB   │  │Google TTS │
│(Progress) │   │(Document  │  │  API      │
│           │   │Content)   │  │           │
└───────────┘   └───────────┘  └────────────┘
        `,
        techStack: {
          frontend: ['Angular 21', 'TypeScript', 'RxJS', 'TailwindCSS', 'Web Audio API'],
          backend: ['Java 17', 'Spring Boot 3', 'OpenNLP', 'Apache PDFBox', 'Google Cloud TTS'],
          data: ['PostgreSQL', 'MongoDB', 'Redis (for caching)', 'AWS Lambda (document processing)'],
        },
        challenges: [
          {
            title: 'Natural Language Processing at Scale',
            solution:
              'Integrated OpenNLP for tokenization and POS tagging to extract meaningful vocabulary. Built a processing pipeline using Spring Batch to handle large PDF uploads asynchronously without blocking users.',
          },
          {
            title: 'Spaced Repetition Algorithm (SRS)',
            solution:
              'Implemented the SM-2 algorithm to calculate optimal review intervals based on user performance. Used PostgreSQL scheduling to auto-generate review tasks without manual intervention.',
          },
        ],
        futureImprovements: [
          'AI-powered reading difficulty recommendations',
          'Collaborative learning groups with shared vocabulary lists',
          'Integration with popular books/articles APIs',
          'Mobile app for offline studying',
          'Integration with language learning platforms (Duolingo API)',
          'Grammar checker with explanations',
        ],
      },
    },
    skills: {
      heading: 'Technical Toolkit',
      subtitle: 'A full-stack arsenal spanning frontend, backend, data, and DevOps.',
    },
    about: {
      heading: 'About Me',
      bio1:
        'I\'m a Junior Full-Stack Developer passionate about building practical, well-structured applications that solve real problems. ' +
        'I combine strong backend fundamentals with modern frontend frameworks to deliver complete solutions.',
      bio2:
        'My journey started with curiosity about how systems work. I\'ve invested time learning Java and Spring Boot for backend architecture, ' +
        'Angular for responsive frontends, and both SQL and NoSQL databases to make smart data choices. I believe in honest communication, ' +
        'clean code, and continuous learning.',
      bio3:
        'Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring junior developers. ' +
        'I\'m currently seeking opportunities to grow my skills on real projects while delivering measurable impact.',
      valuesHeading: 'What Drives Me',
      values: [
        {
          title: 'Clean Code',
          description: 'Readable, maintainable, and tested code is non-negotiable.',
        },
        {
          title: 'Problem Solving',
          description: 'I approach challenges systematically, breaking them into manageable pieces.',
        },
        {
          title: 'User Focus',
          description: 'Technology should serve users, not the other way around.',
        },
        {
          title: 'Growth Mindset',
          description: 'Every project and feedback is an opportunity to improve.',
        },
      ],
      getInTouchCta: 'Get in Touch',
      buildTagline: 'Let\'s build something great together.',
    },
    contact: {
      heading: 'Get in Touch',
      subtitle: 'I\'m always interested in hearing about new opportunities and collaborations. Feel free to reach out!',
      email: 'Email',
      emailHint: 'I typically respond within 24 hours.',
      github: 'GitHub',
      githubHint: 'Check out my projects and contributions.',
      linkedin: 'LinkedIn',
      linkedinHint: 'Let\'s connect professionally.',
      opportunitiesNote:
        '💡 Note: I\'m actively looking for Junior Full-Stack Developer or Internship opportunities. If you\'re looking to hire or collaborate, let\'s talk!',
    },
    footer: {
      brand: 'Axel Diego',
      tagline: 'Junior Full-Stack Developer',
      navigation: 'Navigation',
      connect: 'Connect',
      copyright: '© 2026 Axel Diego. All rights reserved.',
      builtWith: 'Built with Angular, TypeScript, and TailwindCSS',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      backToPortfolio: 'Back to Portfolio',
      backHome: 'Back Home',
    },
  },
  es: {
    nav: {
      projects: 'Proyectos',
      skills: 'Habilidades',
      about: 'Acerca de',
      contact: 'Contacto',
      resume: 'Currículum',
    },
    hero: {
      greeting: 'echo "Hola, soy"',
      name: 'Axel Diego',
      tagline: 'Construyendo Soluciones Full-Stack con Java y Angular',
      bio:
        'Desarrollador Full-Stack Junior enfocado en crear aplicaciones prácticas y bien estructuradas. ' +
        'Combino backends de Spring Boot con frontends de Angular para entregar soluciones completas que resuelven problemas reales.',
      viewProjects: 'Ver Proyectos',
      getInTouch: 'Contactar',
    },
    projects: {
      heading: 'Proyectos Destacados',
      subtitle:
        'Tres proyectos principales que demuestran capacidades full-stack y pensamiento de producto.',
      viewDetails: 'Ver Detalles',
      viewAll: 'Explorar Todos los Proyectos',
      fitflow: {
        title: 'FitFlow Plataforma de Membresía',
        description:
          'Plataforma de operaciones de gimnasio con pagos de tarjeta, suscripciones automáticas y programación de entrenadores.',
        subtitle: 'Sistema completo de gestión de gimnasio para membresías, facturación y operaciones',
        status: 'Planificado',
        domain: 'Operaciones de Gimnasio',
        problem:
          'Los propietarios de gimnasios luchan por gestionar manualmente el ciclo de vida de los miembros, la facturación recurrente y la programación de entrenadores. Esto crea fricciones en la incorporación, fallos de pago y conflictos de programación. FitFlow automatiza todo el flujo de trabajo.',
        features: [
          'Registro de miembros y gestión de perfiles',
          'Integración con Stripe para pagos con tarjeta y cumplimiento PCI',
          'Renovación automática de suscripciones con lógica de reintentos',
          'Sistema de reserva de horarios de entrenadores con disponibilidad',
          'Seguimiento de actividad de miembros y registros de asistencia',
          'Panel de administración para conocimientos de ingresos',
          'Notificaciones por correo para renovaciones y membresías próximas a vencer',
        ],
        architecture: `
┌─────────────────────────────────────┐
│     Frontend Angular (SPA)          │
│   - Portal de Miembros              │
│   - Panel de Entrenadores           │
│   - Consola de Administrador        │
└──────────────┬──────────────────────┘
               │
      ┌────────┴────────┐
      │                 │
┌─────▼──────────────────▼──────┐
│   Spring Boot REST API        │
│   - Servicio de Autenticación │
│   - Servicio de Miembros      │
│   - Motor de Suscripción      │
│   - Servicio de Reservas      │
└──────────────┬─────────────────┘
      ┌────────┴─────────┬─────────────┐
      │                  │             │
┌─────▼─────┐   ┌────────▼──┐   ┌─────▼──┐
│PostgreSQL │   │   Redis   │   │ Stripe │
│(Miembros, │   │ (Caché)   │   │  API   │
│ Schedule) │   │           │   │        │
└───────────┘   └───────────┘   └────────┘
        `,
        techStack: {
          frontend: ['Angular 21', 'TypeScript', 'RxJS', 'TailwindCSS', 'Stripe.js'],
          backend: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JPA/Hibernate'],
          data: ['PostgreSQL', 'Redis', 'Docker', 'AWS EC2'],
        },
        challenges: [
          {
            title: 'Lógica de Renovación de Suscripción',
            solution:
              'Construí una máquina de estado robusta para manejar renovaciones de suscripción con lógica de reintentos de retroceso exponencial. Cuando Stripe falla, el sistema reintenta con retrasos cada vez mayores y registra todos los intentos para auditoría.',
          },
          {
            title: 'Cumplimiento PCI y Seguridad de Pagos',
            solution:
              'Nunca almacené datos de tarjetas localmente. Implementé integración del lado del servidor con Stripe usando webhooks y llamadas API idempotentes para evitar cargos duplicados.',
          },
        ],
        futureImprovements: [
          'Aplicación móvil para que los miembros reserven clases sobre la marcha',
          'Recomendaciones de entrenador impulsadas por IA basadas en preferencias de miembros',
          'Integración con APIs de seguimiento de fitness (Apple Health, Google Fit)',
          'Secuencias de correo electrónico automatizadas para la participación de miembros',
          'Soporte multiusuario para cadenas de gimnasios',
        ],
      },
      beautyhub: {
        title: 'BeautyHub Gestor de Citas',
        description:
          'Sistema de reserva de servicios de belleza con coordinación de personal y seguimiento de historial de clientes.',
        subtitle: 'Plataforma de programación inteligente para salones de belleza con gestión de personal y clientes',
        status: 'Planificado',
        domain: 'Servicios de Belleza',
        problem:
          'Los propietarios de salones de belleza gestionan citas por teléfono y hojas de cálculo. Esto genera reservas duplicadas, ausencias y mala experiencia del cliente. BeautyHub centraliza reservas, horarios del personal e historial de servicios.',
        features: [
          'Catálogo de servicios (manicura, pedicura, estética, etc.) con precios',
          'Disponibilidad de citas en tiempo real basada en horarios del personal',
          'Portal de reserva de clientes con vista de calendario',
          'Gestión de turnos del personal y seguimiento de disponibilidad',
          'Historial de clientes con notas de servicios y preferencias',
          'Recordatorios por SMS/Correo 24h antes de citas',
          'Panel de administración para seguimiento de ingresos y rendimiento del personal',
          'Sistema de calificación y reseñas de clientes',
        ],
        architecture: `
┌────────────────────────────────────┐
│ Frontend Angular (SPA + PWA)       │
│ - Portal de Reserva de Clientes    │
│ - Aplicación Móvil del Personal    │
│ - Panel de Administración          │
└──────────────┬─────────────────────┘
               │
      ┌────────┴────────┐
      │                 │
┌─────▼──────────────────▼──────┐
│   Spring Boot REST API        │
│   - Servicio de Autenticación │
│   - Servicio de Citas         │
│   - Servicio de Personal      │
│   - Motor de Notificaciones   │
└──────────────┬─────────────────┘
      ┌────────┴─────────┬──────────┐
      │                  │          │
┌─────▼─────┐   ┌────────▼──┐  ┌──▼────┐
│PostgreSQL │   │ MongoDB   │  │Twilio │
│(Horarios) │   │(Notas &   │  │(SMS/  │
│           │   │Prefs)     │  │Email) │
└───────────┘   └───────────┘  └───────┘
        `,
        techStack: {
          frontend: ['Angular 21', 'TypeScript', 'RxJS', 'TailwindCSS', 'Service Worker (PWA)'],
          backend: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'SDK Twilio'],
          data: ['PostgreSQL', 'MongoDB', 'Docker', 'AWS RDS + DocDB'],
        },
        challenges: [
          {
            title: 'Bloqueo Optimista para Prevención de Sobrerreserva',
            solution:
              'Implementé control de concurrencia optimista con números de versión. Cuando dos miembros del personal intentan reservar el mismo slot simultáneamente, la base de datos rechaza la segunda escritura y fuerza una actualización.',
          },
          {
            title: 'Conflictos de Programación y Manejo de Zonas Horarias',
            solution:
              'Usé restricciones de base de datos y validación a nivel de aplicación con Java LocalDateTime para evitar citas superpuestas. Almacené todos los tiempos en UTC y convertí a zona horaria del usuario en el frontend.',
          },
        ],
        futureImprovements: [
          'Integración con Google Calendar y Outlook',
          'Recordatorios de citas impulsados por IA para reducir ausencias',
          'Sugerencias de precios automatizadas basadas en demanda',
          'Gestión de paquetes y vales de regalo',
          'Soporte de múltiples ubicaciones para cadenas de salones',
        ],
      },
      lexilearn: {
        title: 'LexiLearn Compañero de Estudio',
        description:
          'Herramienta educativa para aprendizaje con análisis de contenido, síntesis de voz y seguimiento de vocabulario.',
        subtitle: 'Herramienta de estudio inteligente que extrae vocabulario desconocido y genera audio para aprendizaje',
        status: 'Planificado',
        domain: 'EdTech',
        problem:
          'Los estudiantes que leen en un segundo idioma encuentran palabras desconocidas y pierden comprensión. Las herramientas de lectura digital no proporcionan soporte de vocabulario contextual. LexiLearn extrae vocabulario automáticamente y ayuda a los estudiantes a dominar palabras nuevas.',
        features: [
          'Cargar materiales de aprendizaje (PDF, EPUB, TXT)',
          'Extracción automática de vocabulario y análisis de frecuencia de términos',
          'Definiciones conscientes del contexto con ejemplos de uso',
          'Generación de síntesis de voz con velocidad ajustable',
          'Sistema de revisión de repetición espaciada para retención de vocabulario',
          'Flashcards de vocabulario personal con seguimiento de progreso',
          'Estadísticas de lectura y conocimientos de comprensión',
          'Exportar materiales de estudio al formato Anki',
        ],
        architecture: `
┌────────────────────────────────────┐
│     Frontend Angular (SPA)         │
│   - Carga de Documentos            │
│   - Interfaz de Lectura            │
│   - Panel de Vocabulario           │
│   - Revisor de Flashcards          │
└──────────────┬─────────────────────┘
               │
      ┌────────┴────────┐
      │                 │
┌─────▼──────────────────▼──────┐
│   Spring Boot REST API        │
│   - Servicio de Autenticación │
│   - Analizador de Documentos  │
│   - Motor NLP (vocabulario)   │
│   - Servicio de Revisión (SRS)│
│   - Servicio de TTS           │
└──────────────┬─────────────────┘
      ┌────────┴─────────┬──────────────┐
      │                  │              │
┌─────▼─────┐   ┌────────▼──┐  ┌──────▼────┐
│PostgreSQL │   │ MongoDB   │  │Google TTS │
│(Progreso) │   │(Contenido │  │  API      │
│           │   │Documento) │  │           │
└───────────┘   └───────────┘  └────────────┘
        `,
        techStack: {
          frontend: ['Angular 21', 'TypeScript', 'RxJS', 'TailwindCSS', 'Web Audio API'],
          backend: ['Java 17', 'Spring Boot 3', 'OpenNLP', 'Apache PDFBox', 'Google Cloud TTS'],
          data: ['PostgreSQL', 'MongoDB', 'Redis (para caché)', 'AWS Lambda (procesamiento de documentos)'],
        },
        challenges: [
          {
            title: 'Procesamiento de Lenguaje Natural a Escala',
            solution:
              'Integré OpenNLP para tokenización y marcado POS para extraer vocabulario significativo. Creé un pipeline de procesamiento usando Spring Batch para manejar cargas grandes de PDF de forma asincrónica sin bloquear a los usuarios.',
          },
          {
            title: 'Algoritmo de Repetición Espaciada (SRS)',
            solution:
              'Implementé el algoritmo SM-2 para calcular intervalos de revisión óptimos basados en el rendimiento del usuario. Usé programación PostgreSQL para generar automáticamente tareas de revisión sin intervención manual.',
          },
        ],
        futureImprovements: [
          'Recomendaciones de dificultad de lectura impulsadas por IA',
          'Grupos de aprendizaje colaborativo con listas de vocabulario compartidas',
          'Integración con APIs de artículos/libros populares',
          'Aplicación móvil para estudio sin conexión',
          'Integración con plataformas de aprendizaje de idiomas (API de Duolingo)',
          'Corrector gramatical con explicaciones',
        ],
      },
    },
    skills: {
      heading: 'Kit Técnico',
      subtitle: 'Un arsenal full-stack que abarca frontend, backend, datos y DevOps.',
    },
    about: {
      heading: 'Acerca de Mí',
      bio1:
        'Soy un Desarrollador Full-Stack Junior apasionado por construir aplicaciones prácticas y bien estructuradas que resuelven problemas reales. ' +
        'Combino fundamentos sólidos de backend con frameworks modernos de frontend para entregar soluciones completas.',
      bio2:
        'Mi camino comenzó con curiosidad sobre cómo funcionan los sistemas. He invertido tiempo aprendiendo Java y Spring Boot para arquitectura de backend, ' +
        'Angular para frontends responsivos, y bases de datos SQL y NoSQL para tomar decisiones inteligentes sobre datos. Creo en la comunicación honesta, ' +
        'código limpio y aprendizaje continuo.',
      bio3:
        'Fuera de la programación, disfruto explorando nuevas tecnologías, contribuyendo a proyectos de código abierto y mentoreando desarrolladores junior. ' +
        'Actualmente busco oportunidades para desarrollar mis habilidades en proyectos reales mientras entrego impacto medible.',
      valuesHeading: 'Qué Me Impulsa',
      values: [
        {
          title: 'Código Limpio',
          description: 'Código legible, mantenible y probado es innegociable.',
        },
        {
          title: 'Resolución de Problemas',
          description: 'Abordo los desafíos de manera sistemática, dividiéndolos en partes manejables.',
        },
        {
          title: 'Enfoque en el Usuario',
          description: 'La tecnología debe servir a los usuarios, no al revés.',
        },
        {
          title: 'Mentalidad de Crecimiento',
          description: 'Cada proyecto y retroalimentación es una oportunidad para mejorar.',
        },
      ],
      getInTouchCta: 'Ponte en Contacto',
      buildTagline: 'Construyamos algo grandioso juntos.',
    },
    contact: {
      heading: 'Ponte en Contacto',
      subtitle: '¡Siempre me interesa escuchar sobre nuevas oportunidades y colaboraciones! No dudes en contactarme.',
      email: 'Correo Electrónico',
      emailHint: 'Típicamente respondo dentro de 24 horas.',
      github: 'GitHub',
      githubHint: 'Revisa mis proyectos y contribuciones.',
      linkedin: 'LinkedIn',
      linkedinHint: 'Conectemos profesionalmente.',
      opportunitiesNote:
        '💡 Nota: Estoy buscando activamente oportunidades como Desarrollador Full-Stack Junior o Internship. ¡Si buscas contratar o colaborar, hablemos!',
    },
    footer: {
      brand: 'Axel Diego',
      tagline: 'Desarrollador Full-Stack Junior',
      navigation: 'Navegación',
      connect: 'Conectar',
      copyright: '© 2026 Axel Diego. Todos los derechos reservados.',
      builtWith: 'Construido con Angular, TypeScript y TailwindCSS',
    },
    common: {
      loading: 'Cargando...',
      error: 'Ocurrió un error',
      backToPortfolio: 'Volver a Portafolio',
      backHome: 'Volver Inicio',
    },
  },
};
