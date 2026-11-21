/*
  ALL CONTENT LIVES HERE. Edit this file on GitHub (pencil icon) and the site updates.

  1. Keep SHOW_TODOS = true while you are still adding details. Amber [add: ...] tags show what is missing.
  2. When you have filled everything in, set SHOW_TODOS = false. The tags disappear and empty fields are hidden.
*/
var SHOW_TODOS = true;

function todo(text) {
  return SHOW_TODOS ? '<span class="todo">[add: ' + text + ']</span>' : '';
}

var SITE = {
  name: 'Souparna Biswas',
  role: 'Policy researcher',
  eyebrow: 'Policy researcher · Technology, innovation and public policy',
  cycle: ['digital public services', 'national AI strategy', 'electronics skilling', 'government programmes', 'sustainability policy'],
  lede: 'Master’s in Public Administration and Policy Studies from Central University of Kerala. Policy research and impact assessment at IIM Kozhikode, IIPA and ISB, now at XLRI, and studying technology policy at the Takshashila Institution.',
  strip: [
    { k: 'Now', v: 'Academic Associate, XLRI' },
    { k: 'Also', v: 'Assisting the Centre for Sustainability, XLRI' },
    { k: 'Studying', v: 'Graduate Certificate in Public Policy (Technology Policy), Takshashila Institution' },
      ],
  methods: ['Surveys', 'Stakeholder interviews', 'Monitoring & Evaluation', 'Policy analysis', 'Policy editing', 'Concept notes and briefs', 'Leading small research teams'],
  contact: {
    email: '',        // e.g. 'name@example.com'
    linkedin: '',     // e.g. 'https://www.linkedin.com/in/your-name'
    github: '',       // e.g. 'https://github.com/your-username'
    cv: ''            // upload your PDF next to index.html, then e.g. 'Souparna-Biswas-CV.pdf'
  }
};

var THEMES = [
  { id: 'gov', label: 'Digital governance', c: 'var(--c-gov)', blurb: 'E-governance, digital public services and how citizens reach government.' },
  { id: 'ai', label: 'AI policy', c: 'var(--c-ai)', blurb: 'National AI strategy and who is accountable when AI systems act.' },
  { id: 'tech', label: 'Technology and industry', c: 'var(--c-tech)', blurb: 'Electronics manufacturing, skilling, commercialisation and trade.' },
  { id: 'imp', label: 'Impact assessment', c: 'var(--c-imp)', blurb: 'Surveys, interviews and field research that show whether programmes work.' },
  { id: 'dev', label: 'Development', c: 'var(--c-dev)', blurb: 'Socio-economic development evidence for district administrations.' },
  { id: 'sus', label: 'Energy and sustainability', c: 'var(--c-sus)', blurb: 'Energy transition, climate resilience, the circular economy and urban air quality.' }
];

var PROJECTS = [
  {
    id: 'nampet', tags: ['imp', 'tech'], color: 'var(--c-imp)', kicker: 'Impact assessment',
    title: 'Impact assessment of NaMPET Phase III',
    org: 'IIM Kozhikode · Funded by the Ministry of Electronics and Information Technology (MeitY)',
    chips: ['20 institutions', '20 states', 'Team of three'],
    question: 'Did the third phase of the NaMPET programme turn research funding into outcomes, and where did it fall short?',
    role: 'Research Associate. Led a three-member team. ' + todo('dates'),
    did: [
      'Ran institutional surveys and stakeholder interviews across 20 institutions in 20 states.',
      'Coordinated fieldwork across the team so that responses could be compared across sites.',
      todo('one concrete task, such as instrument design, analysis or report chapters')
    ],
    findings: 'Research outcomes were not reaching adoption. The gaps were widest in technology commercialisation and in collaboration between institutions and industry.',
    out: todo('report, summary or recommendation you can share, with a link if it is public')
  },
  {
    id: 'esdm', tags: ['tech', 'gov'], color: 'var(--c-tech)', kicker: 'Electronics · Skilling',
    title: 'Electronics skilling ecosystem research',
    org: 'Indian Institute of Public Administration (IIPA), New Delhi',
    chips: ['ESDM', 'Skilling', 'Ecosystem mapping'],
    question: 'How is the Electronics System Design and Manufacturing (ESDM) ecosystem building the skills it needs?',
    role: 'Researcher. ' + todo('title and dates'),
    did: [
      'Researched the ESDM skilling ecosystem.',
      todo('what you analysed, who you spoke to, and what you wrote')
    ],
    out: todo('paper, note or presentation, with a link')
  },
  {
    id: 'egov', tags: ['gov', 'ai'], color: 'var(--c-gov)', kicker: 'E-governance · AI policy',
    title: 'E-governance, AI strategy and grievance redressal',
    org: 'Indian Institute of Public Administration (IIPA), New Delhi',
    chips: ['UMANG', 'National AI Strategy', 'Cyber hygiene', 'E-grievance redressal'],
    question: 'How do digital platforms and AI strategy shape the way citizens reach government, and how well are their complaints resolved?',
    role: 'Researcher on e-governance. ' + todo('title and dates'),
    did: [
      'Researched e-grievance redressal and presented the findings. ' + todo('venue and date'),
      'Worked on UMANG, India’s National AI Strategy and cyber hygiene. ' + todo('what you wrote or analysed on each'),
      'Attended the 27th National e-Governance Conference and the ORF workshop on Democratizing AI.'
    ],
    out: todo('paper, slides or note, with a link')
  },
  {
    id: 'agentic', tags: ['ai'], color: 'var(--c-ai)', kicker: 'AI policy · Healthcare', status: 'In progress',
    title: 'Who is accountable when AI agents act? A framework for healthcare',
    org: 'Policy paper addressed to the Minister for Electronics and Information Technology',
    chips: ['Agentic AI', 'Healthcare', 'Liability', 'Security'],
    question: 'What responsibility and accountability framework should India adopt for agentic AI, starting with healthcare?',
    role: 'Author. ' + todo('context, for example course, fellowship or independent work'),
    did: [
      'Maps how AI agents get permissions, run code, use tools and hand work to other agents.',
      'Sets out which actors control each step: developers, application providers, deployers and users.',
      'Reviews existing laws, sectoral regulation, contracts and technical standards.',
      'Narrows to healthcare AI and the questions of security, liability and responsibility.'
    ],
    out: todo('draft or final paper, with a link, once you are ready to share it')
  },
  {
    id: 'isb', tags: ['dev'], color: 'var(--c-dev)', kicker: 'Development · District administration',
    title: 'Development research and policy editing',
    org: 'ISB Bharti Institute of Public Policy',
    chips: ['Research', 'Policy editing', 'District engagement'],
    question: 'What does evidence on socio-economic development say to the district administrations that act on it?',
    role: 'Research and policy editing, with direct engagement of district administration. ' + todo('title and dates'),
    did: [
      'Supported research on socio-economic development questions.',
      'Edited policy documents for clarity and evidence.',
      'Engaged district administration directly. ' + todo('districts, states or programmes')
    ],
    out: todo('edited publications or briefs you can name')
  },
  {
    id: 'xlri', tags: ['sus'], color: 'var(--c-sus)', kicker: 'Sustainability · Institution building', status: 'In progress',
    title: 'Reviving the Centre for Sustainability',
    org: 'XLRI',
    chips: ['Academic Associate', 'Centre revival'],
    question: 'How can the Centre for Sustainability become an active home for research and teaching again?',
    role: 'Academic Associate at XLRI, recently associated with the Centre to help revive it.',
    did: [
      todo('what you are doing: research agenda, events, partnerships, curriculum, outreach'),
      'Builds on earlier reading and research in climate resilience, the circular economy, migration and urban policy.'
    ],
    out: todo('first outputs or plans you can share')
  },
  {
    id: 'solar', tags: ['tech', 'sus'], color: 'var(--c-sus)', kicker: 'Trade policy · Energy',
    title: 'US tariffs and solar PV modules',
    org: 'Takshashila Institution · Graduate Certificate in Public Policy, group assignment',
    chips: ['Tariffs', 'Solar PV', 'First and second-order effects'],
    question: 'What do the recent US tariffs mean for the solar PV module trade?',
    role: 'Group member. Wrote the solar PV module page. ' + todo('confirm your part'),
    did: [
      'Set out the background of the good and the history of tariff changes up to the present.',
      'Analysed first-order and second-order impacts.',
      'Cited sources for every claim.'
    ],
    out: todo('a short summary of your conclusion, or the page itself if you can share it')
  },
  {
    id: 'smog', tags: ['sus'], color: 'var(--c-sus)', kicker: 'Environment · Public health',
    title: 'Delhi air pollution and health: a community discussion',
    org: 'Takshashila Institution · Community organisation exercise',
    chips: ['Air quality', 'Public health', 'Community organising'],
    question: 'Why does Delhi’s air get so bad each winter, and what could residents and government change?',
    role: 'Convened and documented a group discussion with Delhi NCR colleagues.',
    did: [
      'Surfaced causes the group lived with: festival-season pollution and solo trips by car or cab despite public transport.',
      'Recorded real disagreement, for example whether a cracker ban is workable and whether people will give up their own cars.',
      'Compared solutions: changing the travel system, changing the energy system and regulating industrial carbon emissions.'
    ],
    out: todo('slides or article, if you want to share them')
  },
  {
    id: 'energy', tags: ['sus', 'tech'], color: 'var(--c-sus)', kicker: 'Energy transition · Writing samples',
    title: 'Energy transition writing samples',
    org: 'Independent analysis',
    chips: ['Water-energy-food nexus', 'Decentralised renewables', 'Global South'],
    question: 'How should India finance and coordinate its energy transition across water, food and rural livelihoods?',
    role: 'Author of three pieces. ' + todo('confirm you are free to share these publicly'),
    did: [
      'A technical note on the water-energy-food nexus and India’s energy transition, covering PM-KUSUM and a proposed nexus screening cell.',
      'A concept note on decentralised renewable energy for the rural economy, written for financial-sector leaders.',
      'A slide deck presenting India’s energy transition as a model for the Global South.'
    ],
    out: todo('links to the notes or deck, or short extracts')
  }
];

var PLACES = [
  { k: 'Current', n: 'XLRI', d: 'Academic Associate. Helping revive the Centre for Sustainability.' },
  { k: 'Research', n: 'IIM Kozhikode', d: 'Research Associate on the MeitY-funded impact assessment of NaMPET Phase III.' },
  { k: 'Governance', n: 'IIPA', d: 'E-governance, UMANG, National AI Strategy, cyber hygiene, e-grievance redressal and the ESDM skilling ecosystem.' },
  { k: 'Development', n: 'ISB Bharti Institute of Public Policy', d: 'Socio-economic development research, policy editing, district administration engagement.' }
];

var LEARNING = [
  { k: 'Degree', n: 'Master’s in Public Administration and Policy Studies', d: 'Central University of Kerala' },
  { k: 'Studying', n: 'Graduate Certificate in Public Policy, Technology Policy', d: 'Takshashila Institution' },
  { k: 'Summer school', n: 'International Migration, Conflict and Public Policy', d: 'London School of Economics (LSE)' },
  { k: 'Conference', n: '27th National e-Governance Conference', d: 'Attended' },
  { k: 'Workshop', n: 'Democratizing AI', d: 'Observer Research Foundation (ORF)' }
];
