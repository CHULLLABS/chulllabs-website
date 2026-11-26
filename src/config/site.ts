const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const siteConfig = {
  name: "ChullLabs",
  url: "https://chulllabs.in",
  title: "ChullLabs — Independent Technology Studio",
  description:
    "ChullLabs is an independent technology studio exploring new possibilities through software, engineering, and creative experimentation.",
  ogImage: `${basePath}/og/og-chulllabs.png`,
  heroImage: `${basePath}/hero/hero-landscape.webp`,
  logo: {
    src: `${basePath}/brand/chulllabs-logo-transparent.png`,
    width: 246,
    height: 155,
    alt: "ChullLabs wordmark logo",
  },
  contact: {
    email: "thisisharshavardhan@gmail.com",
  },
  nav: [
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/chull_labs/",
    },
  ],
} as const;
