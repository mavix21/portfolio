import { DEFAULT_LANGUAGE, LANGUAGES_KEYS, ui, type Language } from "./ui";

// Pre-compile regex for better performance
const LANGUAGE_PATH_REGEX = new RegExp(`^\/(${LANGUAGES_KEYS.join("|")})`);

/**
 * Validates if a string is a valid language key
 */
function isValidLanguage(lang: string): lang is Language {
  return LANGUAGES_KEYS.includes(lang as Language);
}

/**
 * Extracts language from URL pathname with proper edge case handling
 */
export function getLangFromUrl(url: URL): Language {
  if (!url || !url.pathname) {
    return DEFAULT_LANGUAGE;
  }

  // Handle root path
  if (url.pathname === "/") {
    return DEFAULT_LANGUAGE;
  }

  // Split pathname and get the first segment after the leading slash
  const pathSegments = url.pathname.split("/").filter(Boolean);

  if (pathSegments.length === 0) {
    return DEFAULT_LANGUAGE;
  }

  const potentialLang = pathSegments[0];

  // Validate if it's a valid language
  if (isValidLanguage(potentialLang)) {
    return potentialLang;
  }

  return DEFAULT_LANGUAGE;
}

/**
 * Translation function with improved type safety and error handling
 */
export function useTranslations(lang?: Language) {
  return function t(
    key: keyof (typeof ui)[typeof DEFAULT_LANGUAGE],
    ...args: any[]
  ): string {
    // Validate language parameter
    const targetLang = lang && isValidLanguage(lang) ? lang : DEFAULT_LANGUAGE;

    // Get translation with fallback
    let translation = ui[targetLang][key] || ui[DEFAULT_LANGUAGE][key];

    // Handle missing translations
    if (!translation) {
      console.warn(
        `Translation missing for key "${key}" in language "${targetLang}"`,
      );
      return key; // Return the key as fallback
    }

    // Handle interpolation
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg !== null && arg !== undefined) {
          translation = translation.replace(
            new RegExp(`\\{${i}\\}`, "g"),
            String(arg),
          );
        }
      }
    }

    return translation;
  };
}

/**
 * Checks if a pathname starts with any valid language prefix
 */
function pathnameStartsWithLanguage(pathname: string): boolean {
  if (!pathname || typeof pathname !== "string") {
    return false;
  }

  // Use pre-compiled regex for better performance
  return LANGUAGE_PATH_REGEX.test(pathname);
}

/**
 * Determines if a pathname is in the specified language
 */
export function pathnameIsInLanguage(
  pathname: string,
  lang: Language,
): boolean {
  if (!pathname || typeof pathname !== "string" || !isValidLanguage(lang)) {
    return false;
  }

  // Handle default language (no prefix)
  if (lang === DEFAULT_LANGUAGE) {
    return !pathnameStartsWithLanguage(pathname);
  }

  // Check if pathname starts with the specific language
  return pathname.startsWith(`/${lang}`);
}

/**
 * Converts a pathname to the specified language
 */
export function getLocalizedPathname(pathname: string, lang: Language): string {
  if (!pathname || typeof pathname !== "string" || !isValidLanguage(lang)) {
    return `/${lang}`;
  }

  // Handle root path
  if (pathname === "/") {
    return lang === DEFAULT_LANGUAGE ? "/" : `/${lang}`;
  }

  // If pathname already has a language prefix, replace it
  if (pathnameStartsWithLanguage(pathname)) {
    return pathname.replace(LANGUAGE_PATH_REGEX, `/${lang}`);
  }

  // Add language prefix
  return `/${lang}${pathname}`;
}

/**
 * Gets all available languages for a given pathname
 */
export function getLocalizedPathnames(
  pathname: string,
): Record<Language, string> {
  const result: Record<Language, string> = {} as Record<Language, string>;

  for (const lang of LANGUAGES_KEYS) {
    result[lang] = getLocalizedPathname(pathname, lang);
  }

  return result;
}

/**
 * Extracts the base pathname without language prefix
 */
export function getBasePathname(pathname: string): string {
  if (!pathname || typeof pathname !== "string") {
    return "/";
  }

  // Handle root path
  if (pathname === "/") {
    return "/";
  }

  // Remove language prefix if present
  if (pathnameStartsWithLanguage(pathname)) {
    const withoutLang = pathname.replace(LANGUAGE_PATH_REGEX, "");
    return withoutLang || "/";
  }

  return pathname;
}
