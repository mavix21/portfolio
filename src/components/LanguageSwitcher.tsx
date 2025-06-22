import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "@/i18n/utils";
import type { Language } from "@/i18n/ui";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  lang: Language;
  pathnames: Record<Language, string>;
  className?: string;
}

export default function LanguageSwitcher({
  lang,
  pathnames,
  className,
}: Props) {
  const t = useTranslations(lang);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn("flex w-fit", className)}>
          <Globe className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
          <span className="sr-only">{t("language.toggle")}</span>
          <span className="text-xs">{t(`language.${lang}`)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          <a href={pathnames.es} className="block w-full">
            {t("language.es")}
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href={pathnames.en} className="block w-full">
            {t("language.en")}
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
