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
  { level: "Level 0", name: "Default", color: "#9ca3af" },
  { level: "Level 1", name: "Bronze", color: "#cd7f32" },
  { level: "Level 2", name: "Silver", color: "#c0c0c0" },
  { level: "Level 3", name: "Gold", color: "#ffd700" },
  { level: "Level 4", name: "Platinum", color: "#e5e4e2" },
  { level: "Level 5", name: "Diamond", color: "#b9f2ff" },
];

export default function GoSave() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <Nav breadcrumbs={[{ label: 'gojek', href: '/gojek' }, { label: 'gosave', href: '/gosave' }]} />
      <div className="max-w-3xl mx-auto px-6 md:px-12" style={{ paddingTop: '120px', paddingBottom: '80px' }}>

        <div style={{ width: '100%', height: '220px', background: 'linear-gradient(135deg, #78350f 0%, #b45309 60%, #f59e0b 100%)', borderRadius: '4px', marginBottom: '3rem', display: 'flex', alignItems: 'flex-end', padding: '2rem' }}>
          <div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#fff', fontWeight: 500 }}>GoSave</span>
            <div style={{ fontSize: '0.8rem', color: '#fde68a', marginTop: '0.4rem', fontWeight: 300 }}>Gamifying savings habit</div>
          </div>
        </div>

        <div className="fade-up delay-1">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            GoSave
          </h1>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '2rem' }}>
            Gojek · Gamified Gold Savings · 2019
          </p>
        </div>

        <Section title="Background">
          <p>Gojek wanted to expand its financial services to savings. Initial research clearly reflected users' inclination to save in gold, and that users are generally bad at saving and would like a product to help with this habit.</p>
          <p style={{ marginTop: '0.75rem' }}>We decided that gamification — and later a social angle — would be the right approach. Users could buy and sell gold from within Gojek using their GoPay balance, with the product helping them save at least once a month.</p>
          <p style={{ marginTop: '0.75rem' }}>My role was to lead the team (2 designers, 2 UX writers, 2 researchers) through the development of this concept.</p>
        </Section>

        <Section title="The concept">
          <p style={{ marginBottom: '1.25rem' }}>GoSave would gamify savings using a character that evolves as users save more. By end of month, the character resets and users earn a badge — which could unlock cashback and discounts across the Gojek ecosystem. Better badges also boost internal credit scores, unlocking higher-ticket loans.</p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 500, marginBottom: '1rem' }}>Step 1 — Picking a character</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { name: "Bung Panda", type: "Animated", desc: "Living characters that change moods based on saving behaviour" },
              { name: "Bu Peni", type: "Animated", desc: "Based on the classic annoying aunty neighbour archetype" },
              { name: "Bang Ros", type: "Animated", desc: "Based on an Indonesian Dangdut singer — instantly relatable" },
            ].map((c, i) => (
              <div key={i} style={{ padding: '1.25rem', backgroundColor: '#f0ede8', borderRadius: '4px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🐼</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.25rem' }}>{c.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.5 }}>{c.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ padding: '1.5rem', backgroundColor: '#78350f', borderRadius: '4px', marginBottom: '1.5rem' }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#fde68a', fontWeight: 500, marginBottom: '0.5rem' }}>🐔 Winner: Celengan Ayam</div>
            <div style={{ fontSize: '0.85rem', color: '#fef3c7', fontWeight: 300, lineHeight: 1.6 }}>A chick piggy bank — ubiquitous in Indonesia for savings. Resonated most strongly with users in testing.</div>
          </div>
        </Section>

        <Section title="Avatar levels & streaks">
          <p style={{ marginBottom: '1.25rem' }}>Different celengan levels tied to savings ranges. The celengan evolves throughout the month based on total amount saved.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
            {levels.map((l, i) => (
              <div key={i} style={{ padding: '1rem', backgroundColor: '#f0ede8', borderRadius: '4px', textAlign: 'center', borderTop: `3px solid ${l.color}` }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem', fontWeight: 400 }}>{l.level}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 500 }}>{l.name}</div>
              </div>
            ))}
          </div>
          <p>Once the month is over, the celengan resets to Level 0 and the user earns a badge equivalent to the celengan level achieved. Badges can be redeemed for Gojek rewards and cashbacks.</p>
        </Section>

        <Section title="Results & key learnings">
          <p style={{ marginBottom: '1.25rem' }}>GoSave made it to staging and was tested with internal Gojek users. Initial feedback was positive. However, management ultimately decided to white-label Pluang's (digital gold partner) flow within Gojek in favour of GoSave, which was parked for when more savings commodities (bonds, stocks) would be added.</p>

          <div style={{ padding: '1.5rem', backgroundColor: '#f0ede8', borderRadius: '4px', borderLeft: '3px solid var(--accent)' }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontStyle: 'italic', lineHeight: 1.7 }}>
              "As exciting and creative as this project was, the fact that it did not make it into production was heart breaking. The key learning was to be more clear upfront about implementation nuances — engineering capacity, marketing budgets, and partnership constraints."
            </p>
          </div>
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
