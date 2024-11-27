import comeetLogo from "./comeet-logo.png";
import greenHouseLogo from "./greenHouse.png";
import leverLogo from "./leverLogo.png";

export const CHATGPT_TOKEN =
  "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";

export const GET_FOUNDERS_AGREEMENT_FORM_TEXT =
  "Please create a founders agreement for the founders with the following data:";

export const MAIN_PAGE_NODES = [
  {
    label: "Idea Validation",
    path: "/idea-validation",
    progress: 100,
    isImplemented: true,
  },
  {
    label: "Market Research",
    path: "/market-research",
    progress: 20,
    isImplemented: false,
  },
  {
    label: "Business Plan",
    path: "/business-plan",
    progress: 33,
    isImplemented: false,
  },
  {
    label: "Founders Agreement",
    path: "/founders-agreement",
    progress: 33,
    isImplemented: false,
  },
  {
    label: "Register Company",
    path: "/register-company",
    progress: 33,
    isImplemented: false,
  },
  {
    label: "Hire Your First Employee",
    path: "/hire-your-first-employee",
    progress: 33,
    isImplemented: true,
  },
  {
    label: "Product Development",
    path: "/product-development",
    progress: 33,
    isImplemented: false,
  },
  {
    label: "Marketing Strategy",
    path: "/marketing-strategy",
    progress: 33,
    isImplemented: false,
  },
  { label: "Launch", path: "/launch", progress: 33, isImplemented: false },
  // You can add more nodes as needed for other stages
];

export const pricingOptions = [
  {
    label: "Annual Subscription (12 contracts)",
    price: "$1000/year",
    id: "annual",
  },
  {
    label: "Single Contract (Free Trial)",
    price: "Free",
    regularPrice: "$100",
    id: "single",
  },
  { label: "Pack of 3 Contracts", price: "$250", id: "pack3" },
  { label: "Unlimited Contracts", price: "$2000/year", id: "unlimited" },
];

export const HIRING_NODES = [
  {
    label: "Create LinkedIn post",
    path: "/Create-LinkedInPost",
    progress: Math.random() * 100,
  },
  {
    label: "Create Hiring platform account",
    path: "/platform-creation",
    progress: Math.random() * 100,
  },
  {
    label: "Form employee contract",
    path: "/form-employee-contract",
    progress: Math.random() * 100,
  },
  // Add more subtasks as needed
];

export const IDEA_VALIDATION_NODES = [
  {
    label: "Define Core Idea",
    path: "/define-core-idea",
    progress: Math.random() * 100,
    isImplemented: true,
  },
  {
    label: "Conduct Market Research",
    path: "/market-research",
    progress: Math.random() * 100,
    isImplemented: false,
  },
  {
    label: "Customer Interviews and Surveys",
    path: "/customer-interviews",
    progress: Math.random() * 100,
    isImplemented: false,
  },
  {
    label: "Build Minimum Viable Product (MVP)",
    path: "/build-mvp",
    progress: Math.random() * 100,
    isImplemented: false,
  },
  {
    label: "User Testing and Feedback",
    path: "/user-testing",
    progress: Math.random() * 100,
    isImplemented: false,
  },
  {
    label: "Financial Feasibility Analysis",
    path: "/financial-analysis",
    progress: Math.random() * 100,
    isImplemented: false,
  },
  {
    label: "Refine Product and Business Model",
    path: "/refine-product",
    progress: Math.random() * 100,
    isImplemented: false,
  },
  {
    label: "Pilot or Soft Launch",
    path: "/pilot-launch",
    progress: Math.random() * 100,
    isImplemented: false,
  },
  {
    label: "Iterate Based on Results",
    path: "/iterate-results",
    progress: Math.random() * 100,
    isImplemented: false,
  },
];

export const platformData = [
  {
    name: "Comeet",
    features: {
      "Collaborative hiring": true,
      "Easy integrations": true,
      "Automated workflows": true,
      // Other features will be marked as false implicitly
    },
    cost: "From $300/month",
    logo: comeetLogo,
    signupLink: "https://www.comeet.com/get-demo/",
  },
  {
    name: "Green house",
    features: {
      "Global payroll solutions": true,
      "Worker onboarding": true,
      Compliance: true,
      // Other features will be marked as false implicitly
    },
    cost: "Custom pricing",
    logo: greenHouseLogo,
    signupLink: "https://www.greenhouse.com/demo",
  },
  {
    name: "Lever",
    features: {
      "Employee management": true,
      "Benefits administration": true,
      "Time tracking": true,
      // Other features will be marked as false implicitly
    },
    cost: "From $200/month",
    logo: leverLogo,
    signupLink: "https://www.hibob.com/book-a-demo/",
  },
  // Add more platforms as necessary
];

export const featureList = [
  "Collaborative hiring",
  "Easy integrations",
  "Automated workflows",
  "Global payroll solutions",
  "Worker onboarding",
  "Compliance",
  "Employee management",
  "Benefits administration",
  "Time tracking",
  // Add more features as necessary
];

export const jobTitles = [
  { label: "CEO/Co-Founder", value: "ceo" },
  { label: "CTO/Co-Founder", value: "cto" },
  { label: "CIO", value: "cio" },
  { label: "COO", value: "coo" },
  { label: "Chief Marketing Officer", value: "cmo" },
  { label: "Chief Product Officer", value: "cpo" },
  { label: "Chief Financial Officer", value: "cfo" },
  { label: "Software Engineer", value: "software_engineer" },
  { label: "Product Manager", value: "product_manager" },
  { label: "Graphic Designer", value: "graphic_designer" },
  { label: "UX Designer", value: "ux_designer" },
  { label: "UI Designer", value: "ui_designer" },
  { label: "Full-Stack Developer", value: "full_stack_developer" },
  { label: "Frontend Developer", value: "frontend_developer" },
  { label: "Backend Developer", value: "backend_developer" },
  { label: "Data Scientist", value: "data_scientist" },
  { label: "Data Analyst", value: "data_analyst" },
  { label: "Quality Assurance Engineer", value: "qa_engineer" },
  { label: "Sales Manager", value: "sales_manager" },
  { label: "Marketing Specialist", value: "marketing_specialist" },
  { label: "Growth Hacker", value: "growth_hacker" },
  { label: "Operations Manager", value: "operations_manager" },
  { label: "HR Manager", value: "hr_manager" },
  { label: "Public Relations Manager", value: "pr_manager" },
  { label: "Community Manager", value: "community_manager" },
  {
    label: "Customer Support Specialist",
    value: "customer_support_specialist",
  },
  { label: "Social Media Manager", value: "social_media_manager" },
  { label: "Content Writer", value: "content_writer" },
  { label: "SEO Specialist", value: "seo_specialist" },
  { label: "Web Designer", value: "web_designer" },
  { label: "Web Developer", value: "web_developer" },
  { label: "Mobile App Developer", value: "mobile_app_developer" },
  { label: "DevOps Engineer", value: "devops_engineer" },
  { label: "Cybersecurity Specialist", value: "cybersecurity_specialist" },
  { label: "Blockchain Developer", value: "blockchain_developer" },
  { label: "AI Specialist", value: "ai_specialist" },
  { label: "Machine Learning Engineer", value: "ml_engineer" },
  { label: "Business Analyst", value: "business_analyst" },
  { label: "Financial Analyst", value: "financial_analyst" },
  { label: "Accountant", value: "accountant" },
  { label: "Legal Counsel", value: "legal_counsel" },
  { label: "Product Designer", value: "product_designer" },
  { label: "Research Scientist", value: "research_scientist" },
  { label: "Sales Representative", value: "sales_representative" },
  {
    label: "Business Development Manager",
    value: "business_development_manager",
  },
  { label: "Technical Writer", value: "technical_writer" },
  { label: "Project Manager", value: "project_manager" },
  { label: "User Researcher", value: "user_researcher" },
  { label: "Industrial Designer", value: "industrial_designer" },
  { label: "Systems Analyst", value: "systems_analyst" },
];

export const FINANCIAL_PLAN_NODES = [
  {
    label: "Revenue Model",
    path: "/revenue-model",
    progress: 0,
  },
  {
    label: "Cost Structure",
    path: "/financial-plan/cost-structure",
    progress: 0,
  },
  {
    label: "Break-even Analysis",
    path: "/financial-plan/break-even-analysis",
    progress: 0,
  },
  {
    label: "Profit and Loss Statement",
    path: "/financial-plan/profit-and-loss",
    progress: 0,
  },
  {
    label: "Cash Flow Statement",
    path: "/financial-plan/cash-flow-statement",
    progress: 0,
  },
  {
    label: "Balance Sheet",
    path: "/financial-plan/balance-sheet",
    progress: 0,
  },
  {
    label: "Funding Requirements",
    path: "/financial-plan/funding-requirements",
    progress: 0,
  },
  {
    label: "Investment Plan",
    path: "/financial-plan/investment-plan",
    progress: 0,
  },
];
