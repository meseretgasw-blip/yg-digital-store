# YG Digital Store — Demo

A lightweight storefront concept created by **Zena Digital** for **YG Digital Store**.

## What the demo reflects

The concept is tailored to the public Telegram channel's visible business description: gaming and digital gift cards (PlayStation, Xbox, Nintendo, Steam, Apple) plus subscription/productivity services such as Netflix, Spotify, ChatGPT, Claude, Xbox Game Pass, CapCut and Canva.

> This is a visual/demo storefront. Product availability, pricing, regions, payment methods and delivery rules should be confirmed with the business before production use.

## Stack

- Semantic HTML
- Lightweight vanilla CSS + JavaScript
- Cloudflare Workers Static Assets via `wrangler.jsonc`
- UI direction informed by 21st.dev component patterns, especially premium hero/product-card composition

## Run locally

```bash
npx wrangler dev
```

The site is intentionally static so it can be deployed cheaply and quickly to Cloudflare Workers with Static Assets.

## Deploy

```bash
npx wrangler deploy
```

## Contact

Demo creator: Zena Digital  
Portfolio: https://zena.zenu.workers.dev/
