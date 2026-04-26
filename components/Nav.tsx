import Link from "next/link";

interface NavProps {
  breadcrumbs?: { label: string; href: string }[];
}

export default function Nav({ breadcrumbs }: NavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between" style={{ backgroundColor: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
      <div className="flex items-center gap-2 text-xs tracking-widest uppercase" style={{ color: 'var(--muted)', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
        <Link href="/" className="hover:opacity-60 transition-opacity">@mudlt</Link>
        {breadcrumbs?.map((b, i) => (
          <span key={i} className="flex items-center gap-2">
            <span style={{ color: 'var(--border)' }}>/</span>
            <Link href={b.href} className="hover:opacity-60 transition-opacity">{b.label}</Link>
          </span>
        ))}
      </div>
      <div className="flex items-center gap-6 text-xs tracking-widest uppercase" style={{ color: 'var(--muted)', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
        <Link href="/work" className="hover:opacity-60 transition-opacity">Work</Link>
        <Link href="mailto:mudit.design@gmail.com" className="hover:opacity-60 transition-opacity">Contact</Link>
      </div>
    </nav>
  );
}
