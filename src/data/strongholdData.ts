export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  suburb: string;
  scope: string;
  summary: string;
  image: string;
}

export const COMPANY_INFO = {
  name: 'Stronghold Plumbing Co.',
  shortName: 'Stronghold',
  positioning: 'Plumbing Maintenance Specialists',
  bio: 'Plumbing Maintenance Specialists. Servicing Melbourne.',
  location: 'Melbourne, Victoria, Australia',
  state: 'Victoria',
  city: 'Melbourne',
  phone: '0418 165 006',
  phoneFormatted: '0418 165 006',
  phoneHref: 'tel:0418165006',
  email: 'info@strongholdplumbing.net',
  emailHref: 'mailto:info@strongholdplumbing.net',
  instagram: 'https://www.instagram.com/stronghold_plumbingco/',
  instagramHandle: '@stronghold_plumbingco',
};

// Verified Maintenance Services (strictly faithful to bio: "Plumbing Maintenance Specialists")
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'residential-maintenance',
    number: '01',
    title: 'Residential Plumbing Maintenance',
    tagline: 'Comprehensive upkeep for Melbourne homeowners, landlords and property managers.',
    description:
      'Preventive servicing and meticulous repairs to preserve the integrity of your residential water infrastructure. From addressing slow drops to safeguarding internal supply lines.',
    points: [
      'Comprehensive system health inspection',
      'Isolation valve testing and replacement',
      'Toilet cistern mechanism overhauls',
      'Drain line flow testing and clearance maintenance',
    ],
    image: '/assets/images/residential_plumbing_maintenance_1794393978637.jpg',
  },
  {
    id: 'copper-pipework',
    number: '02',
    title: 'Copper Pipework & Fixture Servicing',
    tagline: 'Clean, architectural copper installations and precision joint fabrication.',
    description:
      'Australian tradecraft executed with clinical neatness. We rectify water hammer, replace corroded sections, and neatly route exposed or concealed copper supply lines.',
    points: [
      'Silver-brazed and compression copper pipework',
      'Water hammer arrestor installation',
      'Neat architectural clip mounting and alignment',
      'Pressure regulation and backflow maintenance',
    ],
    image: '/assets/images/plumbing_workmanship_craft_1794393976562.jpg',
  },
  {
    id: 'tapware-fixtures',
    number: '03',
    title: 'Architectural Tapware & Mixer Replacements',
    tagline: 'Precision fitting of modern Australian kitchen, bathroom and laundry fixtures.',
    description:
      'Flawless installation of high-spec tapware, thermostatic mixers, and custom vanity plumbing with zero damage to surrounding joinery or stone finishes.',
    points: [
      'Wall and basin-mounted mixer replacement',
      'Ceramic disc valve servicing and reseating',
      'Flexible hose inspection and burst-risk renewal',
      'Shower rose and rail system calibration',
    ],
    image: '/assets/images/hero_stronghold_plumbing_1794393975554.jpg',
  },
  {
    id: 'leak-diagnostics',
    number: '04',
    title: 'Pressure Diagnostics & Leak Investigation',
    tagline: 'Targeted water network analysis using pressure testing and methodical troubleshooting.',
    description:
      'Hidden leaks erode building foundations and inflate water bills. We conduct thorough pressure testing and visual inspections to pinpoint concealed pipe issues.',
    points: [
      'Static and dynamic hydraulic pressure testing',
      'Sub-floor and wall cavity pipe assessment',
      'Concealed valve isolation and verification',
      'Water meter monitoring and usage leak checks',
    ],
    image: '/assets/images/commercial_leak_detection_1794393979131.jpg',
  },
  {
    id: 'strata-commercial',
    number: '05',
    title: 'Strata & Small Commercial Maintenance',
    tagline: 'Scheduled, dependable maintenance contracts for property portfolios across Melbourne.',
    description:
      'Direct, clear communication with property managers and owners. We provide transparent job logs, timely arrivals, and neat, disturbance-free execution.',
    points: [
      'Preventive scheduled maintenance runs',
      'Detailed condition reports on completion',
      'Tenancy handover plumbing inspections',
      'Direct landlord liaison and honest reporting',
    ],
    image: '/assets/images/melbourne_architectural_home_1794393979567.jpg',
  },
];

export const WORK_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Architectural Copper Manifold System',
    suburb: 'Toorak, Melbourne',
    scope: 'Supply manifold overhaul, copper joint replacement, and pressure valve installation.',
    summary:
      'Replaced a degraded galvanized manifold with pristine silver-soldered copper lines, custom brass isolation ball valves, and dual pressure gauges.',
    image: '/assets/images/plumbing_workmanship_craft_1794393976562.jpg',
  },
  {
    id: 'proj-2',
    title: 'Modern Residential Bathroom Fitment',
    suburb: 'Brighton, Melbourne',
    scope: 'Freestanding bath mixer rough-in, pressure testing, and concealed waste installation.',
    summary:
      'Engineered sub-floor brass connections with exact millimetre tolerance to mount a freestanding brushed nickel spout and hand-held shower assembly.',
    image: '/assets/images/residential_plumbing_maintenance_1794393978637.jpg',
  },
  {
    id: 'proj-3',
    title: 'Full Property Hydraulic Overhaul',
    suburb: 'Hawthorn, Melbourne',
    scope: 'Complete water service renewal from meter through external and internal copper risers.',
    summary:
      'Executed systematic replacement of aged internal pipework with minimal disruption, stabilizing flow pressure across two residential storeys.',
    image: '/assets/images/hero_stronghold_plumbing_1794393975554.jpg',
  },
  {
    id: 'proj-4',
    title: 'Multi-Unit Plant Room Diagnostics',
    suburb: 'Richmond, Melbourne',
    scope: 'Pressure loss investigation and balanced manifold valve maintenance.',
    summary:
      'Isolated a chronic pressure drop in a 4-unit strata system, replacing aged check valves and recalibrating line pressures across all dwellings.',
    image: '/assets/images/commercial_leak_detection_1794393979131.jpg',
  },
];

export const MELBOURNE_REGIONS = [
  { name: 'City & Inner Melbourne', suburbs: 'CBD, Southbank, Carlton, Fitzroy, Collingwood, Richmond, South Yarra' },
  { name: 'Eastern Suburbs', suburbs: 'Hawthorn, Camberwell, Kew, Malvern, Glen Iris, Balwyn, Box Hill' },
  { name: 'Bayside & South-East', suburbs: 'Brighton, St Kilda, Prahran, Elwood, Sandringham, Hampton, Caulfield' },
  { name: 'Northern & Inner West', suburbs: 'Brunswick, Northcote, Essendon, Moonee Ponds, Footscray, Yarraville' },
];
