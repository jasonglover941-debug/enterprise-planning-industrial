
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://enterpriseplanning.net",
      lastModified: new Date(),
    },
    {
      url: "https://enterpriseplanning.net/master-data-management",
      lastModified: new Date(),
    },
    {
      url: "https://enterpriseplanning.net/operational-readiness",
      lastModified: new Date(),
    },
    {
      url: "https://enterpriseplanning.net/data-cleansing-governance",
      lastModified: new Date(),
    },
    {
      url: "https://enterpriseplanning.net/industries",
      lastModified: new Date(),
    },
    {
      url: "https://enterpriseplanning.net/about",
      lastModified: new Date(),
    },
    {
      url: "https://enterpriseplanning.net/contact",
      lastModified: new Date(),
    },
  ];
}
