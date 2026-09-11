import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aman Maharjan | Sr. QA Engineer & Project Manager",
  description: "Senior Software QA Engineer and Project Manager with 5 years of experience in testing, automation, and project delivery. Based in Kathmandu, Nepal.",
  keywords: ["Senior Software QA Engineer", "Project Manager", "Cypress", "API Testing", "Security Testing", "Software Testing", "Kathmandu"],
  openGraph: {
    title: "Aman Maharjan | Senior Software QA Engineer & Project Manager",
    description: "Driving software quality and successful delivery through testing, automation, and collaboration.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Maharjan | Senior Software QA Engineer & Project Manager",
    description: "Driving software quality and successful delivery through testing, automation, and collaboration.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
