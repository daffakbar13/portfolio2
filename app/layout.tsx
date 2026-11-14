import "./globals.css";

import type { Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { Analytics } from "@/components/common/analytics";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/providers/modal-provider";

// All three families are SIL Open Font License.
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090D" },
    { media: "(prefers-color-scheme: light)", color: "#F6F7FA" },
  ],
  colorScheme: "dark light",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.username,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    creator: `@${siteConfig.username}`,
  },
  icons: {
    icon: siteConfig.iconIco,
    shortcut: siteConfig.logoIcon,
    apple: siteConfig.logoIcon,
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-canvas font-sans text-fg antialiased",
          fontSans.variable,
          fontDisplay.variable,
          fontMono.variable
        )}
      >
        {/* Refraction filter used by `.liquid` glass (Chromium only) */}
        <svg
          aria-hidden="true"
          width="0"
          height="0"
          style={{ position: "absolute" }}
        >
          <defs>
            <filter id="lg" x="0" y="0" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.008 0.012"
                numOctaves={2}
                seed={7}
                result="n"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="n"
                scale={38}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={["dark", "light"]}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster />
          <ModalProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
