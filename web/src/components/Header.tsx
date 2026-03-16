import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  showBack?: boolean
  title?: string
}

export default function Header({ showBack = false, title }: HeaderProps) {
  const navigate = useNavigate()

  return (
    <div className="bg-secondary border-b border-gray-700 sticky top-0 z-10">
      <div className="px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="text-gray-400 hover:text-white text-2xl transition-colors"
            >
              ‹
            </button>
          )}
          <h1 className="text-2xl font-bold text-white">
            {title || '🏦 MyBank'}
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="relative p-2 bg-primary rounded-lg hover:bg-opacity-80 transition-all">
            <span className="text-lg">🔔</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <button className="p-2 bg-primary rounded-lg hover:bg-opacity-80 transition-all">
            <span className="text-lg">⚙️</span>
          </button>
        </div>
      </div>
    </div>
  )
}
