import type { CapabilitySlug } from "./capabilities";

export type Project = {
  slug: string;
  client: string;
  title: string;
  madeAt: string; // the company Teresa built it at, or "Personal"
  summary: string; // one line for cards and the page intro
  capabilities: CapabilitySlug[];
  role?: string;
  platform?: string[];
  tech?: string[];
  challenge?: string;
  built?: string[]; // "What I built"
  results?: string[];
  award?: string;
  media: {
    poster?: string; // /public path
    preview?: string; // short muted loop for cards and the home circle
    vimeo?: string; // full demo, embedded on the project page
    video?: string; // self-hosted clip when there's no public Vimeo
    images?: string[];
  };
  links?: { label: string; href: string }[];
  featured?: number; // order on the home page
  // Notes for Teresa: what still needs her input. Never rendered.
  todo?: string;
};

const SPINIFEX_TODO =
  "Confirm your role, the stack, the event or campaign it was for, and one result (reach, attendees, duration in use).";
const INHANCE_TODO = "Confirm your role on this project, the stack, and anything measurable.";

export const projects: Project[] = [
  // First on the Work page at her request ("Put the dream generator at the top", 2026-11-17).
  // Independent contractor work: she asked to include it (2026-11-17).
  // Facts from her TFG repos and session notes; media from her OLG zip and her Vimeo upload.
  // Her rule: never show a guest's full name, email or phone number (first names are fine).
  {
    slug: "olg-dream-generator",
    client: "OLG",
    title: "Dream Generator: Generative AI Photo Kiosk",
    madeAt: "Independent contractor",
    summary:
      "A walk-up generative AI kiosk for Ontario Lottery and Gaming: guests pick the dreams that speak to them, pose for a photo, and get an AI-made portrait of themselves living that dream, to print or scan home.",
    capabilities: ["interactive-experiences", "full-stack-platforms"],
    role: "Independent contractor for The Famous Group: full-stack engineer on the kiosk, moderator and share experience, on their Vixi platform",
    platform: ["Touchscreen kiosk (Windows)", "Web moderator dashboard", "Mobile share page"],
    tech: ["NestJS", "Nuxt 3", "Vue 3", "TypeScript", "MongoDB", "WebSockets", "Keycloak", "Google Cloud Storage", "Gemini", "Jest"],
    challenge:
      "Turn generative AI into an in-person experience anyone could walk up to: in English or French, accessible, quick enough to hold a guest's attention, and with a person able to review what the AI makes before it goes out.",
    built: [
      "The kiosk flow: language, sign-up, dream cards drawn from a configurable deck, camera capture, generation, review and share.",
      "Prompts built from each guest's picks, generating 5 images per session (a batch of 4 plus an accessible variant), with a direct Gemini fallback for image generation.",
      "A real-time moderator dashboard synced to the kiosk over WebSockets, with approval before results go out and a self-serve mode when no moderator is present.",
      "A public share page reached by QR code, consent and data-retention notices, and a Windows installer that runs the kiosk full screen on the on-site PC.",
    ],
    media: {
      poster: "/media/posters/olg-dream-generator.jpg",
      // Hover demo: the same edit as her highlight GIF (welcome sign, dream cards, generating,
      // result and QR, phone, print), rendered as video from IMG_8114. First names only on screen.
      preview: "/media/videos/olg-dream-generator.mp4",
      vimeo: "1247757908", // guest walkthrough, last name and email blurred
      images: ["/media/images/olg-dream-generator-1.jpg", "/media/images/olg-dream-generator-2.jpg"],
    },
    todo: "Add any results (dates, venue, guests served, prints).",
  },

  // ---------- Tilted Windmill Agency ----------
  {
    slug: "k12-learning-coach-community",
    client: "Confidential client",
    title: "Social Learning Community for K12 Learning Coaches",
    madeAt: "Tilted Windmill Agency",
    summary:
      "A cross-platform community where K12 learning coaches message, meet and share resources, on iOS, Android and desktop web from one codebase.",
    capabilities: ["cross-platform-apps", "full-stack-platforms", "cloud-devsecops"],
    role: "Cross-Platform Engineer: architecture and every layer from database to UI",
    platform: ["iOS", "Android", "Desktop web"],
    tech: ["React Native", "React Native for Web", "Expo", "TypeScript", "Laravel", "PHP", "UNA CMS", "MySQL", "PostgreSQL", "Redis", "WebSockets", "AWS", "Docker"],
    challenge:
      "Learning coaches needed one place to connect with each other: messaging, events, groups and shared resources, on whatever device they had, with UNA CMS as the community backend.",
    built: [
      "Architected the app from scratch: one React Native codebase that ships native iOS and Android apps plus a full desktop web experience.",
      "Real-time messaging with attachments and private document previews, events, groups, a resource library, push notifications and content moderation.",
      "Coach matching by shared interests and ZIP-code proximity.",
      "Custom UNA CMS modules for a redesigned email and notification system, with versioned schema migrations.",
      "Led the desktop web expansion with React Native for Web: wrote the architecture decision record, scoped the work into 16 tickets, and built the desktop shell without changing the native apps.",
    ],
    results: [
      "Cut response times 70 to 88% on the slowest API endpoints; event search went from 25 seconds to 3, each change behind a kill switch with automatic fallback.",
      "Automated health monitoring of 5 third-party integrations with Slack alerting.",
      "Automated tests and SonarQube quality gates in CI/CD.",
    ],
    media: {},
    featured: 1,
  },
  // ---------- Glossi ----------
  {
    slug: "glossi-virtual-photo-studio",
    client: "Glossi",
    title: "Virtual Photo Studio Platform",
    madeAt: "Glossi",
    summary:
      "Engineering leadership for a browser-based virtual photo studio: product teams upload a 3D model and shoot stills and video, rendered in real time by Unreal Engine 5 in the cloud.",
    capabilities: ["engineering-leadership", "cloud-devsecops", "full-stack-platforms"],
    role: "Engineering Manager, hands-on developer",
    platform: ["Web", "Cloud-streamed Unreal Engine 5"],
    tech: ["React", "Next.js", "GraphQL", "MongoDB", "AWS", "Unreal Engine 5"],
    challenge:
      "A team of 11 engineers, QA, 3D artists and front-end contractors was shipping without shared engineering standards, which showed up as deployment issues and downtime, on infrastructure that was always on and expensive.",
    built: [
      "Introduced engineering standards where there were none: Git workflows, branching strategy, pull requests and ticketing, across GitHub and AWS CodeCommit.",
      "Moved infrastructure from always-on EC2 instances to an on-demand, auto-scaling model.",
      "Stayed hands-on as a developer while acting as the engineering liaison between departments, users and stakeholders.",
    ],
    results: [
      "Cut monthly AWS costs by $3K (38%).",
      "Significantly fewer deployment issues and less downtime for a team of 11.",
    ],
    media: {},
    featured: 3,
    todo: "Add which parts of the Studio your team built, and any screenshots you own.",
  },

  // ---------- Olive AI ----------
  {
    slug: "olive-ai-healthcare-automation",
    client: "Enterprise health systems",
    title: "Healthcare Automation and Investigative Tooling",
    madeAt: "Olive AI",
    summary:
      "Automation software for health systems including UC San Diego, West Virginia University, Ochsner, Renown and Novant Health, plus an internal tool that halved report time.",
    capabilities: ["full-stack-platforms", "engineering-leadership"],
    role: "Senior Software Engineer",
    tech: ["TypeScript", "JavaScript", "Node.js", "Docker"],
    built: [
      "Built and refined healthcare automation software for enterprise health systems.",
      "Designed and deployed an internal investigative tool for the team.",
      "Wrote the onboarding training material and ran the team's code review process.",
    ],
    results: [
      "The investigative tool cut report generation time by 50%, enabling faster client feedback loops.",
    ],
    media: {},
  },

  // ---------- Spinifex Group ----------
  {
    slug: "ibm-ripple-effect",
    client: "IBM",
    title: "Ripple Effect",
    madeAt: "Spinifex Group",
    summary: "An interactive web activation for IBM about people empowered by technology.",
    capabilities: ["interactive-experiences"],
    media: {
      poster: "/media/posters/ibm-ripple-effect.jpg",
      preview: "/media/videos/ibm-ripple-effect.mp4",
      vimeo: "511322612",
    },
    featured: 2,
    todo: SPINIFEX_TODO,
  },
  {
    slug: "ibm-sounds-of-security",
    client: "IBM Security",
    title: "Sounds of Security",
    madeAt: "Spinifex Group",
    summary:
      "An interactive audio experience presenting cybersecurity strategy as a composition: expertise, services and technology in harmony.",
    capabilities: ["interactive-experiences"],
    media: {
      poster: "/media/posters/ibm-sounds-of-security.jpg",
      preview: "/media/videos/ibm-sounds-of-security.mp4",
      vimeo: "736396394",
    },
    featured: 5,
    todo: SPINIFEX_TODO,
  },
  {
    slug: "ibm-think-city",
    client: "IBM",
    title: "Think City",
    madeAt: "Spinifex Group",
    summary: "An explorable 3D city for an IBM event activation, showing technology across smarter living.",
    capabilities: ["interactive-experiences"],
    media: {
      poster: "/media/posters/ibm-think-city.jpg",
      preview: "/media/videos/ibm-think-city.mp4",
      vimeo: "511260584",
    },
    todo: SPINIFEX_TODO,
  },
  {
    slug: "ibm-quantum",
    client: "IBM",
    title: "Quantum",
    madeAt: "Spinifex Group",
    summary: "An interactive web experience putting IBM's quantum computing story at visitors' fingertips.",
    capabilities: ["interactive-experiences"],
    media: {
      poster: "/media/posters/ibm-quantum.jpg",
      preview: "/media/videos/ibm-quantum.mp4",
      vimeo: "511260636",
    },
    todo: SPINIFEX_TODO,
  },
  {
    slug: "adobe-platinum-club",
    client: "Adobe",
    title: "Platinum Club",
    madeAt: "Spinifex Group",
    summary: "A recognition experience celebrating the winners of Adobe's Platinum Club.",
    capabilities: ["interactive-experiences"],
    media: {
      poster: "/media/posters/adobe-platinum-club.jpg",
      preview: "/media/videos/adobe-platinum-club.mp4",
      vimeo: "511425393",
    },
    todo: SPINIFEX_TODO,
  },
  {
    slug: "nissan-next-lineup",
    client: "Nissan",
    title: "NEXT Lineup",
    madeAt: "Spinifex Group",
    summary: "A virtual vehicle showroom for Nissan's NEXT lineup.",
    capabilities: ["interactive-experiences"],
    media: {
      poster: "/media/posters/nissan-next-lineup.jpg",
      preview: "/media/videos/nissan-next-lineup.mp4",
      vimeo: "511425580",
    },
    todo: SPINIFEX_TODO,
  },

  // ---------- Inhance Digital ----------
  {
    slug: "cummins-engine-interactive",
    client: "Cummins",
    title: "2.0 Engine Interactive",
    madeAt: "Inhance Digital",
    summary: "An international interactive marketing campaign for Cummins on-highway engines.",
    capabilities: ["interactive-experiences"],
    role: "Lead developer",
    platform: ["Touchscreen mural", "Surface Pro"],
    media: {
      poster: "/media/posters/cummins-engine-interactive.jpg",
      preview: "/media/videos/cummins-engine-interactive.mp4",
      vimeo: "511260679",
      images: ["/media/images/2.0.JPG"],
    },
    featured: 4,
    todo: INHANCE_TODO,
  },
  {
    slug: "cummins-conexpo",
    client: "Cummins",
    title: "ConExpo",
    madeAt: "Inhance Digital",
    summary: "An interactive experience and product information tool for Cummins off-highway engine components.",
    capabilities: ["interactive-experiences"],
    role: "Lead developer",
    platform: ["Touchscreen mural", "Surface Pro"],
    media: {
      poster: "/media/posters/cummins-conexpo.jpg",
      preview: "/media/videos/cummins-conexpo.mp4",
      vimeo: "511260939",
      images: ["/media/images/cummins17FEB02.png"],
    },
    todo: INHANCE_TODO,
  },
  {
    slug: "cummins-iaa",
    client: "Cummins",
    title: "IAA",
    madeAt: "Inhance Digital",
    summary: "An interactive experience and product information tool for Cummins on-highway engine components.",
    capabilities: ["interactive-experiences"],
    role: "Lead developer",
    platform: ["Touchscreen mural", "Surface Pro"],
    media: {
      poster: "/media/posters/cummins-iaa.jpg",
      preview: "/media/videos/cummins-iaa.mp4",
      vimeo: "511261003",
      images: ["/media/images/iaa.jpg"],
    },
    todo: INHANCE_TODO,
  },
  {
    slug: "andersen-vr-showroom",
    client: "Andersen Windows",
    title: "VR Showroom",
    madeAt: "Inhance Digital",
    summary: "A virtual reality showroom for Andersen Windows.",
    capabilities: ["interactive-experiences"],
    role: "Lead developer",
    platform: ["VR"],
    media: {
      poster: "/media/posters/andersen-vr-showroom.jpg",
      preview: "/media/videos/andersen-vr-showroom.mp4",
      vimeo: "511363802",
    },
    featured: 6,
    todo: INHANCE_TODO,
  },
  {
    slug: "baxter-prismaflex",
    client: "Baxter",
    title: "Prismaflex",
    madeAt: "Inhance Digital",
    summary: "A medical sales tool for Baxter's Prismaflex system.",
    capabilities: ["interactive-experiences"],
    platform: ["iPad"],
    media: {
      poster: "/media/posters/baxter-prismaflex.jpg",
      preview: "/media/videos/baxter-prismaflex.mp4",
      vimeo: "511260965",
      images: ["/media/images/baxter_prisma.jpg"],
    },
    todo: INHANCE_TODO,
  },
  {
    slug: "baxter-patient-journey",
    client: "Baxter",
    title: "Patient Journey",
    madeAt: "Inhance Digital",
    summary: "An interactive experience and sales tool following four patient journeys.",
    capabilities: ["interactive-experiences"],
    platform: ["iPad", "Touchscreen mural"],
    media: {
      poster: "/media/posters/baxter-patient-journey.jpg",
      preview: "/media/videos/baxter-patient-journey.mp4",
      vimeo: "511260901",
      images: ["/media/images/baxter_journey.JPG"],
    },
    todo: INHANCE_TODO,
  },
  {
    slug: "aviall-interactive-display",
    client: "Boeing Aviall",
    title: "Interactive Display",
    madeAt: "Inhance Digital",
    summary: "A services interactive for Aviall, the aircraft parts distributor and Boeing subsidiary.",
    capabilities: ["interactive-experiences"],
    platform: ["Touchscreen mural"],
    media: {
      poster: "/media/posters/aviall-interactive-display.jpg",
      preview: "/media/videos/aviall-interactive-display.mp4",
      vimeo: "511261145",
      images: ["/media/images/aviall.jpg"],
    },
    todo: INHANCE_TODO,
  },
  {
    slug: "illumina-miniseq",
    client: "Illumina",
    title: "MiniSeq Product Journey",
    madeAt: "Inhance Digital",
    summary: "An interactive product journey through Illumina's MiniSeq sequencer.",
    capabilities: ["interactive-experiences"],
    platform: ["Responsive web"],
    media: {
      poster: "/media/posters/illumina-miniseq.jpg",
      preview: "/media/videos/illumina-miniseq.mp4",
      vimeo: "511261054",
      images: ["/media/images/illumina.jpg"],
    },
    todo: INHANCE_TODO,
  },
  {
    slug: "valent-biosciences",
    client: "Valent BioSciences",
    title: "Mosquito and Zika Awareness",
    madeAt: "Inhance Digital",
    summary: "An informational sales tool for mosquito control and Zika awareness.",
    capabilities: ["interactive-experiences"],
    platform: ["Surface Pro"],
    media: {
      poster: "/media/posters/valent-biosciences.jpg",
      preview: "/media/videos/valent-biosciences.mp4",
      vimeo: "511261104",
      images: ["/media/images/valent.JPG"],
    },
    todo: INHANCE_TODO,
  },
  {
    slug: "fm-global-hacker-resilience",
    client: "FM Global",
    title: "Hacker Resilience",
    madeAt: "Inhance Digital",
    summary: "An interactive globe visualizing cyber threats for FM Global's hacker resilience story.",
    capabilities: ["interactive-experiences"],
    media: {
      poster: "/media/posters/fm-global-hacker-resilience.jpg",
      preview: "/media/videos/fm-global-hacker-resilience.mp4",
      vimeo: "511263904",
    },
    todo: INHANCE_TODO + " (Teresa confirmed 2026-11-16 that this was built at Inhance Digital.)",
  },
  {
    slug: "inhance-website",
    client: "Inhance Digital",
    title: "Agency Website",
    madeAt: "Inhance Digital",
    summary: "A responsive website for Inhance Digital, the experiential marketing agency.",
    capabilities: ["full-stack-platforms"],
    platform: ["Responsive web"],
    media: {
      poster: "/media/posters/inhance-website.jpg",
      preview: "/media/videos/inhance-website.mp4",
      vimeo: "511260825",
    },
    todo: INHANCE_TODO + " (Today's inhance.com is a newer site, so there is no live link.)",
  },

  // ---------- Independent contractor ----------
  // Teresa, 2026-11-17: "Snap was/is Snapchat. Make that clear." Built as an independent contractor.
  // From her `snap` repo (11 commits, Feb to Mar 2024).
  {
    slug: "snapchat-ai-photo-booth",
    client: "Snapchat",
    title: "AI Photo Booth",
    madeAt: "Independent contractor",
    summary:
      "A multi-device AI photo booth for Snapchat: an iPad runs the shoot, a live display shows it, and Stable Diffusion turns each photo into a styled image.",
    capabilities: ["interactive-experiences"],
    platform: ["iPad", "Live display", "Desktop kiosk (Electron)"],
    tech: ["React", "Socket.IO", "Express", "Electron", "ComfyUI", "Stable Diffusion"],
    built: [
      "An iPad controller and a live display kept in sync over Socket.IO.",
      "The capture flow: shoot, retake, processing and a gallery of results.",
      "Stable Diffusion image generation through ComfyUI, packaged with the apps as an Electron kiosk.",
    ],
    media: {},
    todo: "Add any photos or video you're allowed to show.",
  },

  // ---------- Hackathons, game jams, community ----------
  {
    slug: "ibm-watson-speaker-analyzer",
    client: "AT&T Hackathon LA",
    title: "Speaker Personality Analyzer",
    madeAt: "Personal",
    summary:
      "An end-to-end web app that analyzes the personality and tone of famous speakers with IBM Watson's tone analysis and personality insights.",
    capabilities: ["full-stack-platforms"],
    award: "1st Place, IBM's Best Use of Watson",
    tech: ["IBM Watson"],
    media: { poster: "/media/images/watson.jpg" },
    todo: "Add the stack and your part of the team, if any.",
  },
  {
    slug: "jigdraw",
    client: "Global Game Jam Honolulu",
    title: "JigDraw",
    madeAt: "Personal",
    summary: "The winning game at Global Game Jam Honolulu.",
    capabilities: ["interactive-experiences"],
    award: "Winning game, Global Game Jam Honolulu",
    media: { poster: "/media/images/jigdraw.jpg" },
    todo: "One or two sentences on how it plays, the stack, and your role on the team.",
  },
  {
    slug: "tedx-honolulu-paradigm-shift",
    client: "TEDx Honolulu",
    title: "Paradigm Shift Event App and CMS",
    madeAt: "Personal",
    summary: "An Android app for the Paradigm Shift event program, with a content management system to run it.",
    capabilities: ["cross-platform-apps", "full-stack-platforms"],
    platform: ["Android", "Web CMS"],
    media: { poster: "/media/images/tedxfront.jpg", images: ["/media/images/tedx.jpg"] },
    todo: "Confirm whether this was volunteer or paid work, and the stack.",
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const featuredProjects = () =>
  projects.filter((p) => p.featured).sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));

export const projectsFor = (capability: CapabilitySlug) =>
  projects.filter((p) => p.capabilities.includes(capability));
