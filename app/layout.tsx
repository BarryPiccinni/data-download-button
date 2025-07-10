import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://barrypiccinni.com"),
  title: {
    default: "Resume Download Demo",
    template: "%s | Barry Piccinni",
  },
  description: "Demo of data download functionality",
  keywords: [
    "Full-Stack Developer",
    "Node.js",
    "TypeScript",
    "AWS",
    "Cloud Infrastructure",
    "API Design",
    "CI/CD",
    "React",
    "Next.js",
    "Barry Piccinni",
    "Software Engineer",
    "DevOps",
  ],
  authors: [{ name: "Barry Piccinni", url: "https://github.com/BarryPiccinni" }],
  creator: "Barry Piccinni",
  publisher: "Barry Piccinni",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Data Download Demo",
    description: "Demo of data download functionality",
    siteName: "Barry Piccinni Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Barry Piccinni - Full-Stack Developer Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
  generator: "Next.js",
  applicationName: "Barry Piccinni Portfolio",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#8b5cf6",
      },
    ],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional meta tags for enhanced functionality */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Download data demo" />

        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Barry Piccinni",
              jobTitle: "Full-Stack Developer",
              description:
                "Full-Stack Developer with 10+ years experience specializing in Node.js, cloud infrastructure, and scalable system architecture",
              url: "https://barrypiccinni.dev",
              sameAs: ["https://www.linkedin.com/in/bpiccinni/", "https://github.com/BarryPiccinni"],
              knowsAbout: [
                "Node.js",
                "TypeScript",
                "AWS",
                "Cloud Infrastructure",
                "API Design",
                "CI/CD",
                "React",
                "Next.js",
              ],
              email: "barrypiccinni@gmail.com",
              alumniOf: "Computer Science",
              workLocation: {
                "@type": "Place",
                name: "Remote",
              },
            }),
          }}
        />
      </head>
      <body>
        <div className="light">
            {children}
        </div>
      </body>
    </html>
  )
}
