// Where each brand or event links (Teresa, 2026-11-17: "each event/brand needs to be clickable and take
// us to the relevant work OR link"). Site paths go to her work here; a brand with several projects opens
// the Work page filtered to that client. She asked not to link to agency case studies themselves.
// Names without an entry (e.g. Intel, Mercedes, Otis) stay plain text until there is work or media for them.
import { hiddenProjectSlugs } from "./projects";

const links: Record<string, string> = {
  IBM: "/work/?client=IBM",
  Cummins: "/work/?client=Cummins",
  Baxter: "/work/?client=Baxter",
  "Andersen Windows": "/work/andersen-vr-showroom/",
  Adobe: "/work/adobe-platinum-club/",
  Nissan: "/work/nissan-next-lineup/",
  "Boeing Aviall": "/work/aviall-interactive-display/",
  "Boeing's Aviall division": "/work/aviall-interactive-display/",
  Aviall: "/work/aviall-interactive-display/",
  Illumina: "/work/illumina-miniseq/",
  "Valent BioSciences": "/work/valent-biosciences/",
  "FM Global": "/work/fm-global-hacker-resilience/",
  Stride: "/work/k12-learning-coach-community/",
  Snapchat: "/work/snapchat-ai-photo-booth/",
  "Ontario Lottery and Gaming": "/work/olg-dream-generator/",
  OLG: "/work/olg-dream-generator/",
  Glossi: "/work/glossi-virtual-photo-studio/",
  "Olive AI": "/work/olive-ai-healthcare-automation/",
  "Hawaii STEM Conference": "/work/hawaii-stem-conference-keynote/",
  "EXCITE Camp": "/work/excite-camp-oahu-talk/",
  Gulfstream: "/work/gulfstream-g400-g800-launch/",
  Harman: "/work/harman-ces-2020/",
  CES: "/work/harman-ces-2020/", // her CES work was HARMAN's 2020 experience (Teresa, 2026-11-17)
};

// A hidden project has no page, so its name stays plain text until the project is shown again.
export const brandLinks: Record<string, string> = Object.fromEntries(
  Object.entries(links).filter(([, href]) => !hiddenProjectSlugs.has(href.match(/^\/work\/([^/?]+)\/$/)?.[1] ?? "")),
);

export const isExternal = (href: string) => href.startsWith("http");
