import Nav from "@/components/Nav";
import Link from "next/link";

const projects = [
  {
    title: "GoPay Plus",
    subtitle: "Increasing the number of KYC users for GoPay by 100%",
    href: "/gopayplus",
    bg: "#1b4332",
    textColor: "#fff",
    accent: "#52b788",
  },
  {
    title: "GoSave",
    subtitle: "A gamified approach to designing a gold savings product",
    href: "/gosave",
    bg: "#c5a028",
    textColor: "#fff",
    accent: "#fde68a",
  },
  {
    title: "GoPay Later",
    subtitle: "0 to 1 of a high retention BNPL product",
    href: "/gopaylater",
    bg: "#1e3a5f",
    textColor: "#fff",
    accent: "#93c5fd",
  },
];

export default function Gojek() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <Nav breadcrumbs={[{ label: 'gojek', href: '/gojek' }]} />
      <div className="max-w-3xl mx-auto px-6 md:px-12" style={{ paddingTop: '120px', paddingBottom: '80px' }}>

        {/* Hero banner */}
        <div style={{ width: '100%', height: '220px', background: 'linear-gradient(135deg, #00aa13 0%, #008f10 60%, #006e0e 100%)', borderRadius: '4px', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: '#fff', fontWeight: 500, letterSpacing: '-0.02em' }}>Gojek</span>
        </div>

        <div className="fade-up delay-1">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Gojek
          </h1>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '2rem' }}>
            Design Lead & Manager · 2017 – 2021
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '1.5rem', fontWeight: 300 }}>
            <Link href="https://gojek.com" target="_blank" style={{ color: 'var(--fg)', borderBottom: '1px solid currentColor' }}>Gojek</Link>{' '}
            is a super app in South East Asia. Started as a product designer where I contributed to the core GoPay app and also helped with the initial drafts of their latest app.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '1.5rem', fontWeight: 300 }}>
            Later I worked on their financial services arm as the founding designer and then the design manager for GoFinance (now GoTo Financial) which was a{' '}
            <Link href="https://www.techinasia.com/gojek-pay-159m-acquire-22-stake-bank-jago" target="_blank" style={{ color: 'var(--fg)', borderBottom: '1px solid currentColor' }}>merger with Jago Bank</Link>.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '3rem', fontWeight: 300 }}>
            At GoTo Financial I set up the team that would work on the initial set of products:{' '}
            {['gopaylater', 'gomodal', 'swadaya', 'gosave', 'gopay plus'].join(', ')}.
          </p>
        </div>

        {/* Projects */}
        <div className="fade-up delay-2">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 500, marginBottom: '1.5rem' }}>
            Select works
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {projects.map((p, i) => (
              <Link key={i} href={p.href}
                style={{
                  display: 'block',
                  backgroundColor: p.bg,
                  padding: '2rem 2rem 2rem 2rem',
                  borderRadius: '4px',
                  transition: 'opacity 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="hover:opacity-90">
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: p.accent }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 500, color: p.textColor, marginBottom: '0.5rem', lineHeight: 1.2 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: p.accent, fontWeight: 300, lineHeight: 1.5 }}>
                  {p.subtitle}
                </p>
                <span style={{ display: 'inline-block', marginTop: '1.5rem', fontSize: '0.75rem', color: p.textColor, fontWeight: 400, letterSpacing: '0.05em', opacity: 0.7 }}>
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
