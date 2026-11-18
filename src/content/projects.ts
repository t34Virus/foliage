import type { CapabilitySlug } from "./capabilities";

// A silent clip in a project gallery: its poster shows until hover (or keyboard focus), then it plays like a GIF.
export type MediaClip = { src: string; poster: string; label: string };

export type Project = {
  slug: string;
  client: string;
  title: string;
  madeAt: string; // the company Teresa built it at, or "Personal"
  madeAtLabel?: string; // the info-panel label for madeAt, when "Built at" doesn't fit (e.g. a talk)
  summary: string; // one line for cards and the page intro
  capabilities: CapabilitySlug[];
  role?: string;
  platform?: string[];
  tech?: string[];
  challenge?: string;
  challengeTitle?: string; // heading for the challenge text when "Challenge" doesn't fit (e.g. "The event")
  quote?: { text: string; by: string }; // a pull quote shown above the story
  built?: string[]; // "What I built"
  howItWorks?: { part: string; detail: string }[]; // "How it works": the tech and approach, part by part
  results?: string[];
  award?: string;
  credit?: string; // photo or video credit, shown in the info panel (e.g. "Photos: Spinifex Group")
  aiUse?: string; // a footnote at the bottom of the project page's info panel; Teresa wants AI use stated honestly
  media: {
    poster?: string; // /public path
    preview?: string; // short muted loop for cards and the home circle
    vimeo?: string; // full demo, embedded on the project page
    youtube?: string; // a public YouTube video, embedded the same way when there's no Vimeo
    videoTitle?: string; // the hero video's title, for screen readers
    // Width / height of a portrait hero video (from Vimeo's oEmbed sizes). On phones held upright the
    // hero frame takes this shape, poster and player alike, so the video isn't a thin strip with bars.
    videoAspect?: number;
    posterPortrait?: string; // a portrait crop of the poster for that portrait frame
    moreVideos?: { youtube: string; title: string }[]; // more public YouTube videos, embedded under the story
    video?: string; // self-hosted clip when there's no public Vimeo
    images?: (string | MediaClip)[]; // the gallery, in order: stills, or clips that play on hover
  };
  links?: { label: string; href: string }[];
  featured?: number; // order on the home page
  hidden?: boolean; // kept in the code but left off the site (no page, card or link) until it's ready
  // Notes for Teresa: what still needs her input. Never rendered.
  todo?: string;
};

const SPINIFEX_TODO =
  "Confirm your role, the stack, the event or campaign it was for, and one result (reach, attendees, duration in use).";
// Teresa, 2026-11-17: no AI was used on any Spinifex or Inhance project; all of that code was handwritten.
const HANDWRITTEN = "All custom code was handwritten."; // "custom": frameworks such as Angular came as published
const INHANCE_TODO = "Confirm your role on this project, the stack, and anything measurable.";

const allProjects: Project[] = [
  // First on the Work page at her request ("Put the dream generator at the top", 2026-11-17).
  // Independent contractor work: she asked to include it (2026-11-17).
  // Facts from her TFG repos and session notes; media from her OLG zip and her Vimeo upload.
  // Her rule: never show a guest's full name, email or phone number (first names are fine).
  {
    slug: "olg-dream-generator",
    client: "OLG",
    title: "Dream Generator: Generative AI Photo Kiosk",
    madeAt: "Contract for The Famous Group",
    madeAtLabel: "Engagement",
    summary:
      "A walk-up generative AI kiosk for Ontario Lottery and Gaming: guests pick the dreams that speak to them, pose for a photo, and get an AI-made portrait of themselves living that dream, to print or scan home.",
    capabilities: ["interactive-experiences", "full-stack-platforms"],
    role: "Full-Stack Engineer",
    platform: ["Touchscreen kiosk (Windows)", "Web moderator dashboard", "Mobile share page"],
    tech: ["NestJS", "Nuxt 3", "Vue 3", "TypeScript", "MongoDB", "WebSockets", "Keycloak", "Google Cloud Storage", "Gemini 2.5 Flash Image", "Gemini 2.5 Flash-Lite", "Gemini API", "Jest"],
    challenge:
      "Turn generative AI into an in-person experience anyone could walk up to: in English or French, accessible, quick enough to hold a guest's attention, and with a person able to review what the AI makes before it goes out.",
    built: [
      "The kiosk flow: language, sign-up, dream cards drawn from a configurable deck, camera capture, generation, review and share.",
      "Prompts built from each guest's picks, generating 5 images per session (a batch of 4 plus an accessible variant) with Google Gemini, plus a direct Gemini API fallback for image generation.",
      "A real-time moderator dashboard synced to the kiosk over WebSockets, with approval before results go out and a self-serve mode when no moderator is present.",
      "A public share page reached by QR code, consent and data-retention notices, and a Windows installer that runs the kiosk full screen on the on-site PC.",
    ],
    howItWorks: [
      {
        part: "The kiosk",
        detail:
          "A Nuxt 3 app (Vue 3 and TypeScript) walks each guest through language, sign-up, dream cards, camera, generation, review and share, in English or French. It runs full screen in Chrome's kiosk mode on an on-site Windows PC, set up by a PowerShell installer.",
      },
      {
        part: "Dream cards and prompts",
        detail:
          "The cards come from a configurable deck in the platform's Experience Builder, in categories like Health and Wellness, City, Resort and Bucket List, each card with its own image and prompt fragment. A prompt template fills in each guest's picks, so the deck can change without a new release.",
      },
      {
        part: "Generating the dream",
        detail:
          "A NestJS backend on Fastify takes the photo and starts two generations in parallel through the client's Google Gemini pipeline: Gemini 2.5 Flash-Lite turns the guest's picks into a detailed image prompt, and Gemini 2.5 Flash Image paints the guest into the dream, as a batch of 4 for the moderator to choose from plus an accessible variant. I added a direct call to the Gemini API (Gemini 2.5 Flash Image) that takes over if the pipeline fails, and Gemini 2.5 Flash-Lite writes the dream's caption through a three-step text prompt.",
      },
      {
        part: "A person in the loop",
        detail:
          "Two WebSocket gateways connect the kiosk to a moderator dashboard that mirrors the guest's screen, helps fill in the form, and approves the result before it goes out. Moderators sign in through Keycloak (OIDC with PKCE). If no moderator is connected for 10 seconds, the kiosk switches itself to self-serve.",
      },
      {
        part: "Taking it home",
        detail:
          "Each result gets a QR code that opens a public share page on the guest's phone, with the image to download and the caption to copy. Guests can also print it on the spot.",
      },
      {
        part: "Consent built in",
        detail:
          "Consent and data-retention notices, the liability release and the full privacy policy, in English and French, are part of the flow rather than an afterthought.",
      },
    ],
    media: {
      poster: "/media/posters/olg-dream-generator.jpg",
      videoAspect: 9 / 16, // the kiosk video is portrait (Vimeo 240 x 426)
      posterPortrait: "/media/posters/olg-dream-generator-portrait.jpg", // 9:16 crop of IMG_8122, the same photo
      // Hover demo: the same edit as her highlight GIF (welcome sign, dream cards, generating,
      // result and QR, phone, print), rendered as video from IMG_8114. First names only on screen.
      preview: "/media/videos/olg-dream-generator.mp4",
      vimeo: "1247757908", // guest walkthrough, last name and email blurred
      images: [
        "/media/images/olg-dream-generator-1.jpg",
        "/media/images/olg-dream-generator-2.jpg",
        // Operator and kiosk screens side by side, from her Vimeo cut; frames with a guest's face left out.
        "/media/images/olg-dream-generator-3.jpg",
        // The landing animation and clips from her own test session; no guest data, and the clips skip the
        // name, email and phone entry screens.
        { src: "/media/videos/olg-dream-generator-landing.mp4", poster: "/media/posters/olg-dream-generator-landing.jpg", label: "The landing screen's attract loop" },
        { src: "/media/videos/olg-dream-generator-selection.mp4", poster: "/media/posters/olg-dream-generator-selection.jpg", label: "Choosing a dream: the operator's screen (left) and the guest's kiosk (right)" },
        { src: "/media/videos/olg-dream-generator-reveal.mp4", poster: "/media/posters/olg-dream-generator-reveal.jpg", label: "The reveal: scan the QR code to save it, or print a copy" },
      ],
    },
    // Teresa, 2026-11-18: name the AI specifically. Models confirmed in the code: the client pipeline's
    // generation-pipeline doc and her own route (server/routes/olg/generate.post.ts, gemini-2.5-flash-image).
    aiUse:
      "AI in the product: Google Gemini (2.5 Flash-Lite writes the prompts and captions, 2.5 Flash Image makes the portraits), with a person approving every result. Code written with Claude Code (Anthropic) as an AI pair programmer, every change reviewed and tested by me.",
    featured: 1, // her pick for #1 (2026-11-17), replacing Glossi
    todo: "Add any results (dates, venue, guests served, prints).",
  },

  // ---------- Tilted Windmill Agency ----------
  {
    slug: "k12-learning-coach-community",
    client: "Stride",
    title: "K12 Learning Coach Community: Website and Mobile Apps",
    madeAt: "Tilted Windmill Agency",
    summary:
      "Stride's Learning Coach Community for K12 families: native iOS and Android apps and a full website from one codebase, where learning coaches message, meet and share resources.",
    capabilities: ["cross-platform-apps", "full-stack-platforms", "cloud-devsecops"],
    role: "Cross-Platform Engineer: architecture and every layer from database to UI",
    platform: ["iOS", "Android", "Desktop and mobile web"],
    tech: ["React Native", "React Native for Web", "Expo", "TypeScript", "Laravel", "PHP", "UNA CMS", "MySQL", "PostgreSQL", "Redis", "WebSockets", "AWS", "Docker", "SonarQube", "Claude Code"],
    challenge:
      "Learning coaches needed one place to connect with each other: messaging, events, groups and shared resources, on whatever device they had, with UNA CMS as the community backend.",
    built: [
      "Architected the app from scratch: one React Native codebase that ships native iOS and Android apps plus a full desktop web experience.",
      "Real-time messaging with attachments and private document previews, events, groups, a resource library, push notifications and content moderation.",
      "Coach matching by shared interests and ZIP-code proximity.",
      "Custom UNA CMS modules for a redesigned email and notification system, with versioned schema migrations.",
      "Led the desktop web expansion with React Native for Web: wrote the architecture decision record, scoped the work into 16 tickets, and built the desktop shell without changing the native apps.",
    ],
    howItWorks: [
      {
        part: "One codebase, three platforms",
        detail:
          "The app is React Native with Expo, built for iOS and Android with EAS. For desktop web I compared React Native for Web, a separate React app and a shared-core monorepo in an architecture decision record, and chose React Native for Web: the browser runs the same business logic, with web-only files where the desktop needs its own layout, so the native apps stay untouched.",
      },
      {
        part: "A Laravel layer between the app and the CMS",
        detail:
          "UNA CMS runs the community, but its API is slow and shaped for the CMS, not the app. A Laravel service sits in between as the app's backend: it normalizes CMS data, keeps app-specific tables in PostgreSQL on AWS, issues tokens with Sanctum, and delivers real-time messages over WebSockets with Laravel Reverb.",
      },
      {
        part: "Making it fast",
        detail:
          "The slowest screens made dozens of CMS calls per page, an N+1 pattern. I moved those reads to batched queries against a read replica and ran independent requests concurrently, each behind a kill switch that falls back to the CMS automatically, and checked that the responses matched. Event search went from about 25 seconds to 3. When one direct path measured 3 times slower, I reverted it.",
      },
      {
        part: "Matching coaches",
        detail:
          "Coaches are ranked by shared interests and by distance between ZIP codes, using the US Census ZIP code areas (about 33,000 of them). Onboarding saves optimistically and prefetches matches in the background, so it never waits on the network, and new connections arrive as push notifications.",
      },
      {
        part: "Private by design",
        detail:
          "Word, Excel and PowerPoint previews are converted to PDF with LibreOffice on our own servers, because hosted viewers from Microsoft or Google would have to fetch parents' files themselves. Reported conversations and their attachments are preserved as evidence even after deletion, with a one-year retention sweep.",
      },
      {
        part: "Guardrails from day one",
        detail:
          "Husky, commitlint, Jest and SonarQube in Bitbucket Pipelines from the first weeks, API docs for 212 routes with a build check that fails on any undocumented route, and an uptime monitor that checks 5 upstream services every 5 minutes and alerts Slack only when something changes.",
      },
    ],
    results: [
      "Cut response times 70 to 88% on the slowest API endpoints; event search went from 25 seconds to 3, each change behind a kill switch with automatic fallback.",
      "Automated health monitoring of 5 third-party integrations with Slack alerting.",
      "Automated tests and SonarQube quality gates in CI/CD.",
    ],
    // Teresa, 2026-11-17: the client isn't confidential (Stride, K12). Media is built only from Stride's
    // four public Google Play screenshots, so no private user or student data appears.
    media: {
      poster: "/media/posters/k12-learning-coach-community.jpg",
      preview: "/media/videos/k12-learning-coach-community.mp4",
      // Clips from her own QA recordings, showing test accounts only (every frame checked). Phone and modal
      // clips sit on a 16:9 K12-blue backdrop. Then Stride's four public Google Play screenshots, two per image.
      images: [
        { src: "/media/videos/k12-learning-coach-community-coach-connect-interests.mp4", poster: "/media/posters/k12-learning-coach-community-coach-connect-interests.jpg", label: "Web: Coach Connect onboarding, picking hobbies, family life and motivations" },
        { src: "/media/videos/k12-learning-coach-community-suggested-friends.mp4", poster: "/media/posters/k12-learning-coach-community-suggested-friends.jpg", label: "Mobile: suggested connections grouped by school, support staff and shared groups" },
        { src: "/media/videos/k12-learning-coach-community-message-modal.mp4", poster: "/media/posters/k12-learning-coach-community-message-modal.jpg", label: "Web: a quick message modal for chatting without leaving the page" },
        { src: "/media/videos/k12-learning-coach-community-post-audience.mp4", poster: "/media/posters/k12-learning-coach-community-post-audience.jpg", label: "Mobile: choosing who sees a post, from specific friends to a school group" },
        { src: "/media/videos/k12-learning-coach-community-notifications.mp4", poster: "/media/posters/k12-learning-coach-community-notifications.jpg", label: "Web: accepting a friend request straight from the notifications panel" },
        { src: "/media/videos/k12-learning-coach-community-report-event.mp4", poster: "/media/posters/k12-learning-coach-community-report-event.jpg", label: "Mobile: reporting an event takes a few taps and ends with a friendly confirmation" },
        { src: "/media/videos/k12-learning-coach-community-profile-preview.mp4", poster: "/media/posters/k12-learning-coach-community-profile-preview.jpg", label: "Web: hovering a name in a post previews that coach's profile" },
        { src: "/media/videos/k12-learning-coach-community-coach-connect-finish.mp4", poster: "/media/posters/k12-learning-coach-community-coach-connect-finish.jpg", label: "Web: setting a connection preference and finishing Coach Connect setup" },
        { src: "/media/videos/k12-learning-coach-community-all-set.mp4", poster: "/media/posters/k12-learning-coach-community-all-set.jpg", label: "Web: the animated You're all set screen that closes out onboarding" },
        "/media/images/k12-learning-coach-community-1.jpg",
        "/media/images/k12-learning-coach-community-2.jpg",
      ],
    },
    links: [
      { label: "Google Play: Stride Learning for Parents", href: "https://play.google.com/store/apps/details?id=com.k12.parents" },
      { label: "About the Learning Coach Community", href: "https://www.k12.com/learning-coach-life/" },
    ],
    // Teresa, 2026-11-18: name the AI specifically. The app has no AI features; AI was used to build it.
    aiUse:
      "Built with AI assistance: Claude Code (Anthropic), connected over MCP to Jira, Confluence and Figma. Every AI-written change passes SonarQube before commit, tests that fail without the fix and a runtime check, and gets my sign-off before any push.",
    featured: 2,
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
    // From her Glossi.mov screen recording (2026-11-17): one 18.25 s cycle, cropped to 16:9, plus her Vimeo upload.
    media: {
      poster: "/media/posters/glossi-virtual-photo-studio.jpg",
      preview: "/media/videos/glossi-virtual-photo-studio.mp4",
      images: [ // stills from her screen recording (the Vimeo cut)
        "/media/images/glossi-virtual-photo-studio-1.jpg",
        "/media/images/glossi-virtual-photo-studio-2.jpg",
        "/media/images/glossi-virtual-photo-studio-3.jpg",
        "/media/images/glossi-virtual-photo-studio-4.jpg",
        "/media/images/glossi-virtual-photo-studio-5.jpg",
      ],
      vimeo: "1247776216",
    },
    todo: "Add which parts of the Studio your team built, and any screenshots you own.",
  },

  // ---------- Olive AI ----------
  {
    slug: "olive-ai-healthcare-automation",
    hidden: true, // Teresa, 2026-11-17: remove from the portfolio for now
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
    capabilities: ["interactive-experiences", "engineering-leadership"],
    role: "Software Development Lead",
    tech: ["Angular", "Kubernetes", "Python (Django)", "WebGL"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/ibm-ripple-effect.jpg",
      preview: "/media/videos/ibm-ripple-effect.mp4",
      vimeo: "511322612",
      images: [
        "/media/images/ibm-ripple-effect-shot-1.jpg",
        "/media/images/ibm-ripple-effect-shot-2.jpg",
        "/media/images/ibm-ripple-effect-shot-3.jpg",
        "/media/images/ibm-ripple-effect-shot-4.jpg",
        "/media/images/ibm-ripple-effect-shot-5.jpg",
        "/media/images/ibm-ripple-effect-shot-6.jpg",
      ],
    },
    featured: 3,
    todo: SPINIFEX_TODO,
  },
  {
    slug: "ibm-sounds-of-security",
    client: "IBM Security",
    title: "Sounds of Security",
    madeAt: "Spinifex Group",
    summary:
      "An interactive audio experience presenting cybersecurity strategy as a composition: expertise, services and technology in harmony.",
    capabilities: ["interactive-experiences", "engineering-leadership"],
    role: "Software Development Lead",
    tech: ["Angular", "Kubernetes", "Python (Django)", "WebGL"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/ibm-sounds-of-security.jpg",
      preview: "/media/videos/ibm-sounds-of-security.mp4",
      vimeo: "736396394",
      images: [
        "/media/images/ibm-sounds-of-security-shot-1.jpg",
        "/media/images/ibm-sounds-of-security-shot-2.jpg",
        "/media/images/ibm-sounds-of-security-shot-3.jpg",
        "/media/images/ibm-sounds-of-security-shot-4.jpg",
        "/media/images/ibm-sounds-of-security-shot-5.jpg",
      ],
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
    capabilities: ["interactive-experiences", "engineering-leadership"],
    role: "Software Development Lead",
    tech: ["Angular", "Kubernetes", "Python (Django)"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/ibm-think-city.jpg",
      preview: "/media/videos/ibm-think-city.mp4",
      vimeo: "511260584",
      images: [
        "/media/images/ibm-think-city-shot-1.jpg",
        "/media/images/ibm-think-city-shot-2.jpg",
        "/media/images/ibm-think-city-shot-3.jpg",
        "/media/images/ibm-think-city-shot-4.jpg",
        "/media/images/ibm-think-city-shot-5.jpg",
      ],
    },
    todo: SPINIFEX_TODO,
  },
  {
    slug: "ibm-quantum",
    client: "IBM",
    title: "Quantum",
    madeAt: "Spinifex Group",
    summary: "An interactive web experience putting IBM's quantum computing story at visitors' fingertips.",
    capabilities: ["interactive-experiences", "engineering-leadership"],
    role: "Software Development Lead",
    tech: ["Angular", "Kubernetes", "Python (Django)"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/ibm-quantum.jpg",
      preview: "/media/videos/ibm-quantum.mp4",
      vimeo: "511260636",
      images: [
        "/media/images/ibm-quantum-shot-1.jpg",
        "/media/images/ibm-quantum-shot-2.jpg",
        "/media/images/ibm-quantum-shot-3.jpg",
        "/media/images/ibm-quantum-shot-4.jpg",
        "/media/images/ibm-quantum-shot-5.jpg",
        "/media/images/ibm-quantum-shot-6.jpg",
      ],
    },
    todo: SPINIFEX_TODO,
  },
  {
    slug: "adobe-platinum-club",
    client: "Adobe",
    title: "Platinum Club",
    madeAt: "Spinifex Group",
    summary: "A recognition experience celebrating the winners of Adobe's Platinum Club.",
    capabilities: ["interactive-experiences", "engineering-leadership"],
    role: "Software Development Lead",
    tech: ["Angular", "Kubernetes", "Python (Django)"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/adobe-platinum-club.jpg",
      preview: "/media/videos/adobe-platinum-club.mp4",
      vimeo: "511425393",
      images: [
        "/media/images/adobe-platinum-club-shot-1.jpg",
        "/media/images/adobe-platinum-club-shot-2.jpg",
        "/media/images/adobe-platinum-club-shot-3.jpg",
        "/media/images/adobe-platinum-club-shot-4.jpg",
        "/media/images/adobe-platinum-club-shot-5.jpg",
      ],
    },
    todo: SPINIFEX_TODO,
  },
  {
    slug: "nissan-next-lineup",
    client: "Nissan",
    title: "NEXT Lineup",
    madeAt: "Spinifex Group",
    summary: "A virtual vehicle showroom for Nissan's NEXT lineup.",
    capabilities: ["interactive-experiences", "engineering-leadership"],
    role: "Software Development Lead",
    tech: ["Angular", "Kubernetes", "Python (Django)"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/nissan-next-lineup.jpg",
      preview: "/media/videos/nissan-next-lineup.mp4",
      vimeo: "511425580",
      images: [
        "/media/images/nissan-next-lineup-shot-1.jpg",
        "/media/images/nissan-next-lineup-shot-2.jpg",
        "/media/images/nissan-next-lineup-shot-3.jpg",
        "/media/images/nissan-next-lineup-shot-4.jpg",
        "/media/images/nissan-next-lineup-shot-5.jpg",
        "/media/images/nissan-next-lineup-shot-6.jpg",
      ],
    },
    todo: SPINIFEX_TODO,
  },

  // Teresa, 2026-11-17: use images from the Spinifex and GPJ case studies, but don't link to the case
  // studies themselves. Text follows those pages; her role, tech and on-site part are from her.
  // (First built as the G700 launch; she corrected it: hers was the 2021 G400 and G800 launch.)
  {
    slug: "gulfstream-g400-g800-launch",
    client: "Gulfstream",
    title: "G400 and G800 Launch",
    madeAt: "Spinifex Group",
    summary:
      "A hybrid launch of Gulfstream's new G400 and G800 at its world headquarters in Savannah, Georgia, produced with George P. Johnson for the audience on site and a global livestream.",
    capabilities: ["interactive-experiences", "engineering-leadership"],
    role: "Software Development Lead, on site",
    platform: ["Surface tablet"],
    tech: ["Angular", "Electron"],
    // No "Recognition" row: the 2022 MUSE Platinum went to the launch, not to Teresa (2026-11-17: "make sure it
    // doesn't look like I won the award but the project did"). It's stated under Results with the launch as the subject.
    challenge:
      "Gulfstream wanted a bold launch that reached far beyond the guests at its Savannah headquarters, to viewers around the world.",
    // Teresa, 2026-11-17: "The LED surface and projection mapping were controlled by the tablet. The software
    // I wrote was meant for the seller to be able to demo the plane's capabilities to prospective customers."
    built: [
      "A sales demo app for a Surface tablet, built in Angular inside an Electron shell. It controlled the projection mapping and the LED surface, so a salesperson could demo the aircraft's capabilities to prospective customers.",
    ],
    howItWorks: [
      {
        part: "The sales demo",
        detail:
          "From the tablet, a salesperson ran both the projection mapping and the LED surface, walking a prospective customer through what the new aircraft can do, like the G400's range and cruise speed in my footage below.",
      },
      {
        part: "Two reveals",
        detail:
          "The G400 arrived through a launch film with Hollywood-level CGI, placing Gulfstream's president in a virtual hangar with an aircraft that didn't exist yet, shot on green screen from the plane's 3D production data. Then a CGI teaser of the G800 handed off to the real jet, towed through the audience to the stage for a nose-to-nose reveal.",
      },
    ],
    results: [
      "More than 40,000 live viewers, and another 400,000 views afterward across Gulfstream's website and social channels.",
      "The launch won Platinum at the 2022 MUSE Creative Awards.",
    ],
    credit: "Photos: Spinifex Group. Launch video: George P. Johnson. On-site clips: my own footage.",
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/gulfstream-g400-g800-launch.jpg",
      preview: "/media/videos/gulfstream-g400-g800-launch.mp4",
      youtube: "HVmxOcritis",
      images: [
        "/media/images/gulfstream-g400-g800-launch-1.jpg",
        "/media/images/gulfstream-g400-g800-launch-2.jpg",
        "/media/images/gulfstream-g400-g800-launch-3.jpg",
        "/media/images/gulfstream-g400-g800-launch-4.jpg",
        "/media/images/gulfstream-g400-g800-launch-5.jpg",
        "/media/images/gulfstream-g400-g800-launch-6.jpg",
        // Her own phone footage from on site, cut silent with location data stripped.
        { src: "/media/videos/gulfstream-g400-g800-launch-clip-1.mp4", poster: "/media/posters/gulfstream-g400-g800-launch-clip-1.jpg", label: "On site, 2021: demo content on the fuselage, run from the sales tablet" },
        { src: "/media/videos/gulfstream-g400-g800-launch-clip-2.mp4", poster: "/media/posters/gulfstream-g400-g800-launch-clip-2.jpg", label: "On site, 2021: G400 range and cruise speed, run from the sales tablet" },
        { src: "/media/videos/gulfstream-g400-g800-launch-clip-3.mp4", poster: "/media/posters/gulfstream-g400-g800-launch-clip-3.jpg", label: "On site, 2021: the hangar display" },
      ],
    },
  },
  // Teresa: "The work I did at CES from 2020 was for Harman." The 4 photos carry HARMAN ExP branding
  // (the CES 2020 "Experiences per Mile" theme); the page's Welcome and operations-center photos look
  // like 2019 and are left out. The video is GPJ's "HARMAN at CES 2020".
  {
    slug: "harman-ces-2020",
    client: "Harman",
    title: "CES 2020 Experience",
    madeAt: "Spinifex Group",
    summary:
      "HARMAN's automotive showcase at CES 2020, built with George P. Johnson: a physical and digital experience for its in-car audio and digital cockpit technology, with a LinkedIn Live broadcast straight from the story space.",
    capabilities: ["interactive-experiences", "engineering-leadership"],
    role: "Software Development Lead",
    tech: ["Unity", "JavaScript"], // Unity with a web layer on top (Teresa, 2026-11-17)
    challenge:
      "Create a CES experience that grabbed attendees' attention and imagination in person, and use the event space as a studio to test reaching a virtual audience.",
    results: ["The LinkedIn Live session from the physical story space reached 14,563 unique viewers."],
    credit: "Photos and video: George P. Johnson",
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/harman-ces-2020.jpg",
      preview: "/media/videos/harman-ces-2020.mp4",
      youtube: "kWbGpD6HgQo",
      images: [
        "/media/images/harman-ces-2020-1.jpg",
        "/media/images/harman-ces-2020-2.jpg",
        "/media/images/harman-ces-2020-3.jpg",
        "/media/images/harman-ces-2020-4.jpg",
        "/media/images/harman-ces-2020-shot-1.jpg",
        "/media/images/harman-ces-2020-shot-2.jpg",
        "/media/images/harman-ces-2020-shot-3.jpg",
        "/media/images/harman-ces-2020-shot-4.jpg",
      ],
    },
  },

  // ---------- Inhance Digital ----------
  {
    slug: "cummins-engine-interactive",
    client: "Cummins",
    title: "2.0 Engine Interactive",
    madeAt: "Inhance Digital",
    summary: "An international interactive marketing campaign for Cummins on-highway engines.",
    capabilities: ["interactive-experiences", "cross-platform-apps"], // cross-platform added at her request, 2026-11-17
    role: "Lead developer",
    platform: ["Touchscreen mural", "Surface Pro"],
    tech: ["JavaScript"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/cummins-engine-interactive.jpg",
      preview: "/media/videos/cummins-engine-interactive.mp4",
      vimeo: "511260679",
      images: [
        "/media/images/2.0.JPG",
        "/media/images/cummins-engine-interactive-shot-1.jpg",
        "/media/images/cummins-engine-interactive-shot-2.jpg",
        "/media/images/cummins-engine-interactive-shot-3.jpg",
        "/media/images/cummins-engine-interactive-shot-4.jpg",
        "/media/images/cummins-engine-interactive-shot-5.jpg",
        "/media/images/cummins-engine-interactive-shot-6.jpg",
      ],
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
    capabilities: ["interactive-experiences", "cross-platform-apps"], // cross-platform added at her request, 2026-11-17
    role: "Lead developer",
    platform: ["Touchscreen mural", "Surface Pro"],
    tech: ["JavaScript"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/cummins-conexpo.jpg",
      preview: "/media/videos/cummins-conexpo.mp4",
      vimeo: "511260939",
      images: [
        "/media/images/cummins17FEB02.png",
        "/media/images/cummins-conexpo-shot-1.jpg",
        "/media/images/cummins-conexpo-shot-2.jpg",
        "/media/images/cummins-conexpo-shot-3.jpg",
        "/media/images/cummins-conexpo-shot-4.jpg",
        "/media/images/cummins-conexpo-shot-5.jpg",
        "/media/images/cummins-conexpo-shot-6.jpg",
      ],
    },
    todo: INHANCE_TODO,
  },
  {
    slug: "cummins-iaa",
    client: "Cummins",
    title: "IAA",
    madeAt: "Inhance Digital",
    summary: "An interactive experience and product information tool for Cummins on-highway engine components.",
    capabilities: ["interactive-experiences", "cross-platform-apps"], // cross-platform added at her request, 2026-11-17
    role: "Lead developer",
    platform: ["Touchscreen mural", "Surface Pro"],
    tech: ["JavaScript"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/cummins-iaa.jpg",
      preview: "/media/videos/cummins-iaa.mp4",
      vimeo: "511261003",
      images: [
        "/media/images/iaa.jpg",
        "/media/images/cummins-iaa-shot-1.jpg",
        "/media/images/cummins-iaa-shot-2.jpg",
        "/media/images/cummins-iaa-shot-3.jpg",
        "/media/images/cummins-iaa-shot-4.jpg",
        "/media/images/cummins-iaa-shot-5.jpg",
        "/media/images/cummins-iaa-shot-6.jpg",
      ],
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
    tech: ["JavaScript"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/andersen-vr-showroom.jpg",
      preview: "/media/videos/andersen-vr-showroom.mp4",
      vimeo: "511363802",
      images: [
        "/media/images/andersen-vr-showroom-shot-1.jpg",
        "/media/images/andersen-vr-showroom-shot-2.jpg",
        "/media/images/andersen-vr-showroom-shot-3.jpg",
        "/media/images/andersen-vr-showroom-shot-4.jpg",
        "/media/images/andersen-vr-showroom-shot-5.jpg",
        "/media/images/andersen-vr-showroom-shot-6.jpg",
      ],
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
    tech: ["JavaScript", "Native iOS"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/baxter-prismaflex.jpg",
      preview: "/media/videos/baxter-prismaflex.mp4",
      vimeo: "511260965",
      images: [
        "/media/images/baxter_prisma.jpg",
        "/media/images/baxter-prismaflex-shot-1.jpg",
        "/media/images/baxter-prismaflex-shot-2.jpg",
        "/media/images/baxter-prismaflex-shot-3.jpg",
        "/media/images/baxter-prismaflex-shot-4.jpg",
        "/media/images/baxter-prismaflex-shot-5.jpg",
        "/media/images/baxter-prismaflex-shot-6.jpg",
      ],
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
    tech: ["JavaScript", "Native iOS"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/baxter-patient-journey.jpg",
      videoAspect: 3 / 4, // portrait (Vimeo 240 x 320)
      preview: "/media/videos/baxter-patient-journey.mp4",
      vimeo: "511260901",
      images: [
        "/media/images/baxter_journey.JPG",
        "/media/images/baxter-patient-journey-shot-1.jpg",
        "/media/images/baxter-patient-journey-shot-2.jpg",
        "/media/images/baxter-patient-journey-shot-3.jpg",
        "/media/images/baxter-patient-journey-shot-4.jpg",
        "/media/images/baxter-patient-journey-shot-5.jpg",
        "/media/images/baxter-patient-journey-shot-6.jpg",
      ],
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
    tech: ["JavaScript"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/aviall-interactive-display.jpg",
      preview: "/media/videos/aviall-interactive-display.mp4",
      vimeo: "511261145",
      images: [
        "/media/images/aviall.jpg",
        "/media/images/aviall-interactive-display-shot-1.jpg",
        "/media/images/aviall-interactive-display-shot-2.jpg",
        "/media/images/aviall-interactive-display-shot-3.jpg",
        "/media/images/aviall-interactive-display-shot-4.jpg",
        "/media/images/aviall-interactive-display-shot-5.jpg",
      ],
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
    tech: ["JavaScript"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/illumina-miniseq.jpg",
      preview: "/media/videos/illumina-miniseq.mp4",
      vimeo: "511261054",
      images: [
        "/media/images/illumina.jpg",
        "/media/images/illumina-miniseq-shot-1.jpg",
        "/media/images/illumina-miniseq-shot-2.jpg",
        "/media/images/illumina-miniseq-shot-3.jpg",
        "/media/images/illumina-miniseq-shot-4.jpg",
        "/media/images/illumina-miniseq-shot-5.jpg",
        "/media/images/illumina-miniseq-shot-6.jpg",
      ],
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
    tech: ["JavaScript"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/valent-biosciences.jpg",
      preview: "/media/videos/valent-biosciences.mp4",
      vimeo: "511261104",
      images: [
        "/media/images/valent.JPG",
        "/media/images/valent-biosciences-shot-1.jpg",
        "/media/images/valent-biosciences-shot-2.jpg",
        "/media/images/valent-biosciences-shot-3.jpg",
        "/media/images/valent-biosciences-shot-4.jpg",
        "/media/images/valent-biosciences-shot-5.jpg",
      ],
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
    tech: ["JavaScript"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/fm-global-hacker-resilience.jpg",
      preview: "/media/videos/fm-global-hacker-resilience.mp4",
      vimeo: "511263904",
      images: [
        "/media/images/fm-global-hacker-resilience-shot-1.jpg",
        "/media/images/fm-global-hacker-resilience-shot-2.jpg",
        "/media/images/fm-global-hacker-resilience-shot-3.jpg",
        "/media/images/fm-global-hacker-resilience-shot-4.jpg",
        "/media/images/fm-global-hacker-resilience-shot-5.jpg",
      ],
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
    tech: ["JavaScript"],
    aiUse: HANDWRITTEN,
    media: {
      poster: "/media/posters/inhance-website.jpg",
      preview: "/media/videos/inhance-website.mp4",
      vimeo: "511260825",
      images: [
        "/media/images/inhance.png",
        "/media/images/inhance-website-shot-1.jpg",
        "/media/images/inhance-website-shot-2.jpg",
        "/media/images/inhance-website-shot-3.jpg",
        "/media/images/inhance-website-shot-4.jpg",
        "/media/images/inhance-website-shot-5.jpg",
        "/media/images/inhance-website-shot-6.jpg",
      ],
    },
    todo: INHANCE_TODO + " (Today's inhance.com is a newer site, so there is no live link.)",
  },

  // ---------- Independent contractor ----------
  // Teresa, 2026-11-17: "Snap was/is Snapchat. Make that clear." Built as an independent contractor.
  // From her `snap` repo (11 commits, Feb to Mar 2024).
  {
    slug: "snapchat-ai-photo-booth",
    hidden: true, // Teresa, 2026-11-17: hide for now, there is no supporting media yet
    client: "Snapchat",
    title: "AI Photo Booth",
    madeAt: "Contract",
    madeAtLabel: "Engagement",
    summary:
      "A multi-device AI photo booth for Snapchat: an iPad runs the shoot, a live display shows it, and Stable Diffusion turns each photo into a styled image.",
    capabilities: ["interactive-experiences"],
    platform: ["iPad", "Live display", "Desktop kiosk (Electron)"],
    role: "Creative Technologist",
    // Teresa, 2026-11-18: "For the Snap project, I used Hugging face and Gemini", and Gemini generated images too.
    // The repo (t34Virus/snap) shows the Hugging Face models: Stable Diffusion 1.5 (Realistic Vision V6.0
    // checkpoint), IP-Adapter Plus Face and ControlNet. The Gemini image generation isn't in the public repo.
    tech: ["React", "Socket.IO", "Express", "Electron", "ComfyUI", "Stable Diffusion 1.5 (Realistic Vision)", "Hugging Face", "ControlNet", "IP-Adapter", "Gemini"],
    built: [
      "An iPad controller and a live display kept in sync over Socket.IO.",
      "The capture flow: shoot, retake, processing and a gallery of results.",
      "Stable Diffusion image generation through ComfyUI, packaged with the apps as an Electron kiosk.",
    ],
    howItWorks: [
      {
        part: "Three screens, one server",
        detail:
          "A React 18 app has routes for the iPad controller, the live display, a gallery and a small CMS. An Express and Socket.IO server relays the countdown, capture, confirm and retake between them, so every screen stays in step.",
      },
      {
        part: "Capture",
        detail:
          "On the controller's countdown, the display's webcam takes the photo and uploads it to the server, which drops it straight into ComfyUI's input folder.",
      },
      {
        part: "Generation",
        detail:
          "ComfyUI runs a Stable Diffusion 1.5 workflow on a local NVIDIA GPU, with open models from Hugging Face (the Realistic Vision V6.0 checkpoint, ControlNet and IP-Adapter Plus Face), queued over ComfyUI's WebSocket API with the theme the guest picked, such as Action Heroes. ControlNet keeps the guest's pose, IP-Adapter carries the theme's style, a face swap keeps the guest recognizable, and a safety checker filters every result. Google Gemini generated images as well, alongside Stable Diffusion.",
      },
      {
        part: "Results everywhere at once",
        detail:
          "The server watches ComfyUI's output folder and pushes each finished image to every screen over Socket.IO, ready to keep or retake.",
      },
      {
        part: "Easy to run on site",
        detail:
          "The CMS edits button labels and theme assets in JSON without a rebuild, and electron-builder packages the app and its server as a Windows installer.",
      },
    ],
    media: {},
    todo: "Add any photos or video you're allowed to show.",
  },

  // ---------- Speaking ----------
  // Teresa, 2026-11-17: keynote speaker at the Hawaii STEM Conference on Maui in 2016. Photos from the
  // Facebook post she shared (hosts tagged: Women in Technology, STEMworks, Maui Economic Development Board).
  {
    slug: "hawaii-stem-conference-keynote",
    client: "Hawaii STEM Conference",
    title: "Keynote: My STEM Journey",
    madeAt: "Maui Economic Development Board",
    madeAtLabel: "Hosted by",
    summary:
      "Keynote at the 2016 Hawaii STEM Conference on Maui, sharing my path into technology as a web developer to encourage students to love science and set out to change the world.",
    capabilities: ["engineering-leadership"],
    role: "Keynote speaker",
    challengeTitle: "The event",
    challenge:
      "The Maui Economic Development Board's Women in Technology and STEMworks programs bring Hawaii's students together each year to explore science and technology careers. I was invited to give the keynote and share my own STEM journey.",
    media: {
      poster: "/media/posters/hawaii-stem-keynote.jpg",
      images: ["/media/images/hawaii-stem-keynote-1.jpg", "/media/images/hawaii-stem-keynote-2.jpg"],
    },
  },

  // Teresa, 2026-11-17: her talk at EXCITE Camp on Oahu (MEDB's Women in Technology day camp for 7th and
  // 8th grade girls). Quote from the camp's post, with "tells" corrected to "tell" and light punctuation.
  // The group photo was sharpened with Real-ESRGAN (75% upscaled, 25% original) at her request.
  {
    slug: "excite-camp-oahu-talk",
    client: "EXCITE Camp, Oahu",
    title: "Talk: It's Better to Be Smart",
    madeAt: "Maui Economic Development Board",
    madeAtLabel: "Hosted by",
    summary:
      "A talk for middle school girls at EXCITE Camp on Oahu about how I got into tech: tinkering with my dad, building my first website at 12, and never once thinking technology was just for boys.",
    capabilities: ["engineering-leadership"],
    role: "Speaker",
    quote: {
      text: "My father played a big part in my life. He always made me fix things, tinker with things, made my first website when I was 12, and not once did I think that this was for boys. As girls, our parents always tell us how pretty we are; my father made sure to tell me how smart I am. It's great to hear that you're pretty, but it's better to be smart!",
      by: "Teresa Nededog",
    },
    challengeTitle: "The event",
    challenge:
      "EXCITE Camp is the Maui Economic Development Board's Women in Technology day camp that introduces 7th and 8th grade girls to science and technology careers through hands-on activities with industry professionals. I spoke to the Oahu campers about my own path into tech.",
    // The photos and quote were already public in Women in Technology Hawaii's own post (linked below).
    links: [
      {
        label: "Women in Technology Hawaii's post about the talk",
        href: "https://www.facebook.com/WITHawaii/posts/pfbid021g6VRrkpzYMgFHg2RA554W6bCkodwHeGzsFrV6AiMR3iaDR7Rk8JX9gw8FrGayP7l",
      },
    ],
    media: {
      poster: "/media/posters/excite-camp-oahu.jpg",
      // Teresa, 2026-11-17: the group photo is out. The talk photo is the original, resized 2x (Lanczos) with a light
      // unsharp mask. No AI upscaling: she could tell the Real-ESRGAN version was altered. The poster is a 16:9 crop
      // with her whole head in frame, so the hero and the card are edge to edge.
      images: ["/media/images/excite-camp-oahu-1.jpg"],
    },
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
    role: "Front-end developer, with a teammate",
    tech: ["Node.js", "Express", "IBM Bluemix", "IBM Watson", "ffmpeg", "jQuery"],
    howItWorks: [
      {
        part: "The pipeline",
        detail:
          "A Node.js and Express app on IBM Bluemix pulls a speech's audio from YouTube, converts it with ffmpeg, and runs it through IBM Watson for the transcript, tone and personality insights, then shows the results for each speaker.",
      },
      {
        part: "My part",
        detail:
          "I built the front end, from the speaker picker to the results view, and connected the client to the server. My teammate built the YouTube download and audio conversion.",
      },
    ],
    media: { poster: "/media/images/watson.jpg" },
    todo: "Stack and roles come from the minorityreport repo (her commits: UI, client-server wiring, styles; teammate: YouTube pull, audio conversion).",
  },
  // Teresa, 2026-11-17: "a game I made called Degrade Analog using RPGMaker, Javascript and GIMP. I wrote my
  // own code for the snowball fight." "No AI was used to make this game either." Videos are hers, public on
  // YouTube; screenshots and the loop come from the same recordings (The Pit.mp4, Secret Weapon_ Boston.mp4).
  {
    slug: "degrade-analog",
    client: "Original game",
    title: "Degrade Analog",
    madeAt: "Personal",
    madeAtLabel: "Project",
    summary:
      "An original comedy RPG about office life in Los Angeles, made in RPG Maker, with my own JavaScript for a snowball fight.",
    capabilities: ["interactive-experiences"],
    role: "Creator",
    tech: ["RPG Maker", "JavaScript", "GIMP"],
    howItWorks: [
      {
        part: "The world",
        detail:
          "Built in RPG Maker: a top-down story that moves through the streets, office floors, break room, server room and warehouse of an LA workplace, told through character dialog and choices.",
      },
      {
        part: "The snowball fight",
        detail:
          "I wrote my own JavaScript for the snowball fight in the warehouse: a timed round with a countdown in the corner, snowballs flying across the floor, a flash on every hit, and a choice at the end to keep playing or call it.",
      },
    ],
    aiUse: "No AI was used to make this game.",
    media: {
      poster: "/media/posters/degrade-analog.jpg",
      preview: "/media/videos/degrade-analog.mp4", // the snowball fight, from The Pit
      // Her newer upload (YouTube title "Artists"), replacing The Pit (GGCPl3XOj9g).
      youtube: "-E6H_2AIlTo",
      videoTitle: "Degrade Analog: Artists",
      moreVideos: [{ youtube: "MrgpSPeHtaI", title: "Secret Weapon: Boston" }],
      // Teresa, 2026-11-17: game screenshots become clips that play on hover, "especially of cut scenes".
      // Silent cuts from The Pit and Boston, chosen with her.
      images: [
        { src: "/media/videos/degrade-analog-snowball-fight.mp4", poster: "/media/posters/degrade-analog-snowball-fight.jpg", label: "The snowball fight, with my own JavaScript" },
        { src: "/media/videos/degrade-analog-doodle.mp4", poster: "/media/posters/degrade-analog-doodle.jpg", label: "Cutscene: the doodle" },
        { src: "/media/videos/degrade-analog-fridge.mp4", poster: "/media/posters/degrade-analog-fridge.jpg", label: "Cutscene: the office fridge" },
        { src: "/media/videos/degrade-analog-proof-of-concept.mp4", poster: "/media/posters/degrade-analog-proof-of-concept.jpg", label: "Cutscene: the proof of concept" },
        { src: "/media/videos/degrade-analog-boston.mp4", poster: "/media/posters/degrade-analog-boston.jpg", label: "Cutscene: Secret Weapon, Boston" },
        "/media/images/degrade-analog-5.jpg",
        "/media/images/degrade-analog-6.jpg",
      ],
    },
  },
  {
    slug: "jigdraw",
    hidden: true, // Teresa, 2026-11-17: hide for now
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
    hidden: true, // Teresa, 2026-11-17: hide for now
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

// Everything the site shows. Hidden projects stay in allProjects (Teresa, 2026-11-17: "Don't delete that
// code, just make them inactive").
export const projects = allProjects.filter((p) => !p.hidden);
export const hiddenProjectSlugs = new Set(allProjects.filter((p) => p.hidden).map((p) => p.slug));

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const featuredProjects = () =>
  projects.filter((p) => p.featured).sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));

export const projectsFor = (capability: CapabilitySlug) =>
  projects.filter((p) => p.capabilities.includes(capability));
