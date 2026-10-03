# Gopinath Maharaja — Senior Software Engineer Portfolio

[![Live Site](https://img.shields.io/badge/Live-Portfolio-6366F1?style=for-the-badge&logo=googlechrome&logoColor=white)](https://gopinathmaharaja.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gopinath-maharaja-235133142/)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gopinathmaharaja)

A modern, high-performance, accessible developer portfolio showcasing **8+ years of engineering experience**, **10+ enterprise & open-source projects**, and **18+ mastered technologies** across FinTech, enterprise banking CRM, and cloud platforms.

**Live Website:** [gopinathmaharaja.github.io](https://gopinathmaharaja.github.io)

---

## 📋 Overview

- **Role:** Senior Software Engineer & Architect
- **Experience:** 8+ Years
- **Location:** Chennai, India
- **Core Focus:** Distributed Microservices, Event-Driven Architecture (Kafka & Redis), High-Concurrency Banking Systems, Full-Stack Applications
- **Education:** Sona College of Technology (Computer Science)

---

## 🎯 Key Highlights & Architecture

### ⚡ Zero External Animation Dependencies
Engineered with **pure CSS3 and vanilla ES6+ JavaScript**. Heavy third-party animation libraries (Animate.css, ScrollReveal) have been eliminated in favor of:
- Hardware-accelerated GPU transforms (`opacity`, `transform`)
- Native `IntersectionObserver` for 60fps viewport triggers
- Custom mathematical easing (`easeOutCubic`) for number counters

### 🎨 Modern Technical Visual Design
- **Subtle Particle Canvas Background**: Interactive ambient network nodes that automatically pause when tabs are inactive to preserve CPU & battery.
- **Scroll Progress Indicator**: Dynamic 3px gradient bar tracking reading depth.
- **Magnetic Buttons**: Cursor-tracking micro-interactions for call-to-actions.
- **Vertical Experience Timeline**: Progressively draws with pulsing indicator nodes as milestones enter view.
- **Developer Pipeline Flow**: Interactive CI/CD engineering stages (`Code` → `Git` → `CI/CD` → `Cloud` → `Production`).
- **Dark & Light Mode Engine**: Seamless theme switching with persistent `localStorage` preference and icon rotation.
- **Konami Code Easter Egg**: Press `↑ ↑ ↓ ↓ ← → ← →` anywhere on the page to open an interactive developer terminal.

### ♿ Accessibility (A11y) & Mobile Optimization
- Complete `@media (prefers-reduced-motion: reduce)` support: disables canvas loops, eliminates translation distances, and renders content immediately for motion-sensitive users.
- Responsive design tailored across desktop, tablet, and mobile with dedicated touch-friendly drawers and full keyboard accessibility.

---

## 🏢 Work Experience & Tech Stacks

| Organization | Role | Timeline | Core Technologies |
|---|---|---|---|
| **Emirates NBD** | Senior Software Engineer | Sep 2026 – Present | `Node.js`, `React`, `MongoDB`, `TypeScript`, `Kafka`, `Redis` |
| **D4 Insight** | Senior Software Engineer | Jan 2025 – Sep 2026 | `Node.js`, `React`, `MongoDB`, `TypeScript`, `Kafka`, `Redis` |
| **Credopay** | Senior Associate | Nov 2022 – Jan 2025 | `Node.js`, `NestJS`, `MongoDB`, `Kafka`, `Redis`, `Docker` |
| **Kenla Systems PVT Ltd** | Lead Developer | Sep 2018 – Oct 2022 | `Node.js`, `Express`, `PostgreSQL`, `MySQL`, `React`, `React Native`, `AWS` |

---

## 🚀 Featured Projects

1. **[AI-Lens: Antigravity Usage Intelligence](https://github.com/gopinathmaharaja/AGY-Lens)** *(Open Source)*
   - Developer telemetry and usage intelligence analytics engine designed for AI-assisted coding sessions. Visualizes model token metrics, agentic trajectories, and tool calls.
   - **Tech:** `TypeScript`, `Next.js`, `Node.js`, `Telemetry`

2. **Enterprise Banking CRM Platform** *(Emirates NBD)*
   - Tier-1 enterprise CRM platform handling millions of customer interactions with distributed event streaming with Kafka, real-time caching via Redis, and high-concurrency client workflows.
   - **Tech:** `Node.js`, `React`, `TypeScript`, `Kafka`, `Redis`, `MongoDB`

3. **Event-Driven Payment Settlement Engine** *(Credopay)*
   - High-throughput payment processing architecture managing automated merchant payouts, multi-party settlement reconciliation, and transaction auditing with sub-second latency.
   - **Tech:** `NestJS`, `Node.js`, `Kafka`, `Redis`, `Docker`, `MongoDB`

4. **[API Analytics & Monitoring Engine](https://github.com/gopinathmaharaja/api-analytics)** *(Open Source)*
   - Lightweight, real-time API analytics server and performance dashboard for microservices tracking request volumes, latency distributions, and status codes.
   - **Tech:** `Node.js`, `TypeScript`, `Express`, `PostgreSQL`

5. **[High-Throughput URL Shortener & Caching](https://github.com/gopinathmaharaja/shorturl)** *(Open Source)*
   - Distributed URL shortening microservice with in-memory Redis caching for sub-millisecond redirect lookups, token bucket rate limiting, and click analytics.
   - **Tech:** `Node.js`, `Express`, `Redis`, `MongoDB`, `Docker`

---

## 🏆 Recognitions & Achievements

- **Star Award**: Recognized for outstanding engineering contribution and consistent delivery of mission-critical software solutions in enterprise banking.
- **GEM Award**: Awarded for mentoring junior engineers, driving code reviews, and elevating engineering standards across teams.
- **System Architecture Lead**: Spearheaded event-driven architecture modernization using Kafka and Redis, reducing transaction latency by 40%.
- **Engineering Team Leadership**: Led and mentored high-performing teams of 10+ engineers, establishing Agile sprint cadences and automated CI/CD.

---

## 🛠️ Technology Stack

```
Languages:        TypeScript, JavaScript (ES6+), Go, HTML5, CSS3 / SCSS
Backend & APIs:   Node.js, NestJS, Express, REST APIs, Microservices Architecture
Messaging & Caching: Apache Kafka, Redis
Databases:        MongoDB, PostgreSQL, MySQL
Frontend:         React, Next.js, React Native, Modern Responsive Web
Cloud & DevOps:   AWS, Docker, Git, CI/CD Pipelines
```

---

## 📁 Repository Structure

```
gopinathmaharaja.github.io/
├── index.html                 # Semantic HTML5 single-page application
├── README.md                  # Comprehensive project documentation
├── LICENSE                    # MIT License
│
└── assets/
    ├── css/
    │   └── styles.css        # Clean, consolidated styling & keyframe animations
    ├── js/
    │   └── main.js           # Pure vanilla JS: observers, particle canvas, counters, easter egg
    ├── img/                  # Optimized visual assets
    │   ├── favicon.svg       # Favicon
    │   ├── user.png          # Hero avatar image
    │   ├── about.jpg         # Profile picture
    │   └── Gopinath Maharaja.pdf # Resume document
    └── scss/
        └── styles.scss       # SCSS source
```

---

## 💻 Local Development

### Prerequisites
- A modern web browser
- Git

### Running Locally
```bash
# 1. Clone the repository
git clone https://github.com/gopinathmaharaja/gopinathmaharaja.github.io.git
cd gopinathmaharaja.github.io

# 2. Serve with any static web server
# Python 3
python -m http.server 8000

# or Node.js
npx serve .
```

Open `http://localhost:8000` in your browser.

---

## 📬 Connect With Me

- **Email:** [gopinathmaharaja@gmail.com](mailto:gopinathmaharaja@gmail.com)
- **LinkedIn:** [linkedin.com/in/gopinath-maharaja-235133142](https://www.linkedin.com/in/gopinath-maharaja-235133142/)
- **GitHub:** [@gopinathmaharaja](https://github.com/gopinathmaharaja)
- **Location:** Chennai, India

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).