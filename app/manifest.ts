import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "M. Daffa Raihan Akbar Portfolio",
    short_name: "Daffa's Portfolio",
    description: "M. Daffa Raihan Akbar's portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/daffa-logo.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/daffa-logo.png",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "development",
      "nextjs",
      "react",
      "developer",
      "web development",
      "open source",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
