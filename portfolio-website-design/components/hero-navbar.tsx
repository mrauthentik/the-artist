'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MobileMenu } from './mobile-menu';

export function HeroNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.5rem 2.5rem',
          position: 'relative',
          zIndex: 50,
          flexShrink: 0,
        }}
      >
        {/* Logo — FR oval monogram */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <div
            style={{
              width: '52px',
              height: '44px',
              border: '1.5px solid #1a1a14',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-great-vibes)',
                fontSize: '1.65rem',
                color: '#1a1a14',
                lineHeight: 1,
                marginTop: '2px',
              }}
            >
              Fr
            </span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: '0.42rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#1a1a14',
              fontWeight: 600,
            }}
          >
            Favour Ranger
          </span>
        </Link>

        {/* Center Nav Links - Hidden on Mobile */}
        <nav
          className="hidden md:flex"
          style={{
            alignItems: 'center',
            gap: '2.75rem',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Projects', href: '/#projects' },
            { label: 'Art', href: '/#art' },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="cream-nav-link"
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#1a1a14',
                textDecoration: 'none',
                opacity: 0.8,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          {/* Contact Button - Hidden on very small screens, visible otherwise */}
          <Link
            href="/contact"
            id="hero-contact-btn"
            className="hidden sm:inline-block"
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#f0ede6',
              background: '#1a1a14',
              textDecoration: 'none',
              padding: '0.7rem 1.5rem',
              borderRadius: '2px',
              transition: 'background 0.25s',
            }}
          >
            Contact
          </Link>

          {/* Stylish Hamburger Menu - Visible on Mobile */}
          <button
            className="md:hidden flex flex-col gap-[6px] p-2 cursor-pointer group"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="block w-6 h-[2px] bg-[#1a1a14] transition-all duration-300 group-hover:w-4 origin-right" />
            <span className="block w-4 h-[2px] bg-[#1a1a14] transition-all duration-300 group-hover:w-6 origin-right self-end" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
