'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MobileMenu } from './mobile-menu';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="hero-nav fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 mix-blend-normal pointer-events-none">
        {/* Left — Start a project */}
        <Link
          href="/contact"
          className="pointer-events-auto group flex items-center gap-1.5 text-cream hover:text-warm-gold transition-colors duration-300"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Start a Project
          <span className="inline-block group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-xs">
            ↗
          </span>
        </Link>

        {/* Center — Name */}
        <Link
          href="/"
          className="pointer-events-auto text-cream hover:text-warm-gold transition-colors duration-300"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: '0.65rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Favour Ranger
        </Link>

        {/* Stylish Hamburger Menu - Visible on Mobile */}
        <button
          className="pointer-events-auto flex flex-col gap-[6px] p-2 -mr-2 cursor-pointer group"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="block w-6 h-[2px] bg-cream transition-all duration-300 group-hover:w-4 origin-right" />
          <span className="block w-4 h-[2px] bg-cream transition-all duration-300 group-hover:w-6 origin-right self-end" />
        </button>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
