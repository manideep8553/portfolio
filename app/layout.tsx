import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Kalva Manideep | AI Engineer & Full Stack Developer";
const siteDescription =
  "Portfolio of Kalva Manideep - AI Engineer, Full Stack Developer, and Java Backend Specialist. Building intelligent systems with cutting-edge technology.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Kalva Manideep",
    "AI Engineer",
    "Full Stack Developer",
    "Spring Boot",
    "React",
    "Machine Learning",
    "Java",
    "Portfolio",
  ],
  authors: [{ name: "Kalva Manideep" }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kalva Manideep",
              url: "https://kalvamanideep.dev",
              jobTitle: "AI Engineer & Full Stack Developer",
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Spring Boot",
                "React",
                "Java",
                "Python",
                "Node.js",
                "MongoDB",
                "SQL",
                "Full Stack Development",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
