
const services = [
  {
    title: "Flight Reservations",
    description:
      "Domestic and international flight booking assistance for individuals, families, and corporate travelers.",
  },
  {
    title: "Visa Assistance",
    description:
      "Guidance with travel documentation and visa application preparation.",
  },
  {
    title: "Hotel Reservations",
    description:
      "Accommodation planning for business trips, holidays, and extended stays.",
  },
  {
    title: "Property Sales",
    description:
      "Explore residential and commercial property opportunities.",
  },
  {
    title: "Housing Development",
    description:
      "Residential development projects designed around quality, functionality, and long-term value.",
  },
  {
    title: "Real Estate Investment",
    description:
      "Property and land opportunities for buyers and investors.",
  },
];

export default function TravelRealEstatePage() {
  return (
    <>
      <section
        style={{
          padding: "120px 7%",
          background:
            "linear-gradient(90deg,rgba(0,0,0,.9),rgba(0,0,0,.45)),url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1800') center/cover",
        }}
      >
        <p className="gold">CHRISTIME GROUP</p>

        <h1 className="section-title" style={{ maxWidth: 800 }}>
          Travel Beyond Boundaries.
          <br />
          <span className="gold">Build Your Future.</span>
        </h1>

        <p style={{ color: "#ddd", fontSize: 18, maxWidth: 650, lineHeight: 1.8 }}>
          Comprehensive travel services and real estate
          opportunities designed to connect people with
          destinations, homes, and investments.
        </p>
      </section>

      <section className="section">
        <div style={{ textAlign: "center", marginBottom: 45 }}>
          <p className="gold">OUR SERVICES</p>
          <h2 className="section-title">
            Travel & Real Estate Solutions
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 22,
          }}
        >
          {services.map((service) => (
            <div key={service.title} className="card" style={{ padding: 28 }}>
              <h3 style={{ color: "#d4af37", fontSize: 21 }}>
                {service.title}
              </h3>

              <p style={{ color: "#aaa", lineHeight: 1.8 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="section"
        style={{
          background: "#151515",
          textAlign: "center",
        }}
      >
        <h2 className="section-title">
          Let's Plan Your Next Move
        </h2>

        <p style={{ color: "#aaa", margin: "20px auto", maxWidth: 600 }}>
          Whether you are planning a journey or exploring
          property opportunities, our team is ready to hear
          from you.
        </p>

        <a href="mailto:info@christimegroup.com" className="btn-gold">
          Make an Inquiry
        </a>
      </section>
    </>
  );
}
