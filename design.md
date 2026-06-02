---
version: gamma
name: Linear Airframe
description: Minimal tech homepage for a drone school with white space, graphite typography, and precise blue accents
colors:
  primary: "#0F5EFF"
  secondary: "#5C7CFA"
  tertiary: "#15C3FF"
  accent: "#DDEBFF"
  sky: "#F4F8FF"
  surface: "#FFFFFF"
  soft: "#F7F9FC"
  line: "#D8E0ED"
  text: "#101828"
  muted: "#667085"
typography:
  h1:
    fontFamily: "Inter"
    fontSize: "5.2rem"
    fontWeight: 800
    lineHeight: 1.0
  h2:
    fontFamily: "Inter"
    fontSize: "2.6rem"
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
    lineHeight: 1.8
  label:
    fontFamily: "Noto Sans JP"
    fontSize: 0.82rem
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  sm: 12px
  md: 16px
  lg: 22px
  xl: 30px
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

PDC名古屋のホームページは、ドローン学校らしいテクニカルさと、法人にも個人にも通じる信頼感を両立させる。
白基調に濃いブルーを効かせ、軽いモーションで静かに引き込む。

## Visual Direction

- 画面全体は明るく、余白は広い
- CTA は明確で短い
- 写真やベクターは訓練、操縦、実務の3方向で使う
- 装飾は最小限、グリッドとカードで整理する

## Motion

- Hero の画像はごく弱いパララックス
- セクションはフェードアップ
- ティッカーとバッジはゆっくり流す
- ホバーは軽く持ち上げる程度

## Do

- 国家資格、実務活用、法人研修を早く見せる
- 名古屋らしい通いやすさを伝える
- 競合で強かった訴求を吸収する

## Don't

- 雑誌風、ラグジュアリー風には寄せない
- 重い黒背景や強い発光を使いすぎない
- 嘘っぽい実績数字を置かない
