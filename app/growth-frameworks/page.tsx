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

const levels = [
  "Product Designer",
  "Product Designer II",
  "Lead Product Designer",
  "Design Manager or Principal Product Designer",
  "Design Manager II or Principal Product Designer II",
];

const principles = [
  { q: "What did you work on?", items: ["Scope", "Impact"] },
  { q: "How did you work on it?", items: ["Skills", "Delivery & Ownership", "Influence & Collaboration"] },
  { q: "Why did you work on it?", items: ["Vision & Strategy", "Leadership"] },
];

export default function GrowthFrameworks() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <Nav breadcrumbs={[{ label: 'fairmoney', href: '/fairmoney' }, { label: 'growth frameworks', href: '/growth-frameworks' }]} />
      <div className="max-w-3xl mx-auto px-6 md:px-12" style={{ paddingTop: '120px', paddingBottom: '80px' }}>

        <div className="fade-up delay-1">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '0.5rem', lineHeight: 1.15 }}>
            Hacking growth frameworks for start ups
          </h1>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '2rem' }}>
            FairMoney · Design Operations · 2021
          </p>
        </div>

        <Section title="The context">
          <p>Having made significant contributions to design operations at Gojek, I was presented with the opportunity to establish processes and frameworks from the ground up at FairMoney. I soon discovered that many of these processes, while suitable for larger organisations, took on a completely different meaning for start-ups.</p>
          <p style={{ marginTop: '0.75rem' }}>Constrained by time and resources, leaders are compelled to innovate. This post explores my journey of devising a growth framework tailored for a small team.</p>
        </Section>

        <Section title="Removing the clutter">
          <p>Larger organisations employ comprehensive growth frameworks that encompass minute details, which may provide a competitive edge to individuals. However, this approach differs in small teams. Rapidly evolving startups primarily concentrate on efficient delivery, rendering documentation, evangelism, and non-essential skills less significant.</p>
          <p style={{ marginTop: '0.75rem' }}>Prioritising these aspects could alter the team's core composition, diminishing their hunger for swift progress. While these skills remain valuable, their relevance varies at different stages of the organisation's life cycle.</p>
        </Section>

        <Section title="A more basic framework for start ups">
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 500, marginBottom: '1rem' }}>Step 1 — Simplifying the traditional framework</h3>
          <p style={{ marginBottom: '1.5rem' }}>We can disassemble the traditional structure and classify it based on principles that are more straightforward and understandable in a dynamic environment:</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {principles.map((p, i) => (
              <div key={i} style={{ padding: '1.5rem', backgroundColor: '#f0ede8', borderRadius: '4px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, marginBottom: '0.75rem', fontSize: '1rem' }}>{p.q}</div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {p.items.map((item, j) => (
                    <span key={j} style={{ padding: '0.3rem 0.75rem', backgroundColor: 'var(--bg)', borderRadius: '100px', fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 400 }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p>The concept is straightforward: as an individual advances and comprehends the <em>why</em> behind matters, their leadership and strategic thinking improve. A junior designer focuses primarily on scope and craft. As they develop, it expands to include impact, delivery, ownership, and eventually influence and leadership.</p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 500, margin: '2rem 0 1rem' }}>Step 2 — Defining the levels</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {levels.map((l, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', padding: '0.85rem 1rem', backgroundColor: i % 2 === 0 ? '#f0ede8' : 'transparent', borderRadius: '4px', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, minWidth: '1.5rem', fontSize: '1rem' }}>{i + 1}</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 300 }}>{l}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#1a2e1a', borderRadius: '4px' }}>
            <p style={{ fontSize: '0.85rem', color: '#74c69d', marginBottom: '1rem', fontWeight: 400 }}>
              Step 3 — Mapping clear expectations across all levels was the hardest part: ensuring the team had a clear and straightforward path for progression.
            </p>
            <Link href="https://docs.google.com/spreadsheets/d/13zgyhxQQxoJlrC-eXGFqc-GPhEIE_zinR5yP6cDRwG8/edit?usp=sharing" target="_blank"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#6ee7b7', fontWeight: 500, letterSpacing: '0.05em' }}
              className="hover:opacity-60 transition-opacity">
              Quick look at the Growth Framework ↗
            </Link>
          </div>
        </Section>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          <Link href="/fairmoney" style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 400, letterSpacing: '0.05em' }} className="hover:opacity-60 transition-opacity">
            ← Back to FairMoney
          </Link>
        </div>
      </div>
    </main>
  );
}
