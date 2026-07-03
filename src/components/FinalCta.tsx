import { Phone, Sparkles } from "lucide-react";
import { business } from "@/lib/constants";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function FinalCta({
  title = "See what your pool actually needs.",
  description = "We'll walk your yard, check your equipment and water, and give you a straight answer — free, no pressure.",
  note = "Now scheduling new weekly routes in Pompano Beach.",
}: {
  title?: string;
  description?: string;
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(transparent,transparent_31px,white_32px)]" />
      <Container className="relative text-center">
        <Sparkles className="mx-auto h-8 w-8 text-sun-400" />
        <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-100/90">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact" variant="primary">
            Get My Free Pool Quote
          </Button>
          <Button href={business.phoneHref} variant="outlineOnDark" icon={<Phone className="h-4 w-4" />}>
            {business.phoneDisplay}
          </Button>
        </div>
        {note ? <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-sun-300/90">{note}</p> : null}
      </Container>
    </section>
  );
}
