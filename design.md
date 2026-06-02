---
version: gamma
name: Junior Exam School Classic
description: Simple, trustworthy education landing page inspired by major Japanese cram school homepages
colors:
  primary: "#184E9E"
  secondary: "#3E6FB6"
  tertiary: "#E94E3D"
  accent: "#F6C445"
  sky: "#EAF3FF"
  surface: "#FFFFFF"
  soft: "#F6F8FC"
  line: "#D9E4F2"
  text: "#24303D"
  muted: "#5E6B78"
typography:
  h1:
    fontFamily: "M PLUS Rounded 1c"
    fontSize: "clamp(2.8rem, 6vw, 5.8rem)"
    fontWeight: 800
    lineHeight: 1.03
  h2:
    fontFamily: "M PLUS Rounded 1c"
    fontSize: "clamp(1.7rem, 3vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.12
  h3:
    fontFamily: "M PLUS Rounded 1c"
    fontSize: "1.1rem"
    fontWeight: 800
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
    letterSpacing: "0.08em"
rounded:
  sm: 14px
  md: 18px
  lg: 24px
  xl: 34px
spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "999px"
    padding: "0 22px"
  button-ghost:
    backgroundColor: "rgba(24,78,158,0.06)"
    textColor: "{colors.primary}"
    rounded: "999px"
    padding: "0 22px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "22px"
---

## Overview

Clean, simple, trustworthy homepage for a Nagoya-based junior entrance exam cram school.
The page should feel like a major education brand: bright white background, blue primary color, red accent CTA, calm but energetic rhythm, and clear information hierarchy.

## Research Notes

- Major school homepages in this category are information dense but visually simple.
- Hero usually leads with a strong promise, then immediate CTA buttons for inquiry, trial, and briefing.
- Test/event content is a core acquisition channel.
- Grade/course cards and school access sections are expected.
- Parents care most about results, support, safety, and convenience.

## Colors

- **Primary (#184E9E):** main blue, trust, headers, and links.
- **Secondary (#3E6FB6):** lighter blue for supporting surfaces and highlights.
- **Tertiary (#E94E3D):** red CTA, urgent notices, and key emphasis.
- **Accent (#F6C445):** test/event highlights and badges.
- **Sky (#EAF3FF):** soft background tint for section panels.
- **Surface (#FFFFFF):** card and panel base.
- **Soft (#F6F8FC):** muted background and band separators.
- **Line (#D9E4F2):** borders and dividers.

## Typography

- Use `M PLUS Rounded 1c` for headings to keep the page friendly and educational.
- Use `Noto Sans JP` for readable body copy and labels.
- Keep labels compact and high-contrast for mobile scanning.

## Layout

- Hero: bold left headline, right-side still image, CTA stack below.
- Immediately show trust numbers and key features.
- Use course cards by grade, followed by learning flow, results, school list, FAQ, and access.
- Keep blocks separate and scannable.

## Motion

- Gentle fade-up reveals.
- Staggered card entrance.
- Small count-up animations for metrics.
- Slow moving banners and soft floating badges.
- Keep motion lively but safe.

## Shapes & Depth

- Rounded cards and pills, but not overly soft.
- Blue-tinted surfaces, thin borders, and clean shadows.
- Avoid dark, heavy, or glossy styles.

## Do's and Don'ts

- Do make the page feel simple, trustworthy, and fast to scan.
- Do show results, classes, and school access early.
- Do keep CTA buttons obvious.
- Do use one or two strong still images.
- Don't imitate a luxury brand or a magazine layout.
- Don't use dense copy walls.
- Don't make animations flashy or distracting.
