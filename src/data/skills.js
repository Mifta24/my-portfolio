// Data halaman Skills. Tambah/ubah skill, soft skill, atau sertifikat cukup di file ini.

export const frontendSkills = [
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "Vue.js", icon: "fab fa-vuejs" },
  { name: "Tailwind CSS", icon: "fas fa-wind" },
  { name: "Bootstrap", icon: "fab fa-bootstrap" },
];

export const backendSkills = [
  { name: "PHP", icon: "fab fa-php" },
  { name: "Python", icon: "fab fa-python" },
  { name: "Java", icon: "fab fa-java" },
  { name: "C#", icon: "fas fa-hashtag" },
  { name: ".NET", icon: "fas fa-code" },
  { name: "Laravel", icon: "fab fa-laravel" },
  { name: "MySQL", icon: "fas fa-database" },
  { name: "PostgreSQL", icon: "fas fa-database" },
  { name: "SQLite", icon: "fas fa-database" },
  { name: "Supabase", icon: "fas fa-database" },
  { name: "REST APIs", icon: "fas fa-plug" },
];

export const aiSkills = [
  { name: "AI-Assisted Development", icon: "fas fa-magic" },
  { name: "Claude Code", icon: "fas fa-terminal" },
  { name: "GitHub Copilot", icon: "fab fa-github" },
  { name: "Cursor", icon: "fas fa-i-cursor" },
  { name: "Prompt Engineering", icon: "fas fa-comment-dots" },
  { name: "LLM API Integration", icon: "fas fa-brain" },
  { name: "AI Agents & Automation", icon: "fas fa-robot" },
  { name: "n8n", icon: "fas fa-project-diagram" },
  { name: "MCP", icon: "fas fa-plug" },
];

export const tools = [
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "GitHub", icon: "fab fa-github" },
  { name: "VS Code", icon: "fas fa-code" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "Server Management", icon: "fas fa-server" },
  { name: "VPS", icon: "fas fa-cloud" },
  { name: "Figma", icon: "fab fa-figma" },
  { name: "NPM", icon: "fab fa-npm" },
  { name: "Postman", icon: "fas fa-paper-plane" },
  { name: "Canva", icon: "fas fa-paint-brush" },
];

export const officeSkills = [
  { name: "Microsoft Word", icon: "fas fa-file-word" },
  { name: "Microsoft Excel", icon: "fas fa-file-excel" },
  { name: "Microsoft PowerPoint", icon: "fas fa-file-powerpoint" },
  { name: "Microsoft Access", icon: "fas fa-database" },
  { name: "Microsoft Outlook", icon: "fas fa-envelope" },
  { name: "Google Docs", icon: "fab fa-google" },
  { name: "Google Sheets", icon: "fab fa-google" },
  { name: "Google Slides", icon: "fab fa-google" },
];

export const softSkills = [
  {
    name: "Communication",
    icon: "fas fa-comments",
    description:
      "Excellent written and verbal communication skills with the ability to explain complex technical concepts in simple terms.",
  },
  {
    name: "Problem Solving",
    icon: "fas fa-lightbulb",
    description:
      "Strong analytical and problem-solving abilities to tackle challenging technical issues and find efficient solutions.",
  },
  {
    name: "Team Collaboration",
    icon: "fas fa-users",
    description:
      "Experience working in agile teams with a collaborative mindset and effective interpersonal skills.",
  },
  {
    name: "Time Management",
    icon: "fas fa-clock",
    description:
      "Ability to manage multiple projects, prioritize tasks, and meet deadlines in a fast-paced environment.",
  },
];

export const certifications = [
  {
    name: "Microsoft Office Specialist: Excel Associate (Office 2019)",
    icon: "fas fa-certificate",
    issuer: "Microsoft",
    date: "2026",
    url: "https://drive.google.com/file/d/1bYmyoe0siNhapZCNHy8tIv1nVePdf7Ee/view?usp=sharing",
  },
  {
    name: "Alibaba Cloud Certifcation",
    icon: "fas fa-certificate",
    issuer: "Alibaba Cloud",
    date: "2024",
    url: "https://drive.google.com/file/d/1GvjYf4EJosLxgqk2kig9oY34Z2FrTFUT/view?usp=sharing",
  },
  {
    name: "Laravel 11, Breeze, Spatie: Bikin Web Platform Online Course",
    icon: "fas fa-certificate",
    issuer: "BuildWithAngga",
    date: "2024",
    url: "https://drive.google.com/file/d/1GvjYf4EJosLxgqk2kig9oY34Z2FrTFUT/view?usp=sharing",
  },
  {
    name: "Teknik Pembuatan Surat, Dokumen dan Presentasi, Pengolahan Data Bisnis serta Visualisasi Grafis dengan Microsoft Office untuk Tenaga Perkantoran Umum (Administrasi Perkantoran)",
    icon: "fas fa-certificate",
    issuer: "Course-NET",
    date: "2023",
    url: "https://drive.google.com/file/d/1rmpf6bw63qLXP7El4Sc8asGEq-IfPeXI/view?usp=sharing",
  },
];

// Urutan dan judul kategori yang tampil di halaman Skills
export const skillCategories = [
  {
    title: "Front-End Development",
    icon: "fas fa-code",
    skills: frontendSkills,
  },
  {
    title: "Back-End Development",
    icon: "fas fa-server",
    skills: backendSkills,
  },
  { title: "AI & Automation", icon: "fas fa-robot", skills: aiSkills },
  { title: "Tools & Technologies", icon: "fas fa-tools", skills: tools },
  {
    title: "Office & Productivity",
    icon: "fas fa-file-alt",
    skills: officeSkills,
  },
];
