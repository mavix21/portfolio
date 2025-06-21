import type { Language } from "@/i18n/ui";
import React from "react";

interface Props {
  lang: Language;
}

export function DateTimeDisplay({ lang }: Props) {
  const [now, setNow] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dateString = new Intl.DateTimeFormat(lang, {
    dateStyle: "full",
    timeStyle: "medium",
    timeZone: "America/Lima",
  }).format(now);

  return (
    <>
      <p className="font-sans text-xs text-muted-foreground mt-4 leading-tight">
        {dateString}
      </p>
      <p className="font-sans text-[11px] text-muted-foreground opacity-90">
        GMT-5 - Lima/Peru
      </p>
    </>
  );
}
