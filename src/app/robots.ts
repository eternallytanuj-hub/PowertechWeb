import type { MetadataRoute } from "next";
import { DEFAULT_SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${DEFAULT_SITE_URL}/sitemap.xml`,
  };
}
