// Complete ECGT data with detailed information for each node
export const ecgtData = {
  // Main Directive
  'ecgt-main': {
    title: 'ECGT Directive (EU) 2024/825',
    description: 'The Empowering Consumers for the Green Transition Directive amends two existing directives (UCPD and CRD) to combat greenwashing and give consumers better information about product durability, reparability, and environmental claims. It introduces new prohibited practices and mandatory pre-contract information requirements.',
    type: 'directive',
    level: 'EU',
    concernedParties: ['All traders', 'Producers', 'E-commerce platforms', 'Comparison services', 'Member States'],
    articleRef: 'Articles 1-6',
    recitalRef: 'Recitals 1-42',
    keyDates: [
      { label: 'Published', date: '6 March 2024' },
      { label: 'Entry into force', date: '26 March 2024' },
      { label: 'Member State transposition', date: '27 March 2026' },
      { label: 'Application date', date: '27 September 2026' },
      { label: 'Commission report', date: '27 September 2031' }
    ],
    relatedRegulations: [
      'Directive 2005/29/EC (UCPD)',
      'Directive 2011/83/EU (CRD)',
      'Directive (EU) 2019/770 (Digital Content)',
      'Directive (EU) 2019/771 (Sale of Goods)'
    ]
  },

  // UCPD Branch
  'ucpd-main': {
    title: 'Amendments to UCPD (2005/29/EC)',
    description: 'The Unfair Commercial Practices Directive is amended to stop misleading sustainability marketing. Changes include new definitions, expanded misleading action rules, comparison requirements, and a significantly expanded blacklist of always-prohibited practices.',
    type: 'ucpd',
    level: 'EU',
    concernedParties: ['All B2C traders', 'Marketers', 'Advertising agencies', 'Comparison platforms'],
    articleRef: 'ECGT Article 1',
    recitalRef: 'Recitals 1-24'
  },

  // UCPD Definitions
  'ucpd-definitions': {
    title: 'New UCPD Definitions (Article 2)',
    description: 'ECGT adds formal legal definitions for key sustainability-related terms. These definitions establish what counts as an environmental claim, sustainability label, and more - providing legal clarity for enforcement.',
    type: 'definition',
    level: 'EU',
    concernedParties: ['All traders making environmental claims', 'Label owners', 'Certification bodies'],
    articleRef: 'UCPD Article 2 (as amended by ECGT Article 1(1))',
    recitalRef: 'Recitals 7-10'
  },

  'def-environmental-claim': {
    title: 'Environmental Claim',
    description: 'Any message or representation (text, graphic, label, brand name, etc.) in commercial communication that states or implies a product/brand/trader has positive/zero environmental impact, is less damaging than alternatives, or has improved over time. Must NOT be mandatory under EU/national law.',
    type: 'definition',
    level: 'EU',
    concernedParties: ['All traders', 'Marketing teams', 'Product managers'],
    articleRef: 'UCPD Article 2(o)',
    examples: [
      '"Eco-friendly packaging"',
      '"Carbon neutral product"',
      '"Made with recycled materials"',
      'Green leaf logos or nature imagery implying environmental benefit'
    ]
  },

  'def-generic-claim': {
    title: 'Generic Environmental Claim',
    description: 'An environmental claim in written or oral form (including audiovisual) that is NOT on a sustainability label AND where specification is NOT provided in clear, prominent terms on the same medium. These are now prohibited unless backed by recognised excellent environmental performance.',
    type: 'definition',
    level: 'EU',
    concernedParties: ['All traders', 'Marketing teams'],
    articleRef: 'UCPD Article 2(p)',
    recitalRef: 'Recital 9',
    examples: [
      '"Environmentally friendly"',
      '"Eco-friendly"',
      '"Green"',
      '"Climate friendly"',
      '"Biodegradable"',
      '"Carbon friendly"',
      '"Sustainable" (without specification)'
    ]
  },

  'def-sustainability-label': {
    title: 'Sustainability Label',
    description: 'Any VOLUNTARY trust mark, quality mark or equivalent (public or private) that promotes a product, process or business by reference to environmental or social characteristics. Excludes mandatory labels required by law.',
    type: 'definition',
    level: 'EU',
    concernedParties: ['Label owners', 'Certification bodies', 'Traders using labels'],
    articleRef: 'UCPD Article 2(q)',
    recitalRef: 'Recital 7',
    examples: [
      'Private eco-labels',
      'Industry sustainability marks',
      'Fair trade certifications',
      'Carbon footprint labels'
    ]
  },

  'def-certification-scheme': {
    title: 'Certification Scheme',
    description: 'A third-party verification scheme that: (1) certifies compliance with requirements, (2) allows use of a sustainability label, (3) has publicly available terms, (4) is open to all traders, (5) is developed with expert consultation, (6) has non-compliance procedures, and (7) uses independent third-party monitoring.',
    type: 'definition',
    level: 'EU',
    concernedParties: ['Certification bodies', 'Label scheme owners', 'Auditors'],
    articleRef: 'UCPD Article 2(r)',
    recitalRef: 'Recital 7',
    examples: [
      'ISO 17065-compliant schemes',
      'EU Ecolabel certification',
      'EMAS registration'
    ],
    relatedRegulations: [
      'Regulation (EC) No 765/2008 (Accreditation)',
      'ISO 17065 standard'
    ]
  },

  'def-excellent-performance': {
    title: 'Recognised Excellent Environmental Performance',
    description: 'Environmental performance that complies with: EU Ecolabel (Reg. 66/2010), officially recognised ISO 14024 Type I ecolabelling schemes in Member States, or top environmental performance under other EU law (e.g., Energy Label Class A).',
    type: 'definition',
    level: 'EU',
    concernedParties: ['Traders making generic claims', 'Product developers'],
    articleRef: 'UCPD Article 2(s)',
    recitalRef: 'Recital 10',
    examples: [
      'EU Ecolabel certified products',
      'Energy Label Class A appliances',
      'Blue Angel certified products (Germany)',
      'Nordic Swan certified products'
    ],
    relatedRegulations: [
      'Regulation (EC) No 66/2010 (EU Ecolabel)',
      'Regulation (EU) 2017/1369 (Energy Labelling)'
    ]
  },

  // UCPD Article 6 - Misleading Actions
  'ucpd-art6': {
    title: 'Misleading Actions (Article 6)',
    description: 'Article 6 is amended to explicitly include environmental/social characteristics and circularity aspects (durability, reparability, recyclability) as "main characteristics" that can be subject to misleading action rules. Also adds new prohibited practices for future claims and irrelevant benefits.',
    type: 'ucpd',
    level: 'EU',
    concernedParties: ['All traders', 'Marketing teams'],
    articleRef: 'UCPD Article 6 (as amended by ECGT Article 1(2))',
    recitalRef: 'Recitals 3-5'
  },

  'ucpd-future-claims': {
    title: 'Future Environmental Claims',
    description: 'Claims about future environmental performance (e.g., "carbon neutral by 2030") are misleading UNLESS backed by: (1) clear, objective, publicly available, verifiable commitments, (2) a detailed realistic implementation plan with measurable time-bound targets, (3) resource allocation, and (4) regular independent third-party verification with findings available to consumers.',
    type: 'ucpd',
    level: 'EU',
    concernedParties: ['All traders making net-zero/transition claims', 'Sustainability teams'],
    articleRef: 'UCPD Article 6(2)(d)',
    recitalRef: 'Recital 4',
    examples: [
      '"Climate neutral by 2030" - requires public transition plan',
      '"Net zero by 2040" - needs independent verification',
      '"Carbon positive by 2035" - must show resource allocation'
    ]
  },

  'ucpd-irrelevant-benefits': {
    title: 'Irrelevant Benefits',
    description: 'It is misleading to advertise benefits to consumers that are irrelevant and do not result from any feature of the product or business. This prevents traders from highlighting meaningless features to appear more beneficial.',
    type: 'ucpd',
    level: 'EU',
    concernedParties: ['All traders', 'Marketing teams'],
    articleRef: 'UCPD Article 6(2)(e)',
    recitalRef: 'Recital 5',
    examples: [
      '"Gluten-free" bottled water (water never contains gluten)',
      '"Plastic-free" paper sheets (paper does not contain plastic)',
      '"Cholesterol-free" vegetables (plants do not contain cholesterol)'
    ]
  },

  // UCPD Article 7 - Comparisons
  'ucpd-art7': {
    title: 'Comparison Services (Article 7)',
    description: 'When a trader provides a service comparing products on environmental, social, or circularity aspects, they must provide "material information" about the comparison method, products/suppliers compared, and how info is kept up to date.',
    type: 'ucpd',
    level: 'EU',
    concernedParties: ['Comparison websites', 'Review platforms', 'Sustainability rating services'],
    articleRef: 'UCPD Article 7(7)',
    recitalRef: 'Recital 6',
    examples: [
      'Eco-rating comparison sites',
      'Sustainability scoring platforms',
      'Green product comparison tools'
    ]
  },

  // UCPD Annex I - Blacklist
  'ucpd-blacklist': {
    title: 'Always Prohibited Practices (Annex I)',
    description: 'ECGT adds 10 new practices to the "blacklist" of commercial practices that are prohibited in ALL circumstances, without any case-by-case assessment. These cover fake labels, generic claims, carbon offsets, planned obsolescence, and more.',
    type: 'blacklist',
    level: 'EU',
    concernedParties: ['All traders', 'Producers', 'Marketing teams', 'Legal/compliance'],
    articleRef: 'UCPD Annex I (as amended by ECGT Annex)',
    recitalRef: 'Recitals 7-24'
  },

  'bl-fake-labels': {
    title: '2a. Fake Sustainability Labels',
    description: 'Displaying a sustainability label that is NOT based on a certification scheme OR NOT established by public authorities. Self-made labels without third-party verification are banned.',
    type: 'blacklist',
    level: 'EU',
    concernedParties: ['All traders', 'Marketing teams', 'Label users'],
    articleRef: 'UCPD Annex I, point 2a',
    recitalRef: 'Recital 7',
    examples: [
      'Company-created "eco" badges without certification',
      'Self-declared "green" labels',
      'Industry labels without independent verification'
    ]
  },

  'bl-generic-claims': {
    title: '4a. Generic Claims Without Proof',
    description: 'Making a generic environmental claim (e.g., "eco-friendly", "green", "sustainable") for which the trader CANNOT demonstrate recognised excellent environmental performance relevant to the claim.',
    type: 'blacklist',
    level: 'EU',
    concernedParties: ['All traders', 'Marketing teams'],
    articleRef: 'UCPD Annex I, point 4a',
    recitalRef: 'Recital 9-10',
    examples: [
      'Calling a product "green" without EU Ecolabel or equivalent',
      '"Climate friendly" without Class A energy rating',
      '"Eco" branding without ISO 14024 certification'
    ]
  },

  'bl-partial-claims': {
    title: '4b. Whole-Product Claims for Partial Features',
    description: 'Making an environmental claim about the ENTIRE product or ENTIRE business when it actually concerns only a certain aspect of the product or specific activity of the business.',
    type: 'blacklist',
    level: 'EU',
    concernedParties: ['All traders', 'Marketing teams', 'CSR/sustainability teams'],
    articleRef: 'UCPD Annex I, point 4b',
    recitalRef: 'Recital 11',
    examples: [
      '"Made with recycled material" when only packaging is recycled',
      'Company claiming "100% renewable" when only HQ uses solar',
      '"Sustainable product" when only one ingredient is sustainable'
    ]
  },

  'bl-carbon-offsets': {
    title: '4c. Carbon Neutrality via Offsets',
    description: 'Claiming that a product has neutral, reduced, or positive impact on environment in terms of GHG emissions BASED ON offsetting. Claims must be based on actual lifecycle impact, not external carbon credits.',
    type: 'blacklist',
    level: 'EU',
    concernedParties: ['All traders', 'Sustainability teams', 'Marketing'],
    articleRef: 'UCPD Annex I, point 4c',
    recitalRef: 'Recital 12',
    examples: [
      '"Climate neutral" via carbon credit purchase - PROHIBITED',
      '"Carbon compensated" - PROHIBITED',
      '"Net zero product" based on offsets - PROHIBITED',
      'Advertising carbon credit investments separately - ALLOWED'
    ]
  },

  'bl-compliance-feature': {
    title: '10a. Compliance-as-Feature',
    description: "Presenting requirements imposed by law on ALL products within the relevant category on the EU market as a distinctive feature of the trader's offer. Cannot advertise legally-required features as special.",
    type: 'blacklist',
    level: 'EU',
    concernedParties: ['All traders', 'Marketing teams'],
    articleRef: 'UCPD Annex I, point 10a',
    recitalRef: 'Recital 15',
    examples: [
      '"BPA-free" when BPA is banned for all such products',
      '"CFC-free" refrigerant when CFCs are universally banned',
      'Highlighting legally-required safety features as unique'
    ]
  },

  'bl-software-hiding': {
    title: '23d. Hiding Negative Update Effects',
    description: 'Withholding information from the consumer about the fact that a software update will negatively impact the functioning of goods with digital elements or the use of digital content/services.',
    type: 'blacklist',
    level: 'EU',
    concernedParties: ['Tech companies', 'Software developers', 'Device manufacturers'],
    articleRef: 'UCPD Annex I, point 23d',
    recitalRef: 'Recital 17',
    examples: [
      'Not disclosing that OS update slows device',
      'Hiding that update reduces battery life',
      'Not warning about app compatibility issues after update'
    ]
  },

  'bl-fake-necessary': {
    title: '23e. Fake "Necessary" Updates',
    description: 'Presenting a software update as necessary (for conformity) when it only enhances functionality features. Security updates are necessary; feature updates are not.',
    type: 'blacklist',
    level: 'EU',
    concernedParties: ['Tech companies', 'Software developers'],
    articleRef: 'UCPD Annex I, point 23e',
    recitalRef: 'Recital 18',
    examples: [
      'Forcing update for new features while claiming "required"',
      'Presenting cosmetic UI changes as security updates'
    ]
  },

  'bl-planned-obsolescence': {
    title: '23f. Marketing Goods with Durability-Limiting Features',
    description: 'Any commercial communication for goods containing a feature introduced to limit durability, when information about this feature and its effects is available to the trader.',
    type: 'blacklist',
    level: 'EU',
    concernedParties: ['Producers', 'Manufacturers', 'Retailers (if informed)'],
    articleRef: 'UCPD Annex I, point 23f',
    recitalRef: 'Recital 19',
    examples: [
      'Software that degrades performance after set period',
      'Hardware designed to fail after certain use cycles',
      'Batteries that cannot be replaced by design'
    ]
  },

  'bl-false-durability': {
    title: '23g. False Durability Claims',
    description: 'Falsely claiming that under normal conditions of use a good has a certain durability in terms of usage time or intensity.',
    type: 'blacklist',
    level: 'EU',
    concernedParties: ['Producers', 'Manufacturers', 'Retailers'],
    articleRef: 'UCPD Annex I, point 23g',
    recitalRef: 'Recital 20',
    examples: [
      'Claiming washing machine lasts 5000 cycles when it fails at 2000',
      'Overstating battery charge cycles',
      'False claims about product lifespan'
    ]
  },

  'bl-false-repair': {
    title: '23h. False Repairability Claims',
    description: 'Presenting a good as allowing repair when it does not.',
    type: 'blacklist',
    level: 'EU',
    concernedParties: ['Producers', 'Manufacturers', 'Retailers'],
    articleRef: 'UCPD Annex I, point 23h',
    recitalRef: 'Recital 21',
    examples: [
      'Claiming device is repairable when parts are glued/soldered',
      '"User-serviceable" when proprietary tools required',
      'Advertising repairability when spare parts unavailable'
    ]
  },

  'bl-early-consumables': {
    title: '23i. Premature Consumable Replacement',
    description: 'Inducing the consumer to replace or replenish the consumables of a product earlier than necessary for technical reasons.',
    type: 'blacklist',
    level: 'EU',
    concernedParties: ['Printer manufacturers', 'Device makers', 'Consumable sellers'],
    articleRef: 'UCPD Annex I, point 23i',
    recitalRef: 'Recital 23',
    examples: [
      'Printer showing "low ink" when cartridge is 40% full',
      'Water filter replacement alerts before necessary',
      'Software lockouts before consumable is depleted'
    ]
  },

  'bl-third-party-parts': {
    title: '23j. Third-Party Parts Deception',
    description: 'Withholding information about functionality impairment when using non-original consumables/parts/accessories, OR falsely claiming such impairment will occur.',
    type: 'blacklist',
    level: 'EU',
    concernedParties: ['Device manufacturers', 'OEMs', 'Retailers'],
    articleRef: 'UCPD Annex I, point 23j',
    recitalRef: 'Recital 24',
    examples: [
      'Not disclosing printer limits with third-party ink',
      'Falsely claiming non-OEM chargers will damage device',
      'Hidden software blocks for third-party parts'
    ]
  },

  // CRD Branch
  'crd-main': {
    title: 'Amendments to CRD (2011/83/EU)',
    description: 'The Consumer Rights Directive is amended to require new pre-contract information about durability, reparability, software updates, and guarantees. These apply especially to e-commerce and digital goods/services.',
    type: 'crd',
    level: 'EU',
    concernedParties: ['All traders selling to consumers', 'E-commerce platforms', 'Digital service providers'],
    articleRef: 'ECGT Article 2',
    recitalRef: 'Recitals 25-38'
  },

  'crd-definitions': {
    title: 'New CRD Definitions (Article 2)',
    description: 'ECGT adds definitions for commercial guarantee of durability, reparability score, software update, and producer. These enable the new pre-contract information requirements.',
    type: 'definition',
    level: 'EU',
    concernedParties: ['All traders', 'Producers', 'Digital service providers'],
    articleRef: 'CRD Article 2 (as amended by ECGT Article 2(1))'
  },

  'crd-precontract': {
    title: 'Pre-Contract Information (Articles 5 & 6)',
    description: 'New requirements for information that must be provided BEFORE a consumer is bound by a contract. Covers guarantees, durability, reparability, and software updates.',
    type: 'crd',
    level: 'EU',
    concernedParties: ['All traders', 'E-commerce platforms', 'Brick-and-mortar retailers'],
    articleRef: 'CRD Articles 5 & 6 (as amended)',
    recitalRef: 'Recitals 25-36'
  },

  'crd-legal-guarantee': {
    title: 'Legal Guarantee Reminder',
    description: 'Traders must remind consumers of the legal guarantee of conformity (min. 2 years under Directive 2019/771) using a HARMONISED NOTICE. Must be displayed prominently.',
    type: 'crd',
    level: 'EU',
    concernedParties: ['All goods traders', 'E-commerce', 'Retail'],
    articleRef: 'CRD Articles 5(1)(e) and 6(1)(l)',
    recitalRef: 'Recital 27',
    keyDates: [
      { label: 'Commission to specify notice design', date: '27 September 2025' }
    ]
  },

  'crd-durability-guarantee': {
    title: 'Commercial Durability Guarantee',
    description: 'If the producer offers a free commercial guarantee of durability >2 years covering the entire good, AND makes this info available to the trader, the trader must inform consumers using a HARMONISED LABEL showing the guarantee duration and a reminder of the legal guarantee.',
    type: 'crd',
    level: 'EU',
    concernedParties: ['Traders', 'Producers offering durability guarantees'],
    articleRef: 'CRD Articles 5(1)(ea) and 6(1)(la)',
    recitalRef: 'Recitals 26, 28-32',
    keyDates: [
      { label: 'Commission to specify label design', date: '27 September 2025' }
    ]
  },

  'crd-reparability': {
    title: 'Reparability Information',
    description: 'Traders must provide: (1) the EU reparability score if established, OR (2) if no score exists, producer-provided info on spare parts availability, estimated cost, ordering procedure, repair/maintenance instructions, and repair restrictions.',
    type: 'crd',
    level: 'EU',
    concernedParties: ['Goods traders', 'E-commerce', 'Producers'],
    articleRef: 'CRD Articles 5(1)(i)(j) and 6(1)(u)(v)',
    recitalRef: 'Recitals 34-35'
  },

  'crd-software-updates': {
    title: 'Software Update Period',
    description: 'For goods with digital elements, digital content, and digital services: traders must inform consumers about the minimum period during which the producer/provider commits to provide software updates (including security updates).',
    type: 'crd',
    level: 'EU',
    concernedParties: ['Tech companies', 'Device sellers', 'Digital service providers'],
    articleRef: 'CRD Articles 5(1)(ed) and 6(1)(lc)',
    recitalRef: 'Recital 33',
    relatedRegulations: [
      'Directive (EU) 2019/770 (Digital Content)',
      'Directive (EU) 2019/771 (Sale of Goods)'
    ]
  },

  'crd-checkout': {
    title: 'E-Commerce Checkout (Article 8)',
    description: 'For online contracts with payment obligation, the trader must make the consumer aware of the harmonised label (for durability guarantee) in a clear and prominent manner, directly before the consumer places an order.',
    type: 'crd',
    level: 'EU',
    concernedParties: ['E-commerce platforms', 'Online retailers'],
    articleRef: 'CRD Article 8(2)',
    recitalRef: 'Recital 38'
  },

  'crd-harmonised': {
    title: 'Harmonised Notice & Label (Article 22a)',
    description: 'The Commission will specify the design and content of: (1) Harmonised NOTICE for legal guarantee reminder, and (2) Harmonised LABEL for commercial durability guarantees. Both must be easily recognisable, understandable, and reproducible.',
    type: 'crd',
    level: 'EU',
    concernedParties: ['All traders', 'Commission', 'Member States'],
    articleRef: 'CRD Article 22a (new)',
    recitalRef: 'Recitals 27-29',
    keyDates: [
      { label: 'Commission implementing acts deadline', date: '27 September 2025' }
    ]
  },

  'crd-delivery': {
    title: 'Eco-Friendly Delivery Options',
    description: 'Traders should inform consumers about the availability of environmentally friendly delivery options where available, such as cargo bike delivery, electric vehicle delivery, or bundled shipping.',
    type: 'crd',
    level: 'EU',
    concernedParties: ['E-commerce', 'Delivery services', 'Logistics'],
    articleRef: 'CRD Article 6(1)(g)',
    recitalRef: 'Recital 37'
  }
}
