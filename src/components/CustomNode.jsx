import { memo } from 'react'
import { Handle, Position } from '@xyflow/react'

const typeStyles = {
  directive: {
    bg: 'bg-ecgt-primary',
    border: 'border-ecgt-primary',
    text: 'text-white',
    shadow: 'shadow-lg shadow-ecgt-primary/20'
  },
  ucpd: {
    bg: 'bg-ecgt-ucpd',
    border: 'border-ecgt-ucpd',
    text: 'text-white',
    shadow: 'shadow-md shadow-ecgt-ucpd/20'
  },
  crd: {
    bg: 'bg-ecgt-crd',
    border: 'border-ecgt-crd',
    text: 'text-white',
    shadow: 'shadow-md shadow-ecgt-crd/20'
  },
  definition: {
    bg: 'bg-white',
    border: 'border-ecgt-info',
    text: 'text-ecgt-text',
    shadow: 'shadow-sm'
  },
  blacklist: {
    bg: 'bg-ecgt-blacklist',
    border: 'border-ecgt-blacklist',
    text: 'text-white',
    shadow: 'shadow-md shadow-ecgt-blacklist/20'
  },
  category: {
    bg: 'bg-white',
    border: 'border-gray-300',
    text: 'text-ecgt-text',
    shadow: 'shadow-sm'
  },
  info: {
    bg: 'bg-ecgt-info',
    border: 'border-ecgt-info',
    text: 'text-white',
    shadow: 'shadow-md shadow-ecgt-info/20'
  }
}

function CustomNode({ data }) {
  const style = typeStyles[data.type] || typeStyles.category
  const isSelected = data.selected

  return (
    <div
      className={`
        px-4 py-3 rounded-lg border-2 transition-all duration-200
        ${style.bg} ${style.border} ${style.text} ${style.shadow}
        ${isSelected ? 'ring-4 ring-ecgt-accent ring-offset-2' : ''}
        hover:scale-105 cursor-pointer
        min-w-[180px] max-w-[280px]
      `}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-gray-400 !w-2 !h-2"
      />
      
      {data.icon && (
        <div className="text-xs uppercase tracking-wide opacity-70 mb-1">
          {data.icon}
        </div>
      )}
      
      <div className="font-medium text-sm leading-tight text-center">
        {data.label}
      </div>
      
      {data.subtitle && (
        <div className="text-xs opacity-80 mt-1 text-center">
          {data.subtitle}
        </div>
      )}

      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-gray-400 !w-2 !h-2"
      />
    </div>
  )
}

export default memo(CustomNode)