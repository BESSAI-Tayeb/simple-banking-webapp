import { useState } from 'react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

interface Contact {
  id: string
  name: string
  avatar: string
  address?: string
}

export default function SendPage() {
  const [tab, setTab] = useState<'crypto' | 'fiat'>('crypto')
  const [selectedContact, setSelectedContact] = useState<string | null>(null)

  const mockContacts: Contact[] = [
    { id: '1', name: 'Alex', avatar: '👨', address: '0x742d...8e5a' },
    { id: '2', name: 'Sarah', avatar: '👩', address: '0x8a9c...3f2b' },
    { id: '3', name: 'Mike', avatar: '👨', address: 'mike@email.com' },
    { id: '4', name: 'Emma', avatar: '👩', address: '0x5f12...7d9e' },
  ]

  return (
    <div className="flex flex-col h-screen bg-primary pb-20">
      <Header showBack />

      <div className="flex-1 overflow-y-auto">
        {/* Tab Toggle */}
        <div className="px-4 py-6">
          <div className="flex gap-2 bg-secondary p-1 rounded-full w-fit">
            <button
              onClick={() => setTab('crypto')}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                tab === 'crypto'
                  ? 'bg-primary text-white'
                  : 'text-gray-400'
              }`}
            >
              Crypto
            </button>
            <button
              onClick={() => setTab('fiat')}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                tab === 'fiat'
                  ? 'bg-primary text-white'
                  : 'text-gray-400'
              }`}
            >
              Fiat
            </button>
          </div>
        </div>

        {/* Send Form */}
        <div className="px-4 py-4">
          {/* Amount Input */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">Amount</label>
            <div className="relative">
              <input
                type="number"
                placeholder="0.00"
                className="w-full bg-secondary rounded-lg px-4 py-3 text-white text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                {tab === 'crypto' ? 'BTC' : 'USD'}
              </div>
            </div>
          </div>

          {/* Recipient */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-4">Send to</label>
            <div className="grid grid-cols-4 gap-3">
              {mockContacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => setSelectedContact(contact.id)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all ${
                    selectedContact === contact.id
                      ? 'bg-cyan-500 bg-opacity-20 ring-2 ring-cyan-400'
                      : 'bg-secondary hover:bg-opacity-80'
                  }`}
                >
                  <span className="text-2xl">{contact.avatar}</span>
                  <span className="text-xs text-gray-400">{contact.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Address Input */}
          {!selectedContact && (
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2">
                {tab === 'crypto' ? 'Wallet Address' : 'Email or Phone'}
              </label>
              <input
                type="text"
                placeholder={tab === 'crypto' ? '0x...' : 'user@email.com or +1234567890'}
                className="w-full bg-secondary rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          )}

          {/* Fee & Network */}
          <div className="bg-secondary rounded-lg p-4 mb-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Network Fee</span>
              <span className="text-white">{tab === 'crypto' ? '0.002 BTC' : '$ 2.50'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Total</span>
              <span className="text-white font-semibold">{tab === 'crypto' ? '0.502 BTC' : '$ 102.50'}</span>
            </div>
          </div>

          {/* Send Button */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold py-4 px-6 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95">
            Send {tab === 'crypto' ? 'Crypto' : 'Now'}
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
