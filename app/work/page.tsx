import Nav from "@/components/Nav";
import Link from "next/link";

const companies = [
  {
    name: "Acko",
    role: "Design Director",
    period: "2024 – Present",
    href: "/acko",
    color: "#e8e2f7",
    description: "Leading design for India's fastest-growing insurtech, building products that simplify insurance.",
  },
  {
    name: "Peepal Co / CoinSwitch",
    role: "Director of Design",
    period: "2024",
    href: "/peepal",
    color: "#e2edf7",
    description: "Led design across CoinSwitch and Lemonn — India's leading crypto and stock trading platforms.",
  },
  {
    name: "FairMoney",
    role: "Head of Design",
    period: "2021 – 2024",
    href: "/fairmoney",
    color: "#e7f2e8",
    description: "Built and led a team of 8 across Nigeria & India. Transformed Nigeria's biggest digital lending app into a full digital bank.",
    projects: [
      { name: "Hacking Growth Frameworks", href: "/growth-frameworks" },
      { name: "Loan Application & IA Revamp", href: "https://www.figma.com/proto/NxTmbOOEJshknzRU9qRYLH/Portfolio---Mudit-Sharma?node-id=1177-2463", external: true },
    ]
  },
  {
    name: "Gojek",
    role: "Design Lead & Manager",
    period: "2017 – 2021",
    href: "/gojek",
    color: "#f7f0e2",
    description: "Founding designer for GoFinance (GoTo Financial). Built and shipped GoPay Plus, GoPay Later, GoSave, GoModal, and more.",
    projects: [
      { name: "GoPay Plus — KYC doubled to 8M users", href: "/gopayplus" },
      { name: "GoPay Later — 0→1 BNPL, 86% retention", href: "/gopaylater" },
      { name: "GoSave — Gamified gold savings", href: "/gosave" },
    ]
  },
];

export default function Work() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <Nav />
      <div className="max-w-4xl mx-auto px-6 md:px-12" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="fade-up delay-1">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            Select Work
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '4rem', fontWeight: 300 }}>
            12+ years · India, Southeast Asia, Africa
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--border)' }}>
          {companies.map((c, i) => (
            <div key={i} style={{ backgroundColor: 'var(--bg)', padding: '2.5rem 0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start', marginBottom: c.projects ? '1.5rem' : 0 }}>
                <div>
                  <Link href={c.href}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 500, marginBottom: '0.25rem' }} className="hover:opacity-60 transition-opacity">
                      {c.name}
                    </h2>
                  </Link>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.75rem', fontWeight: 400, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {c.role}
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.65, fontWeight: 300 }}>
                    {c.description}
                  </p>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--muted)', whiteSpace: 'nowrap', paddingTop: '4px', fontWeight: 400 }}>
                  {c.period}
                </span>
              </div>

              {c.projects && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '0' }}>
                  {c.projects.map((p, j) => (
                    <Link key={j} href={p.href} target={(p as any).external ? '_blank' : undefined}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 400 }}
                      className="hover:opacity-60 transition-opacity group">
                      <span style={{ width: '16px', height: '1px', backgroundColor: 'var(--muted)', display: 'inline-block', flexShrink: 0 }} />
                      {p.name}
                      <span style={{ marginLeft: 'auto' }}>→</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 400 }}>
            Also at
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {['Clear', 'OYO', 'InMobi', 'Treebo'].map(c => (
              <span key={c} style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 300 }}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
