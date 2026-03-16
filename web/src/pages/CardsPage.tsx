import { useState } from 'react'
import SegmentedControl from '../components/SegmentedControl'
import CardPreview from '../components/CardPreview'
import ThemeSelector from '../components/ThemeSelector'
import BottomNav from '../components/BottomNav'
import { CARD_THEMES } from '../data/cardThemes'

type CardType = 'virtual' | 'physical'
type ThemeName = 'standard' | 'solana' | 'emerald'

export default function CardsPage() {
  const [cardType, setCardType] = useState<CardType>('physical')
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>('standard')

  const currentTheme = CARD_THEMES[selectedTheme]

  return (
    <div className="flex flex-col h-screen bg-primary">
      {/* Header */}
      <div className="pt-6 px-4 pb-4">
        <h1 className="text-2xl font-bold text-white mb-6">Cards</h1>

        {/* Segmented Control */}
        <SegmentedControl
          options={['Virtual card', 'Physical card']}
          selected={cardType === 'virtual' ? 0 : 1}
          onChange={(index) => setCardType(index === 0 ? 'virtual' : 'physical')}
        />
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-4 pb-20">
        {/* Card Preview */}
        <div className="mb-8">
          <CardPreview theme={currentTheme} cardType={cardType} />
        </div>

        {/* Card Info */}
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold mb-2">{currentTheme.label}</h2>
          <p className="text-xs text-gray-400 mb-6">
            Works with Apple & Google Pay<br />
            Accepted by 130M+ merchants worldwide
          </p>

          {/* Theme Selectors */}
          <ThemeSelector
            themes={Object.keys(CARD_THEMES) as ThemeName[]}
            selected={selectedTheme}
            onChange={setSelectedTheme}
          />
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95">
            Apply for card · 10 USD
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
