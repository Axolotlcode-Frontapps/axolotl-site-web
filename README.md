# Astro landing pages | Template

<p align="center">
  <a
    href="https://pnpm.io/es/"
    target="_blank"
    rel="noopener noreferrer"
    style="display: inline-block;"
  >
    <img
      src="https://img.shields.io/badge/pnpm%20-%F69220.svg?&style=for-the-badge&logo=pnpm&logoColor=white&color=F69220"
      alt="Pnpm badge"
    />
  </a>
  <a
    href="https://www.typescriptlang.org/"
    target="_blank"
    rel="noopener noreferrer"
    style="display: inline-block;"
  >
    <img
      src="https://img.shields.io/badge/typescript%20-%BC52EE.svg?&style=for-the-badge&logo=typescript&logoColor=white&color=3178C6"
      alt="TypeScript badge"
    />
  </a>
  <a
    href="https://astro.build/"
    target="_blank"
    rel="noopener noreferrer"
    style="display: inline-block;"
  >
    <img
      src="https://img.shields.io/badge/astro%20-%BC52EE.svg?&style=for-the-badge&logo=astro&logoColor=white&color=BC52EE"
      alt="Astro badge"
    />
  </a>
  <a
    href="https://es.react.dev/"
    target="_blank"
    rel="noopener noreferrer"
    style="display: inline-block;"
  >
    <img
      src="https://img.shields.io/badge/react%20-%61DAFB.svg?&style=for-the-badge&logo=react&logoColor=000&color=61DAFB"
      alt="React badge"
    />
  </a>
  <a
    href="https://tailwindcss.com/"
    target="_blank"
    rel="noopener noreferrer"
    style="display: inline-block;"
  >
    <img
      src="https://img.shields.io/badge/tailwind%20-%06B6D4.svg?&style=for-the-badge&logo=tailwindcss&logoColor=fff&color=06B6D4"
      alt="Tailwind badge"
    />
  </a>
  <a
    href="https://eslint.org/"
    target="_blank"
    rel="noopener noreferrer"
    style="display: inline-block;"
  >
    <img
      src="https://img.shields.io/badge/eslint%20-%4B32C3.svg?&style=for-the-badge&logo=eslint&logoColor=white&color=4B32C3"
      alt="Eslint badge"
    />
  </a>
  <a
    href="https://prettier.io/"
    target="_blank"
    rel="noopener noreferrer"
    style="display: inline-block;"
  >
    <img
      src="https://img.shields.io/badge/prettier%20-%F7B93E.svg?&style=for-the-badge&logo=prettier&logoColor=000&color=F7B93E"
      alt="Prettier badge"
    />
  </a>
</p>

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🌍 Environment Variables

To use environment variables, copy the file `.env.example` and rename it to `.env.development`.

> ### Note:
>
> Never put variables in `.env.example`

## 🧞 Commands:

| Command              | Action                                                             |
| -------------------- | ------------------------------------------------------------------ |
| `pnpm i`             | Install all dependencies                                           |
| `pnpm dev`           | For development mode and start with the creation of a new universe |
| `pnpm build`         | To build the project                                               |
| `pnpm lint`          | To check the code style                                            |
| `pnpm lint:fix`      | To fix the code style                                              |
| `pnpm format`        | Format code                                                        |
| `pnpm i18n-generate` | Generate i18n page content in other languages                      |
| `pnpm preview`       | Preview build page content                                         |

## 🚀 Frontend Architecture

> - public/
> - src/
>   - assets/
>     - images/
>     - icons/
>     - videos/
>     - fonts/
>   - layouts/
>     - Layout.astro
>   - pages/
>     - en
>       - index.astro
>     - index.astro
>   - components/
>     - shared/
>     - [pages]/
>   - styles/
>     - global.css
>   - libs/
>     - schemas/
>       - index.ts
>         index.ts
>   - utils/
>     - index.ts
>   - types/
>     -gloabl.d.ts
