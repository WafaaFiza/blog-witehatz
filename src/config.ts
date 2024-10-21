import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog-witehatz.vercel.app/", // Add a trailing slash
  author: "Maliq",
  profile: "https://witehatz-56a837b76c4a.herokuapp.com/",
  desc: "witehatz blog, everything cybersecurity.",
  title: "witehatz",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/WafaaFiza",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/WafaaFiza",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/witehatz/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/witehatz",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:witehatz@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  // ... (other social media entries remain unchanged)
];
