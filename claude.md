# CLAUDE.md — Personal Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- **Check `assets/`** for logos, color guides, headshots, or style references. Use real assets over placeholders whenever available. If a color palette is defined there, use those exact values.

## Site Purpose & Audience
This is a **professional personal website** for a law student targeting biglaw hiring committees, federal government legal employers, and academic contacts. Every design and copy decision must signal:
- **Analytical depth** — this person thinks rigorously and writes precisely.
- **Intellectual range** — economics, quantitative methods, and legal reasoning intersect here.
- **Quiet competence** — the work speaks; the design doesn't shout.

Primary audience: hiring partners, associates, clerkship committees, and DOJ/agency recruiters reviewing candidates. Secondary: professors, peers, and professional contacts. The site should feel like a peer-reviewed journal's author page crossed with a top-tier consultancy's analyst profile — not a tech startup landing page.

## Site Architecture
Unless directed otherwise, build a **single-page site** with these sections in order:
1. **Header/Hero** — Name, one-line professional identity (e.g., "Law · Economics · Policy"), and minimal navigation anchors.
2. **About** — 2–3 tight paragraphs: academic background (W&M Law, BYU economics/math), research experience (peer-reviewed publications, econometrics), and professional direction (antitrust, regulatory policy, securities).
3. **Research & Writing** — A structured list of publications, writing samples, or selected coursework with brief descriptors. Link-ready but functional with placeholders.
4. **Experience** — Concise entries for key positions (legal assistant work, research assistantships). Emphasize outcomes and skills, not job duties.
5. **Contact** — Email and LinkedIn. No contact forms. No social media icons beyond LinkedIn.

Do not add sections beyond these unless explicitly asked. No blog, no testimonials, no "interests" sidebar.

## Voice & Copy Guidelines
- **Tone:** Measured, precise, confident without self-promotion. Write the way a federal appellate brief reads — every word earns its place.
- **Perspective:** Third person is acceptable for bios; first person is acceptable for an about section. Do not mix within a section.
- **Verbs:** Prefer active, specific verbs ("analyzed," "developed," "published") over vague ones ("helped with," "was involved in," "passionate about").
- **Avoid:** Buzzwords ("passionate," "driven," "innovative"), exclamation points, casual tone, and anything that reads like a LinkedIn post.
- **Length:** Every text block should be as short as it can be without losing substance. If a paragraph can be a sentence, make it a sentence.

## Visual Design Direction

### Aesthetic
The design must look **authoritative, editorial, and institutionally credible** — like a modern legal white paper, a university press author page, or a long-form policy journal. Clean, quiet, and structurally precise.

### Color Palette
Use a high-contrast, institutional palette. Defaults (override with `assets/` if present):
- **Primary text:** `#1a1a2e` (near-black navy)
- **Secondary text:** `#4a4a68` (muted slate)
- **Background:** `#fafaf8` (warm off-white)
- **Accent:** `#2d3a2e` (dark olive) — used sparingly for links, rules, and highlights
- **Borders/dividers:** `#d4d4d4` (neutral gray, 1px solid)

Do not use default Tailwind blue/indigo as a primary color. Do not invent bright or saturated accent colors.

### Typography
- **Headings:** Playfair Display (serif) — authoritative, editorial. Tight letter-spacing on large sizes.
- **Body:** Source Sans 3 or similar clean sans-serif — highly legible at long-form reading sizes.
- **Line-height:** `1.75` to `1.85` for body text. `1.2` for headings.
- **Scale:** Use a clear, restrained type scale. H1 should feel commanding but not loud.
- Load via Google Fonts CDN.

### Layout & Surfaces
- **No floating cards, heavy drop shadows, or radial gradients.**
- Create hierarchy through generous whitespace, sharp 1px borders, and monochromatic dividers.
- Content max-width: `48rem`–`56rem`, centered. Comfortable reading measure.
- Generous vertical padding between sections (`py-16` to `py-24`).

### Interaction & Motion
- Every clickable element needs clear `hover`, `focus-visible`, and `active` states.
- Use solid color inversions or sharp underlines for hover — not bouncy animations.
- Motion: fast, subtle opacity fades only. **No `transition-all`.** No scroll-triggered animations. No parallax.
- Links: underline on hover, color shift to accent. No icons on text links.

## Content Placeholders
When real content isn't provided, use **realistic, context-appropriate placeholders** — not lorem ipsum. Examples:
- `[Memorandum: Premises Liability Under Ohio's Recreational User Statute]`
- `[Publication: Title of Econometrics Paper, Journal Name, 2024]`
- `[Professional Headshot — 400×400]`
- `[eli.lastname@wm.edu]`

Use `https://placehold.co/` for image placeholders with appropriate dimensions.

## Reference Image Workflow
- If a reference image is provided: **match layout, spacing, typography, and color exactly.** Swap in placeholder content. Do not improve or add to the design.
- If no reference image: design from scratch following all rules above.
- When matching a reference, be specific about discrepancies: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px."
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing.

## Technical Defaults
- Single `index.html`, all styles inline, unless directed otherwise.
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Mobile-first responsive design.
- **Semantic HTML:** Use `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`. Structure the document so it reads logically without CSS.

## Accessibility (WCAG AAA Target)
- All text must meet **WCAG AAA contrast ratios** against its background.
- `aria-labels` on all icons and interactive elements without visible text.
- Full keyboard navigation with visible focus rings (`focus-visible:ring-2`, `focus-visible:outline-offset-2`).

## Local Server & Screenshots
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start dev server: `node serve.mjs` (project root, `http://localhost:3000`). Run in background. Don't start a second instance if already running.
- Puppeteer: installed at `C:/Users/nateh/AppData/Local/Tmp/puppeteer-test/`. Chrome cache at `C:/Users/nateh/.cache/puppeteer/`.
- Screenshot command: `node screenshot.mjs http://localhost:3000` → saves to `./temporary screenshots/screenshot-N.png`.
- Optional label: `node screenshot.mjs http://localhost:3000 label` → `screenshot-N-label.png`.
- After screenshotting, read the PNG with the Read tool and compare against reference or design intent.
- **Do at least 2 screenshot-compare-fix rounds.** Stop only when no visible issues remain or user says so.

## Hard Rules
- Do not add sections, features, or content not specified above or by the user.
- Do not "improve" a reference design — match it exactly.
- Do not stop after one screenshot pass.
- Do not use `transition-all`.
- Do not use gradients, SVG noise, or floating UI cards.
- Do not use default Tailwind blue/indigo as a primary color.
- Do not add decorative elements (geometric patterns, background textures, illustrations) unless explicitly asked.