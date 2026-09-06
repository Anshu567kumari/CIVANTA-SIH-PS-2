export const mockUsers = [
  {
    id: "U-1001",
    name: "Aarav Sharma",
    email: "user@civanta.in",
    role: "user",
    language: "en",
  },
  {
    id: "U-0001",
    name: "Priya Iyer",
    email: "admin@civanta.in",
    role: "admin",
    language: "en",
  },
];

export const categories = [
  { id: "road", label: "Roads & Infrastructure", icon: "Construction" },
  { id: "water", label: "Water Supply", icon: "Droplets" },
  { id: "health", label: "Public Health", icon: "HeartPulse" },
  { id: "education", label: "Education", icon: "GraduationCap" },
  { id: "sanitation", label: "Sanitation", icon: "Trash2" },
  { id: "electricity", label: "Electricity", icon: "Zap" },
  { id: "safety", label: "Public Safety", icon: "Shield" },
  { id: "other", label: "Other", icon: "MoreHorizontal" },
];

export const statuses = [
  "Submitted",
  "Verified",
  "Assigned",
  "In Progress",
  "Resolved",
];

export const mockSubmissions = [
  {
    id: "CVT-10482",
    title: "Pothole on MG Road near City Mall",
    category: "road",
    user: "Ravi Kumar",
    location: "Bengaluru, Karnataka",
    priority: "High",
    status: "In Progress",
    department: "Public Works",
    date: "2026-09-02",
    description: "Large pothole causing traffic disruption and vehicle damage.",
    history: [
      {
        status: "Submitted",
        at: "2026-09-02 09:12",
        note: "Report received via mobile app.",
      },
      {
        status: "Verified",
        at: "2026-09-02 10:05",
        note: "Verified by field officer.",
      },
      {
        status: "Assigned",
        at: "2026-09-02 11:20",
        note: "Assigned to Public Works Division 3.",
      },
      {
        status: "In Progress",
        at: "2026-09-03 08:40",
        note: "Repair crew dispatched.",
      },
    ],
  },
  {
    id: "CVT-10481",
    title: "Water leakage at sector 14",
    category: "water",
    user: "Neha Singh",
    location: "Noida, Uttar Pradesh",
    priority: "Medium",
    status: "Assigned",
    department: "Water Board",
    date: "2026-09-01",
    description: "Continuous water leakage from main pipeline.",
    history: [
      {
        status: "Submitted",
        at: "2026-09-01 14:22",
        note: "Report submitted.",
      },
      {
        status: "Verified",
        at: "2026-09-01 16:00",
        note: "Verified remotely.",
      },
      {
        status: "Assigned",
        at: "2026-09-02 09:00",
        note: "Assigned to Water Board.",
      },
    ],
  },
  {
    id: "CVT-10480",
    title: "Broken streetlight in colony",
    category: "electricity",
    user: "Arjun Patel",
    location: "Ahmedabad, Gujarat",
    priority: "Low",
    status: "Resolved",
    department: "Electricity Dept.",
    date: "2026-08-28",
    description: "Streetlight non-functional for 3 days.",
    history: [
      {
        status: "Submitted",
        at: "2026-08-28 18:10",
        note: "Report submitted.",
      },
      { status: "Verified", at: "2026-08-28 19:30", note: "Verified." },
      { status: "Assigned", at: "2026-08-29 09:00", note: "Assigned." },
      {
        status: "In Progress",
        at: "2026-08-29 14:00",
        note: "Repair scheduled.",
      },
      {
        status: "Resolved",
        at: "2026-08-30 11:00",
        note: "Replaced and operational.",
      },
    ],
  },
  {
    id: "CVT-10479",
    title: "Garbage not collected for a week",
    category: "sanitation",
    user: "Meera Nair",
    location: "Kochi, Kerala",
    priority: "High",
    status: "Submitted",
    department: "—",
    date: "2026-09-03",
    description: "Garbage piling up near residential area.",
    history: [
      {
        status: "Submitted",
        at: "2026-09-03 07:45",
        note: "Report submitted.",
      },
    ],
  },
  {
    id: "CVT-10478",
    title: "School roof leaking during rains",
    category: "education",
    user: "Suresh Reddy",
    location: "Hyderabad, Telangana",
    priority: "Medium",
    status: "Verified",
    department: "—",
    date: "2026-09-03",
    description: "Government school roof leaking, affecting classes.",
    history: [
      {
        status: "Submitted",
        at: "2026-09-03 10:10",
        note: "Report submitted.",
      },
      {
        status: "Verified",
        at: "2026-09-03 12:30",
        note: "Verified by education officer.",
      },
    ],
  },
];

export const kpiCards = [
  { label: "Total Users", value: "24,812", delta: "+12.4%", trend: "up" },
  { label: "Total Submissions", value: "8,430", delta: "+8.1%", trend: "up" },
  { label: "Pending", value: "612", delta: "-3.2%", trend: "down" },
  { label: "Resolved", value: "7,104", delta: "+15.7%", trend: "up" },
  {
    label: "Avg. Response Time",
    value: "4.2 hrs",
    delta: "-18%",
    trend: "down",
  },
];

export const trendData = [
  { month: "Apr", submissions: 420, resolved: 380 },
  { month: "May", submissions: 510, resolved: 460 },
  { month: "Jun", submissions: 640, resolved: 590 },
  { month: "Jul", submissions: 720, resolved: 680 },
  { month: "Aug", submissions: 880, resolved: 820 },
  { month: "Sep", submissions: 960, resolved: 900 },
];

export const categoryData = [
  { name: "Roads", value: 2100 },
  { name: "Water", value: 1400 },
  { name: "Health", value: 980 },
  { name: "Education", value: 720 },
  { name: "Sanitation", value: 1100 },
  { name: "Electricity", value: 640 },
];

export const resolutionData = [
  { name: "Resolved", value: 7104, color: "#10b981" },
  { name: "In Progress", value: 812, color: "#6366f1" },
  { name: "Pending", value: 514, color: "#f59e0b" },
];

export const activityFeed = [
  {
    id: 1,
    text: "Submission CVT-10482 moved to In Progress",
    time: "2h ago",
    type: "info",
  },
  {
    id: 2,
    text: "New submission CVT-10479 received",
    time: "5h ago",
    type: "new",
  },
  {
    id: 3,
    text: "CVT-10480 marked as Resolved",
    time: "1d ago",
    type: "success",
  },
  {
    id: 4,
    text: "Department Water Board assigned CVT-10481",
    time: "1d ago",
    type: "info",
  },
];
