# YG Digital Store | Demo

A lightweight, cinematic storefront concept created by **Zena Digital** for **YG Digital Store**.

## Stack

- Semantic HTML
- Vanilla CSS + JavaScript
- CSS-first motion and interaction
- Cloudflare Workers Static Assets via `wrangler.jsonc`
- UI direction informed by 21st.dev animation and product-card patterns

## Motion and performance

The storefront uses CSS keyframes, transforms, opacity, `IntersectionObserver`, and small pointer interactions instead of a large animation runtime. It includes animated gradients, ambient grid motion, floating hero elements, spotlight cards, hover lift, magnetic buttons, scroll reveals, pointer tilt, and reduced-motion support.

There are no image assets, video assets, WebGL scenes, Three.js bundles, or animation libraries in the storefront, keeping the static site comfortably below the 25 MiB deployment ceiling.

## Run locally

```bash
npx wrangler dev
```

## Deploy

```bash
npx wrangler deploy
```

Cloudflare Workers Static Assets serves the files from `./public`.

## Contact

Demo creator: Zena Digital  
Portfolio: https://zena.zenu.workers.dev/
