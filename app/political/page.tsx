
const values = [
  {
    title: "Community Engagement",
    description:
      "Creating opportunities for citizens to participate in conversations about their communities and future.",
  },
  {
    title: "Leadership",
    description:
      "Encouraging responsible leadership, transparency, accountability, and public dialogue.",
  },
  {
    title: "Development",
    description:
      "Supporting initiatives that address community needs and promote sustainable development.",
  },
  {
    title: "Public Service",
    description:
      "Building meaningful connections between leadership and the people it serves.",
  },
];

export default function PoliticalPage() {
  return (
    <>
      <section
        style={{
          minHeight: 600,
          display: "flex",
          alignItems: "center",
          padding: "100px 7%",
          background:
            "linear-gradient(90deg,rgba(0,0,0,.93),rgba(0,0,0,.55)),url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1800') center/cover",
        }}
      >
        <div style={{ maxWidth: 800 }}>
          <p className="gold">POLITICAL CAMPAIGN & PUBLIC ENGAGEMENT</p>

          <h1 className="section-title">
            Leadership Through
            <br />
            <span className="gold">Service and Engagement</span>
          </h1>

          <p style={{ color: "#ddd", fontSize: 19, lineHeight: 1.8 }}>
            A platform for public dialogue, community participation,
            leadership initiatives, and meaningful engagement.
          </p>

          <a
            href="#vision"
            className="btn-gold"
            style={{ marginTop: 25 }}
          >
            Explore Our Vision
          </a>
        </div>
      </section>

      <section id="vision" className="section">
        <div style={{ maxWidth: 850, margin: "auto", textAlign: "center" }}>
          <p className="gold">OUR VISION</p>

          <h2 className="section-title">
            A Future Built Through Participation
          </h2>

          <div className="gold-line" style={{ margin: "25px auto" }} />

          <p style={{ color: "#aaa", fontSize: 17, lineHeight: 1.9 }}>
            We believe public engagement is essential to
            understanding community priorities, encouraging
            constructive dialogue, and shaping initiatives
            that respond to people's needs.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "#101010" }}>
        <div style={{ textAlign: "center", marginBottom: 45 }}>
          <p className="gold">OUR COMMITMENTS</p>
          <h2 className="section-title">
            Principles of Public Engagement
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: 22,
          }}
        >
          {values.map((value) => (
            <div key={value.title} className="card" style={{ padding: 28 }}>
              <h3 style={{ color: "#d4af37", fontSize: 22 }}>
                {value.title}
              </h3>

              <p style={{ color: "#aaa", lineHeight: 1.8 }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <p className="gold">GET INVOLVED</p>

        <h2 className="section-title">
          Join the Conversation
        </h2>

        <p style={{ color: "#aaa", maxWidth: 600, margin: "20px auto" }}>
          Share your views, ask questions, or express interest
          in participating in community engagement activities.
        </p>

        <a
          href="mailto:info@christimegroup.com?subject=Public%20Engagement"
          className="btn-gold"
        >
          Contact the Team
        </a>
      </section>
    </>
  );
}
