import { LeadershipMember } from "@/types";

/**
 * Leadership Team Data Store
 * Grounded in Powertech Engineers' executive governance and technocrat engineering foundation.
 * Authentic data and portraits extracted from company leadership documentation.
 */
export interface EnhancedLeader extends LeadershipMember {
  statement: string;
  experienceYears: number;
  education: string;
  responsibilities: string[];
  contributions: string[];
  roleBadge: string;
  keyExpertise?: string[];
}

export const leadershipData: EnhancedLeader[] = [
  {
    id: "rakesh-ahuja",
    name: "Mr. Rakesh Ahuja",
    designation: "Group Chairman & Visionary Statesman",
    roleBadge: "Finance & Governance",
    experienceYears: 40,
    education: "Senior Business Tycoon & Finance Statesman",
    biography:
      "A well-recognized business tycoon with over 40 years of extensive experience in finance and business leadership. Visionary at the helm of a diversified group of companies, his strong business acumen and practical financial insight have driven excellence across power, construction, manufacturing, and social initiatives. Renowned for strategic foresight, institutional building, and value creation, he has successfully navigated multiple business cycles while fostering innovation and sustainable growth. His adaptability, integrity, and commitment to continuous learning have made him a respected statesman in the business community. Under his stewardship, the group continues to expand its footprint while upholding the highest standards of governance, entrepreneurship, and social responsibility.",
    statement:
      "Adaptability, integrity, and institutional building are the foundations of enduring enterprise value and nation-building infrastructure.",
    responsibilities: [
      "Corporate Governance & Strategic Foresight",
      "Capital Allocation & Practical Financial Acumen",
      "Multi-Sector Institutional Building & Enterprise Scaling",
      "Sustainable Growth, Ethical Stewardship & Social Responsibility",
    ],
    contributions: [
      "Over 40 years steering diversified enterprises across power, infrastructure, manufacturing, and social impact",
      "Established institutional discipline, strategic foresight, and sustainable financial governance frameworks",
      "Successfully navigated multiple national business cycles while driving premier standards of corporate integrity",
    ],
    qualifications: [
      "40+ Years Corporate Governance & Business Leadership",
      "Respected Statesman in the National Business Community",
      "Diversified Group Leadership Across Infrastructure & Industry",
    ],
    image: {
      src: "/leadership/rakesh-ahuja.png",
      alt: "Mr. Rakesh Ahuja - Group Chairman & Visionary Statesman",
    },
    keyExpertise: [
      "Corporate Governance",
      "Financial Acumen",
      "Strategic Foresight",
      "Enterprise Scaling",
      "Social Responsibility",
    ],
    linkedinUrl: null,
  },
  {
    id: "mayoor-ahuja",
    name: "Mr. Mayoor Ahuja",
    designation: "Managing Director & Executive Leader",
    roleBadge: "Growth & Strategy",
    experienceYears: 18,
    education: "Internationally Qualified MBA (Finance & Business Management)",
    biography:
      "An internationally qualified MBA with a strong foundation in finance and business management, Mr. Mayoor Ahuja brings global exposure and strategic foresight to the company's growth agenda. His hands-on financial insight and results-driven approach have delivered impact across power and construction, driving performance in highly competitive markets. As a successful business leader steering multiple companies, he is recognized as a youth icon in the power sector. His deep connection to the industry, coupled with adaptability and a forward-thinking mindset, positions him at the forefront of next-generation infrastructure development. Known for blending entrepreneurial agility with institutional discipline, he continues to scale operations, forge strategic partnerships, and champion innovation across the value chain.",
    statement:
      "Blending entrepreneurial agility with institutional discipline empowers us to scale operations and champion innovation across the power infrastructure value chain.",
    responsibilities: [
      "Global Market Exposure & Enterprise Growth Agenda",
      "Hands-on Financial Insights & High-Performance Execution",
      "Next-Generation Infrastructure Development & Tech Scaling",
      "Strategic Partnerships, Institutional Discipline & Ecosystem Expansion",
    ],
    contributions: [
      "Recognized as a youth icon and forward-thinking business leader across the Indian power infrastructure landscape",
      "Scaled multi-entity operations and forged high-impact strategic joint ventures in competitive markets",
      "Championed next-gen operational architectures blending entrepreneurial agility with institutional discipline",
    ],
    qualifications: [
      "Internationally Qualified MBA in Finance & Business Management",
      "Recognized Youth Icon in the Indian Power Infrastructure Sector",
      "Executive Leadership Across Multi-Entity Infrastructure Businesses",
    ],
    image: {
      src: "/leadership/mayoor-ahuja.png",
      alt: "Mr. Mayoor Ahuja - Managing Director & Executive Leader",
    },
    keyExpertise: [
      "Strategic Growth",
      "Financial Insight",
      "Power Sector Leadership",
      "Strategic Alliances",
      "Value Chain Innovation",
    ],
    linkedinUrl: null,
  },
  {
    id: "pk-bhatt",
    name: "Mr. P. K. Bhatt",
    designation: "Director (Projects & Operations) & Board Advisor",
    roleBadge: "Projects & Operations",
    experienceYears: 38,
    education: "Veteran Industrial & Process Engineering Technocrat",
    biography:
      "Over 38 years of rich experience in industrial projects, plant operations, and maintenance across diverse sectors. Led project and operations functions as Head of Projects & Operations at Continental Carbon India Ltd., a leading petrochemical company manufacturing Carbon Black in India. Proven track record of heading multiple organizations across the country, driving operational excellence, asset reliability, and large-scale project delivery. Recognized for visionary leadership, technical depth, and sustained contributions to India's industrial and petrochemical landscape. Advises the board on capital allocation, M&A strategy, and regulatory policy changes to safeguard stakeholder interests.",
    statement:
      "Operational excellence and asset reliability are engineered through deep technical depth, disciplined maintenance standards, and zero-defect project delivery.",
    responsibilities: [
      "Industrial Projects Engineering & End-to-End Delivery",
      "Plant Operations, Reliability Engineering & Asset Maintenance",
      "Process Industry Engineering & Electrical Systems Management",
      "Board Advisory: Capital Allocation, M&A Strategy & Regulatory Changes",
    ],
    contributions: [
      "Former Head of Projects & Operations at Continental Carbon India Ltd., leading national petrochemical manufacturing",
      "Headed multiple organizations across India, driving operational excellence, asset reliability, and mega-project delivery",
      "Key board advisor on strategic capital allocation, M&A due diligence, and regulatory policy compliance",
    ],
    qualifications: [
      "38+ Years Industrial Projects & Plant Operations Authority",
      "Former Head of Projects & Operations, Continental Carbon India Ltd.",
      "Senior Specialist in Process Industry & High-Voltage Electrical Systems",
    ],
    image: {
      src: "/leadership/pk-bhatt.png",
      alt: "Mr. P. K. Bhatt - Director (Projects & Operations)",
    },
    keyExpertise: [
      "Industrial Projects",
      "Plant Operations & Maintenance",
      "Process Industry Engineering",
      "Electrical Systems Management",
      "Project Execution & Supervision",
    ],
    linkedinUrl: null,
  },
  {
    id: "nitin-saxena",
    name: "Mr. Nitin Saxena",
    designation: "Director (Finance, Audits & Corporate Governance)",
    roleBadge: "Finance & Taxation",
    experienceYears: 28,
    education: "Seasoned Financial Authority & Corporate Law Specialist",
    biography:
      "A seasoned financial leader with 28 years of experience, bringing deep expertise in accounts, finance, and taxation. Highly skilled in managing statutory and investigative audits while ensuring full compliance with company law and regulatory frameworks. Maintains strong relationships across corporate and banking networks, enabling strategic fundraising, risk management, and sustainable financial growth. Known for combining financial acumen with governance excellence to drive organizational integrity and long-term value creation. Instrumental in structuring cost optimization initiatives, implementing robust internal controls, and leading digital transformation of financial systems.",
    statement:
      "Combining financial acumen with governance excellence secures organizational integrity, robust internal controls, and long-term stakeholder value.",
    responsibilities: [
      "Financial Management, Corporate Accounting & Taxation Oversight",
      "Statutory, Investigative & Forensic Audits Compliance",
      "Corporate & Banking Network Relations, Capital Raising & Risk Management",
      "Cost Optimization Frameworks, Internal Controls & Digital Financial Transformation",
    ],
    contributions: [
      "28 years commanding statutory audits, direct/indirect taxation, and corporate law compliance",
      "Fostered deep relationships across premier corporate and institutional banking syndicates",
      "Spearheaded digital transformation of enterprise financial systems and internal control architectures",
    ],
    qualifications: [
      "28+ Years Financial Leadership, Corporate Accounts & Taxation Authority",
      "Specialist in Company Law Frameworks & Statutory Audit Governance",
      "Strategic Financial Risk Management & Capital Optimization Architect",
    ],
    image: {
      src: "/leadership/nitin-saxena.png",
      alt: "Mr. Nitin Saxena - Director (Finance, Audits & Corporate Governance)",
    },
    keyExpertise: [
      "Financial Management",
      "Corporate Accounting",
      "Administration Management",
      "Budgeting & Planning",
      "Compliance & Governance",
    ],
    linkedinUrl: null,
  },
  {
    id: "siddhartha-tiwari",
    name: "Mr. Siddhartha Tiwari",
    designation: "Director (EPC Projects & Power Systems Engineering)",
    roleBadge: "EPC & Power Systems",
    experienceYears: 16,
    education: "M.Tech (Power Systems), Ph.D Researcher (Renewable Energy)",
    biography:
      "Distinguished professional with 16 years of experience across the power sector, spanning the complete value chain from generation and transmission to distribution. Deep expertise in the EPC domain covering EHV substations, transmission lines, and power system design. Proven strengths in techno-commercial tendering, statutory liaisoning with clients and government bodies, strategic project planning, and end-to-end turnkey execution of complex electrical projects. Recognized for delivering large-scale infrastructure with precision, compliance, and operational excellence. Holds an M.Tech in Power Systems and is currently pursuing a Ph.D. in Renewable Energy, combining industry leadership with advanced academic research.",
    statement:
      "Delivering large-scale grid infrastructure requires uniting rigorous power systems engineering with turnkey techno-commercial precision.",
    responsibilities: [
      "Turnkey EPC Project Execution: EHV Substations & Transmission Lines",
      "Power System Engineering, SLD Network Design & Technical Calculations",
      "Techno-Commercial Tendering, Procurement & Commercial Contracts",
      "Statutory Authority Liaisoning (CEIG, Discoms, Transcos) & Site Operations",
    ],
    contributions: [
      "16 years driving turnkey delivery across the complete power value chain (generation, transmission, distribution)",
      "Engineered high-precision EHV substations, transmission lines, and utility switchyard integrations",
      "Advanced academic research through Ph.D studies in Renewable Energy combined with high-impact field execution",
    ],
    qualifications: [
      "M.Tech in Power Systems Engineering",
      "Ph.D Researcher in Renewable Energy & Grid Integration",
      "Turnkey EHV EPC Project Planning, Tendering & Statutory Liaison Specialist",
    ],
    image: {
      src: "/leadership/siddhartha-tiwari.png",
      alt: "Mr. Siddhartha Tiwari - Director (EPC Projects & Power Systems)",
    },
    keyExpertise: [
      "Project Management",
      "Tendering & Procurement",
      "Strategic Planning",
      "Technical Assistance",
      "Site Operations & Coordination",
    ],
    linkedinUrl: null,
  },
];
