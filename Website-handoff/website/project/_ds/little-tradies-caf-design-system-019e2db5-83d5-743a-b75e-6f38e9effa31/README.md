# Little Tradies Café — Design System

> **Built for play. Brewed for parents.**
> A family café brand combining construction-themed play, quality café culture, and community connection. Where kids build imagination while parents recharge.

This repository is the canonical design system for **Little Tradies Café**. It contains brand foundations (color, type, motion), real visual assets (logos, illustrations, footer pack), and high-fidelity UI kits for the café's website and in-venue collateral.

---

## Index

| Path | What's in it |
|---|---|
| `README.md` | This file — brand context, content + visual foundations, iconography |
| `SKILL.md` | Cross-compatible Agent Skill manifest — describes how an agent should use this folder |
| `colors_and_type.css` | All design tokens: colors, type, spacing, radii, shadows, motion, patterns |
| `assets/` | Logos, illustrations, footer pack, mockup references |
| `preview/` | Small HTML cards that populate the Design System tab (colors, type, components, etc.) |
| `ui_kits/website/` | High-fidelity recreation of the café's marketing site |
| `ui_kits/menu/` | In-venue menu / signage system (printable & POS variants) |

---

## Brand essentials

**Name:** Little Tradies Café
**Wordmark:** "Little" in teal, "Tradies" in navy, "Café" in orange — all hand-drawn, outlined, chunky display lettering with a yellow hard hat above and a rounded yellow bracket beneath.
**Primary tagline:** *Built for play. Brewed for parents.*
**Action slogan (chalkboard):** **BUILD. PLAY. EAT. REPEAT!**

### The brand in one paragraph

Little Tradies Café is a family-friendly café and play centre celebrating Australian tradies and the hands-on world of construction. The brand champions *real-world heroes* — local tradies, builders, sparkies, chippies — as role models for kids in a screen-saturated world. Visually it's a hand-drawn cartoon construction site: dump trucks, hard hats, traffic cones, toolboxes, hazard stripes, and chalkboard signage, all warmed by a cream-and-coffee café palette.

### Audience

- **Parents** (primary buyer): want great coffee, hearty food, a welcoming third place, and somewhere their kids will actually enjoy.
- **Kids 2–10** (the magnet): love the construction-themed play, hard-hat dress-ups, mini builder workshops.
- **Tradies & local makers** (community): celebrated through *Tradie of the Month*, breakfast deals, and community events.

### Movement / message hierarchy

1. **Less screen time. More build time.** (the rallying cry)
2. **Raise makers, not watchers.** (parent appeal)
3. **Built for kids. Backed by tradies.** (community)
4. **Built for play. Brewed for parents.** (everyday tagline)

### Additional taglines in use

- Future Tradies Start Here
- Where Kids Build Confidence
- Less Screens. More Skills.
- Play Hard. Build Big. Sip Slow.
- Coffee for Parents. Confidence for Kids.
- Fun for Little & Big Tradies

---

## Sources & provenance

All brand artifacts in `assets/` were originated from materials provided by the founder:

- **`Branding/`** (mounted local folder) — primary source for logos, illustrations, footer asset pack, palette references, tagline screenshots, and two JSX prototypes:
  - `Branding/little_tradies_cafe_website.jsx` — full website prototype (React + framer-motion + lucide-react)
  - `Branding/little_tradies_editable_brand_board.jsx` — editable Canvas brand board with 7 logo lockups + SVG icon system
- **`uploads/`** — duplicate copies of the final logo set and the tagline screenshots (mirror of `Branding/Logo/final logo/` and `Branding/Tag Lines/`).
- **Notes brief** (in the kickoff message) — full movement copy, brand purpose, enemy/leader framing, taglines, and community activation list. All preserved verbatim in `assets/brand-brief.md`.

> Treat the JSX prototypes as informal — they were authored by ChatGPT/Canvas during ideation. They're useful for tokens (the inline `brand.colours` and `brand.palette` objects encode the canonical hex codes) but the typography in the prototypes uses generic system fonts; the real wordmark is a custom hand-drawn illustration (see `assets/logo-main.png`).

---

## Content fundamentals

### Voice

**Warm, plainspoken, and Australian.** Speaks like a friendly neighbour who happens to run the best café in town. Confident about the values (hard work, real skills, family), playful about the execution (cartoons, puns, hard-hat metaphors). Never preachy, never corporate.

### Tone by surface

| Surface | Tone | Example |
|---|---|---|
| Headlines | Big, declarative, often imperative | **BUILD. PLAY. EAT. REPEAT!** |
| Hero subhead | Soft, hand-written, complementary | *Built for play. Brewed for parents.* |
| Body / about | Plain, descriptive, sensory | "A construction-themed family café where little builders can dig, climb and imagine, while parents relax with great coffee and feel-good food." |
| Menu items | Concrete, kid-readable, occasionally themed | "Crinkle Cut Chips", "Mini Pizza — Margherita", "Builder's Brekkie Roll" |
| CTA buttons | Direct verbs, no fluff | "Book a Table", "View Kids Menu", "Explore Logos" |
| Social bio | Punchy, emoji-light, badge of identity | "Family-friendly café for little and big tradies. Coffee for the grown-ups, fun for the kids." |

### Casing rules

- **Display headlines** are mostly **Title Case** (the wordmark itself is Title Case).
- **Chalkboard / poster slogans** are **ALL CAPS** with periods between words for emphasis: `BUILD. PLAY. EAT. REPEAT!`
- **Eyebrow / kicker labels** above sections are `ALL CAPS WIDE-TRACKED`, e.g. `LOGO CONCEPT TABS`, `KIDS MENU BOARD`.
- **Buttons** are Title Case ("Book a Table"), never sentence case.
- **Body copy** is sentence case.

### Pronouns & person

- "**We**" for the café ("We're a construction-themed family café…").
- "**You**" for the guest, used sparingly — most copy is descriptive third-person about kids and parents rather than directly addressing the reader.
- Never "I/me/my".
- Australian spelling (colour, favourite, organisation).

### Punctuation & quirks

- Em-dashes ( — ) used freely to slow the rhythm: *"We celebrate real-world heroes — local tradies, builders, sparkies, chippies."*
- Three-beat slogans with periods: `Built for play. Brewed for parents.`
- The **café** is always written with the acute accent (é), not "cafe".
- Use the **construction vocabulary** as flavour, not gimmick: *little builders, dig and climb, sticky fingers, strong coffee, hard hats, hi-vis*. Don't overdo it ("Buckle Up, Mate, For An EPIC Brekkie!" — no).

### Emoji & symbols

- **Emoji are used sparingly**, mainly in **social bios** and short marketing copy where space is tight. Common picks: ☕ 👷 ⭐ ❤️.
- **Never** in headlines, hero copy, menus, or buttons inside the app.
- **Stars** (⭐ / a yellow filled star illustration) are the brand's signature accent symbol — they appear next to menu items, on buttons, around the wordmark. Render them as illustrated stars in design, not the Unicode emoji.

### What the brand *doesn't* sound like

- Corporate / B2B ("We're committed to delivering best-in-class experiences" — no)
- Twee / saccharine ("Yummy noms for the kiddos!" — no)
- Trend-chasing ("Vibes. Caffeine. Chaos." — no)
- Aggressive / shouty ("BEST COFFEE IN TOWN — GUARANTEED!" — no)

---

## Visual foundations

### Overall feel

A **hand-drawn cartoon construction site** crossed with a **warm neighbourhood café**. Imagine a children's picture book about a building site, printed on cream paper with cocoa-cup coffee rings in the margins. Heavy on texture, rounded shapes, sticker-like cards, and big chunky letters.

### Colors

Ten confirmed brand colors plus seven semantic role tokens. See `colors_and_type.css` for the full token list and `preview/colors-*.html` for swatches.

| Token | Hex | Role |
|---|---|---|
| Teal | `#1F8A8A` | Primary brand. Wordmark "Tradies", primary accents. |
| Yellow | `#F4C542` | Playful highlight. Hard hat yellow, hazard stripes, stars. |
| Orange | `#E67E22` | Energy / CTA. "Café" wordmark, primary action buttons. |
| Navy | `#2F4E68` | Strong headings, dark surfaces, outlines, sticker shadows. |
| Charcoal | `#3E4349` | Body text, chalkboard surface color. |
| Warm Grey | `#7A7A73` | Muted UI text, secondary metadata. |
| Cream | `#F7F3EA` | **Default app background.** Warm, parchment-like. |
| White | `#FFFFFF` | Surface cards, nested panels. |
| Sage | `#7D8B6A` | Soft accent — "Family" chip, calm secondary surfaces. |
| Coral | `#E87A5B` | Secondary warm accent — alternate to orange. |

> The CSS variable names use the *role* (`--color-yellow`, `--color-orange`, etc.) for code clarity; canonical *brand* names above always win in copy and presentations. The `--color-mustard` legacy name is kept as an alias for back-compat.

#### Semantic color roles

Layer on top of the raw palette — these are what you actually reference when coding.

| Token | Maps to | Hex | Use case |
|---|---|---|---|
| `--color-primary`   | Teal     | `#1F8A8A` | Main brand color, primary buttons, headings |
| `--color-secondary` | Yellow   | `#F4C542` | Borders, highlights, frames, secondary UI |
| `--color-accent`    | Orange   | `#E67E22` | High-energy CTAs, highlights, warmth |
| `--color-text-dark` | Charcoal | `#3E4349` | All body text, outlines, borders |
| `--color-success`   | Sage     | `#7D8B6A` | Success states, confirmation messages |
| `--color-info`      | Navy     | `#2F4E68` | Informational messages, links, depth |
| `--color-danger`    | Coral    | `#E87A5B` | Error states, warnings, alerts |

**Usage rules:**
- Cream is the *always* the default page background — never pure white.
- Teal and Orange should appear together in every layout (the two "anchor" colors of the wordmark).
- Navy is for outlines, dark surfaces, and the body of construction vehicles — it's not used for large blocks behind body text.
- Yellow is supporting / decorative — never a primary CTA color, but always present (hazard stripes, hat, stars).
- Never use blue-purple, fluorescent, or cool grey. The palette is firmly **warm**.

### Typography

| Role | Family | Token | Use |
|---|---|---|---|
| Display | **Fredoka One** | `--font-display` | `--text-5xl` & `--text-4xl` — hero wordmark, big slogans |
| Heading | **Lilita One** | `--font-heading` | `--text-3xl`, `--text-2xl`, `--text-xl` — section + card headings |
| Body | **Nunito** (400–900) | `--font-body` | `--text-lg` through `--text-xs` — paragraphs, UI, menu copy |
| All-Caps Label | **Bebas Neue** | `--font-label` | **Outside the scale.** ALL CAPS labels, badges, navigation, the `BUILD. PLAY. EAT. REPEAT!` slogan |
| Script accent | **Caveat** | `--font-script` | Handwritten tagline under headlines |
| Hand-printed | **Patrick Hand** | `--font-hand` | Menu prices, small doodled labels |

**Rule of thumb:** display + heading + body cover the scale; Bebas Neue is reserved for ALL-CAPS moments only.</new_string>
<old_string>| Role | Family | Notes |
|---|---|---|
| Display (logotype-style) | **Bagel Fat One** | Chunky, rounded, single-weight Google Fonts substitute for the custom hand-drawn wordmark. |
| Poster (all-caps chalkboard) | **Luckiest Guy** | Used for `BUILD. PLAY. EAT. REPEAT!` — comic-poster feel. |
| Body | **Nunito** (400–900) | Friendly rounded sans. Default for paragraphs, menus, UI. |
| Script accent | **Caveat** | Handwritten tagline feel under headlines. |
| Hand-printed | **Patrick Hand** | Menu prices, small doodled labels. |

> **Flagged substitutions:** the *actual* Little Tradies wordmark uses a custom hand-drawn outlined display style. **Fredoka One** (display) and **Lilita One** (heading) are the confirmed Google Fonts approximations — they capture the chunky picture-book energy. If the brand commissions a custom wordmark webfont, drop the TTF into `fonts/` and point `--font-display` at it.

#### Type scale (confirmed t-shirt sizes)

| Token | Size | Use |
|---|---|---|
| `--text-5xl`  | 72px | Display Aa · hero numerals |
| `--text-4xl`  | 56px | Wordmark feel ("Little Tradies") |
| `--text-3xl`  | 40px | Section heading |
| `--text-2xl`  | 32px | Card heading |
| `--text-xl`   | 24px | Sub-heading / Label |
| `--text-lg`   | 20px | Intro paragraph / Lead |
| `--text-base` | 16px | **Body text — main reading size** |
| `--text-sm`   | 14px | Secondary text, card descriptions |
| `--text-xs`   | 12px | Captions, badges, fine print |

### Spacing & sizing

- 4px grid (tokens `--space-1` … `--space-24`).
- Generous padding inside cards (24–32px is typical, 48px in heroes).
- Section vertical rhythm: 48–96px gaps between sections.
- Hit targets: minimum 44×44px for any interactive element (touch-friendly — kids will tap things).

### Corner radii

- **Everything is rounded.** Sharp corners are reserved for hazard stripes and the chalkboard band.
- Buttons: `--radius-pill` (full pill) is the dominant CTA shape. Secondary buttons sometimes use `--radius-md` (18px).
- Cards: `--radius-xl` (32px) is the default. Hero / feature cards push to `--radius-2xl` (40px).
- Chips & icon containers: `--radius-md` to `--radius-lg`.

### Borders

- **Cards routinely have thick navy outlines** — 2 to 4 px solid `--color-navy`. This is the signature "sticker" look.
- Soft borders for secondary surfaces use `var(--tint-navy-15)` (rgba navy at 15%).
- The menu card uses a `--color-brown` border to reference wood / kraft paper.

### Shadows

Two shadow families:

1. **Soft lifted shadow** (`--shadow-sm` → `--shadow-xl`) — a normal CSS soft drop shadow with a slight navy tint. Used on cards, navs, buttons.
2. **Sticker hard-edge shadow** (`--shadow-sticker`) — a solid offset `4px 4px 0 var(--color-navy)` shadow that gives the card a sticker / playmat feel. Used on highlight cards and hero artwork. Pair with a thick navy outline.

Soft shadows are warm — they should look like coffee-ring stains, not Material elevation.

### Backgrounds & textures

- **Cream is the default** (`--bg-app`).
- **Chalkboard** (`--bg-chalk`, `#3E4349` with subtle noise) for poster sections — the "BUILD. PLAY. EAT. REPEAT!" band.
- **Hazard stripes** (`--hazard-stripe`) — diagonal yellow/navy 18px bands. Used as a thin section divider (5–20px tall), never as a large block.
- **Soft blurred color blobs** in hero corners (yellow / teal at ~30% alpha, blurred). Used sparingly behind the hero.
- **Photographic backgrounds** for the play-zone / interior section — warm-lit indoor café shots, no filters, no grain overlays.
- No glassmorphism. No noise textures over the whole page. No animated SVG noise.

### Imagery treatment

- **Illustrations**: hand-drawn cartoon style, slightly rough outlines, flat fills with subtle texture. Always feature construction equipment (trucks, excavators, cones, toolboxes, hard hats) or café items (cups, food). Color-matched to brand palette.
- **Photography**: warm-toned, indoor lighting, families/kids/coffee/play-zone interiors. Slightly warm white balance, slight film softness, never over-saturated.
- **Avoid**: stock-photo people in business attire, cold-lit minimalist food shots, sterile café shots.

### Animation & interaction

- **Animations are gentle and bouncy** — `--ease-bounce` (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for entry; `--ease-out` for state changes.
- **Hover states** lift slightly (`translateY(-2px)` + shadow upgrade), or darken the fill by ~8%.
- **Active / press** shrinks slightly (`scale(0.97)`) and resets the shadow.
- **Hero artwork** has a subtle entry spring (`{rotate: -4 → 0, scale: 0.96 → 1}`) — picked up from the website JSX prototype.
- No parallax. No scroll-jacking. No fullscreen video.

### Transparency & blur

- Used **sparingly** for navs that float over hero artwork — `backdrop-filter: blur(8px)` over `rgba(255,255,255,0.6)`.
- Hero hint blobs use blur for soft color washes.
- Otherwise prefer solid surfaces.

### Layout rules

- Max content width: 1200–1280px.
- Hero is two-column (copy left, artwork right) on desktop, stacked on mobile.
- Section header pattern: eyebrow → headline → optional script subhead → body.
- Cards rarely sit alone — they cluster (3 or 4 across) to evoke a builder's worksite layout.
- The footer is always navy, scallop-topped (`assets/footer-background-pattern.png`), and lights up the contact info with the brand color icons.

---

## Iconography

The brand has a **dual icon system**:

1. **Brand illustrations** (PNG, hand-drawn, full-color) — the dump truck, excavator, grader, hard hat, traffic cone, toolbox, steamroller, coffee cup, loader. These are the *hero* icons and live in `assets/illust-*.png`. Use these whenever a section needs a "construction" cue — never substitute them with a generic SVG outline.
2. **UI icons** (line, single-color) — used for nav, menu chips, and small inline cues. The JSX prototype uses **[lucide-react](https://lucide.dev)** — load from CDN via [unpkg.com/lucide-static](https://unpkg.com/lucide-static@latest/icons/) for HTML projects. Stroke width 2.4, rounded caps/joins, ~24px in nav and ~40–46px in feature chips.

### Brand illustrations available in `assets/`

| File | Subject | Use |
|---|---|---|
| `illust-truck.png` | Cartoon dump truck (teal cab + yellow tray) | Logo lockup #1, hero artwork |
| `illust-excavator.png` | Cartoon excavator (yellow body) | Menu corner art, section dividers |
| `illust-grader.png` | Road grader | Section accent |
| `illust-steamroller.png` | Steamroller | Section accent |
| `illust-helmet.png` | Yellow hard hat with star | Used standalone or above the wordmark |
| `illust-toolbox.png` | Orange toolbox with wrench | Logo lockup #3 (Play Zone), feature icon |
| `illust-coffee-cup.png` | Teal cappuccino cup w/ heart latte art | Coffee chip, café cues |
| `illust-loader.png` | Loader / front-end loader | Generic site accent |
| `logo-main.png` | Primary wordmark + hard hat lockup | Always the headline brand mark |
| `logo-orange-variant.png` | Wordmark with orange "Little" (variant) | Alt for some use cases |
| `logo-and-co.png` / `logo-play-zone.png` / `logo-coffee-bar.png` | Sub-brand lockups | Specific contexts (uniforms, signage, packaging) |

### CDN icon set (UI)

For inline UI icons not covered by the brand illustration set, use **Lucide** (matches the JSX prototype):

```html
<!-- Example: a coffee icon -->
<img src="https://unpkg.com/lucide-static@latest/icons/coffee.svg"
     width="24" height="24" style="color: var(--color-teal);" alt="" />
```

Lucide icons used in the prototype: `Coffee, HardHat, Truck, Wrench, Cone, Users, Utensils, Star, Hammer, Baby, Menu`.

**Substitution flag:** Lucide is a defensible default — its rounded, friendly line style sits well alongside the cartoon illustrations. If a more "hand-drawn" UI icon set is preferred, consider [Hugeicons](https://hugeicons.com) or [Iconoir](https://iconoir.com) (hand-drawn variants) — flag this to the user before committing.

### Unicode / symbol use

- ⭐ stars appear inline (next to "Family Café · Construction Play · Real Coffee") but are *visually* rendered as illustrated stars, not Unicode glyphs.
- The acute é in *Café* must always render (font supports it; if not, use the HTML entity `&eacute;`).

### What NOT to use

- ❌ Generic emoji (🍕 🧑‍🔧 🚛) — break the hand-drawn illustration system.
- ❌ Material Icons / Font Awesome — too geometric for this brand.
- ❌ Custom SVGs that try to imitate the cartoon illustrations — always use the PNGs.

---

## How to use this system

1. **Read this file first.** It encodes the entire brand voice and visual rules.
2. **Always start a new page with `<link rel="stylesheet" href="colors_and_type.css">`** — tokens are required for consistency.
3. **Copy assets, don't link cross-project.** Bring needed files from `assets/` into your prototype.
4. **Match the existing UI kit** before inventing new patterns. See `ui_kits/website/index.html` for the canonical layout.
5. **Cream background, navy outlines, pill buttons, hand-drawn illustrations.** If you can hit all four, you're in the brand.

---

## Open questions / asks for the user

- **Custom wordmark webfont?** Right now we use Fredoka One + Lilita One as the Google Fonts approximations. If you have the original Procreate/Illustrator wordmark exported as SVG or a TTF, drop it in `fonts/` and update the `--font-display` variable.ay` variable.
- **Photography library?** We use one interior reference shot embedded in the mockup. A folder of approved hero photos (interior, kids playing, coffee details, the team) would make every layout sing.
- **Sub-brand logos** (`& Co.`, `Play Zone`, `Coffee Bar`) — currently treated as variants. Should they each get their own color identity / type lockup, or stay tied to the master?
- **Tradie of the Month** template — promised by the brief but no visual reference yet. Want me to design one?
