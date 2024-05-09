import type socialIcons from "@assets/socialIcons";

export const SITE = {
  website: "https://diliu.pages.dev/",
  author: "Di Liu",
  desc: "Di's minimal portfolio website for blogging and showcasing projects.",
  title: "Di's Website",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60_000, // 15 minutes
} as const;

/**
 * https://gist.github.com/traysr/2001377
 */
export const LOCALE = {
  lang: "en",
  // BCP 47 Language Tags. Set this empty [] to use the environment default
  langTag: ["en-EN"],
} as const;

export const SOCIALS: {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[] = [
  {
    name: "Github",
    href: "https://github.com/Firerer",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/di-leo-liu-898677219/",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:liudi12631@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: false,
  },
] as const;
