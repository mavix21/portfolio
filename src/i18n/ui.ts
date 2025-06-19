export const DEFAULT_LANGUAGE = "es";

export const LANGUAGES = {
  es: "Español",
  en: "English",
} as const;

export const LANGUAGES_KEYS = Object.keys(LANGUAGES) as (keyof typeof LANGUAGES)[];

export type Language = keyof typeof LANGUAGES;

export const ui = {
  es: {
    "site.title": "Marcelo Vizcarra - Portafolio",
    "site.description": "Desarrollador full-stack enfocado en soluciones elegantes, mantenibles y robustas de TypeScript y React para la web.",
    "home.title": "Marcelo Vizcarra",
    "home.description1":
      "Desarrollador full-stack enfocado en soluciones elegantes, mantenibles y robustas de TypeScript y React para la web.",
    "home.description2":
      "Ya sea construyendo aplicaciones empresariales o herramientas descentralizadas, valoro la simplicidad, escalabilidad y colaboración honesta dentro de equipos orientados por feedback.",
    "home.description3":
      "Siempre aprendiendo y abierto a entablar nuevas conexiones. Creemos tecnología significativa juntos.",
    "home.exploreProjects": "Explorar mis proyectos",
  },
  en: {
    "site.title": "Marcelo Vizcarra - Portfolio",
    "site.description": "Full-stack developer focused on elegant, maintainable, and robust TypeScript and React solutions for the web.",
    "home.title": "Marcelo Vizcarra",
    "home.description1":
      "Full-stack developer focused on elegant, maintainable, and robust TypeScript and React solutions for the web.",
    "home.description2":
      "Whether building enterprise apps or decentralized tools, I value simplicity, scalability, and honest collaboration within feedback-driven teams.",
    "home.description3":
      "Always learning and open to new connections—let's create meaningful tech together.",
    "home.exploreProjects": "Explore my projects",
  },
} satisfies Record<Language, Record<string, string>>;
