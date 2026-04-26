import Nav from "@/components/Nav";
import Link from "next/link";

export default function Acko() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <Nav breadcrumbs={[{ label: 'acko', href: '/acko' }]} />
      <div className="max-w-3xl mx-auto px-6 md:px-12" style={{ paddingTop: '120px', paddingBottom: '80px' }}>

        <div style={{ width: '100%', height: '220px', background: 'linear-gradient(135deg, #6200ea 0%, #7c4dff 50%, #b388ff 100%)', borderRadius: '4px', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: '#fff', fontWeight: 500, letterSpacing: '-0.02em' }}>Acko</span>
        </div>

        <div className="fade-up delay-1">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Acko
          </h1>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '2rem' }}>
            Design Director · 2024 – Present
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '1.5rem', fontWeight: 300 }}>
            <Link href="https://acko.com" target="_blank" style={{ color: 'var(--fg)', borderBottom: '1px solid currentColor' }}>Acko</Link>{' '}
            is India's fastest-growing insurtech company, simplifying insurance with products like car insurance, health insurance, and the innovative DriveCam dashcam product.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '3rem', fontWeight: 300 }}>
            Leading the design organisation across multiple product verticals — from core insurance journeys to new-age embedded products, driving user experience at scale for millions of Indian customers.
          </p>
        </div>

        <div className="fade-up delay-2" style={{ padding: '2rem', backgroundColor: '#f0ede8', borderRadius: '4px' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', fontStyle: 'italic', fontFamily: "'Playfair Display', serif", lineHeight: 1.7 }}>
            "Designing insurance experiences that are clear, trustworthy, and genuinely useful for the everyday Indian consumer."
          </p>
        </div>
      </div>
    </main>
  );
}
