❄️ MasterCool — Professional AC Service Landing Page

🌟 Features

🌓 Dark & Light Mode Toggle: Smooth dynamic theme switching for modern user experience.

🧮 Interactive Cost Calculator: Real-time price estimation slider based on service packages and AC unit count.

📲 Direct WhatsApp Order Integration: Auto-formatted messaging for instant service booking via WhatsApp API.

📱 Mobile-First & Responsive UI: Fully responsive layout optimized for mobile screens, tablets, and desktop displays.

⚡ Lightning Fast Performance: Powered by Vite bundler and Tailwind CSS (v4) utility framework.

🐳 Production-Ready Docker Setup: Multi-stage build containerization with Nginx web server integration.

🏗️ Project Architecture

Built using standard frontend best practices with clear separation of concerns:

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


🛠️ Tech Stack

Frontend: React 18+, Vite

Styling: Tailwind CSS (v4), Lucide React (Icons)

Containerization: Docker (Multi-stage build), Nginx (Alpine)

Deployment: Vercel / Netlify / Docker Container

🚀 Quick Start

Prerequisites

Node.js (v18 or higher)

npm or yarn

Installation & Local Setup

Clone the repository:

git clone git@github.com:aldinmbrk/react-landing-mastercool.git
cd react-landing-mastercool


Install dependencies:

npm install


Start development server:

npm run dev


Open your browser and navigate to http://localhost:5173.

🐳 Docker Deployment

Run the application inside a lightweight container powered by Nginx:

# Build and run with Docker Compose
docker compose up -d --build


Access the production build at http://localhost:8080.

🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the issues page.

📝 License

Distributed under the MIT License. See LICENSE for more information.