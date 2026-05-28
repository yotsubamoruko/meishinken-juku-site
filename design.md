---
version: alpha
name: RIVA CAFE Editorial
description: Casual stylish Italian cafe landing page with airy editorial motion
colors:
  primary: "#2E241E"
  secondary: "#6D5F54"
  tertiary: "#C86B4A"
  accent: "#94A58A"
  warm: "#E9DCC8"
  surface: "#FFF9F1"
  mint: "#DDE8E0"
  on-primary: "#FFFFFF"
typography:
  h1:
    fontFamily: "Noto Serif JP"
    fontSize: "clamp(3rem, 5.8vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.03
  h2:
    fontFamily: "Noto Serif JP"
    fontSize: "clamp(1.8rem, 3vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 1.15
  h3:
    fontFamily: "Noto Serif JP"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Noto Sans JP"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.85
  label:
    fontFamily: "Noto Sans JP"
    fontSize: 0.82rem
    fontWeight: 800
    letterSpacing: "0.12em"
rounded:
  sm: 14px
  md: 20px
  lg: 28px
  xl: 40px
spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "0 22px"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.75)"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "0 22px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "22px"
---

## Overview

Light, casual, Italian-inspired cafe landing page.
The page should feel airy, editorial, and approachable: cream paper, olive accents, terracotta warmth, and lively motion.

## Research Notes

- Reference page structure: hero, message, menu, space/scene, access, FAQ, reservation CTA.
- Reference copy pattern: short headline, supportive paragraph, then scannable sections with 3-part menu framing.
- Reference atmosphere: bright natural light, friendly premium tone, health-conscious but not clinical, urban cafe and restaurant hybrid.

## Colors

- **Primary (#2E241E):** espresso ink and key typography.
- **Secondary (#6D5F54):** captions, meta text, and thin rules.
- **Tertiary (#C86B4A):** tomato-terracotta highlight and CTA fill.
- **Accent (#94A58A):** basil/olive accent for chips and status tags.
- **Warm (#E9DCC8):** linen backdrop and section wash.
- **Mint (#DDE8E0):** airy alternate surface for cards and tags.
- **Surface (#FFF9F1):** paper-like panels and clean sections.

## Typography

- Headlines use `Noto Serif JP` for warmth and a slightly editorial cafe feel.
- Body copy uses `Noto Sans JP` for clarity on mobile.
- Labels should be compact, uppercase-like in spirit, and spaced out.

## Layout

- Hero: 2-column spread with punchy headline, short intro, CTA row, and large illustration.
- Then a ticker / ribbon of keywords to create movement and brand energy.
- Use 3-card sections for menu categories and 2-card sections for space and scene.
- End with access, hours, and FAQ in a clean, reservation-oriented footer area.

## Motion

- Use staggered fade-up reveals across sections.
- Use floating art elements in the hero.
- Add marquee-style motion for keywords or featured items.
- Keep transitions soft and never abrupt.

## Shapes & Depth

- Rounded corners should be present but not playful.
- Use soft shadows, borders, and subtle gradients instead of heavy glassmorphism.
- Use layered cards, not dense grids.

## Do's and Don'ts

- Do keep the page bright and breathable.
- Do use a few warm accents and olive greens, not many colors.
- Do make the food feel fresh, handcrafted, and approachable.
- Do keep the content scannable on mobile.
- Don't make it feel like a generic corporate brochure.
- Don't use harsh black backgrounds.
- Don't overload the page with text blocks.
