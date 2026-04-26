import Nav from "@/components/Nav";
import Link from "next/link";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 500, marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border)' }}>
        {title}
      </h2>
      <div style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.75, fontWeight: 300 }}>
        {children}
      </div>
    </div>
  );
}

export default function GopayLater() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <Nav breadcrumbs={[{ label: 'gojek', href: '/gojek' }, { label: 'gopay later', href: '/gopaylater' }]} />
      <div className="max-w-3xl mx-auto px-6 md:px-12" style={{ paddingTop: '120px', paddingBottom: '80px' }}>

        <div style={{ width: '100%', height: '220px', background: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 60%, #3b82f6 100%)', borderRadius: '4px', marginBottom: '3rem', display: 'flex', alignItems: 'flex-end', padding: '2rem' }}>
          <div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#fff', fontWeight: 500 }}>GoPay Later</span>
            <div style={{ fontSize: '0.8rem', color: '#93c5fd', marginTop: '0.4rem', fontWeight: 300 }}>0→1 of a high retention BNPL product</div>
          </div>
        </div>

        <div className="fade-up delay-1">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            GoPay Later
          </h1>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '2rem' }}>
            Gojek · 0 to 1 BNPL Product · 2018–2021
          </p>
        </div>

        <Section title="The problem">
          <p>Recharging GoPay (Gojek's e-wallet) was a struggle since card or bank transactions were too complex in Indonesia. The most common method was through a driver or merchant outlet. We needed a solution that simplified this while promoting digital payments.</p>
          <p style={{ marginTop: '0.75rem' }}>My role involved collaborating with the team (1 designer, 1 UX writer, 1 researcher, PMs and engineers) in developing and refining this idea.</p>
        </Section>

        <Section title="Target user groups">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              { type: "Power Users", desc: "Wanted a payment method that can be used with ease and convenience" },
              { type: "College Students & Low-income users", desc: "Needed more liquidity towards the end of the month" },
            ].map((g, i) => (
              <div key={i} style={{ padding: '1.5rem', backgroundColor: '#e8edf5', borderRadius: '4px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem' }}>{g.type}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6, fontWeight: 300 }}>{g.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Initial ideas tested">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              "A postpaid method to top up GoPay",
              "An independent postpaid payment method — BNPL",
              "Negative balance in GoPay — overdraft",
            ].map((idea, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', padding: '0.85rem 1rem', backgroundColor: i === 1 ? '#1e3a5f' : '#f0ede8', borderRadius: '4px' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: i === 1 ? '#93c5fd' : 'var(--muted)', minWidth: '1.5rem' }}>{i + 1}.</span>
                <span style={{ color: i === 1 ? '#fff' : 'var(--muted)', fontWeight: i === 1 ? 400 : 300, fontSize: '0.9rem' }}>{idea}</span>
                {i === 1 && <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: '#6ee7b7', fontWeight: 500, letterSpacing: '0.08em' }}>WINNER</span>}
              </div>
            ))}
          </div>
        </Section>

        <Section title="GoPay Later V1 — Key features">
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              "Offered to a prequalified segment",
              "Could be selected and activated at checkout of various products within Gojek",
              "Small monthly fee to use a recurring limit based on credit worthiness",
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.75rem' }}>
                <span style={{ color: '#3b82f6', flexShrink: 0 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#1e3a5f', borderRadius: '4px' }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: '#93c5fd', fontWeight: 500 }}>86%</div>
            <div style={{ fontSize: '0.8rem', color: '#bfdbfe', marginTop: '0.3rem', fontWeight: 300 }}>Retention rate — one of the highest at Gojek</div>
          </div>
        </Section>

        <Section title="GoPay Later V2">
          <p style={{ marginBottom: '1.25rem' }}>Once the MVP launched, we scaled with two distinct variants:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              { name: "GoPay Later Akhir Bulan", desc: "Monthly billing cycle — pay at the end of the month" },
              { name: "GoPay Later Cicilan", desc: "EMI variant — spread payments over multiple months" },
            ].map((v, i) => (
              <div key={i} style={{ padding: '1.5rem', backgroundColor: i === 0 ? '#1e3a5f' : '#0f172a', borderRadius: '4px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#fff', fontWeight: 500, marginBottom: '0.5rem' }}>{v.name}</div>
                <div style={{ fontSize: '0.85rem', color: '#93c5fd', fontWeight: 300, lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Key learnings">
          <p>While GoPay Later became a convenient payment method, it came with challenges. Users would use it freely without realising the fees being incurred. We had to introduce friction nudges later to ensure awareness of the fee structure.</p>
          <p style={{ marginTop: '0.75rem' }}>This was a clear case of why <Link href="#" style={{ color: 'var(--fg)', borderBottom: '1px solid currentColor' }}>adding friction in financial product flows matters</Link> — sometimes the smooth experience is not the right experience.</p>
        </Section>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          <Link href="/gojek" style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 400, letterSpacing: '0.05em' }} className="hover:opacity-60 transition-opacity">
            ← Back to Gojek
          </Link>
        </div>
      </div>
    </main>
  );
}
