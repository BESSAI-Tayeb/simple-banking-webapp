interface Transaction {
  id: string
  type: 'sent' | 'received' | 'purchase'
  title: string
  description: string
  amount: string
  amountUSD: string
  icon: string
  timestamp: string
}

interface TransactionListProps {
  transactions: Transaction[]
}

export default function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="space-y-2">
      {transactions.map((tx) => (
        <div
          key={tx.id}
          className="bg-secondary hover:bg-opacity-80 rounded-lg p-4 flex items-center justify-between transition-all cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-lg">
              {tx.icon}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{tx.title}</p>
              <p className="text-gray-400 text-xs">{tx.description}</p>
              <p className="text-gray-500 text-xs mt-1">{tx.timestamp}</p>
            </div>
          </div>

          <div className="text-right">
            <p className={`font-semibold text-sm ${
              tx.type === 'received'
                ? 'text-green-400'
                : 'text-white'
            }`}>
              {tx.amount}
            </p>
            <p className="text-gray-400 text-xs">{tx.amountUSD}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
