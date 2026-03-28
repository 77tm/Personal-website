import { DEFAULT_IMAGE, SITE_URL } from "./components/Seo";

const sharedKeywords = [
  "Toms",
  "Toms Madzuls",
  "Toms Madžuls",
  "Madzuls",
  "Madžuls",
  "programmētājs",
  "developer",
  "full-stack developer",
  "Madona",
  "Rīga",
  "Riga",
  "Latvia",
];

const socialLinks = [
  "https://github.com/77tm",
  "https://www.linkedin.com/in/toms-mad%C5%BEuls-ba5a56239/",
  "https://www.instagram.com/madzuls/",
  "https://www.facebook.com/toms.madzuls/",
  "https://twitter.com/tmadzuls",
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Toms Madžuls",
  alternateName: "Toms Madzuls",
  url: SITE_URL,
  image: `${SITE_URL}/me.jpg`,
  jobTitle: "Full-Stack Developer",
  description:
    "Toms Madžuls, also written as Toms Madzuls, is a full-stack developer and programmētājs from Madona, based in Rīga, Latvia.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rīga",
    addressCountry: "LV",
  },
  homeLocation: {
    "@type": "Place",
    name: "Madona, Latvia",
  },
  knowsLanguage: ["English", "Latvian"],
  knowsAbout: [
    "Full-stack development",
    "Backend development",
    "React",
    "PHP",
    "Laravel",
    "Drupal",
    "Kafka",
    "Kubernetes",
    "Automation",
    "Machine learning",
    "Computer vision",
  ],
  sameAs: socialLinks,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Toms Madzuls",
  alternateName: "Toms Madžuls",
  url: SITE_URL,
  description:
    "Portfolio of Toms Madžuls, a full-stack developer in Rīga with roots in Madona, featuring web development, backend engineering, automation, and machine learning projects.",
  inLanguage: "en",
  about: {
    "@id": `${SITE_URL}/#person`,
  },
};

const projectListSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/#portfolio`,
  url: SITE_URL,
  name: "Toms Madzuls Portfolio",
  about: {
    "@id": `${SITE_URL}/#person`,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Portfolio Website",
        url: `${SITE_URL}/portfolio`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Books.lv",
        url: `${SITE_URL}/bookslv`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "CAPTCHA CNN",
        url: `${SITE_URL}/captcha-cnn`,
      },
    ],
  },
};

function createBreadcrumb(name, path) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${SITE_URL}${path}`,
      },
    ],
  };
}

function createProjectSchema({
  name,
  path,
  description,
  image,
  keywords,
  technologies,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": `${SITE_URL}${path}#project`,
    name,
    url: `${SITE_URL}${path}`,
    description,
    image,
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    creator: {
      "@id": `${SITE_URL}/#person`,
    },
    inLanguage: "en",
    programmingLanguage: technologies,
    keywords: keywords.join(", "),
  };
}

export const homeSeo = {
  title: "Toms Madzuls",
  description:
    "Portfolio of Toms Madžuls, also written as Toms Madzuls, a full-stack developer and programmētājs from Madona based in Rīga, Latvia.",
  path: "/",
  image: DEFAULT_IMAGE,
  keywords: sharedKeywords,
  structuredData: [personSchema, websiteSchema, projectListSchema],
};

export const portfolioSeo = {
  title: "Portfolio Website Project | Toms Madžuls",
  description:
    "Responsive React portfolio website by Toms Madžuls, a full-stack developer from Madona based in Rīga, showcasing frontend development and UX implementation.",
  path: "/portfolio",
  image: `${SITE_URL}/portfolio-website.png`,
  keywords: [...sharedKeywords, "portfolio website", "React developer", "frontend developer"],
  structuredData: [
    personSchema,
    createBreadcrumb("Portfolio Website Project", "/portfolio"),
    createProjectSchema({
      name: "Portfolio Website",
      path: "/portfolio",
      description:
        "A personal portfolio website created by Toms Madžuls to present projects, skills, and experience in web development.",
      image: `${SITE_URL}/portfolio-website.png`,
      keywords: ["portfolio website", "React", "Sass", "web developer", ...sharedKeywords],
      technologies: ["HTML5", "CSS", "JavaScript", "React", "Sass"],
    }),
  ],
};

export const bookslvSeo = {
  title: "Books.lv Project | Toms Madžuls",
  description:
    "Books.lv is a Laravel and MySQL web application by Toms Madžuls featuring authentication, reviews, and book management workflows.",
  path: "/bookslv",
  image: `${SITE_URL}/bookslv.png`,
  keywords: [...sharedKeywords, "Laravel developer", "PHP developer", "Books.lv project"],
  structuredData: [
    personSchema,
    createBreadcrumb("Books.lv Project", "/bookslv"),
    createProjectSchema({
      name: "Books.lv",
      path: "/bookslv",
      description:
        "A Laravel-powered book club website by Toms Madžuls with user authentication, reviews, and CRUD book management.",
      image: `${SITE_URL}/bookslv.png`,
      keywords: ["Laravel", "PHP", "MySQL", "book club website", ...sharedKeywords],
      technologies: ["HTML5", "CSS", "JavaScript", "PHP", "Laravel", "MySQL"],
    }),
  ],
};

export const captchaCnnSeo = {
  title: "CAPTCHA CNN Project | Toms Madžuls",
  description:
    "Custom CAPTCHA-solving CNN pipeline by Toms Madžuls combining Playwright automation, computer vision, and PyTorch model inference.",
  path: "/captcha-cnn",
  image: `${SITE_URL}/captcha_cnn.png`,
  keywords: [...sharedKeywords, "machine learning engineer", "PyTorch developer", "computer vision"],
  structuredData: [
    personSchema,
    createBreadcrumb("CAPTCHA CNN Project", "/captcha-cnn"),
    createProjectSchema({
      name: "CAPTCHA CNN",
      path: "/captcha-cnn",
      description:
        "A custom CAPTCHA-solving CNN by Toms Madžuls using automation, image preprocessing, segmentation, and PyTorch inference.",
      image: `${SITE_URL}/captcha_cnn.png`,
      keywords: ["PyTorch", "computer vision", "automation", "CNN", ...sharedKeywords],
      technologies: ["Python", "Playwright", "PyTorch", "NumPy"],
    }),
  ],
};
