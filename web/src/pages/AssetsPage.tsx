import { useState } from 'react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

interface Asset {
  id: string
  symbol: string
  name: string
  amount: number
  value: number
  change: number
  icon: string
}

export default function AssetsPage() {
  const [sortBy, setSortBy] = useState<'value' | 'name'>('value')

  const mockAssets: Asset[] = [
    { id: '1', symbol: 'BTC', name: 'Bitcoin', amount: 1.25, value: 52500, change: 5.2, icon: '₿' },
    { id: '2', symbol: 'ETH', name: 'Ethereum', amount: 15.8, value: 31600, change: -2.1, icon: 'Ξ' },
    { id: '3', symbol: 'SOL', name: 'Solana', amount: 250, value: 18750, change: 12.5, icon: '◎' },
    { id: '4', symbol: 'USDC', name: 'USD Coin', amount: 10000, value: 10000, change: 0, icon: 'U' },
    { id: '5', symbol: 'AAPL', name: 'Apple Inc.', amount: 5, value: 900, change: 3.1, icon: '🍎' },
  ]

  const totalValue = mockAssets.reduce((sum, asset) => sum + asset.value, 0)
  const totalChange = mockAssets.reduce((sum, asset) => sum + asset.change, 0) / mockAssets.length

  return (
    <div className="flex flex-col h-screen bg-primary pb-20">
      <Header />

      <div className="flex-1 overflow-y-auto">
        {/* Portfolio Summary */}
        <div className="px-4 py-6">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16" />
            
            <p className="text-gray-100 text-sm mb-2">Total Portfolio Value</p>
            <h1 className="text-4xl font-bold text-white mb-2">${totalValue.toLocaleString()}</h1>
            
            <div className={`flex items-center gap-2 ${totalChange >= 0 ? 'text-green-300' : 'text-red-300'}`}>
              <span className="text-2xl">{totalChange >= 0 ? '↑' : '↓'}</span>
              <span className="font-semibold">{Math.abs(totalChange).toFixed(2)}%</span>
              <span className="text-xs text-gray-100">today</span>
            </div>
          </div>
        </div>

        {/* Sort & Filter */}
        <div className="px-4 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Holdings</h2>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-secondary text-white text-xs px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option value="value">By Value</option>
            <option value="name">By Name</option>
          </select>
        </div>

        {/* Assets List */}
        <div className="px-4 space-y-3">
          {mockAssets.map((asset) => (
            <div
              key={asset.id}
              className="bg-secondary hover:bg-opacity-80 rounded-lg p-4 flex items-center justify-between transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-lg">
                  {asset.icon}
                </div>
                <div>
                  <p className="text-white font-semibold">{asset.symbol}</p>
                  <p className="text-xs text-gray-400">{asset.name}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-white font-semibold">${asset.value.toLocaleString()}</p>
                <div className={`text-xs font-medium ${asset.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {asset.change >= 0 ? '+' : ''}{asset.change.toFixed(2)}%
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Allocation Chart Placeholder */}
        <div className="px-4 py-6">
          <h3 className="text-lg font-semibold mb-4">Asset Allocation</h3>
          <div className="bg-secondary rounded-lg p-4 h-40 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <p className="text-3xl mb-2">📊</p>
              <p className="text-sm">Chart visualization coming soon</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
