# Onivue Portfolio

> A portfolio built around one idea: the onivue mark is a voxel staircase, so the hero renders it as one — in real 3D, in amber phosphor on graphite.

## 🚀 [Live Demo](https://www.onivue.ch/)

## ✨ Features

- **3D Voxel Signature** – The logo extruded into WebGL cubes that assemble on load and follow the cursor
- **Amber Phosphor Palette** – Warm CRT-derived accent on a cool graphite base, in both themes
- **Deliberate Type Pairing** – Archivo on its expanded width axis for display, Instrument Sans for text, and the original Pixelate face kept for micro-labels
- **Full Type Safety** – TypeScript 7, strict, checked in CI-ready scripts
- **Modern Stack** – Next.js 16 App Router, React 19, Tailwind CSS v4
- **Accessible by Default** – Visible focus rings, honoured `prefers-reduced-motion`, keyboard-navigable
- **Dark & Light** – Follows the system preference, with a manual toggle
- **Responsive** – Verified down to 360px

## 🛠️ Tech Stack

### Core Framework

- **[Next.js 16](https://nextjs.org)** – React framework with App Router
- **[React 19](https://react.dev)** – Latest React with enhanced features
- **[TypeScript](https://www.typescriptlang.org)** – Type-safe JavaScript for better DX

### Styling

- **[Tailwind CSS v4](https://tailwindcss.com/)** – Utility-first CSS framework
- **Custom Design System** – Semantic tokens that flip per theme, defined once in `styles/globals.css`

### Development Tools

- **[oxlint](https://oxc.rs)** – Blazing-fast Rust-based linter
- **[oxfmt](https://oxc.rs)** – Rust-based formatter with import sorting
- **[Lucide React](https://lucide.dev)** – Icon set (social glyphs are hand-drawn pixel art in `components/icons.tsx`)

### 3D & Motion

- **[three.js](https://threejs.org)** + **[@react-three/fiber](https://r3f.docs.pmnd.rs)** – The hero's voxel sculpture
- **[@react-three/drei](https://drei.docs.pmnd.rs)** – `RoundedBox` for the soft-edged voxels
- **[motion](https://motion.dev)** – Scroll reveals and page-load orchestration

### Utilities

- **[next-themes](https://github.com/pacocoursey/next-themes)** – Perfect dark mode in Next.js
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** – Utility for constructing className strings

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Installation

1. Clone the repository:

```bash
git clone https://github.com/onivue/onivue-portfolio.git
cd onivue-portfolio
```

2. Install dependencies:

```bash
bun install
```

3. Run the development server:

```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Scripts

| Command                | Does                                                |
| ---------------------- | --------------------------------------------------- |
| `bun dev`              | Start the dev server                                |
| `bun run build`        | Production build (type-checks as part of the build) |
| `bun run lint`         | Lint with oxlint                                    |
| `bun run lint:fix`     | Lint and apply fixes                                |
| `bun run format`       | Format with oxfmt                                   |
| `bun run format:check` | Verify formatting without writing                   |
| `bun run typecheck`    | `tsc --noEmit`                                      |

## 🎨 Design Philosophy

The onivue mark was always a voxel staircase — nine squares climbing to the
upper right in a four-step grey ramp. The design takes that literally.

- **The mark, extruded** – The hero renders those exact nine cells as 3D cubes.
  Depth, colour and glow are driven by each cell's tier in the original SVG, so
  the sculpture _is_ the logo rather than a decoration beside it.
- **Amber phosphor on graphite** – The accent comes from CRT phosphor, not from
  the usual acid-green-on-black. Warm accent, cool base, in both themes.
- **Pixel type, used with restraint** – Pixelate is the brand's face but reads
  poorly at length. It's kept for eyebrows and micro-labels only; Archivo and
  Instrument Sans carry everything else.
- **Structure that means something** – The stack is grouped by discipline
  because the grouping is information. Nothing is numbered, because none of
  the content is a sequence.
- **One bold thing** – The sculpture is the signature. Everything around it
  stays quiet.

## 🎨 Design Resources

### Fonts

- **[Archivo](https://fonts.google.com/specimen/Archivo)** – Display face, set on its expanded width axis to echo the square voxels
- **[Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans)** – Body text
- **[Pixelate](https://www.dafont.com/pixelate-2.font)** – Retained from the original design for eyebrows and micro-labels

### Icons

- **[Pixel Articons](https://pixelarticons.com/)** – The pixel social glyphs
- **[Lucide React](https://lucide.dev)** – Interface icons

## 📝 License

This project is open source and available for educational purposes.

## 👤 Author

### Albin Hoti

- Website: [onivue.ch](https://www.onivue.ch)
- GitHub: [@onivue](https://github.com/onivue)
- LinkedIn: [Albin Hoti](https://www.linkedin.com/in/albin-hoti-a1991b237)

---

© 2025 ONIVUE • Designed and developed with ❤️
