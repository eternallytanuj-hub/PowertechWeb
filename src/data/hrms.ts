/**
 * Powertech Engineers — Enterprise HRMS & Site Manpower Data Store
 * Grounded in electrical EPC project operations, site allocations, and utility mandates.
 */

export interface HrmsEmployee {
  id: string; // e.g. PTE-EMP-1021
  name: string;
  designation: string;
  department: "Substations" | "Transmission" | "Underground Cabling" | "Testing & Commissioning" | "Project Management" | "Quality & HSE" | "Finance & HR";
  role: "Site Engineer" | "Project Manager" | "Commissioning Specialist" | "Safety Officer" | "Technician" | "HR Admin" | "Executive Director";
  email: string;
  phone: string;
  joinDate: string;
  siteAllocation: string; // e.g. "220 KV Ayodhya Substation" or "Corporate Office Noida"
  employmentType: "Permanent" | "Site Contract";
  salary: {
    basic: number;
    hra: number;
    siteAllowance: number;
    specialAllowance: number;
    pfDeduction: number;
    taxTds: number;
    netPay: number;
  };
  bankDetails: {
    bankName: string;
    accountNumber: string;
    ifscCode: string;
    branch: string;
  };
  statutory: {
    pfUan: string;
    esiNumber: string;
    panNumber: string;
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
}

export interface HrmsAttendanceRecord {
  id: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: "Present" | "On Site" | "Overtime" | "Leave" | "Weekly Off";
  siteLocation: string;
  shift: "General (09:00 - 18:00)" | "Morning Site (08:00 - 17:00)" | "Night Shutdown (22:00 - 06:00)";
  hoursLogged: number;
}

export interface HrmsLeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  type: "Casual Leave (CL)" | "Earned Leave (EL)" | "Sick Leave (SL)" | "Site Comp-Off";
  fromDate: string;
  toDate: string;
  days: number;
  reason: string;
  substituteEngineer: string;
  status: "Pending" | "Approved" | "Rejected";
  appliedOn: string;
}

export interface HrmsPayrollSlip {
  id: string;
  month: string;
  year: number;
  grossEarnings: number;
  totalDeductions: number;
  netPayable: number;
  paymentDate: string;
  status: "Disbursed" | "Processing";
}

export interface HrmsDocumentItem {
  id: string;
  title: string;
  category: "Statutory" | "Letters" | "Certificates" | "Identity";
  issueDate: string;
  fileSize: string;
  downloadUrl: string;
  verified: boolean;
}

export interface HrmsProjectSite {
  id: string;
  name: string;
  client: string;
  location: string;
  voltage: string;
  leadEngineer: string;
  engineersDeployed: number;
  skilledLaborDeployed: number;
  safetyScore: number;
  status: "Active Execution" | "Testing & Handover" | "Stabilization";
  shiftStatus: "Day Shift Active" | "Night Shutdown Window";
}

export interface HrmsServiceRequest {
  id: string;
  category: "Site PPE & Tools" | "IT / Portal Access" | "HR Letter Request" | "Travel & Site Relocation";
  subject: string;
  priority: "High" | "Medium" | "Urgent";
  status: "Open" | "In Review" | "Resolved";
  createdDate: string;
  resolutionNote?: string;
}

// ==============================================================================
// Initial Seed Data
// ==============================================================================

export const MOCK_CURRENT_USER: HrmsEmployee = {
  id: "PTE-EMP-1048",
  name: "Er. Alok Verma",
  designation: "Senior Substation Project Engineer",
  department: "Substations",
  role: "Site Engineer",
  email: "alok.verma@powertechengineers.com",
  phone: "+91 98737 31301",
  joinDate: "12 May 2019",
  siteAllocation: "220 KV Substation Ayodhya (UPPTCL Package)",
  employmentType: "Permanent",
  salary: {
    basic: 52000,
    hra: 20800,
    siteAllowance: 15000,
    specialAllowance: 9200,
    pfDeduction: 6240,
    taxTds: 4500,
    netPay: 86260,
  },
  bankDetails: {
    bankName: "Punjab National Bank",
    accountNumber: "0847000100482910",
    ifscCode: "PUNB0084700",
    branch: "Sector-63 Noida",
  },
  statutory: {
    pfUan: "101489201948",
    esiNumber: "Exempt (Above Ceiling)",
    panNumber: "ABCDE1234F",
  },
  emergencyContact: {
    name: "Dr. Sunita Verma",
    relationship: "Spouse",
    phone: "+91 98711 22334",
  },
};

export const MOCK_ATTENDANCE_RECORDS: HrmsAttendanceRecord[] = [
  {
    id: "att-01",
    date: "2026-09-30",
    checkIn: "08:15 AM",
    checkOut: "Active on Site",
    status: "On Site",
    siteLocation: "220 KV Ayodhya Switchyard Bay-4",
    shift: "Morning Site (08:00 - 17:00)",
    hoursLogged: 7.5,
  },
  {
    id: "att-02",
    date: "2026-09-29",
    checkIn: "08:10 AM",
    checkOut: "06:00 PM",
    status: "Present",
    siteLocation: "Ayodhya Control Room",
    shift: "Morning Site (08:00 - 17:00)",
    hoursLogged: 9.8,
  },
  {
    id: "att-03",
    date: "2026-09-28",
    checkIn: "08:20 AM",
    checkOut: "05:45 PM",
    status: "Present",
    siteLocation: "Transformer Plinth Yard",
    shift: "Morning Site (08:00 - 17:00)",
    hoursLogged: 9.4,
  },
  {
    id: "att-04",
    date: "2026-09-27",
    checkIn: "09:00 AM",
    checkOut: "02:00 AM",
    status: "Overtime",
    siteLocation: "Busbar Shutdown Window",
    shift: "Night Shutdown (22:00 - 06:00)",
    hoursLogged: 12.0,
  },
  {
    id: "att-05",
    date: "2026-09-26",
    checkIn: "—",
    checkOut: "—",
    status: "Weekly Off",
    siteLocation: "Off-Site",
    shift: "General (09:00 - 18:00)",
    hoursLogged: 0,
  },
];

export const MOCK_LEAVE_REQUESTS: HrmsLeaveRequest[] = [
  {
    id: "LR-2026-089",
    employeeId: "PTE-EMP-1048",
    employeeName: "Er. Alok Verma",
    type: "Casual Leave (CL)",
    fromDate: "2026-10-12",
    toDate: "2026-10-14",
    days: 3,
    reason: "Personal family commitment in Lucknow",
    substituteEngineer: "Er. Suresh Singh (Lead Site Engineer)",
    status: "Pending",
    appliedOn: "2026-09-29",
  },
  {
    id: "LR-2026-042",
    employeeId: "PTE-EMP-1048",
    employeeName: "Er. Alok Verma",
    type: "Site Comp-Off",
    fromDate: "2026-08-18",
    toDate: "2026-08-19",
    days: 2,
    reason: "Compensatory off for continuous 72-hr Ayodhya trial charging support",
    substituteEngineer: "Er. Nitin Joshi",
    status: "Approved",
    appliedOn: "2026-08-15",
  },
  {
    id: "LR-2026-011",
    employeeId: "PTE-EMP-1048",
    employeeName: "Er. Alok Verma",
    type: "Earned Leave (EL)",
    fromDate: "2026-05-02",
    toDate: "2026-05-08",
    days: 7,
    reason: "Annual leave after western UP transmission package handover",
    substituteEngineer: "Er. Anand Verma",
    status: "Approved",
    appliedOn: "2026-04-20",
  },
];

export const MOCK_PAYROLL_SLIPS: HrmsPayrollSlip[] = [
  {
    id: "PAY-2026-08",
    month: "August",
    year: 2026,
    grossEarnings: 97000,
    totalDeductions: 10740,
    netPayable: 86260,
    paymentDate: "31 Aug 2026",
    status: "Disbursed",
  },
  {
    id: "PAY-2026-07",
    month: "July",
    year: 2026,
    grossEarnings: 97000,
    totalDeductions: 10740,
    netPayable: 86260,
    paymentDate: "31 Jul 2026",
    status: "Disbursed",
  },
  {
    id: "PAY-2026-06",
    month: "June",
    year: 2026,
    grossEarnings: 97000,
    totalDeductions: 10740,
    netPayable: 86260,
    paymentDate: "30 Jun 2026",
    status: "Disbursed",
  },
];

export const MOCK_HR_DOCUMENTS: HrmsDocumentItem[] = [
  {
    id: "DOC-01",
    title: "Official Appointment & Designation Letter",
    category: "Letters",
    issueDate: "12 May 2019",
    fileSize: "420 KB",
    downloadUrl: "#",
    verified: true,
  },
  {
    id: "DOC-02",
    title: "High-Voltage Site Safety & CEIG Authorization Card",
    category: "Identity",
    issueDate: "15 Jan 2024",
    fileSize: "890 KB",
    downloadUrl: "#",
    verified: true,
  },
  {
    id: "DOC-03",
    title: "Latest Annual Increment & Compensation Statement",
    category: "Letters",
    issueDate: "01 Apr 2026",
    fileSize: "310 KB",
    downloadUrl: "#",
    verified: true,
  },
  {
    id: "DOC-04",
    title: "PF UAN & ESI Statutory Registration Certificate",
    category: "Statutory",
    issueDate: "20 May 2019",
    fileSize: "550 KB",
    downloadUrl: "#",
    verified: true,
  },
];

export const MOCK_PROJECT_SITES: HrmsProjectSite[] = [
  {
    id: "site-ayodhya",
    name: "220 KV Substation Ayodhya",
    client: "UPPTCL (Uttar Pradesh Power Transmission Corp)",
    location: "Ayodhya, Uttar Pradesh",
    voltage: "220 KV / 132 KV EHV",
    leadEngineer: "Er. Alok Verma",
    engineersDeployed: 8,
    skilledLaborDeployed: 45,
    safetyScore: 99.4,
    status: "Active Execution",
    shiftStatus: "Day Shift Active",
  },
  {
    id: "site-rajouri",
    name: "Rajouri Urban Electrification & Feeder Modernization",
    client: "Power Development Department, J&K (PDPW)",
    location: "Rajouri & Surankote, J&K",
    voltage: "33 / 11 KV Distribution",
    leadEngineer: "Er. Vikram Rana",
    engineersDeployed: 6,
    skilledLaborDeployed: 32,
    safetyScore: 98.8,
    status: "Testing & Handover",
    shiftStatus: "Day Shift Active",
  },
  {
    id: "site-dvvnl-cabling",
    name: "Agra Urban Trenchless HDD HT Cabling",
    client: "Dakshinanchal Vidyut Vitran Nigam Limited (DVVNL)",
    location: "Agra City Division, Uttar Pradesh",
    voltage: "33 / 11 KV Underground",
    leadEngineer: "Er. Deepak Yadav",
    engineersDeployed: 5,
    skilledLaborDeployed: 24,
    safetyScore: 100.0,
    status: "Active Execution",
    shiftStatus: "Night Shutdown Window",
  },
  {
    id: "site-upptcl-west",
    name: "Western UP 220 KV Transmission Corridors",
    client: "UPPTCL Transmission Wing",
    location: "Meerut & Moradabad Circles",
    voltage: "220 KV Overhead Lines",
    leadEngineer: "Er. Suresh Singh",
    engineersDeployed: 7,
    skilledLaborDeployed: 50,
    safetyScore: 99.1,
    status: "Active Execution",
    shiftStatus: "Day Shift Active",
  },
];

export const MOCK_SERVICE_REQUESTS: HrmsServiceRequest[] = [
  {
    id: "SR-892",
    category: "Site PPE & Tools",
    subject: "Requirement of Class-4 Dielectric Testing Gloves & Helmet Replacements",
    priority: "High",
    status: "In Review",
    createdDate: "2026-09-28",
    resolutionNote: "Dispatched from Noida central store via courier #BLUEDART-8891.",
  },
  {
    id: "SR-810",
    category: "HR Letter Request",
    subject: "Visa / Address Confirmation Letter for Official State Utility Delegation",
    priority: "Medium",
    status: "Resolved",
    createdDate: "2026-09-14",
    resolutionNote: "Signed letter issued and uploaded to Documents tab.",
  },
];

export const MOCK_COMPANY_CIRCULARS = [
  {
    id: "CIRC-2026-09",
    title: "Monsoon Safety Guidelines & Live Switchyard Grounding Protocols",
    date: "25 Sep 2026",
    priority: "Mandatory Safety Directives",
    content: "All project managers must ensure continuous monitoring of switchyard water drainage, earth pit resistance audits (<1.0 ohm), and mandatory safety briefings prior to equipment charging.",
  },
  {
    id: "CIRC-2026-08",
    title: "Festival Advance & October Puja Holiday Calendar for Site Personnel",
    date: "18 Sep 2026",
    priority: "HR Circular",
    content: "Disbursement schedule for festive advances and staggered holiday rosters across Ayodhya, Noida, and regional site hubs.",
  },
];
