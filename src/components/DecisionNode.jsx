import { memo } from 'react'
import { Handle, Position } from '@xyflow/react'
import { HelpCircle, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

const typeStyles = {
  question: {
    bg: 'bg-amber-50',
    border: 'border-amber-400',
    text: 'text-amber-900',
    icon: HelpCircle,
    iconColor: 'text-amber-500'
  },
  prohibited: {
    bg: 'bg-red-50',
    border: 'border-red-400',
    text: 'text-red-900',
    icon: XCircle,
    iconColor: 'text-red-500'
  },
  allowed: {
    bg: 'bg-green-50',
    border: 'border-green-400',
    text: 'text-green-900',
    icon: CheckCircle,
    iconColor: 'text-green-500'
  },
  warning: {
    bg: 'bg-orange-50',
    border: 'border-orange-400',
    text: 'text-orange-900',
    icon: AlertTriangle,
    iconColor: 'text-orange-500'
  },
  start: {
    bg: 'bg-ecgt-primary',
    border: 'border-ecgt-primary',
    text: 'text-white',
    icon: null,
    iconColor: ''
  }
}

function DecisionNode({ data }) {
  const style = typeStyles[data.nodeType] || typeStyles.question
  const Icon = style.icon
  const isSelected = data.selected

  return (
    <div
      className={`
        px-4 py-3 rounded-xl border-2 transition-all duration-200
        ${style.bg} ${style.border} ${style.text}
        ${isSelected ? 'ring-4 ring-ecgt-accent ring-offset-2' : ''}
        hover:shadow-lg cursor-pointer
        min-w-[200px] max-w-[300px]
      `}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-gray-400 !w-2 !h-2"
      />
      
      <div className="flex items-start gap-2">
        {Icon && <Icon size={20} className={`${style.iconColor} flex-shrink-0 mt-0.5`} />}
        <div className="font-medium text-sm leading-snug">
          {data.label}
        </div>
      </div>

      {data.nodeType === 'question' && (
        <>
          <Handle
            type="source"
            position={Position.Left}
            id="no"
            className="!bg-red-400 !w-3 !h-3"
            style={{ top: '50%' }}
          />
          <Handle
            type="source"
            position={Position.Right}
            id="yes"
            className="!bg-green-400 !w-3 !h-3"
            style={{ top: '50%' }}
          />
        </>
      )}
      
      {data.nodeType !== 'question' && (
        <Handle
          type="source"
          position={Position.Bottom}
          className="!bg-gray-400 !w-2 !h-2"
        />
      )}
    </div>
  )
}

export default memo(DecisionNode)