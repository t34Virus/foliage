// Everything about Teresa that appears outside the project pages.
// Facts here match the resume (~/Personal/resume/master-resume.md); keep them in sync.

export const profile = {
  name: "Teresa Nededog",
  wordmark: "teresa_nededog",
  roles: ["Senior Software Engineer", "Creative Technologist"],
  location: "Los Angeles, CA (remote or hybrid)",
  email: "hello@alohateresa.com",
  links: {
    linkedin: "https://www.linkedin.com/in/teresa-nededog/",
    github: "https://github.com/t34Virus",
  },
  // No resume PDF is published (Teresa, 2026-11-16): visitors request it by email.
  resumeRequest: "mailto:hello@alohateresa.com?subject=Resume%20request",
  intro:
    "10+ years shipping React, React Native and TypeScript products, from interactive sales tools for Fortune 500 brands to a K12 learning community on iOS, Android and web.",
  bio: [
    "I'm a senior software engineer and creative technologist in Los Angeles. I've spent more than ten years building software people use in the real world, much of it experiential: touchscreen murals and iPad sales tools for Fortune 500 brands, show-floor installations at CES, generative AI photo kiosks for live activations, healthcare automation for major health systems, and most recently a cross-platform community app for K12 learning coaches that I architected from scratch.",
    "I've also led teams. I managed a team of 11 at Glossi and served as acting Head of Technology at Spinifex Group, where I oversaw delivery for 20+ enterprise clients. I'm CompTIA CySA+ and Splunk Core Certified, so security is part of how I build, not an afterthought.",
  ],
};

export type Job = { title: string; company: string; dates: string; summary: string; tech: string[] };

// tech: the "Technologies" line for each job in her original resume (~/Personal/Teresa Nededog.pdf),
// in her order, with names spelled the official way (ReactJS as React, NodeJS as Node.js). Tilted
// Windmill came after that resume, so its list is the Technologies line from her LinkedIn.
export const experience: Job[] = [
  {
    title: "Cross-Platform Engineer",
    company: "Tilted Windmill Agency",
    dates: "Jul 2025 - Present",
    summary:
      "Architected and built Stride's cross-platform social learning community for K12 learning coaches, from database to UI: native iOS and Android apps and a full website.",
    tech: ["React Native", "React Native for Web", "Expo", "TypeScript", "Laravel", "PHP", "UNA CMS", "MySQL", "PostgreSQL", "AWS", "Docker", "WebSockets", "SonarQube"], // SonarQube added 2026-11-17 at her request
  },
  {
    title: "Engineering Manager",
    company: "Glossi",
    dates: "Jul 2023 - Oct 2024",
    summary:
      "Introduced engineering standards for a team of 11 and cut monthly AWS costs by 38% while staying hands-on as a developer.",
    tech: ["React", "Next.js", "GraphQL", "AWS", "Unreal Engine 5", "MongoDB"],
  },
  {
    title: "Backend Engineer",
    company: "Bison Technologies",
    dates: "Sep 2022 - Apr 2023",
    summary:
      "Built data tools for oil and saltwater logistics and shipped React Native apps for iOS and Android.",
    tech: ["React", "React Native", "NestJS", "Expo Go", "EAS", "TypeScript", "MongoDB", "DynamoDB", "GraphQL"],
  },
  {
    title: "Senior Software Engineer",
    company: "Olive AI",
    dates: "Jan 2022 - Sep 2022",
    summary:
      "Built healthcare automation for enterprise health systems and an internal tool that cut report generation time by 50%.",
    // Her resume also lists Olive's in-house OliveScript and CSaaS; she said to show them as
    // JavaScript and TypeScript (2026-11-17), which are already here.
    tech: ["TypeScript", "JavaScript", "Docker", "Node.js"],
  },
  {
    title: "Software Development Lead",
    company: "Spinifex Group",
    dates: "Nov 2019 - Jan 2022",
    summary:
      "Acting Head of Technology, overseeing delivery for 20+ enterprise clients and events including CES, the LA Auto Show and Gulfstream's G400 and G800 launch.",
    tech: ["Angular", "Kubernetes", "AWS", "Unity", "Bitbucket", "Lottie", "Vue.js", "Docker"],
  },
  {
    title: "Software Engineer",
    company: "Inhance Digital Corporation",
    dates: "Nov 2015 - Nov 2019",
    summary:
      "Lead developer for long-running interactive sales platforms for Cummins and Andersen Windows, and builder of experiences for 10+ Fortune 500 companies.",
    tech: ["WebVR", "Google VR", "Unity", "iOS", "Perforce", "Server-side scripting"],
  },
];

export const certifications = [
  "CompTIA Cybersecurity Analyst (CySA+)",
  "Splunk Core Certified",
];

// No degree was conferred: always describe this as coursework.
export const education = {
  school: "Hawaii Pacific University",
  detail: "B.S. Computer Science coursework | 139 credits | Dean's List | Upsilon Pi Epsilon honor society",
};

export const recognition = [
  "1st Place, IBM's Best Use of Watson, AT&T Hackathon LA",
  "Winning game, Global Game Jam Honolulu",
  "Keynote Speaker and Mentor, Women in Technology (WIT), Honolulu",
];

export const community = [
  "Volunteer Ambassador, Los Angeles Mission: meal service on Skid Row",
  "Volunteer, Temple Emanuel of Beverly Hills: weekly delivery of 120 sack lunches through the Hollywood Food Coalition",
];

export const clients = [
  "IBM", "Cummins", "Andersen Windows", "Harman", "Gulfstream", "Intel", "Baxter",
  "GE Healthcare", "Boeing Aviall", "Illumina", "Mercedes", "Otis", "Cisco", "Visa", "Honda",
];
