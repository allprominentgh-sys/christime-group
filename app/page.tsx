
import Link from "next/link";

const divisions = [
  {
    title: "Travel & Tourism",
    description:
      "Discover the world with confidence through our travel planning, flight reservations, hotel bookings, and holiday experiences.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200",
    link: "/travel-real-estate",
    label: "Explore Travel",
  },
  {
    title: "Real Estate & Housing",
    description:
      "Building opportunities through property investment, housing development, land acquisition, and real estate solutions.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
    link: "/travel-real-estate",
    label: "Explore Properties",
  },
  {
    title: "Political Campaign & Public Engagement",
    description:
      "Promoting leadership, community participation, public dialogue, and initiatives focused on meaningful development.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200",
    link: "/political",
    label: "Discover Our Vision",
  },
];

export default function HomePage() {
  return (
    <>
      <section
        style={{
          minHeight: 650,
          display: "flex",
          alignItems: "center",
          padding: "100px 7%",
          background:
            "linear-gradient(90deg, rgba(0,0,0,.94), rgba(0,0,0,.58)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800') center/cover",
        }}
      >
        <div style={{ maxWidth: 800 }}>
          <p
            style={{
              color: "#d4af37",
              letterSpacing: 4,
              fontWeight: 700,
            }}
          >
            EXCELLENCE • INNOVATION • LEADERSHIP
          </p>

          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              margin: "20px 0",
            }}
          >
            A VISION FOR
            <br />
            <span style={{ color: "#d4af37" }}>
              A GREATER FUTURE
            </span>
          </h1>

          <p
            style={{
              color: "#ddd",
              fontSize: 19,
              lineHeight: 1.8,
              maxWidth: 650,
            }}
          >
            Christime Group brings together travel and tourism,
            real estate and housing development, and public
            engagement under one vision of progress.
          </p>

          <div
            style={{
              display: "flex",
              gap: 15,
              flexWrap: "wrap",
              marginTop: 35,
            }}
          >
            <Link href="/travel-real-estate" className="btn-gold">
              Explore Our Services
            </Link>

            <a href="#about" className="btn-outline">
              Discover Christime
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div style={{ maxWidth: 850, margin: "auto", textAlign: "center" }}>
          <p className="gold">WHO WE ARE</p>

          <h2 className="section-title">
            One Group. Three Areas of Impact.
          </h2>

          <div className="gold-line" style={{ margin: "25px auto" }} />

          <p style={{ color: "#aaa", lineHeight: 1.9, fontSize: 17 }}>
            Christime Group is a diversified organization
            connecting people, places, and opportunities.
            Through our business divisions and public engagement
            initiatives, we seek to create lasting value for
            individuals, families, businesses, and communities.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "#101010" }}>
        <div style={{ textAlign: "center", marginBottom: 45 }}>
          <p className="gold">OUR DIVISIONS</p>
          <h2 className="section-title">What We Do</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 25,
          }}
        >
          {divisions.map((division) => (
            <article key={division.title} className="card">
              <img
                src={division.image}
                alt={division.title}
                style={{
                  width: "100%",
                  height: 230,
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: 25 }}>
                <h3 style={{ color: "#d4af37", fontSize: 22 }}>
                  {division.title}
                </h3>

                <p style={{ color: "#aaa", lineHeight: 1.8 }}>
                  {division.description}
                </p>

                <Link
                  href={division.link}
                  className="btn-outline"
                  style={{ marginTop: 15 }}
                >
                  {division.label} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section" style={{ textAlign: "center" }}>
        <p className="gold">LET'S CONNECT</p>
        <h2 className="section-title">Your Next Opportunity Starts Here</h2>

        <p style={{ color: "#aaa", margin: "20px auto", maxWidth: 600 }}>
          Contact Christime Group to discuss travel plans,
          property opportunities, partnerships, or public
          engagement.
        </p>

        <a
          href="mailto:info@christimegroup.com"
          className="btn-gold"
        >
          Send Us an Email
        </a>
      </section>
    </>
  );
}
