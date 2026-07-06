import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#14140c' }}>
      {/* Top strip */}
      <div
        className="py-4 px-6 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(232,226,213,0.06)' }}
      >
        <span
          className="text-warm-gold"
          style={{
            fontFamily: 'var(--font-east-sea)',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
          }}
        >
          Graphic Design · Brand Identity · Portrait Art
        </span>
        <a
          href="/contact"
          className="text-cream-dim hover:text-cream transition-colors duration-300"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
          }}
        >
          Start a Project ↗
        </a>
      </div>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        {/* Big watermark name */}
        <div className="overflow-hidden mb-12">
          <h2
            className="text-cream/[0.06] font-black uppercase leading-none select-none pointer-events-none"
            style={{
              fontFamily: 'var(--font-bricolage)',
              fontSize: 'clamp(60px, 12vw, 180px)',
              letterSpacing: '-0.02em',
              lineHeight: 0.85,
            }}
          >
            FAVOUR
            <br />
            RANGER
          </h2>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-cream hover:text-warm-gold transition-colors duration-300 block mb-4"
              style={{
                fontFamily: 'var(--font-bricolage)',
                fontSize: '1.4rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
              }}
            >
              Favour Ranger
            </Link>
            <p
              className="text-cream-dim leading-relaxed"
              style={{ fontFamily: 'var(--font-syne)', fontSize: '0.75rem', lineHeight: '1.8' }}
            >
              Graphic Designer &amp; Visual Artist.
              <br />
              Brand identity, logos &amp; portrait art
              <br />
              from Nigeria to the world.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-cream uppercase mb-6"
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.6rem',
                letterSpacing: '0.4em',
                fontWeight: 600,
              }}
            >
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Work', href: '/#projects' },
                { label: 'Art Gallery', href: '/#art' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cream-dim hover:text-cream transition-colors duration-300 line-hover"
                    style={{ fontFamily: 'var(--font-syne)', fontSize: '0.75rem' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="text-cream uppercase mb-6"
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.6rem',
                letterSpacing: '0.4em',
                fontWeight: 600,
              }}
            >
              Connect
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com/in/favour-ranger-25152426a' },
                { label: 'Instagram', href: 'https://www.instagram.com/favourdesign_?igsh=Nzg3enBsNHNwb3Rs&utm_source=ig_contact_invite' },
                { label: 'Twitter / X', href: 'https://x.com/FavourRanger' },
                { label: 'Facebook', href: 'https://www.facebook.com/itzfavour.isaacranger' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-dim hover:text-cream transition-colors duration-300 line-hover"
                    style={{ fontFamily: 'var(--font-syne)', fontSize: '0.75rem' }}
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-cream uppercase mb-6"
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.6rem',
                letterSpacing: '0.4em',
                fontWeight: 600,
              }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:favouriteisaac231@gmail.com"
                  className="text-cream-dim hover:text-cream transition-colors duration-300 line-hover break-all"
                  style={{ fontFamily: 'var(--font-syne)', fontSize: '0.72rem' }}
                >
                  favouriteisaac231@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2349127921197"
                  className="text-cream-dim hover:text-cream transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-syne)', fontSize: '0.75rem' }}
                >
                  +234 912 792 1197
                </a>
              </li>
              <li>
                <p
                  className="text-cream-dim"
                  style={{ fontFamily: 'var(--font-syne)', fontSize: '0.75rem' }}
                >
                  Nigeria · Remote
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(232,226,213,0.06)' }}
        >
          <p
            className="text-cream-dim"
            style={{ fontFamily: 'var(--font-syne)', fontSize: '0.65rem', letterSpacing: '0.1em' }}
          >
            © {currentYear} Favour Ranger. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span
              className="text-warm-gold"
              style={{
                fontFamily: 'var(--font-great-vibes)',
                fontSize: '1.5rem',
                opacity: 0.7,
              }}
            >
              Crafted with passion
            </span>
            <span
              className="text-cream-dim"
              style={{ fontFamily: 'var(--font-syne)', fontSize: '0.65rem', letterSpacing: '0.2em' }}
            >
              NIGERIA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
