import { CheckCircle2, Phone, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBar } from "@/components/TrustBar";
import { ServiceCard } from "@/components/ServiceCard";
import { ReviewCard } from "@/components/ReviewCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCta } from "@/components/FinalCta";
import { business } from "@/lib/constants";
import { services } from "@/lib/data/services";
import { reviews } from "@/lib/data/reviews";
import { faqs } from "@/lib/data/faqs";

const whoThisIsFor = [
  "Your last pool guy went quiet more than once",
  "You want the same technician every visit, not whoever's available",
  "You'd rather pay a fair flat rate than get surprise invoices",
  "Your pool turned green after a trip, a storm, or a long \"I'll get to it\"",
  "You want someone who explains what's wrong before fixing it",
  "You live in Pompano Beach, Deerfield Beach, or a nearby coastal community",
];

const whatYouGet = [
  "A set weekly visit day, with skimming, brushing, vacuuming, and chemical balance",
  "Equipment check every visit — pump, filter, salt cell — so small issues don't become big ones",
  "A photo and note after every cleaning, so you know it happened even when you're not home",
  "A direct line to your technician, not a call center",
  "Flat, upfront pricing with no surprise chemical upcharges",
  "Storm-season cleanup built into the plan, not billed as an emergency fee",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-950">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(transparent,transparent_31px,white_32px)]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sun-500/10 blur-3xl" />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-sun-300">
              <Sparkles className="h-3.5 w-3.5" />
              Serving {business.addressRegion} &amp; Broward County
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {business.tagline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-brand-100/90">
              Weekly cleaning, honest pricing, and a pool guy who actually shows up.
              We handle the skimming, the chemistry, and the equipment — you just
              enjoy the water.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary">
                Get Your Free Pool Quote
              </Button>
              <Button href={business.phoneHref} variant="outlineOnDark" icon={<Phone className="h-4 w-4" />}>
                {business.phoneDisplay}
              </Button>
            </div>
            <div className="mt-10">
              <TrustBar light />
            </div>
          </div>
        </Container>
      </section>

      {/* PROBLEM AGITATION */}
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Sound familiar?"
              title="Somewhere between the leaves and the green water, your pool stopped being the reason you bought this house."
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-brand-800/85 lg:col-span-7">
            <p>
              You&apos;ve probably had at least one &ldquo;pool guy&rdquo; who skipped
              weeks without telling you, left the chemicals wrong, or vanished
              mid-season. Meanwhile the Florida sun doesn&apos;t take a week off —
              one missed cleaning and you&apos;re staring at cloudy water, or worse,
              a green tint creeping up the walls.
            </p>
            <p>
              You don&apos;t want to become a part-time pool chemist, checking
              chlorine levels between meetings. You want to walk outside, see clear
              water, and not think about it again until next week.
            </p>
            <p className="font-semibold text-brand-950">
              What if your pool was just... handled? Same day every week, chemicals
              balanced, filter checked — no group chat with an excuse.
            </p>
          </div>
        </Container>
      </section>

      {/* SOLUTION OVERVIEW / SERVICES */}
      <section className="bg-brand-50/60 py-20">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Four things we do really well"
            description="No bloated service menu. Just the work that keeps a Pompano Beach pool clean, balanced, and running — done consistently."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Three steps, and you're done thinking about it"
            align="center"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "We look at your pool (free)",
                body: "We walk your yard, check your equipment and water, and tell you honestly what it needs. No charge, no commitment.",
              },
              {
                step: "02",
                title: "You get a straightforward plan",
                body: "Weekly, bi-weekly, or one-time green pool recovery — priced clearly before we start. You approve it, we schedule it.",
              },
              {
                step: "03",
                title: "We show up and handle it",
                body: "Same technician, same day, every time — with a quick photo and note left after every visit.",
              },
            ].map((item) => (
              <div key={item.step} className="relative rounded-2xl border border-brand-100 bg-white p-7">
                <span className="font-display text-4xl font-extrabold text-brand-100">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-brand-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-800/75">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROOF & RESULTS */}
      <section className="bg-brand-950 py-20">
        <Container>
          <SectionHeading
            eyebrow="What neighbors are saying"
            title="Real feedback from Broward County pool owners"
            light
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </Container>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Is this you?" title="This is a fit if..." />
            <ul className="mt-8 space-y-4">
              {whoThisIsFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-brand-900/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="What you get" title="Every weekly plan includes" />
            <ul className="mt-8 space-y-4">
              {whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-brand-900/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sun-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* OBJECTION HANDLING / FAQ */}
      <section className="bg-brand-50/60 py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Questions"
            title="Straight answers before you call"
            align="center"
          />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <FinalCta note="Now scheduling new weekly routes in Pompano Beach this month." />
    </>
  );
}
