
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CHRISTIME GROUP | Excellence, Innovation & Leadership",
    template: "%s | CHRISTIME GROUP",
  },
  description:
    "Christime Group operates in travel and tourism, real estate and housing development, and political campaign and public engagement.",
  metadataBase: new URL("https://christimegroup.com"),
  openGraph: {
    title: "CHRISTIME GROUP",
    description:
      "Excellence, Innovation and Leadership across travel, real estate and public engagement.",
    url: "https://christimegroup.com",
    siteName: "CHRISTIME GROUP",
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
          <nav className="site-nav">
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

            <div className="nav-links">
              <Link href="/">Home</Link>

              <Link href="/travel-real-estate">
                Travel & Real Estate
              </Link>

              <Link href="/political">
                Political Campaign
              </Link>

              <a href="#contact" className="btn-gold">
                Contact Us
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer
          id="contact"
          style={{
            background: "#050505",
            borderTop: "1px solid #292929",
            padding: "55px 7%",
          }}
        >
          <div className="footer-grid">
            <div>
              <h2
                style={{
                  color: "#d4af37",
                  fontSize: 25,
                  fontWeight: 900,
                }}
              >
                CHRISTIME GROUP
              </h2>

              <p className="footer-text">
                Excellence • Innovation • Leadership
              </p>

              <p className="footer-text">
                Connecting people, places, and opportunities
                through travel, real estate, housing development,
                and public engagement.
              </p>
            </div>

            <div>
              <h3 className="footer-heading">Contact Us</h3>

              <p className="footer-text">
                Email:
                <br />
                <a href="mailto:info@christimegroup.com">
                  info@christimegroup.com
                </a>
              </p>

              <p className="footer-text">
                Telephone:
                <br />
                <a href="tel:+233244471541">
                  +233 24 447 1541
                </a>
              </p>
            </div>

            <div>
              <h3 className="footer-heading">Our Office</h3>

              <p className="footer-text">
                St. Hawthorn Street,
                <br />
                Pantang West,
                <br />
                Ghana.
              </p>
            </div>

            <div>
              <h3 className="footer-heading">Quick Links</h3>

              <p className="footer-text">
                <Link href="/">Home</Link>
                <br />
                <Link href="/travel-real-estate">
                  Travel & Real Estate
                </Link>
                <br />
                <Link href="/political">
                  Political Campaign
                </Link>
              </p>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #292929",
              marginTop: 40,
              paddingTop: 22,
              textAlign: "center",
            }}
          >
            <p style={{ color: "#777", fontSize: 13 }}>
              © {new Date().getFullYear()} CHRISTIME GROUP.
              All rights reserved.
            </p>

            <p style={{ color: "#777", fontSize: 13 }}>
              christimegroup.com
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
