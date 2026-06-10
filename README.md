# Saaeb Saad — Portfolio Website

A modern, animated personal portfolio for a Game & Web Developer. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

**Live Site:** [saaeb.netlify.app](https://saaeb.netlify.app)

---

## Features

- **Preloader** with animated progress bar
- **Typewriter effect** cycling through roles (Game Developer, Web Developer, UI/UX Designer)
- **Animated stats counter** that triggers on scroll
- **Scroll-reveal animations** using IntersectionObserver
- **Responsive design** with a mobile hamburger menu
- **Active nav link** tracking based on scroll position
- **Contact form** powered by Formspree
- **Dynamic link system** — all URLs managed from a single `links.js` config file
- **Back-to-top** button in the footer

---

## Project Structure

```
portfolio/
├── index.html      # Main HTML structure
├── style.css       # All styles and responsive breakpoints
├── main.js         # Animations, interactions, and form handling
└── links.js        # Centralized URL configuration (social, projects, resume)
```

---

## Sections

| Section | Description |
|---|---|
| Hero | Name, typewriter subtitle, CTA buttons |
| Stats | Animated counters (projects, years, games, technologies) |
| About | Bio, avatar, and social icon links |
| Services | Game Dev, Web Dev, Discord Server Design |
| Education | Timeline of courses (Codingal, RTS) |
| Projects | 6 project cards with badges and links |
| Skills | Progress bar skills (Godot, HTML/CSS/JS, Python, Java) |
| Languages | Arabic (Native), English (Proficient) |
| Contact | Contact form + social links |

---

## Configuring Links

All URLs live in `links.js`. Edit this file to update social profiles, project links, resume, and the contact form endpoint — no need to touch `index.html` or `main.js`.

```js
window.PORTFOLIO_LINKS = {
  email:    "mailto:saaeb@gmail.com",
  github:   "https://github.com/yourhandle",
  resume:   "https://drive.google.com/uc?export=download&id=19klHIRoUgFCEsuiZfLcMuw4gD-qu0AbN",
  // ... projects, socialt
};
```

---

## Getting Started

No build step required. Just open `index.html` in a browser, or deploy the folder to any static host (Netlify, Vercel, GitHub Pages).

```bash
git clone https://github.com/saaeb1oq7/Saaeb.git
cd <repo-name>
# Open index.html in your browser
```

---

## Projects Featured

- **Saaeb Saad Portfolio Template** — [saaeb.netlify.app](https://saaeb.netlify.app)
- **Aljawahiri Real Estate** — [al-jawahiri.vercel.app](https://al-jawahiri.vercel.app)
- **Kirkuk Vocational School** — [kvc-web.vercel.app](https://kvc-web.vercel.app)
- **Plaza Hotel** — [plaza-hotel.netlify.app](https://plaza-hotel.netlify.app)
- **CipherPlease Game** — [itch.io](https://isaacsand.itch.io/ciphers-please)
- **Python Old Code** — [github.com/saaeb1oq7/Python-Old](https://github.com/saaeb1oq7/Python-Old)

---

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Inter, Space Grotesk)
- Formspree (contact form)
- Netlify / Vercel (hosting)

---

## Contact

- **Email:** saaebkirkuk@gmail.com
- **GitHub:** [@saaeb1oq7](https://github.com/saaeb1oq7)
- **Twitter/X:** [@Saaebkirkuk](https://x.com/Saaebkirkuk)
- **Itch.io:** [saaebyt4dead.itch.io](https://saaebyt4dead.itch.io)

---

© 2024 Saaeb Saad. All rights reserved.

