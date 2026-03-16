interface SegmentedControlProps {
  options: string[]
  selected: number
  onChange: (index: number) => void
}

export default function SegmentedControl({ options, selected, onChange }: SegmentedControlProps) {
  return (
    <div className="flex gap-2 bg-secondary p-1 rounded-full w-fit mx-auto">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
            selected === index
              ? 'bg-primary text-white shadow-lg'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
