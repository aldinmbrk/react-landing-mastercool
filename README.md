# ❄️ MasterCool — Professional AC Service Landing Page

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat-square&logo=docker&logoColor=white)

A modern, highly responsive, and conversion-optimized landing page built for local AC service businesses. Features an interactive cost calculator, dark/light mode switching, and direct-to-WhatsApp booking integration.

---

## 🌟 Features

- **🌙 Dark & Light Mode Toggle**: Smooth dynamic theme switching for a modern user experience.
- **🧮 Interactive Cost Calculator**: Real-time price estimation slider based on service packages and AC unit count.
- **📱 Direct WhatsApp Order Integration**: Auto-formatted messaging for instant service booking via WhatsApp API.
- **⚡ Mobile-First & Responsive UI**: Fully responsive layout optimized for mobile screens, tablets, and desktop displays.
- **🚀 Lightning Fast Performance**: Powered by Vite bundler and Tailwind CSS (v4) utility framework.
- **🐳 Production-Ready Docker Setup**: Multi-stage build containerization with Nginx web server integration.

---

## 📁 Project Architecture

Built using standard frontend best practices with clear separation of concerns:

```text
src/
├── constants/
│   └── servicesData.js       # Static data (Services, Pricing, FAQs, Testimonials)
├── utils/
│   └── formatCurrency.js     # Currency formatting & WhatsApp URL helpers
├── hooks/
│   └── useCalculator.js      # Custom React Hook for real-time price calculation
├── components/
│   ├── ServiceCard.jsx       # Pricing card component
│   ├── CostCalculator.jsx    # Dynamic cost estimation component
│   ├── Guarantees.jsx        # Trust badge section component
│   ├── Testimonials.jsx      # Customer reviews component
│   └── OrderModal.jsx        # Modal form component for WhatsApp orders
└── App.jsx                   # Main layout container
```

## 🛠️ Tech Stack

- **Frontend:** React 18+, Vite

- **Styling:** Tailwind CSS (v4), Lucide React (Icons)

- **Containerization:** Docker (Multi-stage build), Nginx (Alpine)

- **Deployment:** Vercel / Netlify / Docker Container

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)

- npm or yarn

## Installation & Local Setup

### 1. Clone the repository:

```bash
git clone git@github.com:aldinmbrk/react-landing-mastercool.git
cd react-landing-mastercool
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start development server:

```bash
npm run dev
```

### 4. Open your browser and navigate to http://localhost:5173.

## 🐳 Docker Deployment

Run the application inside a lightweight container powered by Nginx:

```bash
# Build and run with Docker Compose
docker compose up -d --build
```

Access the production build at http://localhost:8080.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the issues page.

## 📝 License

Distributed under the MIT License. See LICENSE for more information.
