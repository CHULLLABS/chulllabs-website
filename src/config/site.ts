export const siteConfig = {
  name: "ChullLabs",
  url: "https://chulllabs.in",
  title: "ChullLabs — Independent Technology & Product Studio",
  description:
    "ChullLabs is an independent technology studio exploring new possibilities through software, engineering, and creative experimentation.",
  ogImage: "/og/og-chulllabs.png",
  logo: {
    src: "/brand/chulllabs-logo-transparent.png",
    width: 246,
    height: 155,
    alt: "ChullLabs wordmark logo",
  },
  contact: {
    email: "thisisharshavardhan@gmail.com",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/chull_labs/",
    },
  ],
} as const;
