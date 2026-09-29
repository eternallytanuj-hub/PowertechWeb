import type { MetadataRoute } from "next";
import { DEFAULT_SITE_URL } from "@/lib/constants";
import { servicesData } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/capabilities",
    "/projects",
    "/leadership",
    "/certifications",
    "/contact",
  ].map((route) => ({
    url: `${DEFAULT_SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = servicesData.map((service) => ({
    url: `${DEFAULT_SITE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
