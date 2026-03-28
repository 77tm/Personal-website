import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteUrl = "https://www.madzuls.cloud";
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Toms Madžuls",
  alternateName: "Toms Madzuls",
  url: siteUrl,
  image: `${siteUrl}/me.jpg`,
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
  sameAs: [
    "https://github.com/77tm",
    "https://www.linkedin.com/in/toms-mad%C5%BEuls-ba5a56239/",
    "https://www.instagram.com/madzuls/",
    "https://www.facebook.com/toms.madzuls/",
    "https://twitter.com/tmadzuls",
  ],
};

const rootStructuredData = [
  personSchema,
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Toms Madzuls",
    alternateName: "Toms Madžuls",
    url: siteUrl,
    description:
      "Portfolio of Toms Madžuls, a full-stack developer in Rīga with roots in Madona, featuring web development, backend engineering, automation, and machine learning projects.",
    inLanguage: "en",
    about: {
      "@id": `${siteUrl}/#person`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/#portfolio`,
    url: siteUrl,
    name: "Toms Madzuls Portfolio",
    about: {
      "@id": `${siteUrl}/#person`,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Portfolio Website",
          url: `${siteUrl}/portfolio`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Books.lv",
          url: `${siteUrl}/bookslv`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "CAPTCHA CNN",
          url: `${siteUrl}/captcha-cnn`,
        },
      ],
    },
  },
];

function createProjectStructuredData({ name, pathName, description, image, technologies }) {
  return [
    personSchema,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name,
          item: `${siteUrl}${pathName}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      "@id": `${siteUrl}${pathName}#project`,
      name,
      url: `${siteUrl}${pathName}`,
      description,
      image,
      author: {
        "@id": `${siteUrl}/#person`,
      },
      creator: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en",
      programmingLanguage: technologies,
    },
  ];
}

const pages = [
  {
    outputDir: "",
    title: "Toms Madžuls (Toms Madzuls) | Full-Stack Developer in Rīga and Madona",
    description:
      "Portfolio of Toms Madžuls, also written as Toms Madzuls, a full-stack developer and programmētājs from Madona based in Rīga, Latvia.",
    canonicalPath: "/",
    image: `${siteUrl}/portfolio-website.png`,
    keywords: sharedKeywords,
    structuredData: rootStructuredData,
  },
  {
    outputDir: "portfolio",
    title: "Portfolio Website Project | Toms Madžuls",
    description:
      "Responsive React portfolio website by Toms Madžuls, a full-stack developer from Madona based in Rīga, showcasing frontend development and UX implementation.",
    canonicalPath: "/portfolio",
    image: `${siteUrl}/portfolio-website.png`,
    keywords: [...sharedKeywords, "portfolio website", "React developer", "frontend developer"],
    structuredData: createProjectStructuredData({
      name: "Portfolio Website Project",
      pathName: "/portfolio",
      description:
        "A personal portfolio website created by Toms Madžuls to present projects, skills, and experience in web development.",
      image: `${siteUrl}/portfolio-website.png`,
      technologies: ["HTML5", "CSS", "JavaScript", "React", "Sass"],
    }),
  },
  {
    outputDir: "bookslv",
    title: "Books.lv Project | Toms Madžuls",
    description:
      "Books.lv is a Laravel and MySQL web application by Toms Madžuls featuring authentication, reviews, and book management workflows.",
    canonicalPath: "/bookslv",
    image: `${siteUrl}/bookslv.png`,
    keywords: [...sharedKeywords, "Laravel developer", "PHP developer", "Books.lv project"],
    structuredData: createProjectStructuredData({
      name: "Books.lv Project",
      pathName: "/bookslv",
      description:
        "A Laravel-powered book club website by Toms Madžuls with user authentication, reviews, and CRUD book management.",
      image: `${siteUrl}/bookslv.png`,
      technologies: ["HTML5", "CSS", "JavaScript", "PHP", "Laravel", "MySQL"],
    }),
  },
  {
    outputDir: "captcha-cnn",
    title: "CAPTCHA CNN Project | Toms Madžuls",
    description:
      "Custom CAPTCHA-solving CNN pipeline by Toms Madžuls combining Playwright automation, computer vision, and PyTorch model inference.",
    canonicalPath: "/captcha-cnn",
    image: `${siteUrl}/captcha_cnn.png`,
    keywords: [...sharedKeywords, "machine learning engineer", "PyTorch developer", "computer vision"],
    structuredData: createProjectStructuredData({
      name: "CAPTCHA CNN Project",
      pathName: "/captcha-cnn",
      description:
        "A custom CAPTCHA-solving CNN by Toms Madžuls using automation, image preprocessing, segmentation, and PyTorch inference.",
      image: `${siteUrl}/captcha_cnn.png`,
      technologies: ["Python", "Playwright", "PyTorch", "NumPy"],
    }),
  },
];

function buildMetaBlock(page) {
  const canonicalUrl = `${siteUrl}${page.canonicalPath === "/" ? "/" : page.canonicalPath}`;
  const structuredData = JSON.stringify(page.structuredData);

  return `    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="keywords" content="${page.keywords.join(", ")}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="author" content="Toms Madzuls" />
    <meta name="theme-color" content="#1c1c1e" />
    <meta property="og:site_name" content="Toms Madzuls" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${page.image}" />
    <meta property="og:image:alt" content="Portfolio website preview for Toms Madzuls" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@tmadzuls" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${page.image}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <script type="application/ld+json">${structuredData}</script>`;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "..", "dist");
const templatePath = path.join(distDir, "index.html");
const template = await readFile(templatePath, "utf8");
const metaBlockPattern = /<title>[\s\S]*?<link rel="canonical" href="[^"]*" \/>/;

for (const page of pages) {
  const outputPath = page.outputDir
    ? path.join(distDir, page.outputDir, "index.html")
    : templatePath;
  const nextHtml = template.replace(metaBlockPattern, buildMetaBlock(page));

  if (page.outputDir) {
    await mkdir(path.dirname(outputPath), { recursive: true });
  }

  await writeFile(outputPath, nextHtml, "utf8");
}
