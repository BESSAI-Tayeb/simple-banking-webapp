# MyBank - Digital Banking & Crypto App UI

A modern React + Tailwind CSS web application for digital banking and cryptocurrency management, inspired by leading fintech applications.

## Features

- **Multi-Page App**: Complete banking ecosystem with Home, Cards, Send, Assets, and Settings
- **Card Management**: Choose between Standard, Solana, and Emerald Palm card designs
- **Virtual/Physical Toggle**: Switch between virtual and physical card types
- **Digital Wallet**: View crypto assets and portfolio
- **Money Transfer**: Send funds and crypto to contacts
- **Transaction History**: Track all transactions and activities
- **Responsive Design**: Mobile-first layout with smooth animations
- **Modern UI**: Gradient cards, smooth transitions, and hover effects

## Setup

### Install Dependencies

```bash
cd web
npm install
```

### Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── SegmentedControl.tsx
│   ├── CardPreview.tsx
│   ├── ThemeSelector.tsx
│   └── BottomNav.tsx
├── pages/
│   └── CardsPage.tsx
├── data/
│   └── cardThemes.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Technologies

- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **Vite**: Fast build tool

## License

MIT
