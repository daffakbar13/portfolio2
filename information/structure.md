This is the folder structure of the whole application

.
├── README.md
├── app
│ ├── (root)
│ │ ├── career
│ │ │ ├── [careerId]
│ │ │ │ └── page.tsx
│ │ │ └── page.tsx
│ │ ├── contact
│ │ │ └── page.tsx
│ │ ├── experience
│ │ │ ├── [expId]
│ │ │ │ └── page.tsx
│ │ │ └── page.tsx
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ ├── resume
│ │ │ └── page.tsx
│ │ └── skills
│ │ └── page.tsx
│ ├── api
│ │ └── contact
│ │ └── route.ts
│ ├── daffa-logo.png
│ ├── globals.css
│ ├── layout.tsx
│ ├── manifest.ts
│ └── sitemap.ts
├── assets
│ └── fonts
│ ├── CalSans-SemiBold.ttf
│ ├── CalSans-SemiBold.woff
│ ├── CalSans-SemiBold.woff2
│ ├── Inter-Bold.ttf
│ └── Inter-Regular.ttf
├── components
│ ├── career
│ │ └── timeline.tsx
│ ├── common
│ │ ├── analytics.tsx
│ │ ├── animated-link.tsx
│ │ ├── animated-page-transition.tsx
│ │ ├── animated-section.tsx
│ │ ├── animated-text.tsx
│ │ ├── client-page-wrapper.tsx
│ │ ├── icons.tsx
│ │ ├── main-nav.tsx
│ │ ├── mobile-nav.tsx
│ │ ├── mode-toggle.tsx
│ │ ├── page-container.tsx
│ │ ├── page-header.tsx
│ │ ├── scroll-animation.tsx
│ │ ├── site-footer.tsx
│ │ └── theme-provider.tsx
│ ├── experience
│ │ ├── exp-description.tsx
│ │ ├── project-card.tsx
│ │ └── project-tile.tsx
│ ├── forms
│ │ └── contact-form.tsx
│ ├── modals
│ │ └── custom-modal.tsx
│ ├── skills
│ │ ├── rating.tsx
│ │ └── skills-card.tsx
│ └── ui
│ ├── accordion.tsx
│ ├── button.tsx
│ ├── card.tsx
│ ├── chip-container.tsx
│ ├── chip.tsx
│ ├── custom-tooltip.tsx
│ ├── dialog.tsx
│ ├── dropdown-menu.tsx
│ ├── form.tsx
│ ├── input.tsx
│ ├── label.tsx
│ ├── modal.tsx
│ ├── tabs.tsx
│ ├── textarea.tsx
│ ├── toast.tsx
│ ├── toaster.tsx
│ ├── tooltip.tsx
│ └── use-toast.ts
├── components.json
├── config
│ ├── career.ts
│ ├── constants.ts
│ ├── experience.ts
│ ├── pages.ts
│ ├── routes.ts
│ ├── site.ts
│ ├── skills.ts
│ └── socials.ts
├── eslint.config.mjs
├── hooks
│ ├── use-lock-body.ts
│ └── use-modal-store.ts
├── information
│ ├── overview.md
│ └── structure.md
├── lib
│ └── utils.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── providers
│ ├── animation-provider.tsx
│ └── modal-provider.tsx
├── public
│ ├── career (company logos for the timeline)
│ ├── experience (one folder of logo and screenshots per entry)
│ │ ├── binus
│ │ ├── bri
│ │ ├── fitri-firman
│ │ ├── illa-ahmad
│ │ ├── kemenkumham
│ │ ├── mytha-soni
│ │ ├── nabati
│ │ ├── portfolio
│ │ ├── poslive
│ │ ├── sociolla
│ │ ├── spartan
│ │ └── wedding
│ ├── daffa2.png
│ ├── logo.png
│ └── robots.txt
├── tailwind.config.js
└── tsconfig.json
