import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const urls = [
    "/",
    "/master-data-management",
    "/operational-readiness",
    "/data-cleansing-governance",
    "/industries",
    "/project-experience",
    "/about",
    "/contact",

    // Case Studies
    "/case-studies",
    "/case-studies/mooka-ore-car-repair-shop",
    "/case-studies/whitehaven-operational-readiness",
    "/case-studies/south32-temco-shutdown-planning",
    "/case-studies/liberty-bell-bay-master-data",
    "/case-studies/simplot-operational-readiness",
    "/case-studies/hydro-tasmania-maintenance-information",

    // Resources
    "/resources",
    "/resources/asset-material-naming-standards",
    "/resources/data-governance-best-practices",
    "/resources/understanding-unspsc",
    "/resources/data-cleansing-methodology",
    "/resources/functional-location-standards",
    "/resources/equipment-hierarchy-best-practices",
  ];

  return urls.map((path) => ({
    url: `https://enterpriseplanning.net${path}`,
    lastModified,
  }));
}