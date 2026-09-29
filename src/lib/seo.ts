import { Metadata } from "next";
import { DEFAULT_SITE_URL, SITE_NAME } from "./constants";

export interface PageSeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Generates standardized Next.js Metadata for any page.
 */
export function constructMetadata({
  title,
  description,
  path = "",
  image = "/images/og-default.jpg",
  noIndex = false,
}: PageSeoProps): Metadata {
  const url = `${DEFAULT_SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    title: {
      default: `${title} | ${SITE_NAME}`,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image.startsWith("http") ? image : `${DEFAULT_SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image.startsWith("http") ? image : `${DEFAULT_SITE_URL}${image}`],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/images/logo.png", type: "image/png" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/images/logo.png" }],
    },
  };
}

/**
 * Generates JSON-LD Organization Structured Data
 */
export function getOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: DEFAULT_SITE_URL,
    logo: `${DEFAULT_SITE_URL}/images/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  };
}
