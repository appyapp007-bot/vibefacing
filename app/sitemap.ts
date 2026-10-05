import type { MetadataRoute } from "next";
import { getArchive } from "../lib/archive-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.vibefacing.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/submit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  try {
    const archive = await getArchive();

    const archiveRoutes: MetadataRoute.Sitemap = archive.items.map((item) => ({
      url: `${baseUrl}/v/${item.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    return [...staticRoutes, ...archiveRoutes];
  } catch {
    return staticRoutes;
  }
}
