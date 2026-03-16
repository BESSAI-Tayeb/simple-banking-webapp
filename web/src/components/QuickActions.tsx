import { Link } from 'react-router-dom'

interface Action {
  id: string
  label: string
  icon: string
  path: string
  color: string
}

export default function QuickActions() {
  const actions: Action[] = [
    {
      id: '1',
      label: 'Send Money',
      icon: '📤',
      path: '/send',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: '2',
      label: 'Request Money',
      icon: '📥',
      path: '#',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: '3',
      label: 'Buy Crypto',
      icon: '💰',
      path: '#',
      color: 'from-green-500 to-green-600',
    },
    {
      id: '4',
      label: 'Cards',
      icon: '💳',
      path: '/cards',
      color: 'from-cyan-500 to-cyan-600',
    },
  ]

  return (
    <div className="grid grid-cols-4 gap-3">
      {actions.map((action) => (
        <Link
          key={action.id}
          to={action.path}
          className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-gradient-to-br ${action.color} text-white hover:opacity-90 transition-all transform hover:scale-105 active:scale-95`}
        >
          <span className="text-2xl">{action.icon}</span>
          <span className="text-xs font-semibold text-center">{action.label}</span>
        </Link>
      ))}
    </div>
  )
}
