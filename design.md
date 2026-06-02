---
version: gamma
name: Blueprint Signal
description: White, technical, blueprint-inspired corporate homepage with electric blue lines and crisp layout blocks
colors:
  primary: "#0B2A5B"
  secondary: "#1D4ED8"
  tertiary: "#F97316"
  accent: "#EAF2FF"
  sky: "#F7FAFF"
  surface: "#FFFFFF"
  soft: "#F2F6FC"
  line: "#D9E4F1"
  text: "#102033"
  muted: "#5B6C84"
typography:
  h1:
    fontFamily: "Inter"
    fontSize: "5.1rem"
    fontWeight: 800
    lineHeight: 1.0
  h2:
    fontFamily: "Inter"
    fontSize: "2.45rem"
    fontWeight: 800
    lineHeight: 1.08
  h3:
    fontFamily: "Inter"
    fontSize: "1.14rem"
    fontWeight: 700
    lineHeight: 1.2
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
  sm: 10px
  md: 14px
  lg: 20px
  xl: 28px
spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.surface}"
    rounded: "999px"
    padding: "0 22px"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "999px"
    padding: "0 22px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "22px"
  section-band:
    backgroundColor: "{colors.sky}"
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
    textColor: "{colors.primary}"
    rounded: "{rounded.xl}"
    padding: "0"
  label-muted:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.muted}"
    rounded: "{rounded.xl}"
    padding: "8px 10px"
---

## Overview

Blueprint-inspired corporate site for an electrical construction company.
The look should feel like a technical document translated into a web page: clean white space, thin lines, electric blue highlights, and disciplined information blocks.

## Visual Direction

- White foundation with blueprint-style borders and panels.
- Strong grid, clear hierarchy, and airy spacing.
- Hero should feel like a technical dashboard, not a cinematic poster.
- Use orange only as a limited action accent.

## Motion

- Slow blueprint line drift.
- Section reveal on scroll.
- Metric counters count up once.
- Hover states are crisp and low-lift.

## Do

- Make the page feel engineered and precise.
- Prioritize reading flow and contact clarity.
- Use distinct section layouts instead of repeating blocks.

## Don't

- Don’t keep the dark gold industrial look.
- Don’t overuse black backgrounds.
- Don’t make it feel like a construction brochure from 2018.
