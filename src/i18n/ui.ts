export const DEFAULT_LANGUAGE = "es";

export const LANGUAGES = {
  es: "Español",
  en: "English",
} as const;

export const LANGUAGES_KEYS = Object.keys(
  LANGUAGES,
) as (keyof typeof LANGUAGES)[];

export type Language = keyof typeof LANGUAGES;

export const ui = {
  es: {
    "site.title": "Marcelo Vizcarra - Portafolio",
    "site.description":
      "Desarrollador Full Stack con experiencia en aplicaciones empresariales y pasión por la web moderna. Me especializo en crear soluciones robustas y mantenibles con TypeScript y React, priorizando siempre la arquitectura simple y la colaboración en equipo.",
    "home.title": "Marcelo Vizcarra",
    "home.description1":
      "Desarrollador Full Stack con experiencia en aplicaciones empresariales y pasión por la web moderna. Me especializo en crear soluciones robustas y mantenibles con TypeScript y React, priorizando siempre la arquitectura simple y la colaboración en equipo.",
    "home.description2":
      "Ya sea construyendo aplicaciones empresariales o herramientas descentralizadas, valoro la simplicidad, escalabilidad y colaboración honesta dentro de equipos orientados por feedback.",
    "home.description3":
      "Siempre aprendiendo y abierto a entablar nuevas conexiones. Creemos tecnología significativa juntos.",
    "home.exploreProjects": "Explorar mis proyectos",
    "nav.about": "Sobre mí",
    "nav.ideas": "Ideas",
    "nav.cv": "CV",
    "nav.projects": "Proyectos",
    "nav.experiments": "Experimentos",
    "nav.mail": "Mail",
    "nav.twitter": "Twitter",
    "nav.linkedin": "LinkedIn",
    "nav.github": "GitHub",
    "nav.readcv": "Read.cv",
    "nav.webInterface": "WEB INTERFACE",
    "nav.contact": "CONTACT",

    // Theme switcher
    "theme.light": "Claro",
    "theme.dark": "Oscuro",
    "theme.system": "Sistema",
    "theme.toggle": "Cambiar tema",

    // Language switcher
    "language.es": "Español",
    "language.en": "English",
    "language.toggle": "Cambiar idioma",

    // About page
    "about.title": "Acerca de mí",
    "about.foundation.p1":
      "Para mí, el desarrollo de software es, fundamentalmente, un acto de resolución de problemas. Me fascina la capacidad de transformar una idea abstracta o una necesidad de negocio en una herramienta funcional, intuitiva y útil que mejora la vida o el trabajo de alguien.",
    "about.foundation.p2":
      "Mi punto de partida profesional en el sector Insurtech, construyendo portales empresariales B2B, me proporcionó una base sólida e invaluable. Allí aprendí de primera mano la importancia crítica de la robustez, la seguridad y la escalabilidad. Entendí lo que significa escribir código del que depende un negocio y que debe funcionar sin fallos día tras día.",
    "about.craft.p1":
      "Esa base en la ingeniería de software tradicional despertó mi curiosidad por la artesanía del código. No me conformo con que algo funcione; busco la forma más elegante, eficiente y mantenible de construirlo. Esto me ha llevado a una inmersión profunda en TypeScript y el ecosistema de React, explorando patrones de diseño y arquitecturas limpias que permitan a los equipos iterar con velocidad y confianza.",
    "about.craft.p2":
      "Fuera del código, años de práctica de Kung Fu me inculcaron una disciplina y un enfoque que aplico a cada desafío técnico. Me enseñó a mantener la calma bajo presión, a descomponer problemas complejos en movimientos más pequeños y a valorar la práctica constante como el único camino hacia la maestría.",
    "about.vision.p1":
      "Mi curiosidad es insaciable y me mantiene en un estado de aprendizaje perpetuo. Actualmente estoy explorando las capacidades de Effect.ts para construir backends más robustos y participo activamente en hackathons, sobre todo en el ecosistema Web3, un área que me apasiona por su potencial para redefinir la propiedad y la confianza en la web.",
    "about.vision.p2":
      "Busco unirme a un equipo donde la excelencia técnica y la colaboración honesta sean la norma. Me desarrollo mejor en entornos dinámicos, guiados por el feedback, donde se fomente el debate constructivo y la pasión por construir productos de vanguardia que realmente impacten a sus usuarios.",
    "about.vision.cta":
      "Si mi enfoque y mis valores resuenan contigo, me encantaría conectar.",
    "about.learning.title": "Actualmente Aprendiendo",
    "about.values.title": "Mis Valores",
    "about.values.quality.title": "Calidad de Código",
    "about.values.quality.desc":
      "Software robusto, mantenible y bien documentado.",
    "about.values.collaboration.title": "Colaboración Radical",
    "about.values.collaboration.desc":
      "Comunicación abierta, honesta y feedback constante.",
    "about.values.learning.title": "Aprendizaje Continuo",
    "about.values.learning.desc":
      "Curiosidad sin límites para adoptar y dominar nuevas tecnologías.",
  },
  en: {
    "site.title": "Marcelo Vizcarra - Portfolio",
    "site.description":
      "Full-stack developer with experience in enterprise applications and a passion for modern web development. I specialize in creating robust and maintainable solutions with TypeScript and React, always prioritizing simplicity and teamwork.",
    "home.title": "Marcelo Vizcarra",
    "home.description1":
      "Full-stack developer with experience in enterprise applications and a passion for modern web development. I specialize in creating robust and maintainable solutions with TypeScript and React, always prioritizing simplicity and teamwork.",
    "home.description2":
      "Whether building enterprise apps or decentralized tools, I value simplicity, scalability, and honest collaboration within feedback-driven teams.",
    "home.description3":
      "Always learning and open to new connections—let's create meaningful tech together.",
    "home.exploreProjects": "Explore my projects",
    "nav.about": "About",
    "nav.ideas": "Ideas",
    "nav.cv": "CV",
    "nav.projects": "Projects",
    "nav.experiments": "Experiments",
    "nav.mail": "Mail",
    "nav.twitter": "Twitter",
    "nav.linkedin": "LinkedIn",
    "nav.readcv": "Read.cv",
    "nav.webInterface": "WEB INTERFACE",
    "nav.contact": "CONTACT",

    // Theme switcher
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",
    "theme.toggle": "Toggle theme",

    // Language switcher
    "language.es": "Spanish",
    "language.en": "English",
    "language.toggle": "Toggle language",

    // About page
    "about.title": "About Me",
    "about.foundation.p1":
      "For me, software development is, fundamentally, an act of problem-solving. I'm fascinated by the ability to transform an abstract idea or business need into a functional, intuitive, and useful tool that improves someone's life or work.",
    "about.foundation.p2":
      "My professional starting point in the Insurtech sector, building B2B enterprise portals, provided me with a solid and invaluable foundation. There I learned firsthand the critical importance of robustness, security, and scalability. I understood what it means to write code that depends on a business and must function without failures day after day.",
    "about.craft.p1":
      "That traditional software engineering foundation sparked my curiosity about code craftsmanship. I'm not satisfied with something just working; I seek the most elegant, efficient, and maintainable way to build it. This has led me on a deep immersion in TypeScript and the React ecosystem, exploring clean design patterns and architectures that allow teams to iterate quickly and confidently.",
    "about.craft.p2":
      "Outside of code, years of Kung Fu practice instilled in me discipline and focus that I apply to each technical challenge. He taught me to maintain calm under pressure, to break down complex problems into smaller movements, and to value constant practice as the only path to mastery.",
    "about.vision.p1":
      "My curiosity is insatiable and keeps me in a state of perpetual learning. Currently, I'm exploring the capabilities of Effect.ts to build more robust backends and actively participate in hackathons, mostly in the Web3 ecosystem, an area I'm passionate about for its potential to redefine property and trust in the web.",
    "about.vision.p2":
      "I seek to join a team where technical excellence and honest collaboration are the norm. I thrive in dynamic environments, guided by feedback, where constructive debate and passion for building cutting-edge products that truly impact their users are encouraged.",
    "about.vision.cta":
      "If my approach and values resonate with you, I'd love to connect.",
    "about.learning.title": "Currently Learning",
    "about.values.title": "My Values",
    "about.values.quality.title": "Code Quality",
    "about.values.quality.desc":
      "Robust, maintainable, and well-documented software.",
    "about.values.collaboration.title": "Radical Collaboration",
    "about.values.collaboration.desc":
      "Open, honest, and constant feedback communication.",
    "about.values.learning.title": "Continuous Learning",
    "about.values.learning.desc":
      "Limitless curiosity to adopt and master new technologies.",
  },
} satisfies Record<Language, Record<string, string>>;
