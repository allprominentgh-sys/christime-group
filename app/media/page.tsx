import Link from "next/link";
const mediaItems = [
  {
    category: "Corporate News",
    title: "Welcome to CHRISTIME GROUP",
    description:
      "Discover our services across travel, real estate, housing development, and political engagement.",
    date: "2026",
  },
  {
    category: "Travel & Tourism",
    title: "Explore New Destinations",
    description:
      "Stay connected with our travel services and discover opportunities for your next journey.",
    date: "2026",
  },
  {
    category: "Real Estate",
    title: "Building Opportunities",
    description:
      "Follow our real estate and housing development activities as we work towards creating lasting value.",
    date: "2026",
  },
  {
    category: "Public Engagement",
    title: "Connecting with Communities",
    description:
      "Follow our political campaign activities, public engagement initiatives, and community conversations.",
    date: "2026",
  },
];
export default function MediaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-yellow-600/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-2xl font-bold tracking-wide">
            CHRISTIME <span className="text-yellow-500">GROUP</span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-yellow-500 px-5 py-2 text-sm transition hover:bg-yellow-500 hover:text-black"
          >
            Back Home
          </Link>
        </div>
      </header>
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
          News & Updates
        </p>
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          CHRISTIME <span className="text-yellow-500">MEDIA</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-400">
          Stay informed about our corporate activities, travel services,
          real estate developments, and public engagement initiatives.
        </p>
      </section>
      {/* Media Cards */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {mediaItems.map((item, index) => (
            <article
              key={index}
              className="rounded-2xl border border-yellow-600/20 bg-zinc-950 p-8 transition hover:border-yellow-500"
            >
              <span className="mb-5 inline-block rounded-full bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-yellow-500">
                {item.category}
              </span>
              <h2 className="mb-4 text-2xl font-bold">
                {item.title}
              </h2>
              <p className="mb-6 leading-7 text-gray-400">
                {item.description}
              </p>
              <div className="border-t border-yellow-600/20 pt-4 text-sm text-gray-500">
                CHRISTIME GROUP · {item.date}
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="border-t border-yellow-600/30 bg-zinc-950 px-6 py-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Get in Touch
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Contact CHRISTIME GROUP
          </h2>
          <p className="mb-12 text-gray-400">
            For media enquiries, business partnerships, travel
            reservations, real estate information, and general enquiries,
            contact our team.
          </p>
          <div className="grid gap-6 text-left md:grid-cols-3">
            <a
              href="mailto:info@christimegroup.com"
              className="rounded-xl border border-yellow-600/30 p-6 transition hover:border-yellow-500"
            >
              <span className="mb-3 block text-2xl text-yellow-500">
                ✉
              </span>
              <h3 className="mb-2 font-bold">Email</h3>
              <p className="break-all text-gray-400">
                info@christimegroup.com
              </p>
            </a>
            <a
              href="tel:+233244471541"
              className="rounded-xl border border-yellow-600/30 p-6 transition hover:border-yellow-500"
            >
              <span className="mb-3 block text-2xl text-yellow-500">
                ☎
              </span>
              <h3 className="mb-2 font-bold">Telephone</h3>
              <p className="text-gray-400">
                +233 24 447 1541
              </p>
            </a>
            <div className="rounded-xl border border-yellow-600/30 p-6">
              <span className="mb-3 block text-2xl text-yellow-500">
                ⌖
              </span>
              <h3 className="mb-2 font-bold">Office Address</h3>
              <p className="text-gray-400">
                St. Hawthorn Street,
                <br />
                Pantang West, Ghana.
              </p>
            </div>
          </div>
          <a
            href="mailto:info@christimegroup.com"
            className="mt-10 inline-block rounded-full bg-yellow-500 px-10 py-4 font-bold text-black transition hover:bg-yellow-400"
          >
            Send Us an Email
          </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-yellow-600/20 px-6 py-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} CHRISTIME GROUP. All rights reserved.
        </p>
        <p className="mt-2 text-sm text-yellow-500">
          Your Satisfaction Is Our Goal.
        </p>
      </footer>
    </main>
  );
}
