
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CHRISTIME GROUP | Your Satisfaction Is Our Goal",
    template: "%s | CHRISTIME GROUP",
  },
  description:
    "Christime Group provides travel and tourism services, real estate and housing development, and political campaign and public engagement services in Ghana.",
  keywords: [
    "Christime Group",
    "Travel Agency Ghana",
    "Real Estate Ghana",
    "Housing Development",
    "Political Campaign",
    "Public Engagement",
  ],
  authors: [{ name: "CHRISTIME GROUP" }],
  openGraph: {
    title: "CHRISTIME GROUP",
    description:
      "Your Satisfaction Is Our Goal. Explore our travel, real estate, and public engagement services.",
    siteName: "CHRISTIME GROUP",
    type: "website",
    locale: "en_GH",
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
