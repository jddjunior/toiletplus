---
name: toilet-plus-design
description: Use this skill to generate well-branded interfaces and assets for Toilet Plus (a local plumbing company), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (tokens, components, ui_kits, guidelines, assets).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

**Brand in one line:** Toilet Plus is the plumber you actually want to call — licensed, upfront about price, fast. Sell trust and speed, not luxury. Voice is friend-speak (a straight-talking neighbor), never marketing-speak, with SEO/LSI plumbing keywords woven in naturally.

**Quick reference**
- Link `styles.css`; components live on `window.ToiletPlusDesignSystem_5215f9` after loading `_ds_bundle.js`.
- Core tokens: `--color-primary #1466CC` (blue), `--blue-900 #071E3D` (navy), `--color-accent #FF4D4D` (light red — urgency ONLY), cool grays. Display = Archivo 800/900; body = Hanken Grotesk; mono = Spline Sans Mono.
- Pill buttons, 12–24px card radii, hairline borders, cool navy-tinted shadows. Icons = Lucide (CDN). No emoji, no purple gradients, no stock-y warm imagery.
- Components: Logo, Button, Badge, Card, RatingBadge, Input, Select, ServiceCard, ReviewCard, GuaranteeCard. Full homepage in `ui_kits/website/index.html`.
