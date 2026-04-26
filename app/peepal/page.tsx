import Nav from "@/components/Nav";
import Link from "next/link";

export default function Peepal() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <Nav breadcrumbs={[{ label: 'peepal co', href: '/peepal' }]} />
      <div className="max-w-3xl mx-auto px-6 md:px-12" style={{ paddingTop: '120px', paddingBottom: '80px' }}>

        {/* Hero banner */}
        <div style={{ width: '100%', height: '220px', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)', borderRadius: '4px', marginBottom: '3rem', display: 'flex', alignItems: 'center', padding: '2rem' }}>
          <div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', color: '#fff', fontWeight: 500 }}>Peepal Co</span>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
              <span style={{ fontSize: '0.75rem', color: '#93c5fd', fontWeight: 400, letterSpacing: '0.05em' }}>CoinSwitch</span>
              <span style={{ fontSize: '0.75rem', color: '#6ee7b7', fontWeight: 400, letterSpacing: '0.05em' }}>Lemonn</span>
            </div>
          </div>
        </div>

        <div className="fade-up delay-1">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Peepal Co
          </h1>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '2rem' }}>
            Director of Design · 2024 – Present
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '1.5rem', fontWeight: 300 }}>
            <Link href="https://peepal.co" target="_blank" style={{ color: 'var(--fg)', borderBottom: '1px solid currentColor' }}>PeepalCo</Link>{' '}
            is a canopy for brands serving India with tailored wealth-tech products, Making Money Equal for All. Started with{' '}
            <Link href="https://coinswitch.co" target="_blank" style={{ color: 'var(--fg)', borderBottom: '1px solid currentColor' }}>Coinswitch</Link>{' '}
            (crypto) and later into stock trading through{' '}
            <Link href="https://lemonn.co.in" target="_blank" style={{ color: 'var(--fg)', borderBottom: '1px solid currentColor' }}>Lemonn</Link>.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '2rem', fontWeight: 300 }}>
            Currently leading a team of 5 designers and 3 researchers.
          </p>
        </div>

        <div className="fade-up delay-2">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 500, marginBottom: '1.25rem' }}>
            Key achievements
          </h2>
          <ol style={{ padding: 0, margin: '0 0 3rem 0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {[
              { text: "Successful launch of the Lemonn App, Mutual Funds, Futures and Options", links: [] },
              { text: "Successful launch of the new branding campaign for Lemonn (ICC T20 World Cup on Hotstar)", links: [] },
              { text: "Product launches including Crypto futures and SmartInvest on CoinSwitch", links: [] },
              { text: "Feature releases on CoinSwitch app: Boost orders, Smart Invest among others", links: [] },
              { text: "Revamps: CoinSwitch Pro m-Web (30% implemented), Lemonn design system (100% adoption), Lemonn app (50% implemented)", links: [] },
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--muted)', fontWeight: 300 }}>
                <span style={{ fontFamily: "'Playfair Display', serif", color: 'var(--fg)', fontWeight: 500, minWidth: '1.5rem' }}>{i + 1}.</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="fade-up delay-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ backgroundColor: '#0f3460', padding: '1.5rem', borderRadius: '4px' }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: '#93c5fd', fontWeight: 500 }}>5</div>
            <div style={{ fontSize: '0.75rem', color: '#bfdbfe', marginTop: '0.3rem', fontWeight: 400 }}>Designers</div>
          </div>
          <div style={{ backgroundColor: '#064e3b', padding: '1.5rem', borderRadius: '4px' }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: '#6ee7b7', fontWeight: 500 }}>3</div>
            <div style={{ fontSize: '0.75rem', color: '#a7f3d0', marginTop: '0.3rem', fontWeight: 400 }}>Researchers</div>
          </div>
        </div>
      </div>
    </main>
  );
}
