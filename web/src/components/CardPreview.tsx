import { CardTheme } from '../data/cardThemes'

interface CardPreviewProps {
  theme: CardTheme
  cardType: 'virtual' | 'physical'
}

export default function CardPreview({ theme, cardType }: CardPreviewProps) {
  const getCardClass = () => {
    switch (theme.id) {
      case 'solana':
        return 'card-solana'
      case 'emerald':
        return 'card-emerald'
      default:
        return 'card-standard'
    }
  }

  return (
    <div className="flex justify-center mb-6">
      <div
        className={`w-80 h-48 rounded-3xl ${getCardClass()} shadow-2xl p-6 flex flex-col justify-between transform transition-all duration-300 hover:scale-105`}
      >
        {/* Card Header */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-gray-300 font-medium">Card Type</p>
            <p className="text-white font-semibold text-sm mt-1">
              {cardType === 'virtual' ? 'Virtual Card' : 'Physical Card'}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-300">MyBank</p>
          </div>
        </div>

        {/* Card Body - Centered branding */}
        <div className="flex items-center justify-center">
          <p className="text-2xl font-bold text-white opacity-80">●●●● ●●●● ●●●● ●●●●</p>
        </div>

        {/* Card Footer */}
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs text-gray-400 mb-1">Card Holder</p>
            <p className="text-white font-medium text-sm">Your Name</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 mb-1">Valid Thru</p>
            <p className="text-white font-medium text-sm">12/26</p>
          </div>
        </div>
      </div>
    </div>
  )
}
