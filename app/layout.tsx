
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHRISTIME GROUP | Excellence, Innovation & Leadership",
  description:
    "Christime Group operates in travel and tourism, real estate and housing development, and political campaign and public engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            background: "#080808",
            borderBottom: "1px solid #292929",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          <nav
            style={{
              maxWidth: 1400,
              margin: "auto",
              padding: "18px 6%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: 23,
                fontWeight: 900,
                color: "#d4af37",
                letterSpacing: 1,
              }}
            >
              CHRISTIME GROUP
            </Link>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 22,
                flexWrap: "wrap",
                fontSize: 14,
              }}
            >
              <Link href="/">Home</Link>
              <Link href="/travel-real-estate">
                Travel & Real Estate
              </Link>
              <Link href="/political">Political Campaign</Link>
              <a href="#contact" className="btn-gold">
                Contact Us
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer
          style={{
            background: "#050505",
            borderTop: "1px solid #292929",
            padding: "45px 7%",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#d4af37", fontSize: 24 }}>
            CHRISTIME GROUP
          </h2>

          <p style={{ color: "#aaa" }}>
            Excellence • Innovation • Leadership
          </p>

          <p style={{ color: "#777", fontSize: 13 }}>
            © {new Date().getFullYear()} Christime Group.
            All rights reserved.
          </p>

          <p style={{ color: "#777", fontSize: 13 }}>
            christimegroup.com
          </p>
        </footer>
      </body>
    </html>
  );
}
