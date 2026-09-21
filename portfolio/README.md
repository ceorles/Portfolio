# ceorles — Portfolio

A single-page personal portfolio built with React + Vite. No backend, no router:
every section lives on one page and the navbar scrolls to it.

## Running it

```bash
npm install
npm run dev      # development server
npm run build    # production build into dist/
npm run lint     # eslint
```

## Where things are

```
src/
├── assets/images/        me.png, Koi.png, mp3.png, Pokemon.png, Library.png, Enrollment.png
├── components/           one folder per section, each with its own CSS module
│   ├── icons/            inline brand SVGs (Facebook, GitHub, Discord)
│   └── ui/               shared pieces: Section, EmptyState, TagList
├── data/                 all editable content lives here
├── hooks/                useActiveSection, useScrollLock
├── pages/Home.jsx        composes the whole page
├── styles/               tokens.css (colours, spacing) + global.css
└── utils/                scroll, mailto and link helpers
```

## Editing content

Almost nothing needs a code change — the data files cover it:

| What | File |
| --- | --- |
| Name, role, intro paragraphs, email | `src/data/profile.js` |
| Navbar items and section ids | `src/data/navLinks.js` |
| Projects, their images and **links** | `src/data/projects.js` |
| Facebook / GitHub / Discord **URLs** | `src/data/socialLinks.js` |
| Languages and percentages | `src/data/skills.js` |
| Services cards | `src/data/services.js` |
| Schools, years, addresses, map link | `src/data/education.js` |
| Work experience (currently empty) | `src/data/experience.js` |
| Certifications (currently empty) | `src/data/certifications.js` |

Experience and Certifications render an "nothing listed yet" placeholder while
their arrays are empty, and switch to real cards as soon as you add entries.

Colours and spacing are CSS custom properties in `src/styles/tokens.css` —
changing the pink there changes it everywhere.

## Placeholder images

`mp3.png`, `Pokemon.png` and `Library.png` in `src/assets/images/` are generated
placeholders. Replace those three files with real screenshots, keeping the same
filenames, and nothing else has to change.
