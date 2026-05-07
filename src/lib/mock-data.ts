export const candidates = [
  { id: 1, name: "Arjun Sharma", email: "arjun.sharma@email.com", metric: 92, experience: 5, status: "Shortlisted" },
  { id: 2, name: "Priya Mehta", email: "priya.mehta@email.com", metric: 87, experience: 3, status: "Pending" },
  { id: 3, name: "Rahul Verma", email: "rahul.verma@email.com", metric: 78, experience: 7, status: "Approved" },
  { id: 4, name: "Sneha Patel", email: "sneha.patel@email.com", metric: 95, experience: 4, status: "Shortlisted" },
  { id: 5, name: "Kiran Rao", email: "kiran.rao@email.com", metric: 81, experience: 6, status: "Pending" },
];

export const pendingPositions = [
  { id: "POS-001", position: "Software Engineer", submissionDate: "2024-01-15", recruiter: "John Smith" },
  { id: "POS-002", position: "Backend Developer", submissionDate: "2024-01-16", recruiter: "Sarah Johnson" },
  { id: "POS-003", position: "Full Stack Developer", submissionDate: "2024-01-17", recruiter: "Mike Brown" },
];

export const pendingCandidates = [
  { name: "Arjun Sharma", position: "Software Engineer", submissionDate: "2024-01-15", recruiter: "John Smith" },
  { name: "Priya Mehta", position: "Backend Developer", submissionDate: "2024-01-16", recruiter: "Sarah Johnson" },
  { name: "Rahul Verma", position: "Full Stack Developer", submissionDate: "2024-01-17", recruiter: "Mike Brown" },
];

export const assessmentReports = [
  { id: "RPT-001", candidate: "Arjun Sharma", position: "Software Engineer", score: 87, status: "Interim" },
  { id: "RPT-002", candidate: "Priya Mehta", position: "Backend Developer", score: 92, status: "Final" },
];

export const comments = [
  {
    id: 1,
    initials: "MG",
    name: "Michael Green",
    bgColor: "#4F8BF9",
    timestamp: "5 minutes ago",
    text: "Candidate has strong technical skills. Recommended for next round."
  },
  {
    id: 2,
    initials: "RM",
    name: "Rachel Moore",
    bgColor: "#A78BFA",
    timestamp: "15 minutes ago",
    text: "Reviewed the CV, experience aligns well with the job requirements."
  },
  {
    id: 3,
    initials: "JK",
    name: "James Kim",
    bgColor: "#10B981",
    timestamp: "1 hour ago",
    text: "Initial screening completed. Candidate shows good communication skills."
  },
];

export const companies = [
  { name: "Accenture", logo: "A" },
  { name: "TCS", logo: "T" },
  { name: "Infosys", logo: "I" },
  { name: "Wipro", logo: "W" },
  { name: "Cognizant", logo: "C" },
  { name: "Tech Mahindra", logo: "TM" },
];

export const feedPosts = [
  {
    id: 1,
    name: "Riya Desai",
    title: "Talent Acquisition | HR Tech",
    initials: "RD",
    bgColor: "#4F8BF9",
    text: "Excited to announce that we are hiring for multiple positions! If you have a passion for tech and innovation, apply now. We look forward to welcoming new talent to our team. 🚀",
    likes: 124,
    comments: 18
  },
  {
    id: 2,
    name: "Sameer Khan",
    title: "Software Engineer | Full Stack",
    initials: "SK",
    bgColor: "#10B981",
    text: "Just completed an amazing assessment session! The platform made it seamless and efficient. Highly recommend for companies looking to modernize their hiring process.",
    likes: 89,
    comments: 12
  },
];

export const finalReports = [
  { id: 1, candidate: "Arjun Sharma", position: "Software Engineer", experience: "5 years", score: 87, status: "Recommended" },
  { id: 2, candidate: "Priya Mehta", position: "Backend Developer", experience: "3 years", score: 92, status: "Recommended" },
  { id: 3, candidate: "Rahul Verma", position: "Full Stack Dev", experience: "7 years", score: 78, status: "Pending Discussion" },
  { id: 4, candidate: "Sneha Patel", position: "Software Engineer", experience: "4 years", score: 95, status: "Recommended" },
  { id: 5, candidate: "Kiran Rao", position: "Backend Developer", experience: "6 years", score: 81, status: "Pending Approval" },
];
