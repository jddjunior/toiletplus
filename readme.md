# Toilet Plus — Design System

A complete brand + UI system for **Toilet Plus**, a locally-owned residential & light-commercial **plumbing company**. The system covers tokens (color, type, spacing, effects), brand assets, reusable React components, and a full marketing-website UI kit.

> **Sources & provenance.** No external codebase or Figma was provided. This system was built from a written brand brief: *"Plumbing company called Toilet Plus, logo Toilet+, colors blue / dark blue / white / black / gray with a light-red highlight accent. Marketing site modeled structurally on the home-services genre (e.g. onehourheatandair.com) but for plumbing. Voice: not marketing-speak — friend-speak, with SEO-aware topical/LSI keywords."* The reference site informed **layout structure only** (sticky utility bar, hero + quick-book card, services grid, guarantee band, reviews, 24/7 footer); all branding, copy, color, and type are original to Toilet Plus.

---

## What Toilet Plus is

Toilet Plus is the plumber you actually want to call: licensed, upfront about price, and quick. The brand sells **trust and speed**, not luxury. Everything — color, copy, layout — should feel like a competent neighbor who shows up, tells you the truth, and fixes it. Core service lines: drain cleaning, water heaters (tank & tankless), leak detection, sewer/main line, fixtures, repiping & water quality.

Primary surface: the **marketing website** (lead-gen for service calls). A booking flow (job → contact → confirmation) is the main conversion path; a 24/7 phone number is always one tap away.

---

## Content fundamentals — how Toilet Plus talks

**Voice: a straight-talking neighbor, not a brochure.** Plain, warm, specific. Confident without hype.

- **Person:** Speak to the reader as **"you"**; the company is **"we."** ("*We'll snake the line and tell you straight.*")
- **Casing:** Sentence case for headlines and UI. Display headlines can be punchy and short. UPPERCASE only for small eyebrows/overlines (tracked +0.14em).
- **Sentence length:** Short. One idea per sentence. Contractions always (*we'll, you're, don't*).
- **No marketing-speak.** Ban: "unparalleled," "industry-leading," "premium solutions," "discerning," "act now," exclamation stacks. Say what the thing *is* and what it *costs you in worry.*
- **Friend-speak in practice:** lead with the customer's actual situation ("*Slow drain in the kitchen?*"), then the honest read ("*Nine times out of ten it's grease, not a clog you caused.*"), then the plan ("*We'll snake it, check the trap, and tell you if it's deeper.*").
- **SEO / LSI keywords, naturally woven** — never keyword-stuffed. Topical cluster + semantic variants to use in body copy and headings:
  - *drain cleaning, hydro-jetting, clogged drain, slow drain, snake the line, sewer lateral, main line backup, water heater repair, tankless, leak detection, slab leak, pinhole leak, burst pipe, repipe, galvanized pipe, water pressure, sump pump, garbage disposal, trap, P-trap, flange, fixture, emergency plumber, same-day, licensed and insured, upfront pricing.*
- **Trust markers** repeated like a refrain: *licensed, bonded & insured · upfront / flat-rate pricing · same-day · 24/7 · local · 2-year workmanship warranty · license #PL-48217.*
- **Emoji:** essentially none. One small contextual mark (🔧) is tolerable in a celebratory confirmation moment; never in nav, headlines, or body. No emoji bullet lists.
- **Numbers:** phone numbers and license numbers in tabular **mono**. Spell out savings honestly ("*saved about $1,800*"), never invented stats.

**Tone test:** if a sentence could appear on any generic franchise flyer, rewrite it until it sounds like a person who's standing in your kitchen.

---

## Visual foundations

**Art direction: industrial spec-sheet / work-order.** Not a soft SaaS template — this is a *trade* brand. The system reads like equipment labels and job tickets: **left-aligned, editorial, asymmetric** layouts; **numbered sections** (`01 / WHAT WE FIX`); **mono "stamp" labels** in place of pill eyebrows; a **fine blueprint grid** for atmosphere instead of floaty dots; **sharp corners** and **hairline rules** carrying more weight than drop-shadows. Confident, sturdy, honest. The light red is a **structural accent** (section index marks, the one urgent CTA) — used with intent, never sprinkled.

- **Color.** Primary plumber **blue `#1466CC`**, deepening to **dark blue `#0B3D7E`** and **navy `#071E3D`** (footer, hero & guarantee bands). Cool **gray** scale (slightly blue-tinted) for text/borders/surfaces. **Light red `#FF4D4D`** is the accent — section index numbers, the stamp tick, the emergency call CTA, alerts, form errors. Green `#1FA463` signals licensing/trust/success; amber for waits/warnings. White and near-black round it out. See `tokens/colors.css`.
- **Type.** Display = **Archivo** at **900** for oversized, tight-tracked (-0.02 to -0.03em) headlines that run big and left-aligned, often stacked over 2–3 lines. Body = **Hanken Grotesk** 400–600, line-height 1.5–1.65. **Spline Sans Mono** does heavy lifting: every label, stamp, section kicker, stat unit, phone & license number is mono/uppercase/tracked (+0.06–.12em). This mono-label system is a core brand tell.
- **Spacing & layout.** 4px base grid. Max content width **1200px**, 24px gutters. Section rhythm **~104px**. Fixed sticky header (76px) over a navy utility strip. **`SectionHead`** is the recurring pattern: a red mono index + mono kicker, an oversized left headline, and supporting copy set to the right against a hairline rule — never a centered eyebrow-over-centered-title block.
- **Backgrounds.** Solid white and a muted cool gray (`#F5F8FC`) alternate. The **hero** and **guarantee band** are navy gradients carrying a faint **blueprint line grid** (`linear-gradient` rules at 4–5% white, 32px) plus a giant ghost `+` watermark. A **brand-blue spec strip** of big mono figures breaks the page. No stock photos shipped; no purple gradients, ever.
- **Corner radii.** Deliberately **tight/industrial**: inputs/cards/buttons **6px** (`--radius-md`), larger panels **8–10px**, small stamps **4px**. `--radius-pill` is reserved for avatars/dots only — **buttons are not pills**.
- **Cards.** White surface, **1px** hairline border, **flat** at rest (no shadow). Service cards carry a **mono index** (top-right), a bare line icon (no soft tile), and a **top accent rule** that slides full-width on hover; the bottom CTA is mono/uppercase above a divider. Hover deepens border to blue + a soft `--shadow-md`.
- **Shadows / elevation.** Used sparingly — the system leans on **rules and borders**, not shadow. A single cool family (xs→xl, all `rgba(7,30,61,…)`); reserved for the hero ticket, hover lifts, and the modal.
- **Borders.** 1px hairlines do most of the structural work (grids of guarantees, dividers under section heads, ticket perforations as 2px dashed rules). On dark surfaces borders are `rgba(255,255,255,.14)`.
- **Hover / press / focus.** Hover = darker fill and/or accent-rule reveal; links underline. Press = `translateY(1px)`, no bounce. Focus-visible = 3px blue ring. Motion is quick and honest: 120–200ms ease-out; no springy bounces, no infinite loops.
- **Transparency & blur.** Sticky header white at 92% + 10px backdrop blur. Booking-modal scrim navy at 55% + 4px blur. Otherwise opaque.
- **Imagery (none shipped).** Any future photography should read **bright, cool, real** — daylight, clean fixtures, licensed techs — not stocky or warm-orange. No hand-drawn illustration.

---

## Iconography

- **Set:** [**Lucide**](https://lucide.dev) (open-source, 2px stroke, rounded line caps) — loaded from CDN (`unpkg.com/lucide`). This is a **substitution**: no proprietary icon set was provided. Lucide's stroke weight and rounded geometry match the brand's clean, cool feel. *If a specific icon library is preferred, flag it and we'll swap.*
- **Usage:** bare **line icons** (no soft tile) sized 18–30px, stroke 1.75–2, in `--color-primary` or `currentColor`. Service cards pair an icon with a mono index and a sliding top accent rule. Inline icons in buttons/stamps inherit color. *(The earlier soft-blue icon-tile pattern was dropped in the industrial art-direction pass.)*
- **Plumbing mapping:** Droplets = drain cleaning · Flame = water heater · Waves = leak repair · Pipette = sewer/main · ShowerHead = fixtures · Gauge = repiping/water quality · Wrench = general · BadgeCheck/ShieldCheck = licensed · Clock = 24/7 · Tag = pricing · Phone = call.
- **Stars** (ratings) are drawn inline as a small SVG path with fractional-fill gradient — a universal rating glyph, not brand iconography.
- **Logo mark** is a custom vector: a rounded-square "+" with a small red water-droplet (`assets/logo-mark.svg`, `assets/logo-mark-white.svg`). Also available as the `<Logo />` component.
- **Emoji as icons:** no.

---

## Index — what's in this folder

**Foundations**
- `styles.css` — root entry; `@import`s everything below. Consumers link **this one file**.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `fonts.css` · `base.css`
- `guidelines/*.card.html` — foundation specimen cards (Design System tab): color scales, type, spacing/radii/shadows, logo, voice.

**Assets** (`assets/`)
- `logo-mark.svg`, `logo-mark-white.svg` — the "+" droplet mark, light & reversed.

**Components** (`components/<group>/` — each has `.jsx`, `.d.ts`, a prompt, and a card)
- `brand/Logo` · `buttons/Button` · `core/{Badge, Card, RatingBadge}` · `forms/{Input, Select}` · `marketing/{ServiceCard, ReviewCard, GuaranteeCard}`

**UI kit** (`ui_kits/website/`)
- `index.html` — interactive Toilet Plus homepage (hero, services, guarantees, reviews, footer) with a working 3-step **booking modal**. Composed from `_kit, Header, Hero, Services, Guarantees, Reviews, Footer, BookingModal`.

**Meta**
- `SKILL.md` — portable Agent-Skill wrapper. · `readme.md` — this file.

---

## Using it

Consumers link the single stylesheet and read components off the bundle namespace:

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script>
  const { Button, ServiceCard, RatingBadge } = window.ToiletPlusDesignSystem_5215f9;
</script>
```

Tokens are plain CSS custom properties (`var(--color-primary)`, `var(--font-display)`, `var(--space-6)`) available everywhere once `styles.css` is linked.

---

## Caveats

- **Fonts are Google Fonts** (Archivo, Hanken Grotesk, Spline Sans Mono) loaded via `@import` in `tokens/fonts.css`, so the compiler reports 0 self-hosted webfonts. For production, self-host the binaries and add real `@font-face` rules. *Flagging in case you want specific licensed brand fonts instead.*
- **Icons are Lucide via CDN** — a substitution, not a provided set (see Iconography).
- **No photography** is shipped. The hero and cards use color, type, and the logo rather than stock images. Real bright/cool technician + fixture photos would raise fidelity — send any brand photography and we'll wire it in.
- **Logo** is an original mark built to the "Toilet+" brief; treat it as a first pass open to refinement.
