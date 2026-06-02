---
version: gamma
name: Industrial Night Grid
description: Dark industrial corporate homepage with gold accents, dense information blocks, and a high-trust construction aesthetic
colors:
  primary: "#081123"
  secondary: "#101B36"
  tertiary: "#D8A53D"
  accent: "#F0C35A"
  sky: "#0F172A"
  surface: "#10192E"
  soft: "#131E36"
  line: "#31405D"
  text: "#F6F7FB"
  muted: "#B8C1D9"
typography:
  h1:
    fontFamily: "Inter"
    fontSize: "5.4rem"
    fontWeight: 800
    lineHeight: 1.0
  h2:
    fontFamily: "Inter"
    fontSize: "2.5rem"
    fontWeight: 800
    lineHeight: 1.08
  h3:
    fontFamily: "Inter"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Noto Sans JP"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.82
  label:
    fontFamily: "Noto Sans JP"
    fontSize: 0.82rem
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  sm: 12px
  md: 16px
  lg: 22px
  xl: 28px
spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "#111111"
    rounded: "999px"
    padding: "0 22px"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.06)"
    textColor: "{colors.text}"
    rounded: "999px"
    padding: "0 22px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "22px"
  section-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "20px"
  badge-accent:
    backgroundColor: "{colors.tertiary}"
    textColor: "#111111"
    rounded: "{rounded.xl}"
    padding: "8px 12px"
  divider-line:
    backgroundColor: "{colors.line}"
    textColor: "{colors.text}"
    rounded: "{rounded.xl}"
    padding: "0"
  label-muted:
    backgroundColor: "rgba(255,255,255,0.06)"
    textColor: "{colors.muted}"
    rounded: "{rounded.xl}"
    padding: "8px 10px"
---

## Overview

Heavy industrial homepage for an electrical construction company.
Use a dark navy base, gold accents, and high-density blocks to evoke trust, scale, and on-site control.

## Visual Direction

- Hero is cinematic and dense, with a major headline and metric boxes.
- Use strong vertical rhythm and clear separators.
- Keep photos sharp, nocturnal, and practical.
- Avoid soft lifestyle visuals; this is infrastructure work.

## Motion

- Subtle parallax on the hero collage.
- Section reveal on scroll.
- Numbers animate once when visible.
- Use slow map glow and card lift on hover.

## Do

- Show scale, control, and nationwide reach.
- Separate business pillars clearly.
- Make contact actions obvious.

## Don't

- Don’t make it feel like a generic corporate template.
- Don’t use bright pastel tones or playful illustration.
- Don’t hide the heavy industrial character.
