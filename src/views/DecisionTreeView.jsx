import { useCallback } from 'react'
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from '@xyflow/react'
import { decisionNodes, decisionEdges } from '../data/decisionTreeData'
import DecisionNode from '../components/DecisionNode'

const nodeTypes = {
  decision: DecisionNode,
}

export default function DecisionTreeView({ onNodeSelect, selectedNode }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(decisionNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(decisionEdges)

  const onNodeClick = useCallback((event, node) => {
    onNodeSelect(node)
  }, [onNodeSelect])

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes.map(node => ({
          ...node,
          data: {
            ...node.data,
            selected: selectedNode?.id === node.id
          }
        }))}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.3}
        maxZoom={1.5}
      >
        <Background color="#e2e8f0" gap={20} />
        <Controls className="bg-white rounded-lg shadow-lg" />
      </ReactFlow>
    </div>
  )
}