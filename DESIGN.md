# PromptCraft Visual Direction

## Direction

PromptCraft is a warm editorial studio wall: the calm, curated atmosphere of a small creative café studio combined with the precision of a prompt lab. The interface should feel collected, tactile, and evidence-led rather than like a generic SaaS dashboard.

## Experience

- The first viewport proves the mechanism with the supplied AI image, not a decorative illustration.
- Case studies behave like a selected-work wall: real output first, comparison and reflection on demand.
- Navigation stays quiet and obvious; the work carries the visual weight.
- Keep Thai source copy intact. English labels are short metadata only.

## Tokens

- Paper: `#F7F0E7`
- Surface: `#FFFAF3`
- Espresso: `#2B1B14`
- Caramel: `#D69A5D`
- Terracotta: `#9A4F2D`
- Muted ink: `#6E5A4B`
- Display: `Noto Serif Thai`, then `Georgia`, serif fallback
- Body: `IBM Plex Sans Thai`, then system sans fallback
- Code: `JetBrains Mono`, monospace fallback

## Composition

- Editorial split hero with a large evidence image and restrained studio frame.
- Asymmetric gallery grid: the lead case study spans two columns; remaining modules form the supporting wall.
- Thin rules, squared frames, soft offset depth, and selective terracotta accents.
- Motion is limited to image scale, lift, and the existing reduced-motion fallback.

## Accessibility and performance

- Preserve semantic landmarks, keyboard focus, Radix dialog/tabs behavior, and touch-sized controls.
- Keep all supplied images local; hero image is eager, module previews are lazy.
- Do not use a fake external link. GitHub renders only when `VITE_GITHUB_URL` is configured.
