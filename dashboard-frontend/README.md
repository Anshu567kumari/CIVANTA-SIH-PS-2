# 🏛️ CIVANTA

### **Intelligent Technology. Real-World Impact.**

> An intelligent digital platform designed to make real-world problem reporting, monitoring, decision-making and service delivery faster, smarter and more accessible.

**Built for Smart India Hackathon 2026 — Problem Statement SIH260002**

---

## Overview

CIVANTA is a production-grade, modern, responsive frontend platform that bridges the gap between citizens and authorities. It combines **AI-powered intelligence**, **multilingual support**, **location intelligence**, and **real-time analytics** to create a trusted public-impact ecosystem.

### Key Features

- **AI-Powered Intelligence** — Smart classification and insights
- **Multilingual Support** — English, Hindi, Bengali, Marathi, Tamil, Telugu
- **Location Intelligence** — Interactive map-based reporting
- **Real-Time Analytics** — Data-driven insights with Recharts
- **Live Notifications** — Real-time status updates
- **Role-Based Access** — Citizen and Admin dashboards
- **Fully Responsive** — Desktop, tablet, and mobile optimized
- **Modern UI/UX** — Premium SaaS-style interface

---

## Tech Stack

| Category        | Technology             | Version |
| --------------- | ---------------------- | ------- |
| **Framework**   | React.js               | 19.2    |
| **Build Tool**  | Vite                   | 8.2     |
| **Styling**     | Tailwind CSS           | 4.3     |
| **Routing**     | React Router DOM       | 8.3     |
| **Animations**  | Motion (Framer Motion) | 13.2    |
| **Charts**      | Recharts               | 3.10    |
| **HTTP Client** | Axios                  | 1.9     |
| **Forms**       | React Hook Form        | 7.56    |
| **Icons**       | Lucide React           | 0.500   |
| **Linting**     | ESLint                 | 9.25    |

---

## Project Structure

```
CIVANTA/
├── 📄 index.html                    # Entry HTML
├── 📄 package.json                  # Dependencies
├── 📄 vite.config.js                # Vite + Tailwind config
├── 📄 eslint.config.js              # ESLint flat config
├── 📄 .env                          # Environment variables
├── 📄 README.md                     # This file
│
├── 📂 public/
│   └── 📄 logo.svg                  # Brand favicon
│
└── 📂 src/
    ├── 📄 main.jsx                  # React entry (with providers)
    ├── 📄 App.jsx                   # Root routes
    ├── 📄 index.css                 # Tailwind + global styles
    │
    ├── 📂 components/               # Reusable UI
    │   ├── 📂 ui/                   # Button, Card, Badge, Input, Logo
    │   ├── 📂 layout/               # Topbar, Footer
    │   ├── 📂 navbar/               # Navbar, LanguageSelector
    │   ├── 📂 sidebar/              # UserSidebar, AdminSidebar
    │   └── 📂 ai/                   # AIAssistant (floating chat)
    │
    ├── 📂 pages/                    # Route-level screens
    │   ├── 📂 public/               # Landing, About
    │   ├── 📂 auth/                 # Login, Register
    │   ├── 📂 user/                 # Dashboard, Submit, Submissions, etc.
    │   └── 📂 admin/                # Admin Dashboard, Analytics, Users
    │
    ├── 📂 layouts/                  # PublicLayout, UserLayout, AdminLayout
    ├── 📂 routes/                   # ProtectedRoute (auth guards)
    ├── 📂 context/                  # Auth, Language, Toast contexts
    ├── 📂 services/                 # API layer (Axios)
    ├── 📂 data/                     # Mock data + i18n translations
    ├── 📂 hooks/                    # Custom React hooks
    ├── 📂 utils/                    # Helper functions
    └── 📂 assets/                   # Images, SVGs
```

---

## Installation

### Prerequisites

- **Node.js** ≥ 18.x ([Download](https://nodejs.org/))
- **npm** ≥ 9.x (comes with Node.js)

### Step-by-Step Setup

#### 1️⃣ Clone or navigate to the project

```bash
cd C:\Users\dell\Desktop\SIH\CIVANTA
```

#### 2️⃣ Install dependencies

```bash
npm install
```

This installs all required packages:

- React 19.2, Vite 8.2, Tailwind CSS 4.3
- React Router 8.3, Motion 13.2, Recharts 3.10
- Axios, React Hook Form, Lucide React, ESLint

#### 3️⃣ Verify installation

```bash
npm list --depth=0
```

You should see all packages listed (not `(empty)`).

#### 4️⃣ Create environment file

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:5000/api
```

> 💡 This is for future backend integration. The frontend works with mock data by default.

#### 5️⃣ Run the development server

```bash
npm run dev
```

You should see:

```
  VITE v8.2.x  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

#### 6️⃣ Open in browser

Visit **http://localhost:5173** 🎉

---

## Demo Accounts

Use these credentials to explore the platform (any password ≥ 4 characters):

| Role        | Email              | Access       |
| ----------- | ------------------ | ------------ |
| **Citizen** | `user@civanta.in`  | `/dashboard` |
| **Admin**   | `admin@civanta.in` | `/admin`     |

---

## Available Scripts

| Command            | Description                                      |
| ------------------ | ------------------------------------------------ |
| `npm run dev`      | Start development server (http://localhost:5173) |
| `npm run build`    | Build for production (creates `dist/` folder)    |
| `npm run preview`  | Preview production build locally                 |
| `npm run lint`     | Run ESLint to check for issues                   |
| `npm run lint:fix` | Auto-fix ESLint issues                           |

---

## Multilingual Support

CIVANTA supports **6 Indian languages**:

| Code | Language        |
| ---- | --------------- |
| `en` | English         |
| `hi` | हिन्दी (Hindi)  |
| `bn` | বাংলা (Bengali) |
| `mr` | मराठी (Marathi) |
| `ta` | தமிழ் (Tamil)   |
| `te` | తెలుగు (Telugu) |

Switch languages using the 🌐 icon in the navbar.

---

## Key Pages

### Public Pages

- **Landing** (`/`) — Hero, Challenge, Solution, Features, CTA
- **About** (`/about`) — Mission, Vision, Contact
- **Login** (`/login`) — Citizen/Admin authentication
- **Register** (`/register`) — New user signup

### Citizen Dashboard (`/dashboard`)

- Submit reports (4-step form)
- Track submissions with timeline
- View notifications
- Manage profile

### Admin Dashboard (`/admin`)

- Overview with 5 KPIs
- Manage all submissions
- Analytics with 4+ charts
- User management

---

## Backend Integration (Future)

The frontend is **API-ready**. To connect to a backend:

1. Update `.env`:

   ```env
   VITE_API_URL=https://your-api.com/api
   ```

2. Replace mock data calls in `src/services/`:

   ```js
   // Current (mock)
   export const submissionService = {
     list: async () => mockSubmissions,
   };

   // Future (API)
   export const submissionService = {
     list: async () => {
       const res = await api.get("/submissions");
       return res.data;
     },
   };
   ```

3. Services are already structured:
   - `authService.js` — Authentication
   - `submissionService.js` — Submissions CRUD
   - `userService.js` — User management
   - `analyticsService.js` — Analytics data
   - `notificationService.js` — Notifications

---

## Design System

### Brand Colors

```css
--color-brand-500: #6366f1 /* Primary */ --color-brand-600: #4f46e5 /* Hover */
  --color-brand-700: #4338ca /* Active */;
```

### Typography

- **Primary:** Inter
- **Display:** Plus Jakarta Sans

### Components

- Rounded cards with soft shadows
- Clean borders and consistent spacing
- Accessible focus states
- Professional icons (Lucide)

---

## Security Features

- Protected routes (auth required)
- Role-based access control
- Environment variables (no hardcoded secrets)
- Input validation (React Hook Form)
- Safe API handling (Axios interceptors)
- XSS prevention (React default)

---

## Analytics & Charts

Powered by **Recharts 3.10**:

- Submission trends (Line/Area charts)
- Resolution rate (Donut charts)
- Category distribution (Bar charts)
- Response time tracking
- Geographic insights (map placeholders)

---

## AI Assistant

**Civanta AI** — Floating chat widget that helps users:

- Submit reports
- Check submission status
- Find services
- Get guidance in multiple languages

Quick prompts:

- "How do I submit a report?"
- "Check my submission"
- "What services are available?"
- "Change language"

---

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Update `vite.config.js`:

   ```js
   export default defineConfig({
     base: "/your-repo-name/",
     // ...
   });
   ```

2. Build and push:
   ```bash
   npm run build
   # Push dist/ folder to gh-pages branch
   ```

---

## Troubleshooting

### Issue: `(empty)` after `npm list`

**Fix:** Your `package.json` is missing dependencies. Copy the full `package.json` from this README and run `npm install` again.

### Issue: Tailwind styles not applying

**Fix:** Ensure `vite.config.js` has `tailwindcss()` plugin and `src/index.css` starts with `@import "tailwindcss";`

### Issue: `Cannot find module 'framer-motion'`

**Fix:** The package was renamed to `motion`. Update imports:

```jsx
// ❌ Old
import { motion } from "framer-motion";

// ✅ New
import { motion } from "motion/react";
```

### Issue: Blank white page

**Fix:** Check browser console for errors. Usually a missing file or typo.

---

## Environment Variables

| Variable       | Description          | Default |
| -------------- | -------------------- | ------- |
| `VITE_API_URL` | Backend API base URL | `/api`  |

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Contributing

This project was built for **Smart India Hackathon 2026**.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style

- ESLint for linting
- Prettier for formatting (optional)
- Follow existing component patterns
- Keep components small and reusable

---

## License

This project is created for **Smart India Hackathon 2026** (SIH260002).

---

## Team

**Problem Statement:** SIH260002  
**Theme:** Smart Governance / Citizen-Centric Administration  
**Category:** Software/Website

---

## Acknowledgments

- **Smart India Hackathon** — For the opportunity
- **Ministry of Education, India** — For organizing SIH 2026
- **Open Source Community** — For the amazing libraries

---

## Contact

For questions or support:

- 📧 Email: faizakhtar774@gmail.com , harshkumar164826@gmail.com
- 🌐 Website: [__________]

---

## Show Your Support

If this project helps you, give it a ⭐ on GitHub!

---

**Built with ❤️ for a smarter, more accessible India.**

**CIVANTA — Intelligent Technology. Real-World Impact.**

## Made with Love❤️ by Faiz (Person 5 — Command Dashboard) And Harsh (Person 6 — Field App + GPS)
