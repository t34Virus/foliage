export type CapabilitySlug =
  | "cross-platform-apps"
  | "full-stack-platforms"
  | "interactive-experiences"
  | "cloud-devsecops"
  | "engineering-leadership";

export type Capability = {
  slug: CapabilitySlug;
  title: string;
  short: string; // one line for tiles
  intro: string;
  builds: string[]; // "What I build"
  proof: string[]; // measured, verifiable results from the resume
};

export const capabilities: Capability[] = [
  {
    slug: "cross-platform-apps",
    title: "Cross-Platform Apps",
    short: "One React Native codebase shipping native iOS, Android and full desktop web.",
    intro:
      "I build apps that run everywhere from a single TypeScript codebase: native iOS and Android with React Native and Expo, and a real desktop web experience with React Native for Web, without forking the code.",
    builds: [
      "Native iOS and Android apps with React Native and Expo (EAS)",
      "Desktop and mobile web from the same codebase with React Native for Web",
      "Real-time messaging, push notifications and content moderation",
      "Store builds and releases with Expo EAS",
    ],
    proof: [
      "Architected a K12 learning coach community from scratch: one codebase, three platforms",
      "Led the desktop web expansion: architecture decision record, 16 scoped tickets, no changes to the native apps",
      "Shipped React Native apps for iOS and Android from an Expo EAS monorepo at Bison Technologies",
    ],
  },
  {
    slug: "full-stack-platforms",
    title: "Full-Stack Platforms",
    short: "APIs, CMS modules and data layers that stay fast as the product grows.",
    intro:
      "I own features end to end, from the database and API to the UI, and I go after performance with measurements instead of guesses.",
    builds: [
      "REST and GraphQL APIs in Node.js, NestJS and Laravel",
      "Custom CMS modules and versioned schema migrations",
      "Query and caching work on PostgreSQL, MySQL, MongoDB and Redis",
      "Internal tools that turn slow manual work into a button",
    ],
    proof: [
      "Cut response times 70 to 88% on the slowest API endpoints (event search from 25s to 3s)",
      "Built an internal investigative tool at Olive AI that cut report generation time by 50%",
      "Built healthcare automation used by enterprise health systems including UC San Diego and Novant Health",
    ],
  },
  {
    slug: "interactive-experiences",
    title: "Interactive Experiences",
    short: "Touchscreen murals, iPad sales tools, VR showrooms and event activations.",
    intro:
      "Before apps, I built the things people touch at trade shows and in sales meetings: interactive murals, iPad tools, VR showrooms and virtual event activations for Fortune 500 brands.",
    builds: [
      "Large-format touchscreen and mural experiences",
      "iPad and Surface Pro sales tools",
      "VR and real-time 3D experiences in Unity, Unreal Engine and WebVR",
      "Virtual and hybrid event activations for the web",
    ],
    proof: [
      "Lead developer on Cummins and Andersen Windows sales platforms, still in use",
      "Experiences for 10+ Fortune 500 companies, including GE Healthcare, Intel, Mercedes and Boeing's Aviall division",
      "Installations for Harman at CES and for Gulfstream as Software Development Lead at Spinifex",
    ],
  },
  {
    slug: "cloud-devsecops",
    title: "Cloud, DevOps and Security",
    short: "AWS, containers, CI/CD quality gates and monitoring, built by a CySA+ engineer.",
    intro:
      "I treat infrastructure, delivery and security as part of the product. I'm CompTIA CySA+ and Splunk Core Certified.",
    builds: [
      "AWS infrastructure: EC2, S3, Lambda, IAM, RDS and CloudWatch",
      "Docker and Kubernetes environments",
      "CI/CD with automated tests and SonarQube quality gates",
      "Health monitoring and alerting for third-party integrations",
    ],
    proof: [
      "Cut monthly AWS costs by $3K (38%) at Glossi by moving from always-on EC2 to on-demand auto-scaling",
      "Built automated health monitoring of 5 third-party integrations with Slack alerting",
      "Performance changes shipped behind kill switches with automatic fallback",
    ],
  },
  {
    slug: "engineering-leadership",
    title: "Engineering Leadership",
    short: "Standards, delivery and people: from a team of 11 to acting Head of Technology.",
    intro:
      "I've managed engineers, run delivery across dozens of clients, and introduced the standards that keep teams shipping. I stay hands-on while I do it.",
    builds: [
      "Git workflows, branching strategy, code review and ticketing",
      "Scoping, budgeting and proofs of concept for new work",
      "Onboarding material and mentoring for junior developers",
      "Architecture decision records and technical planning",
    ],
    proof: [
      "Engineering Manager for a team of 11 engineers, QA, 3D artists and contractors at Glossi",
      "Acting Head of Technology at Spinifex: 20+ enterprise clients, $500K+ in tech operations",
      "Mentored junior developers and ran code review at Olive AI",
    ],
  },
];

export const capabilityBySlug = (slug: string) => capabilities.find((c) => c.slug === slug);
