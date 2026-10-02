
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHRISTIME GROUP | Your Satisfaction Is Our Goal",
  description:
    "Christime Group connects people, places, and opportunities through travel, real estate, housing development, and public engagement.",
  keywords: [
    "Christime Group",
    "Travel Agency Ghana",
    "Real Estate Ghana",
    "Housing Development",
    "Public Engagement",
  ],
  openGraph: {
    title: "CHRISTIME GROUP",
    description: "Your Satisfaction Is Our Goal",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
