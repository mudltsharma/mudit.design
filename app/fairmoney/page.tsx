import Nav from "@/components/Nav";
import Link from "next/link";

const stats = [
  { value: "4.6/5", label: "App rating" },
  { value: "588K", label: "App ratings" },
  { value: "10M+", label: "Users" },
  { value: "2.5×", label: "Revenue" },
  { value: "1.7×", label: "Retention" },
];

const projects = [
  {
    title: "Hacking growth frameworks for start ups",
    href: "/growth-frameworks",
    bg: "#d4e8d4",
  },
  {
    title: "FairMoney Loan Application and IA revamp",
    href: "https://www.figma.com/proto/NxTmbOOEJshknzRU9qRYLH/Portfolio---Mudit-Sharma?node-id=1177-2463&t=7zOlU4uczq5UaUwO-1&scaling=min-zoom&content-scaling=fixed&page-id=897%3A23806&starting-point-node-id=1177%3A2463",
    external: true,
    bg: "#c8dfe8",
  },
];

export default function FairMoney() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <Nav breadcrumbs={[{ label: 'fairmoney', href: '/fairmoney' }]} />
      <div className="max-w-3xl mx-auto px-6 md:px-12" style={{ paddingTop: '120px', paddingBottom: '80px' }}>

        {/* Hero banner */}
        <div style={{ width: '100%', height: '220px', background: 'linear-gradient(135deg, #1a472a 0%, #2d6a4f 50%, #52b788 100%)', borderRadius: '4px', marginBottom: '3rem' }} />

        <div className="fade-up delay-1">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            FairMoney
          </h1>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '2rem' }}>
            Head of Design · 2021 – 2024
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '1.5rem', fontWeight: 300 }}>
            With over 10 million downloads and 2 million+ MAUs,{' '}
            <Link href="https://fairmoney.io" target="_blank" style={{ color: 'var(--fg)', borderBottom: '1px solid currentColor' }}>FairMoney</Link>{' '}
            is Nigeria's biggest digital lending institution and also a digital bank.
          </p>
        </div>

        <div className="fade-up delay-2">
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              "Led the hiring and formed a team of 5 designers and 3 researchers across Nigeria and India",
              "Developed and directed the product design and research process throughout the organization",
              "Crafted growth frameworks for career progression and implemented coaching systems to enable designers to excel",
              "Collaborated with the broader team to establish product strategy and product-market fit",
              "Set the fundamental design principles at FairMoney to advance the product and design",
              "Established design practices and tools: visual design foundations, design systems, and more",
              "Successfully led the revamp of the loan application and the app's information architecture",
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--muted)', fontWeight: 300 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="fade-up delay-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1.5rem', marginBottom: '4rem', padding: '2rem', backgroundColor: '#f0ede8', borderRadius: '4px' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 500, lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 400 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="fade-up delay-4">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 500, marginBottom: '1.5rem' }}>
            Select works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {projects.map((p, i) => (
              <Link key={i} href={p.href} target={p.external ? '_blank' : undefined}
                style={{ display: 'block', backgroundColor: p.bg, padding: '2rem', borderRadius: '4px', transition: 'opacity 0.2s' }}
                className="hover:opacity-80">
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.4 }}>
                  {p.title}
                </h3>
                <span style={{ display: 'inline-block', marginTop: '1rem', fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 400, letterSpacing: '0.05em' }}>
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
