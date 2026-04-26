import Nav from "@/components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <Nav />

      {/* Hero */}
      <section className="flex flex-col justify-end" style={{ paddingTop: '80px', minHeight: '100vh' }}>
        {/* Background texture strip */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '65vh',
          background: 'linear-gradient(165deg, #ede9e1 0%, #e4dfd5 40%, #ddd7cb 100%)',
          zIndex: 0
        }} />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 pb-16 max-w-5xl mx-auto w-full">
          <div className="fade-up delay-1">
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '2rem'
            }}>
              Mudit Sharma
            </h1>
          </div>

          <div className="fade-up delay-2" style={{ maxWidth: '560px' }}>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--muted)', fontWeight: 300 }}>
              Design leader with 12+ years of experience scaling products and building, hiring, and leading teams from zero to one and beyond across India, Southeast Asia, and Africa. Currently at{' '}
              <Link href="https://acko.com" target="_blank" style={{ color: 'var(--fg)', borderBottom: '1px solid currentColor' }}>Acko</Link>
              , previously led teams at{' '}
              <Link href="https://coinswitch.co" target="_blank" style={{ color: 'var(--fg)', borderBottom: '1px solid currentColor' }}>CoinSwitch</Link>
              ,{' '}
              <Link href="/fairmoney" style={{ color: 'var(--fg)', borderBottom: '1px solid currentColor' }}>FairMoney</Link>
              ,{' '}
              <Link href="/gojek" style={{ color: 'var(--fg)', borderBottom: '1px solid currentColor' }}>Gojek</Link>
              , among others.
            </p>
          </div>

          <div className="fade-up delay-3" style={{ marginTop: '3rem' }}>
            <Link href="/work" style={{
              display: 'inline-block',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 500,
              fontFamily: "'DM Sans', sans-serif",
              borderBottom: '1px solid var(--fg)',
              paddingBottom: '2px',
              marginBottom: '2rem'
            }}>
              Select Work ↓
            </Link>
          </div>

          <div className="fade-up delay-4" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/mudlt/' },
              { label: 'Resume', href: 'https://drive.google.com/file/d/1G0tzAEqHs8U6-iDBVvfolcvbuqMsK8wk/view' },
              { label: 'mudit.design@gmail.com', href: 'mailto:mudit.design@gmail.com' },
            ].map((l, i) => (
              <Link key={i} href={l.href} target="_blank" style={{
                fontSize: '0.75rem',
                color: 'var(--muted)',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400
              }} className="hover:opacity-60 transition-opacity">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
