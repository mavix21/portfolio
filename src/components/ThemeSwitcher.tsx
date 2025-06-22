import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "@/i18n/utils";
import type { Language } from "@/i18n/ui";
import { cn } from "@/lib/utils";

interface Props {
  lang: Language;
  className?: string;
}

export function ThemeSwitcher({ lang, className }: Props) {
  const t = useTranslations(lang);

  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light");

  // Initialize theme from current DOM state
  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  // Apply theme changes to DOM (localStorage is handled by inline script)
  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  const getThemeLabel = () => {
    switch (theme) {
      case "theme-light":
        return t("theme.light");
      case "dark":
        return t("theme.dark");
      default:
        return t("theme.system");
    }
  };

  const getThemeIcon = () => {
    const iconClasses = "h-[1.2rem] w-[1.2rem] transition-all";
    const sunIcon = (
      <Sun
        className={`${iconClasses} scale-100 rotate-0 dark:scale-0 dark:-rotate-90`}
      />
    );
    const moonIcon = (
      <Moon
        className={`${iconClasses} scale-0 rotate-90 dark:scale-100 dark:rotate-0`}
      />
    );

    switch (theme) {
      case "theme-light":
        return sunIcon;
      case "dark":
        return moonIcon;
      default: {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? moonIcon
          : sunIcon;
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn("flex w-fit", className)}>
          {getThemeIcon()}
          <span className="sr-only">{t("theme.toggle")}</span>
          <span className="text-xs">{getThemeLabel()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => setThemeState("theme-light")}>
          {t("theme.light")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("dark")}>
          {t("theme.dark")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("system")}>
          {t("theme.system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
