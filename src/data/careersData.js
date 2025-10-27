import { FaBriefcase, FaMapMarkerAlt, FaClock, FaBuilding, FaLaptopCode, FaUserTie, FaChartLine, FaDollarSign } from 'react-icons/fa';

// Sample Job Listings - Easy to add/edit/delete by non-technical users
export const jobListings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Technology",
    location: "Bangalore",
    type: "Full-time",
    experience: "5-8 years",
    salary: "15-25 LPA",
    description: "We are looking for an experienced Senior Software Engineer to join our technology team. You will be responsible for designing, developing, and maintaining high-quality software solutions.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of experience in software development",
      "Strong proficiency in JavaScript, React, Node.js",
      "Experience with cloud platforms (AWS/GCP)",
      "Excellent problem-solving and communication skills"
    ],
    responsibilities: [
      "Design and develop scalable software applications",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
      "Participate in code reviews",
      "Contribute to architectural decisions"
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance",
      "Work-life balance",
      "Professional development opportunities",
      "Flexible working hours"
    ],
    status: "open",
    icon: FaLaptopCode,
    color: "bg-blue-500",
    publishedDate: "2024-01-15",
    applicationDeadline: "2024-03-15"
  },
  {
    id: 2,
    title: "Project Manager - Real Estate",
    department: "Projects",
    location: "Hyderabad",
    type: "Full-time",
    experience: "6-10 years",
    salary: "18-30 LPA",
    description: "Join our projects team to manage large-scale real estate developments. You will oversee project lifecycle, coordinate with stakeholders, and ensure timely project delivery.",
    requirements: [
      "Bachelor's degree in Civil Engineering or Construction Management",
      "6+ years of project management experience",
      "PMP certification preferred",
      "Strong leadership and communication skills",
      "Experience in real estate development"
    ],
    responsibilities: [
      "Plan and execute project timelines",
      "Manage project budgets and resources",
      "Coordinate with architects, contractors, and consultants",
      "Ensure quality standards and compliance",
      "Report to senior management"
    ],
    benefits: [
      "Attractive salary package",
      "Performance bonuses",
      "Comprehensive health coverage",
      "Team building activities",
      "Career growth opportunities"
    ],
    status: "open",
    icon: FaChartLine,
    color: "bg-green-500",
    publishedDate: "2024-01-20",
    applicationDeadline: "2024-03-20"
  },
  {
    id: 3,
    title: "Business Development Manager",
    department: "Sales & Marketing",
    location: "Hyderabad, Bangalore",
    type: "Full-time",
    experience: "4-7 years",
    salary: "12-20 LPA",
    description: "We are seeking a dynamic Business Development Manager to drive growth and expand our market presence. This role involves building relationships, identifying opportunities, and closing deals.",
    requirements: [
      "Bachelor's degree in Business, Marketing, or related field",
      "4+ years of experience in business development",
      "Proven track record in sales and client acquisition",
      "Excellent negotiation and networking skills",
      "Strong presentation abilities"
    ],
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Build and maintain client relationships",
      "Prepare proposals and presentations",
      "Negotiate contracts and agreements",
      "Achieve sales targets and KPIs"
    ],
    benefits: [
      "Competitive base salary + commissions",
      "Performance incentives",
      "Travel allowances",
      "Health insurance",
      "Continuous learning programs"
    ],
    status: "open",
    icon: FaDollarSign,
    color: "bg-purple-500",
    publishedDate: "2024-01-22",
    applicationDeadline: "2024-03-22"
  },
  {
    id: 4,
    title: "HR Business Partner",
    department: "Human Resources",
    location: "Hyderabad",
    type: "Full-time",
    experience: "3-6 years",
    salary: "8-15 LPA",
    description: "Join our HR team to support talent acquisition, employee engagement, and organizational development. You will partner with leadership to drive HR initiatives.",
    requirements: [
      "Master's degree in HR or related field",
      "3+ years of HR experience",
      "Strong understanding of labor laws",
      "Excellent interpersonal skills",
      "Experience in talent acquisition and retention"
    ],
    responsibilities: [
      "Manage recruitment and onboarding processes",
      "Develop and implement HR policies",
      "Support performance management system",
      "Organize training and development programs",
      "Handle employee relations and grievances"
    ],
    benefits: [
      "Competitive salary package",
      "Health and wellness programs",
      "Employee discount schemes",
      "Professional certifications support",
      "Great work culture"
    ],
    status: "open",
    icon: FaUserTie,
    color: "bg-pink-500",
    publishedDate: "2024-01-25",
    applicationDeadline: "2024-03-25"
  },
  {
    id: 5,
    title: "Civil Site Engineer",
    department: "Construction",
    location: "Hyderabad, Bangalore",
    type: "Full-time",
    experience: "2-5 years",
    salary: "6-12 LPA",
    description: "We are looking for an experienced Civil Site Engineer to oversee construction activities, ensure quality standards, and manage on-site operations.",
    requirements: [
      "Bachelor's degree in Civil Engineering",
      "2+ years of site engineering experience",
      "Strong technical knowledge of construction practices",
      "Good communication and problem-solving skills",
      "Ability to work under pressure"
    ],
    responsibilities: [
      "Supervise construction activities on site",
      "Ensure compliance with safety regulations",
      "Monitor project progress and quality",
      "Coordinate with contractors and suppliers",
      "Prepare daily reports and documentation"
    ],
    benefits: [
      "Competitive salary",
      "Site allowances",
      "Safety gear provided",
      "Health insurance",
      "Career progression path"
    ],
    status: "open",
    icon: FaBuilding,
    color: "bg-orange-500",
    publishedDate: "2024-02-01",
    applicationDeadline: "2024-04-01"
  },
  {
    id: 6,
    title: "Finance Manager",
    department: "Finance & Accounting",
    location: "Hyderabad",
    type: "Full-time",
    experience: "5-8 years",
    salary: "15-25 LPA",
    description: "Join our finance team to manage financial planning, budgeting, and reporting. You will work closely with senior management on financial strategy and decision-making.",
    requirements: [
      "CA/CMA/CFA or MBA in Finance",
      "5+ years of experience in finance",
      "Strong analytical and financial modeling skills",
      "Knowledge of accounting standards",
      "Proficiency in financial software"
    ],
    responsibilities: [
      "Prepare budgets and financial forecasts",
      "Manage financial reporting and analysis",
      "Ensure compliance with regulations",
      "Support investment decisions",
      "Liaise with banks and financial institutions"
    ],
    benefits: [
      "Excellent salary package",
      "Performance bonuses",
      "Professional development funding",
      "Health and life insurance",
      "Stable career growth"
    ],
    status: "open",
    icon: FaDollarSign,
    color: "bg-yellow-500",
    publishedDate: "2024-02-05",
    applicationDeadline: "2024-04-05"
  }
];

// Company Benefits Data
export const companyBenefits = [
  {
    id: 1,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family",
    icon: FaBuilding
  },
  {
    id: 2,
    title: "Work-Life Balance",
    description: "Flexible hours and remote work options when needed",
    icon: FaClock
  },
  {
    id: 3,
    title: "Learning & Development",
    description: "Training programs, workshops, and certifications",
    icon: FaChartLine
  },
  {
    id: 4,
    title: "Team Activities",
    description: "Regular team outings, events, and celebrations",
    icon: FaUserTie
  },
  {
    id: 5,
    title: "Career Growth",
    description: "Clear growth paths and promotion opportunities",
    icon: FaChartLine
  },
  {
    id: 6,
    title: "Competitive Salary",
    description: "Market-competitive compensation packages",
    icon: FaDollarSign
  }
];

// Recruitment Process Steps
export const recruitmentProcess = [
  {
    step: 1,
    title: "Application Review",
    description: "We review your application and resume",
    duration: "1-2 days"
  },
  {
    step: 2,
    title: "Phone Screening",
    description: "Brief phone call to discuss your background",
    duration: "15-30 minutes"
  },
  {
    step: 3,
    title: "Technical/HR Round",
    description: "Assess your skills and cultural fit",
    duration: "45-60 minutes"
  },
  {
    step: 4,
    title: "Final Interview",
    description: "Meet with senior leadership",
    duration: "30-45 minutes"
  },
  {
    step: 5,
    title: "Offer & Onboarding",
    description: "Receive offer and join our team!",
    duration: "1-2 weeks"
  }
];

// How to Add, Update, or Delete Job Listings
/*
 * ADDING A NEW JOB:
 * - Copy an existing job object in the jobListings array
 * - Update all the fields with the new job information
 * - Change the 'id' to a unique number (next in sequence)
 * - Save the file
 * 
 * UPDATING A JOB:
 * - Find the job object you want to update by its 'id'
 * - Modify the fields you want to change (title, salary, requirements, etc.)
 * - Save the file
 * 
 * DELETING A JOB:
 * - Find the job object you want to remove by its 'id'
 * - Delete the entire job object (all lines from { to }, including the comma)
 * - Save the file
 * 
 * CLOSING A JOB POSTING:
 * - Find the job and change "status": "open" to "status": "closed"
 * - Save the file
 */
