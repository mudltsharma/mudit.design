import Nav from "@/components/Nav";
import Link from "next/link";

const findings = [
  { n: "1", title: "Gaps in user understanding", items: ["Did not understand why KYC was needed (~19%)", "KYC had no recall or visibility", "Users could not find KYC — buried deep in profile settings"] },
  { n: "2", title: "Users felt uncomfortable sharing personal data", items: ["Uncomfortable sharing ID/personal info — ~38%", "Afraid information would be misused — ~32%", "50% funnel drop at final submission — intent high, trust low"] },
  { n: "3", title: "Unclear rejection reasons", items: ["Rejection reasons were vague and confusing", "~35% didn't understand why KYC got rejected", "~29% didn't know if their KYC was approved or rejected"] },
  { n: "4", title: "No clear photo capture guidelines", items: ["~85% of rejections due to poor document image quality", "Images were cropped, blurred, low-light, or had glare"] },
];

const solutions = [
  { title: "Creating brand recall", desc: "Gave KYC a proper name/brand — GoPay Plus. Nudged users to complete KYC under this new brand identity." },
  { title: "Improving feature discovery", desc: "Solved with contextual nudges and a proper homepage for the newly rebranded KYC experience." },
  { title: "Nurturing trust", desc: "Reinstated a sense of security on screens where documents and sensitive data are required." },
  { title: "Better photo capture UX", desc: "Integrated liveness check and real-time nudges to help users capture the perfect selfie and document photo." },
];

const results = [
  { value: "12%", label: "Increase in KYC resubmissions with new home + clear rejection reasons" },
  { value: "30→67%", label: "KYC awareness grew from 30% to 67% in 3 months" },
  { value: "65%", label: "Drop in rejections from poor image quality" },
  { value: "12%", label: "Reduction in fraudulent selfies via liveness check" },
  { value: "4M→8.1M", label: "Total KYC users doubled" },
  { value: "95%", label: "Conversion after offering GoPay Later post-KYC" },
];

export default function GopayPlus() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <Nav breadcrumbs={[{ label: 'gojek', href: '/gojek' }, { label: 'gopay plus', href: '/gopayplus' }]} />
      <div className="max-w-3xl mx-auto px-6 md:px-12" style={{ paddingTop: '120px', paddingBottom: '80px' }}>

        <div style={{ width: '100%', height: '220px', background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 60%, #40916c 100%)', borderRadius: '4px', marginBottom: '3rem', display: 'flex', alignItems: 'flex-end', padding: '2rem' }}>
          <div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#fff', fontWeight: 500 }}>GoPay Plus</span>
            <div style={{ fontSize: '0.8rem', color: '#74c69d', marginTop: '0.4rem', fontWeight: 300 }}>Increasing KYC users from 4M to 8.1M</div>
          </div>
        </div>

        <div className="fade-up delay-1">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            GoPay Plus
          </h1>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '2rem' }}>
            Gojek / GoTo Financial · 2019–2021
          </p>
        </div>

        <Section title="Background">
          <p>
            The KYC experience for any financial service is the most critical as it defines the top of the funnel. Unfortunately this had stagnated for GoPay. This was a big problem, so the team started with deep research to understand why.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            My role was to lead the team (2 designers, 2 UX writers, 2 researchers) through the development of this concept.
          </p>
        </Section>

        <Section title="Research findings">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {findings.map((f, i) => (
              <div key={i} style={{ padding: '1.5rem', backgroundColor: '#f0ede8', borderRadius: '4px', borderLeft: '3px solid var(--accent)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Finding {f.n}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 500, marginBottom: '0.75rem' }}>{f.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {f.items.map((item, j) => (
                    <li key={j} style={{ fontSize: '0.9rem', color: 'var(--muted)', display: 'flex', gap: '0.5rem', fontWeight: 300 }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="How we addressed the problem">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
            {solutions.map((s, i) => (
              <div key={i} style={{ padding: '1.5rem', backgroundColor: '#1b4332', borderRadius: '4px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 500, color: '#fff', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#74c69d', lineHeight: 1.6, fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Results">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {results.map((r, i) => (
              <div key={i} style={{ padding: '1.5rem', backgroundColor: '#f0ede8', borderRadius: '4px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 500, marginBottom: '0.4rem' }}>{r.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.5, fontWeight: 300 }}>{r.label}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Key learnings">
          <p>
            Heading this initiative demonstrated the significance of taking responsibility and how the size of a team is not the determining factor for its influence and impact. With a smaller team compared to other large teams at Gojek, we generated a more substantial effect that positively influenced other products within the ecosystem.
          </p>
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
