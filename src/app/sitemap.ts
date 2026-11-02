import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://physiosphere.in";

  return [
    {
      url: baseUrl,
      lastModified: "2026-11-02",
      changeFrequency: "weekly",
      priority: 1.0
    }
  ];
}
