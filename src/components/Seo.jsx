import { useEffect } from "react";

const SITE_URL = "https://www.madzuls.cloud";
const DEFAULT_IMAGE = `${SITE_URL}/portfolio-website.png`;
const DEFAULT_ROBOTS = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

function ensureMeta(attribute, value) {
  let tag = document.head.querySelector(`meta[${attribute}="${value}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  return tag;
}

function ensureLink(rel) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }

  return tag;
}

function setMeta(attribute, value, content) {
  const tag = ensureMeta(attribute, value);
  tag.setAttribute("content", content);
}

export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  keywords = [],
  robots = DEFAULT_ROBOTS,
  structuredData = [],
}) {
  useEffect(() => {
    const canonicalUrl = new URL(path, SITE_URL).toString();
    const imageUrl = image.startsWith("http") ? image : new URL(image, SITE_URL).toString();
    const normalizedStructuredData = Array.isArray(structuredData)
      ? structuredData
      : [structuredData];
    const scriptId = "seo-structured-data";

    document.title = title;
    document.documentElement.lang = "en";

    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords.join(", "));
    setMeta("name", "robots", robots);
    setMeta("name", "googlebot", robots);
    setMeta("name", "author", "Toms Madzuls");
    setMeta("name", "theme-color", "#1c1c1e");
    setMeta("property", "og:site_name", "Toms Madzuls");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:image:alt", "Portfolio website preview for Toms Madzuls");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:creator", "@tmadzuls");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);

    const canonical = ensureLink("canonical");
    canonical.setAttribute("href", canonicalUrl);

    let script = document.head.querySelector(`#${scriptId}`);

    if (!script) {
      script = document.createElement("script");
      script.setAttribute("id", scriptId);
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(normalizedStructuredData.length === 1
      ? normalizedStructuredData[0]
      : normalizedStructuredData);
  }, [description, image, keywords, path, robots, structuredData, title]);

  return null;
}

export { SITE_URL, DEFAULT_IMAGE, DEFAULT_ROBOTS };
