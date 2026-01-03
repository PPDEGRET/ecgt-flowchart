import { BookOpen, GitBranch } from 'lucide-react'

export default function Header({ activeView, setActiveView }) {
  return (
    <header className="bg-ecgt-primary text-white h-16 flex items-center justify-between px-6 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-ecgt-accent rounded flex items-center justify-center">
          <span className="text-white font-bold text-sm">EU</span>
        </div>
        <div>
          <h1 className="text-lg font-semibold">ECGT Directive Explorer</h1>
          <p className="text-xs text-blue-200">Directive (EU) 2024/825 • Empowering Consumers for the Green Transition</p>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-ecgt-secondary rounded-lg p-1">
        <button
          onClick={() => setActiveView('flowchart')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeView === 'flowchart'
              ? 'bg-white text-ecgt-primary'
              : 'text-white hover:bg-white/10'
          }`}
        >
          <BookOpen size={16} />
          Structure View
        </button>
        <button
          onClick={() => setActiveView('decision')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeView === 'decision'
              ? 'bg-white text-ecgt-primary'
              : 'text-white hover:bg-white/10'
          }`}
        >
          <GitBranch size={16} />
          Decision Tree
        </button>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <div className="text-right">
          <p className="text-blue-200 text-xs">Applies from</p>
          <p className="font-medium">27 Sept 2026</p>
        </div>
      </div>
    </header>
  )
}