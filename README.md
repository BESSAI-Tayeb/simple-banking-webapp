# MyBank - Digital Banking & Crypto App

A modern, responsive web application for digital banking and cryptocurrency management built with React, TypeScript, and Tailwind CSS.

## 🎯 Overview

MyBank is an educational project that recreates the UI/UX of modern fintech and crypto applications. It features a complete banking ecosystem with multiple pages, real-time interactions, and a polished design.

## ✨ Features

### 📱 Pages
- **Home Dashboard**: Quick access to balance, quick actions, and recent transactions
- **Cards Management**: Select and manage physical/virtual cards with multiple design themes
- **Send Money**: Transfer crypto or fiat currency with contact management and fees
- **Assets Portfolio**: View crypto holdings, portfolio performance, and asset allocation
- **Settings**: Account, security, and app preferences with toggle controls

### 🎨 UI Components
- Reusable card components with gradient designs
- Segmented controls for mode switching
- Transaction list with icons and status indicators
- Bottom navigation for seamless page transitions
- Header with notifications and settings
- Balance card with hide/show toggle
- Quick action buttons with smooth animations

### 💡 Design Highlights
- Mobile-first responsive layout
- Dark mode theme with gradient accents
- Smooth animations and hover effects
- Tailwind CSS utility-first styling
- TypeScript for type safety
- Multi-page routing with React Router

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd web

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## 📁 Project Structure

```
credit-card/
├── web/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── CardsPage.tsx
│   │   │   ├── SendPage.tsx
│   │   │   ├── AssetsPage.tsx
│   │   │   └── SettingsPage.tsx
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── BalanceCard.tsx
│   │   │   ├── QuickActions.tsx
│   │   │   ├── TransactionList.tsx
│   │   │   ├── SegmentedControl.tsx
│   │   │   ├── CardPreview.tsx
│   │   │   ├── ThemeSelector.tsx
│   │   │   └── BottomNav.tsx
│   │   ├── data/
│   │   │   └── cardThemes.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── tsconfig.json
│   └── index.html
├── .gitignore
└── README.md
```

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom gradients
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Type Safety**: TypeScript

## 📊 Mock Data

The app includes realistic mock data for:
- Account balance and transactions
- Crypto holdings and portfolio performance
- Contact lists for transfers
- Settings and preferences
- Card themes and designs

## 🎓 Educational Purpose

This project is created for learning purposes to understand:
- React component composition
- TypeScript in React applications
- Tailwind CSS styling patterns
- Multi-page SPA routing
- Mobile-first responsive design
- Modern UI/UX patterns in fintech

## 🔄 Navigation

- **Bottom Navigation Bar**: Switch between Home, Cards, Send, and Assets pages
- **Header**: Access notifications and settings
- **Quick Actions**: Jump to Send or Cards from home
- **Back Button**: Navigate back from detail pages

## 🎨 Card Themes

Three card design themes available:
- **Standard**: Classic professional design
- **Solana**: Crypto-themed with purple/green gradient
- **Emerald Palm**: Nature-inspired with tropical vibes

## 📱 Responsive Design

The app is optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## 📝 License

MIT - Feel free to use this for educational purposes.

## 👨‍💻 Author

Created as an educational fintech UI project.

---

**Note**: This is a frontend UI project with mock data. In a production environment, you would integrate with real banking APIs and blockchain networks.
