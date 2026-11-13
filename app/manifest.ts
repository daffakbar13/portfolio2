import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "M. Daffa Raihan Akbar Portfolio",
    short_name: "Daffa's Portfolio",
    description: "M. Daffa Raihan Akbar's portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090D",
    theme_color: "#C8FF3D",
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
