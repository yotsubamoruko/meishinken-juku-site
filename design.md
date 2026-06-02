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
    fontSize: "5.4rem"
    fontWeight: 800
    lineHeight: 1.03
  h2:
    fontFamily: "M PLUS Rounded 1c"
    fontSize: "2.4rem"
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
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text}"
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

Clean, simple, trustworthy homepage for a Nagoya-based junior entrance exam cram school.
The UI should feel like a major education brand: white foundation, blue trust color, red action buttons, and a calm-but-energetic information rhythm.

## Colors

The palette should feel familiar to parents of school-age children: bright, readable, and serious without feeling cold.

- **Primary (#184E9E):** trust color for headline accents, links, and key brand marks.
- **Secondary (#3E6FB6):** supporting blue for surfaces, secondary emphasis, and badges.
- **Tertiary (#E94E3D):** the main action color for inquiry, trial, and briefing CTAs.
- **Accent (#F6C445):** highlight for results, event tags, and attention markers.
- **Sky (#EAF3FF):** soft education-brand tint for section backgrounds and panels.
- **Surface (#FFFFFF):** primary card and panel base.
- **Soft (#F6F8FC):** subtle banding, separators, and quiet sections.
- **Line (#D9E4F2):** card borders and dividers.

## Typography

Use friendly but clear typography.

- **Headings:** `M PLUS Rounded 1c` for approachable authority.
- **Body:** `Noto Sans JP` for readability across dense information blocks.
- **Labels:** compact, slightly letter-spaced, and high contrast so they scan fast on mobile.
- Large headlines can be strong, but body copy should never feel crowded.

## Layout & Spacing

The layout should prioritize fast comprehension.

- Hero: bold promise on the left, one strong still image on the right, then immediate CTA buttons.
- Follow with trust numbers, course cards, learning flow, results, school access, FAQ, and final CTA.
- Use cards and stacked sections with clear separation rather than dense editorial composition.
- Keep outer spacing generous and internal spacing tight enough to feel organized.

## Elevation & Depth

Depth should be achieved with soft shadows and clean borders, not heavy contrast.

- Base surfaces stay bright white or very pale blue.
- Cards sit above the page with soft shadows and a thin line border.
- Highlight areas can use a slightly deeper blue surface but should remain readable.
- Avoid glossy glass effects or dark dramatic backgrounds.

## Shapes

The shape language should be soft and reassuring.

- Cards, chips, and buttons should use rounded corners.
- Buttons should be pill-shaped to feel approachable and easy to tap.
- Images can be framed with medium-radius rounded corners.
- Avoid sharp corners unless they are used for technical labels or table structure.

## Components

### Action Elements

- Primary button: red, obvious, and used for the main conversion action.
- Secondary button: blue or outline style for supporting navigation.
- Buttons should feel consistent across desktop and mobile and remain large enough to tap comfortably.

### Cards & Panels

- Use cards for metrics, grades, results, and FAQ so information is readable in chunks.
- Keep cards simple with a top accent line or badge, but avoid decorative clutter.

### Images

- Use one hero image and one or two supporting images.
- Photos should be bright, clean, and clearly education-oriented.
- The images should support the content, not compete with it.

### Typography Application

- Headings should be bold and decisive.
- Body text should stay compact and easy to skim.
- CTA labels should be short and action-oriented.

## Motion

- Use gentle fade-up reveals for sections.
- Add staggered entrance to cards and metrics.
- Use count-up animations for trust numbers.
- Use subtle moving banners or floating badges for energy.
- Motion should help scanning, not distract from it.

## Do's and Don'ts

- Do make the page feel simple, trustworthy, and fast to scan.
- Do show results, classes, and school access early.
- Do keep CTA buttons obvious.
- Do use one or two strong still images.
- Do keep the overall tone similar to a major education brand.
- Don't imitate a luxury brand or a magazine layout.
- Don't use dense copy walls.
- Don't make animations flashy or distracting.
