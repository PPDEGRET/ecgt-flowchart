// Decision tree for "Does my claim comply with ECGT?"
export const decisionNodes = [
  // Start
  {
    id: 'dt-start',
    type: 'decision',
    position: { x: 400, y: 0 },
    data: {
      label: 'Does your marketing make an environmental or sustainability claim?',
      nodeType: 'start'
    }
  },

  // First question
  {
    id: 'dt-q1',
    type: 'decision',
    position: { x: 400, y: 100 },
    data: {
      label: 'Is it a generic claim (e.g., "eco-friendly", "green", "sustainable") WITHOUT specific details on the same medium?',
      nodeType: 'question'
    }
  },

  // Generic claim path
  {
    id: 'dt-q2-generic',
    type: 'decision',
    position: { x: 100, y: 220 },
    data: {
      label: 'Can you demonstrate recognised excellent environmental performance (EU Ecolabel, ISO 14024 Type I, or top performance under EU law)?',
      nodeType: 'question'
    }
  },

  {
    id: 'dt-prohibited-generic',
    type: 'decision',
    position: { x: -100, y: 350 },
    data: {
      label: 'PROHIBITED: Generic claims without proof are banned under Annex I, point 4a',
      nodeType: 'prohibited'
    }
  },

  {
    id: 'dt-allowed-generic',
    type: 'decision',
    position: { x: 200, y: 350 },
    data: {
      label: 'Generic claim may be allowed if performance is relevant to the claim',
      nodeType: 'allowed'
    }
  },

  // Specific claim path
  {
    id: 'dt-q3-specific',
    type: 'decision',
    position: { x: 700, y: 220 },
    data: {
      label: 'Is it a claim about carbon neutrality, reduced GHG impact, or climate compensation?',
      nodeType: 'question'
    }
  },

  {
    id: 'dt-q4-offset',
    type: 'decision',
    position: { x: 500, y: 350 },
    data: {
      label: 'Is the claim based on offsetting or carbon credits (rather than actual lifecycle emissions)?',
      nodeType: 'question'
    }
  },

  {
    id: 'dt-prohibited-offset',
    type: 'decision',
    position: { x: 350, y: 480 },
    data: {
      label: 'PROHIBITED: Carbon neutrality claims based on offsets are banned under Annex I, point 4c',
      nodeType: 'prohibited'
    }
  },

  {
    id: 'dt-allowed-lifecycle',
    type: 'decision',
    position: { x: 600, y: 480 },
    data: {
      label: 'Claim may be allowed if based on actual lifecycle impact',
      nodeType: 'allowed'
    }
  },

  // Future claims path
  {
    id: 'dt-q5-future',
    type: 'decision',
    position: { x: 900, y: 350 },
    data: {
      label: 'Is it a claim about FUTURE environmental performance (e.g., "net zero by 2030")?',
      nodeType: 'question'
    }
  },

  {
    id: 'dt-q6-plan',
    type: 'decision',
    position: { x: 800, y: 480 },
    data: {
      label: 'Do you have: (1) public implementation plan, (2) measurable targets, (3) resource allocation, (4) independent verification?',
      nodeType: 'question'
    }
  },

  {
    id: 'dt-prohibited-future',
    type: 'decision',
    position: { x: 650, y: 600 },
    data: {
      label: 'MISLEADING: Future claims without proper substantiation are prohibited under Article 6(2)(d)',
      nodeType: 'prohibited'
    }
  },

  {
    id: 'dt-allowed-future',
    type: 'decision',
    position: { x: 950, y: 600 },
    data: {
      label: 'Future claim may be allowed with full substantiation',
      nodeType: 'allowed'
    }
  },

  // Labels path
  {
    id: 'dt-q7-label',
    type: 'decision',
    position: { x: 1100, y: 480 },
    data: {
      label: 'Does your claim use a sustainability label or eco-mark?',
      nodeType: 'question'
    }
  },

  {
    id: 'dt-q8-cert',
    type: 'decision',
    position: { x: 1100, y: 600 },
    data: {
      label: 'Is the label based on a certification scheme OR established by public authorities?',
      nodeType: 'question'
    }
  },

  {
    id: 'dt-prohibited-label',
    type: 'decision',
    position: { x: 950, y: 720 },
    data: {
      label: 'PROHIBITED: Self-made labels without certification are banned under Annex I, point 2a',
      nodeType: 'prohibited'
    }
  },

  {
    id: 'dt-allowed-label',
    type: 'decision',
    position: { x: 1200, y: 720 },
    data: {
      label: 'Label may be displayed if properly certified',
      nodeType: 'allowed'
    }
  },

  // Partial claims
  {
    id: 'dt-q9-partial',
    type: 'decision',
    position: { x: 1300, y: 350 },
    data: {
      label: 'Does the claim apply to the ENTIRE product/business, or only a specific aspect?',
      nodeType: 'question'
    }
  },

  {
    id: 'dt-warning-partial',
    type: 'decision',
    position: { x: 1300, y: 480 },
    data: {
      label: 'WARNING: If claim is about entire product but only applies to one aspect, this is prohibited under Annex I, point 4b',
      nodeType: 'warning'
    }
  },

  // Not applicable
  {
    id: 'dt-not-applicable',
    type: 'decision',
    position: { x: 100, y: 100 },
    data: {
      label: 'ECGT environmental claim rules do not apply - but check other UCPD provisions',
      nodeType: 'allowed'
    }
  }
]

export const decisionEdges = [
  // Start to Q1
  { id: 'dt-e-start', source: 'dt-start', target: 'dt-q1', style: { stroke: '#1e3a5f' } },
  
  // Q1 branches
  { id: 'dt-e-q1-yes', source: 'dt-q1', target: 'dt-q2-generic', sourceHandle: 'yes', label: 'Yes', labelStyle: { fill: '#22c55e' }, style: { stroke: '#22c55e' } },
  { id: 'dt-e-q1-no', source: 'dt-q1', target: 'dt-q3-specific', sourceHandle: 'no', label: 'No (specific)', labelStyle: { fill: '#ef4444' }, style: { stroke: '#3b7a9e' } },
  { id: 'dt-e-q1-none', source: 'dt-start', target: 'dt-not-applicable', label: 'No claim', style: { stroke: '#718096' } },

  // Generic claim path
  { id: 'dt-e-q2-no', source: 'dt-q2-generic', target: 'dt-prohibited-generic', sourceHandle: 'no', label: 'No', style: { stroke: '#ef4444' } },
  { id: 'dt-e-q2-yes', source: 'dt-q2-generic', target: 'dt-allowed-generic', sourceHandle: 'yes', label: 'Yes', style: { stroke: '#22c55e' } },

  // Carbon claims path
  { id: 'dt-e-q3-yes', source: 'dt-q3-specific', target: 'dt-q4-offset', sourceHandle: 'yes', label: 'Yes', style: { stroke: '#22c55e' } },
  { id: 'dt-e-q3-no', source: 'dt-q3-specific', target: 'dt-q5-future', sourceHandle: 'no', label: 'No', style: { stroke: '#3b7a9e' } },
  
  { id: 'dt-e-q4-yes', source: 'dt-q4-offset', target: 'dt-prohibited-offset', sourceHandle: 'yes', label: 'Yes (offsets)', style: { stroke: '#ef4444' } },
  { id: 'dt-e-q4-no', source: 'dt-q4-offset', target: 'dt-allowed-lifecycle', sourceHandle: 'no', label: 'No (lifecycle)', style: { stroke: '#22c55e' } },

  // Future claims path
  { id: 'dt-e-q5-yes', source: 'dt-q5-future', target: 'dt-q6-plan', sourceHandle: 'yes', label: 'Yes', style: { stroke: '#22c55e' } },
  { id: 'dt-e-q5-no', source: 'dt-q5-future', target: 'dt-q7-label', sourceHandle: 'no', label: 'No', style: { stroke: '#3b7a9e' } },
  
  { id: 'dt-e-q6-no', source: 'dt-q6-plan', target: 'dt-prohibited-future', sourceHandle: 'no', label: 'No', style: { stroke: '#ef4444' } },
  { id: 'dt-e-q6-yes', source: 'dt-q6-plan', target: 'dt-allowed-future', sourceHandle: 'yes', label: 'Yes', style: { stroke: '#22c55e' } },

  // Labels path
  { id: 'dt-e-q7-yes', source: 'dt-q7-label', target: 'dt-q8-cert', sourceHandle: 'yes', label: 'Yes', style: { stroke: '#22c55e' } },
  { id: 'dt-e-q7-no', source: 'dt-q7-label', target: 'dt-q9-partial', sourceHandle: 'no', label: 'No', style: { stroke: '#3b7a9e' } },
  
  { id: 'dt-e-q8-no', source: 'dt-q8-cert', target: 'dt-prohibited-label', sourceHandle: 'no', label: 'No', style: { stroke: '#ef4444' } },
  { id: 'dt-e-q8-yes', source: 'dt-q8-cert', target: 'dt-allowed-label', sourceHandle: 'yes', label: 'Yes', style: { stroke: '#22c55e' } },

  // Partial claims
  { id: 'dt-e-q9', source: 'dt-q9-partial', target: 'dt-warning-partial', sourceHandle: 'yes', label: 'Only partial', style: { stroke: '#f97316' } }
]
