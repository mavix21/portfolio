import type { Language } from "@/i18n/ui";
import React from "react";

interface Props {
  lang: Language;
}

export default function DateTimeDisplay({ lang }: Props) {
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
      <p className="mt-4 font-sans text-xs leading-tight text-muted-foreground">
        {dateString}
      </p>
      <p className="font-sans text-[11px] text-muted-foreground opacity-90">
        GMT-5 - Lima/Peru
      </p>
    </>
  );
}
