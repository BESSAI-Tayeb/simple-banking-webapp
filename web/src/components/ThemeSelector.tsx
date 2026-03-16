interface ThemeSelectorProps {
  themes: string[]
  selected: string
  onChange: (theme: string) => void
}

const themeColors: Record<string, string> = {
  standard: 'bg-gray-700',
  solana: 'bg-purple-600',
  emerald: 'bg-green-600',
}

export default function ThemeSelector({ themes, selected, onChange }: ThemeSelectorProps) {
  return (
    <div className="flex justify-center gap-4">
      {themes.map((theme) => (
        <button
          key={theme}
          onClick={() => onChange(theme as any)}
          className={`w-12 h-12 rounded-full transition-all duration-200 ${themeColors[theme]} ${
            selected === theme
              ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-primary scale-110'
              : 'opacity-70 hover:opacity-100'
          }`}
          title={theme}
        />
      ))}
    </div>
  )
}
