# Atelier Kilim Gallery

A luxury Kilim archive website with a 300-frame scroll sequence and a handcrafted SVG preloader.

## Preview locally

Open a terminal in this folder and run:

```powershell
& 'C:\Users\CrazyHarsh\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' -m http.server 4174 --bind 127.0.0.1
```

Then visit `http://localhost:4174`.

## Deploy to Vercel

This is a static site—no build command or framework preset is required.

1. Push the contents of this folder to the root of a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Select the **Other** framework preset; leave the build command blank and set the output directory to `.`.
4. Deploy. Vercel automatically serves `index.html` and applies the cache headers in `vercel.json`.

## Project structure

```text
atelier-kilim-gallery/
├── index.html       # Website, styles, SVG preloader, and GSAP animations
├── frames/          # 300 JPG images used by the scroll animation
└── README.md
```

## Features

- Museum-style Kilim gallery with collection, provenance, motifs, and inquiry sections.
- A scroll-driven canvas sequence that maps the 300 frames to page scroll position.
- A 3.4-second woven-logo preloader built with inline SVG, CSS, and GSAP.
- Individual SVG groups animate in weaving order: outer threads, side motifs, diamonds, navy weave, rust and olive motifs, then the wordmark.
- A live `CRAFTING THE EXPERIENCE — 0–100%` progress label.
- Two-panel textile-curtain exit that reveals the sharpened homepage hero, navigation, heading, and CTAs.
- Reduced-motion support: the preloader exits quickly without the full animation.

## Customization

- Replace the JPG files in `frames/` using the same `ezgif-frame-001.jpg` naming scheme.
- Update `const frameCount = 300` in `index.html` if the number of frames changes.
- Edit the inline SVG inside `#preloader` to refine the loader mark while preserving its named animation groups.
- Change animation timing in the GSAP timeline near the end of `index.html`.

## Notes

The site loads GSAP, Tailwind CSS, Google Fonts, and a few gallery images from public CDNs. An internet connection is needed for those external resources; the scroll frames themselves are local.
