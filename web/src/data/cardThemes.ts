export interface CardTheme {
  id: string
  label: string
  description: string
  bgGradient: string
  accentColor: string
}

export const CARD_THEMES: Record<string, CardTheme> = {
  standard: {
    id: 'standard',
    label: 'Standard card',
    description: 'Classic and elegant',
    bgGradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    accentColor: '#ffffff',
  },
  solana: {
    id: 'solana',
    label: 'Solana card',
    description: 'Powered by Solana',
    bgGradient: 'linear-gradient(135deg, #14142f 0%, #4a2c5e 50%, #1a5a3a 100%)',
    accentColor: '#9945ff',
  },
  emerald: {
    id: 'emerald',
    label: 'Nature · Emerald Palm',
    description: 'Eco-friendly design',
    bgGradient: 'linear-gradient(135deg, #1a3a2e 0%, #2d6a4f 50%, #1b4332 100%)',
    accentColor: '#4ade80',
  },
}
