import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "M. Daffa Raihan Akbar Portfolio",
    short_name: "Daffa's Portfolio",
    description:
      "M. Daffa Raihan Akbar's modern developer portfolio built with Next.js - available as an open-source template",
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
      "template",
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
