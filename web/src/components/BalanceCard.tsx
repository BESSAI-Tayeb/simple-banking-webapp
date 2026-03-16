import { useState } from 'react'

export default function BalanceCard() {
  const [showBalance, setShowBalance] = useState(true)
  const balance = 52500.25

  return (
    <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-black opacity-10 rounded-full -ml-16 -mb-16" />
      
      <div className="relative z-10">
        <p className="text-blue-100 text-sm mb-2">Available Balance</p>
        <div className="flex items-baseline gap-3 mb-8">
          <h2 className={`text-5xl font-bold text-white transition-all duration-300 ${showBalance ? 'opacity-100' : 'opacity-0'}`}>
            {showBalance ? `$${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '••••'}
          </h2>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="text-blue-100 hover:text-white transition-colors text-2xl"
            title={showBalance ? 'Hide' : 'Show'}
          >
            {showBalance ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>

        <div className="flex gap-4 items-center">
          <div>
            <p className="text-xs text-blue-100">Card</p>
            <p className="text-white font-semibold">MyBank Premium</p>
          </div>
          <div className="ml-auto">
            <p className="text-xs text-blue-100 text-right">Valid Thru</p>
            <p className="text-white font-semibold">12/26</p>
          </div>
        </div>
      </div>
    </div>
  )
}
