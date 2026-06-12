---
version: alpha
name: Nordic Quiet Luxury
description: Elegant cafe website with deep navy, cream, soft gold, and editorial motion. Inspired by Nordic interiors and premium lifestyle magazines.
colors:
  primary: "#0E1B2E"
  secondary: "#16253D"
  tertiary: "#C8A96A"
  accent: "#E8D8B8"
  sky: "#7FA6D8"
  surface: "#111E33"
  soft: "#F6F1E7"
  line: "rgba(255,255,255,0.12)"
  text: "#F8F7F2"
  muted: "#C7CCDB"
typography:
  h1:
    fontFamily: "Cormorant Garamond"
    fontSize: "5.6rem"
    fontWeight: 700
    lineHeight: 0.95
  h2:
    fontFamily: "Cormorant Garamond"
    fontSize: "2.7rem"
    fontWeight: 700
    lineHeight: 1.02
  h3:
    fontFamily: "Inter"
    fontSize: "1.1rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Noto Sans JP"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.85
  label:
    fontFamily: "Inter"
    fontSize: 0.8rem
    fontWeight: 700
    letterSpacing: "0.18em"
rounded:
  sm: 14px
  md: 20px
  lg: 28px
  xl: 36px
spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 36px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "#151515"
    rounded: "999px"
    padding: "0 22px"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.08)"
    textColor: "{colors.text}"
    rounded: "999px"
    padding: "0 22px"
  card:
    backgroundColor: "rgba(255,255,255,0.06)"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "24px"
  section-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "22px"
  badge-accent:
    backgroundColor: "{colors.accent}"
    textColor: "#172033"
    rounded: "{rounded.xl}"
    padding: "8px 12px"
  divider-line:
    backgroundColor: "{colors.line}"
    textColor: "{colors.text}"
    rounded: "{rounded.xl}"
    padding: "0"
  label-muted:
    backgroundColor: "rgba(255,255,255,0.07)"
    textColor: "{colors.muted}"
    rounded: "{rounded.xl}"
    padding: "8px 10px"
---

## Overview

Premium cafe site for Cafe Laima in Anjo City.
Present the place as a calm Nordic-lifestyle destination with organic food, herbal tea, family-friendly seating, and a polished editorial mood.

## Visual Direction

- Deep navy and cream balance, with soft gold accents.
- Editorial hero, spacious grids, elegant type, and subtle motion.
- Use real-feeling food and interior imagery with warm highlights.
- Avoid generic cafe pastel styling; keep it refined and distinctive.

## Motion

- Fade-up sections on scroll.
- Gentle parallax or layer drift in the hero.
- Soft hover lift on cards and buttons.
- Staggered reveal for menu and access details.

## Do

- Show the Nordic / Latvian story clearly.
- Make the open hours, address, and contact easy to find.
- Keep the site feeling premium and calm.

## Don't

- Don't use overly playful colors.
- Don't overload with decoration.
- Don't hide practical info below the fold.
