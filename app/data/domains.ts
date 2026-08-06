export const domainStats = [
  { title: "Total Domains", value: 12 },
  { title: "Active Domains", value: 10 },
  { title: "Pending Verification", value: 1 },
  { title: "SSL Expiring Soon", value: 1 },
];
export const domains = [
  {
    id: 1,
    domain: "portfolio.com",
    project: "Portfolio",
    status: "Active",
    ssl: "Valid",
    updated: "2 days ago",
  },
  {
    id: 2,
    domain: "todoapp.dev",
    project: "Todo App",
    status: "Active",
    ssl: "Valid",
    updated: "5 hours ago",
  },
  {
    id: 3,
    domain: "youtubeclone.app",
    project: "YouTube Clone",
    status: "Building",
    ssl: "Generating",
    updated: "20 minutes ago",
  },
  {
    id: 4,
    domain: "amazonclone.store",
    project: "Amazon Clone",
    status: "Failed",
    ssl: "Expired",
    updated: "Yesterday",
  },
  {
    id: 5,
    domain: "weatherapp.io",
    project: "Weather App",
    status: "Active",
    ssl: "Valid",
    updated: "3 days ago",
  },
  {
    id: 6,
    domain: "chatapp.dev",
    project: "Chat App",
    status: "Active",
    ssl: "Valid",
    updated: "Today",
  },
];

export const dnsRecords = [
  { type: "A",
    name: "@",
    value: "76.76.21.21" },
  { type: "CNAME",
    name: "www",
    value: "cname.vercel-dns.com" },
  { type: "TXT",
    name: "_vercel",
    value: "vc-domain-verify=abc123xyz" },
  { type: "MX",
    name: "@",
    value: "mail.privateemail.com" }
];

export const sslCertificates = [
  {
    id: 1,
    domain: "portfolio.com",
    issued: "Jun 12, 2026",
    expires: "Sep 12, 2026",
    status: "Valid",
  },
  {
    id: 2,
    domain: "todoapp.dev",
    issued: "Jul 1, 2026",
    expires: "Oct 1, 2026",
    status: "Valid",
  },
  {
    id: 3,
    domain: "youtubeclone.app",
    issued: "Pending",
    expires: "-",
    status: "Generating",
  },
  {
    id: 4,
    domain: "amazonclone.store",
    issued: "Mar 15, 2026",
    expires: "Jun 15, 2026",
    status: "Expired",
  },
];

export const domainActivity = [
  { id: 1,
    message: "SSL certificate renewed for portfolio.com",
    time: "2 hours ago" },
  { id: 2,
    message: "Added CNAME record for todoapp.dev",
    time: "Yesterday" },
  { id: 3,
    message: "Verified ownership of youtubeclone.app",
    time: "2 days ago" },
  { id: 4,
    message: "SSL certificate expired for amazonclone.store",
    time: "3 days ago" },
  { id: 5,
    message: "New domain weatherapp.io connected",
    time: "Last week" },
];