import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Clients & Enquiries — Who We Work With | RUSTEAK DOT",
  description:
    "RUSTEAK DOT works with individual homeowners, architects, interior designers, corporate offices, hotels, commercial establishments, and bulk buyers looking for custom bespoke furniture from Jodhpur.",
};

const clientele = [
  {
    icon: "🏡",
    title: "Individual Homeowners",
    desc: "People looking to furnish, upgrade or customize their living spaces.",
  },
  {
    icon: "📐",
    title: "Architects & Interior Designers",
    desc: "Design professionals looking for furniture manufacturing support for residential and commercial projects.",
  },
  {
    icon: "🏢",
    title: "Corporate Offices & Businesses",
    desc: "Organizations seeking functional and customized furniture for offices and workspaces.",
  },
  {
    icon: "🏨",
    title: "Hotels & Hospitality",
    desc: "Hospitality businesses requiring furniture for rooms, lobbies, restaurants and other spaces.",
  },
  {
    icon: "🏪",
    title: "Commercial Establishments",
    desc: "Retail stores, restaurants, studios, institutions and other businesses with specialized furniture requirements.",
  },
  {
    icon: "📦",
    title: "Bulk & Institutional Buyers",
    desc: "Clients requiring furniture in larger quantities for projects, facilities or multiple locations.",
  },
];

export default function ClientsPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#faf9f6] text-ink pt-28 sm:pt-36 pb-24">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-14 mb-8 sm:mb-12">
          <div className="flex items-center justify-between border-b border-hairline/80 pb-4 text-[11px] uppercase tracking-[0.25em] text-ink-muted">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-gold-dark transition-colors font-medium"
            >
              <span>←</span>
              <span>Back to 360° Studio</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-gold-dark transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-gold-dark font-semibold">Clients & Enquiries</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-14">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold-dark text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase">
              <span>WHO WE WORK WITH</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
              <span>CLIENTS &amp; ENQUIRIES</span>
            </div>

            <h1 className="mt-5 font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.15]">
              Our Clientele
            </h1>

            <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed max-w-2xl mx-auto">
              RUSTEAK DOT works with individuals and businesses looking for furniture that meets their specific requirements. From a single bespoke table to complete commercial installations — we make it.
            </p>
          </div>

          {/* Clientele Cards Grid */}
          <div className="mt-12 lg:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clientele.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white p-6 sm:p-8 border border-hairline rounded-sm hover:border-gold/60 hover:shadow-md transition-all duration-300 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gold-dark border border-gold/30 px-2 py-0.5 rounded-full bg-gold/5">
                    0{idx + 1}
                  </span>
                </div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-ink leading-snug">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Enquiry CTA Banner */}
          <div className="mt-12 bg-gradient-to-r from-[#181714] via-[#24221d] to-[#181714] text-white p-8 sm:p-12 rounded-sm border border-gold/30 shadow-md">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold block">
                Start Your Enquiry
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-snug">
                Have a Furniture Requirement?
                <br />
                <span className="font-normal italic font-serif text-gold-light">
                  Let&rsquo;s Discuss Your Exact Needs.
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl mx-auto">
                Share your dimensions, reference images, material preferences, or project brief on WhatsApp and our team will get back to you within 24 hours.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/919530182514?text=Hello%20RUSTEAK%20DOT,%20I%20would%20like%20to%20enquire%20about%20a%20furniture%20requirement%20for%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>WhatsApp Your Requirement</span>
                </a>

                <Link
                  href="/catalog"
                  className="w-full sm:w-auto h-12 px-7 rounded-full border border-white/30 hover:border-gold text-white hover:text-gold flex items-center justify-center text-xs uppercase tracking-wider font-semibold transition-all bg-white/5"
                >
                  <span>Browse Bespoke Catalog</span>
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
