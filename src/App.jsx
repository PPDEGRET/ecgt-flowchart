import { useState } from 'react'
import { ReactFlowProvider } from '@xyflow/react'
import Header from './components/Header'
import FlowchartView from './views/FlowchartView'
import DecisionTreeView from './views/DecisionTreeView'
import DetailPanel from './components/DetailPanel'
import '@xyflow/react/dist/style.css'

export default function App() {
  const [activeView, setActiveView] = useState('flowchart')
  const [selectedNode, setSelectedNode] = useState(null)

  return (
    <ReactFlowProvider>
      <div className="min-h-screen bg-ecgt-bg">
        <Header activeView={activeView} setActiveView={setActiveView} />
        
        <div className="flex h-[calc(100vh-64px)]">
          <div className={`flex-1 transition-all duration-300 ${selectedNode ? 'mr-96' : ''}`}>
            {activeView === 'flowchart' ? (
              <FlowchartView onNodeSelect={setSelectedNode} selectedNode={selectedNode} />
            ) : (
              <DecisionTreeView onNodeSelect={setSelectedNode} selectedNode={selectedNode} />
            )}
          </div>
          
          <DetailPanel 
            node={selectedNode} 
            onClose={() => setSelectedNode(null)} 
          />
        </div>
      </div>
    </ReactFlowProvider>
  )
}