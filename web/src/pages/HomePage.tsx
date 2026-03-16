import Header from '../components/Header'
import BalanceCard from '../components/BalanceCard'
import QuickActions from '../components/QuickActions'
import TransactionList from '../components/TransactionList'
import BottomNav from '../components/BottomNav'

export default function HomePage() {
  const mockTransactions: typeof import('../components/TransactionList').default extends (p: {transactions: infer T}) => any ? T : never[] = [
    {
      id: '1',
      type: 'sent' as const,
      title: 'Sent to Alex',
      description: 'Bitcoin Transfer',
      amount: '-0.5 BTC',
      amountUSD: '-$15,250',
      icon: '📤',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      type: 'received' as const,
      title: 'Received from Sarah',
      description: 'Ethereum Transfer',
      amount: '+2.5 ETH',
      amountUSD: '+$4,750',
      icon: '📥',
      timestamp: '5 hours ago',
    },
    {
      id: '3',
      type: 'purchase' as const,
      title: 'Coffee Shop',
      description: 'Card Purchase',
      amount: '-$12.50',
      amountUSD: '-$12.50',
      icon: '☕',
      timestamp: 'Yesterday',
    },
    {
      id: '4',
      type: 'received' as const,
      title: 'Salary Deposit',
      description: 'Monthly Income',
      amount: '+$3,500',
      amountUSD: '+$3,500',
      icon: '💼',
      timestamp: '3 days ago',
    },
  ]

  return (
    <div className="flex flex-col h-screen bg-primary pb-20">
      {/* Header */}
      <Header />

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        {/* Balance Card */}
        <div className="px-4 py-6">
          <BalanceCard />
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-4">
          <QuickActions />
        </div>

        {/* Recent Transactions */}
        <div className="px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
            <button className="text-cyan-400 text-sm hover:text-cyan-300">See All</button>
          </div>
          <TransactionList transactions={mockTransactions} />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
