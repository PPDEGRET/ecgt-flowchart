// Flowchart nodes for the Structure View
export const flowchartNodes = [
  // Main ECGT node
  {
    id: 'ecgt-main',
    type: 'custom',
    position: { x: 400, y: 0 },
    data: {
      label: 'ECGT Directive (EU) 2024/825',
      subtitle: 'Empowering Consumers for the Green Transition',
      type: 'directive',
      icon: 'DIRECTIVE'
    }
  },

  // Two main branches
  {
    id: 'ucpd-main',
    type: 'custom',
    position: { x: 150, y: 120 },
    data: {
      label: 'Amends UCPD',
      subtitle: 'Directive 2005/29/EC',
      type: 'ucpd',
      icon: 'UNFAIR PRACTICES'
    }
  },
  {
    id: 'crd-main',
    type: 'custom',
    position: { x: 650, y: 120 },
    data: {
      label: 'Amends CRD',
      subtitle: 'Directive 2011/83/EU',
      type: 'crd',
      icon: 'CONSUMER RIGHTS'
    }
  },

  // UCPD Branch - Categories
  {
    id: 'ucpd-definitions',
    type: 'custom',
    position: { x: -100, y: 250 },
    data: {
      label: 'New Definitions',
      subtitle: 'Article 2',
      type: 'definition'
    }
  },
  {
    id: 'ucpd-art6',
    type: 'custom',
    position: { x: 100, y: 250 },
    data: {
      label: 'Misleading Actions',
      subtitle: 'Article 6',
      type: 'ucpd'
    }
  },
  {
    id: 'ucpd-art7',
    type: 'custom',
    position: { x: 300, y: 250 },
    data: {
      label: 'Comparisons',
      subtitle: 'Article 7',
      type: 'ucpd'
    }
  },
  {
    id: 'ucpd-blacklist',
    type: 'custom',
    position: { x: 100, y: 370 },
    data: {
      label: 'Blacklist (Annex I)',
      subtitle: 'Always Prohibited',
      type: 'blacklist',
      icon: 'PROHIBITED'
    }
  },

  // UCPD Definitions
  {
    id: 'def-environmental-claim',
    type: 'custom',
    position: { x: -250, y: 380 },
    data: { label: 'Environmental Claim', type: 'definition' }
  },
  {
    id: 'def-generic-claim',
    type: 'custom',
    position: { x: -250, y: 450 },
    data: { label: 'Generic Environmental Claim', type: 'definition' }
  },
  {
    id: 'def-sustainability-label',
    type: 'custom',
    position: { x: -250, y: 520 },
    data: { label: 'Sustainability Label', type: 'definition' }
  },
  {
    id: 'def-certification-scheme',
    type: 'custom',
    position: { x: -250, y: 590 },
    data: { label: 'Certification Scheme', type: 'definition' }
  },
  {
    id: 'def-excellent-performance',
    type: 'custom',
    position: { x: -250, y: 660 },
    data: { label: 'Recognised Excellent Performance', type: 'definition' }
  },

  // UCPD Article 6 items
  {
    id: 'ucpd-future-claims',
    type: 'custom',
    position: { x: 50, y: 500 },
    data: { label: 'Future Environmental Claims', subtitle: 'Art 6(2)(d)', type: 'ucpd' }
  },
  {
    id: 'ucpd-irrelevant-benefits',
    type: 'custom',
    position: { x: 50, y: 570 },
    data: { label: 'Irrelevant Benefits', subtitle: 'Art 6(2)(e)', type: 'ucpd' }
  },

  // Blacklist items - Column 1
  {
    id: 'bl-fake-labels',
    type: 'custom',
    position: { x: -50, y: 700 },
    data: { label: '2a. Fake Labels', type: 'blacklist' }
  },
  {
    id: 'bl-generic-claims',
    type: 'custom',
    position: { x: -50, y: 770 },
    data: { label: '4a. Generic Claims', type: 'blacklist' }
  },
  {
    id: 'bl-partial-claims',
    type: 'custom',
    position: { x: -50, y: 840 },
    data: { label: '4b. Partial Claims', type: 'blacklist' }
  },
  {
    id: 'bl-carbon-offsets',
    type: 'custom',
    position: { x: -50, y: 910 },
    data: { label: '4c. Carbon Offsets', type: 'blacklist' }
  },
  {
    id: 'bl-compliance-feature',
    type: 'custom',
    position: { x: -50, y: 980 },
    data: { label: '10a. Compliance-as-Feature', type: 'blacklist' }
  },

  // Blacklist items - Column 2
  {
    id: 'bl-software-hiding',
    type: 'custom',
    position: { x: 200, y: 700 },
    data: { label: '23d. Hide Update Effects', type: 'blacklist' }
  },
  {
    id: 'bl-fake-necessary',
    type: 'custom',
    position: { x: 200, y: 770 },
    data: { label: '23e. Fake Necessary Updates', type: 'blacklist' }
  },
  {
    id: 'bl-planned-obsolescence',
    type: 'custom',
    position: { x: 200, y: 840 },
    data: { label: '23f. Planned Obsolescence', type: 'blacklist' }
  },
  {
    id: 'bl-false-durability',
    type: 'custom',
    position: { x: 200, y: 910 },
    data: { label: '23g. False Durability', type: 'blacklist' }
  },
  {
    id: 'bl-false-repair',
    type: 'custom',
    position: { x: 200, y: 980 },
    data: { label: '23h. False Repair Claims', type: 'blacklist' }
  },

  // Blacklist items - More
  {
    id: 'bl-early-consumables',
    type: 'custom',
    position: { x: 450, y: 700 },
    data: { label: '23i. Early Consumable Replacement', type: 'blacklist' }
  },
  {
    id: 'bl-third-party-parts',
    type: 'custom',
    position: { x: 450, y: 770 },
    data: { label: '23j. Third-Party Parts Deception', type: 'blacklist' }
  },

  // CRD Branch - Categories
  {
    id: 'crd-definitions',
    type: 'custom',
    position: { x: 550, y: 250 },
    data: {
      label: 'New Definitions',
      subtitle: 'Article 2',
      type: 'definition'
    }
  },
  {
    id: 'crd-precontract',
    type: 'custom',
    position: { x: 750, y: 250 },
    data: {
      label: 'Pre-Contract Info',
      subtitle: 'Articles 5 & 6',
      type: 'crd'
    }
  },
  {
    id: 'crd-checkout',
    type: 'custom',
    position: { x: 950, y: 250 },
    data: {
      label: 'E-Commerce Checkout',
      subtitle: 'Article 8',
      type: 'crd'
    }
  },
  {
    id: 'crd-harmonised',
    type: 'custom',
    position: { x: 750, y: 370 },
    data: {
      label: 'Harmonised Notice & Label',
      subtitle: 'Article 22a (new)',
      type: 'info'
    }
  },

  // CRD Pre-contract items
  {
    id: 'crd-legal-guarantee',
    type: 'custom',
    position: { x: 600, y: 500 },
    data: { label: 'Legal Guarantee Reminder', subtitle: 'Harmonised Notice', type: 'crd' }
  },
  {
    id: 'crd-durability-guarantee',
    type: 'custom',
    position: { x: 600, y: 570 },
    data: { label: 'Durability Guarantee', subtitle: 'Harmonised Label', type: 'crd' }
  },
  {
    id: 'crd-reparability',
    type: 'custom',
    position: { x: 850, y: 500 },
    data: { label: 'Reparability Info', subtitle: 'Score or Details', type: 'crd' }
  },
  {
    id: 'crd-software-updates',
    type: 'custom',
    position: { x: 850, y: 570 },
    data: { label: 'Software Update Period', subtitle: 'Digital Goods/Services', type: 'crd' }
  },
  {
    id: 'crd-delivery',
    type: 'custom',
    position: { x: 850, y: 640 },
    data: { label: 'Eco-Friendly Delivery', subtitle: 'Where Available', type: 'info' }
  }
]

// Edges connecting the nodes
export const flowchartEdges = [
  // Main to branches
  { id: 'e-main-ucpd', source: 'ecgt-main', target: 'ucpd-main', animated: true, style: { stroke: '#3b7a9e' } },
  { id: 'e-main-crd', source: 'ecgt-main', target: 'crd-main', animated: true, style: { stroke: '#7c5c99' } },

  // UCPD to categories
  { id: 'e-ucpd-def', source: 'ucpd-main', target: 'ucpd-definitions', style: { stroke: '#3b7a9e' } },
  { id: 'e-ucpd-art6', source: 'ucpd-main', target: 'ucpd-art6', style: { stroke: '#3b7a9e' } },
  { id: 'e-ucpd-art7', source: 'ucpd-main', target: 'ucpd-art7', style: { stroke: '#3b7a9e' } },
  { id: 'e-ucpd-blacklist', source: 'ucpd-main', target: 'ucpd-blacklist', style: { stroke: '#c44536' } },

  // Definitions
  { id: 'e-def-env', source: 'ucpd-definitions', target: 'def-environmental-claim', style: { stroke: '#4a9b7f' } },
  { id: 'e-def-gen', source: 'ucpd-definitions', target: 'def-generic-claim', style: { stroke: '#4a9b7f' } },
  { id: 'e-def-label', source: 'ucpd-definitions', target: 'def-sustainability-label', style: { stroke: '#4a9b7f' } },
  { id: 'e-def-cert', source: 'ucpd-definitions', target: 'def-certification-scheme', style: { stroke: '#4a9b7f' } },
  { id: 'e-def-exc', source: 'ucpd-definitions', target: 'def-excellent-performance', style: { stroke: '#4a9b7f' } },

  // Article 6
  { id: 'e-art6-future', source: 'ucpd-art6', target: 'ucpd-future-claims', style: { stroke: '#3b7a9e' } },
  { id: 'e-art6-irrel', source: 'ucpd-art6', target: 'ucpd-irrelevant-benefits', style: { stroke: '#3b7a9e' } },

  // Blacklist
  { id: 'e-bl-1', source: 'ucpd-blacklist', target: 'bl-fake-labels', style: { stroke: '#c44536' } },
  { id: 'e-bl-2', source: 'ucpd-blacklist', target: 'bl-generic-claims', style: { stroke: '#c44536' } },
  { id: 'e-bl-3', source: 'ucpd-blacklist', target: 'bl-partial-claims', style: { stroke: '#c44536' } },
  { id: 'e-bl-4', source: 'ucpd-blacklist', target: 'bl-carbon-offsets', style: { stroke: '#c44536' } },
  { id: 'e-bl-5', source: 'ucpd-blacklist', target: 'bl-compliance-feature', style: { stroke: '#c44536' } },
  { id: 'e-bl-6', source: 'ucpd-blacklist', target: 'bl-software-hiding', style: { stroke: '#c44536' } },
  { id: 'e-bl-7', source: 'ucpd-blacklist', target: 'bl-fake-necessary', style: { stroke: '#c44536' } },
  { id: 'e-bl-8', source: 'ucpd-blacklist', target: 'bl-planned-obsolescence', style: { stroke: '#c44536' } },
  { id: 'e-bl-9', source: 'ucpd-blacklist', target: 'bl-false-durability', style: { stroke: '#c44536' } },
  { id: 'e-bl-10', source: 'ucpd-blacklist', target: 'bl-false-repair', style: { stroke: '#c44536' } },
  { id: 'e-bl-11', source: 'ucpd-blacklist', target: 'bl-early-consumables', style: { stroke: '#c44536' } },
  { id: 'e-bl-12', source: 'ucpd-blacklist', target: 'bl-third-party-parts', style: { stroke: '#c44536' } },

  // CRD to categories
  { id: 'e-crd-def', source: 'crd-main', target: 'crd-definitions', style: { stroke: '#7c5c99' } },
  { id: 'e-crd-pre', source: 'crd-main', target: 'crd-precontract', style: { stroke: '#7c5c99' } },
  { id: 'e-crd-check', source: 'crd-main', target: 'crd-checkout', style: { stroke: '#7c5c99' } },
  { id: 'e-crd-harm', source: 'crd-main', target: 'crd-harmonised', style: { stroke: '#4a9b7f' } },

  // Pre-contract items
  { id: 'e-pre-legal', source: 'crd-precontract', target: 'crd-legal-guarantee', style: { stroke: '#7c5c99' } },
  { id: 'e-pre-dur', source: 'crd-precontract', target: 'crd-durability-guarantee', style: { stroke: '#7c5c99' } },
  { id: 'e-pre-rep', source: 'crd-precontract', target: 'crd-reparability', style: { stroke: '#7c5c99' } },
  { id: 'e-pre-soft', source: 'crd-precontract', target: 'crd-software-updates', style: { stroke: '#7c5c99' } },
  { id: 'e-pre-del', source: 'crd-precontract', target: 'crd-delivery', style: { stroke: '#4a9b7f' } }
]
