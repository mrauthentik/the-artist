'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SocialIcons } from './social-icons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Art', href: '/#art' },
  { label: 'Contact', href: '/contact' },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-10%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-10%' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col justify-between"
          style={{ background: '#1a1a14' }}
        >
          {/* Top Bar with Close Button */}
          <div className="flex justify-between items-center p-6 sm:p-8">
            <Link href="/" onClick={onClose} style={{ textDecoration: 'none' }}>
              <div className="w-[44px] h-[36px] border border-cream rounded-full flex items-center justify-center">
                <span className="text-cream text-xl leading-none mt-1" style={{ fontFamily: 'var(--font-great-vibes)' }}>
                  Fr
                </span>
              </div>
            </Link>

            <button
              onClick={onClose}
              className="text-cream hover:text-warm-gold transition-colors p-2"
              aria-label="Close menu"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-8 px-6">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05, duration: 0.5, ease: 'easeOut' }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-cream hover:text-warm-gold transition-colors inline-block"
                  style={{
                    fontFamily: 'var(--font-bricolage)',
                    fontSize: 'clamp(3rem, 10vw, 5rem)',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    lineHeight: 1,
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Bottom Bar: Email & Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="p-8 flex flex-col items-center gap-6"
          >
            <a
              href="mailto:favouriteisaac231@gmail.com"
              className="text-cream-dim hover:text-cream transition-colors"
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
              }}
            >
              favouriteisaac231@gmail.com
            </a>
            <div className="flex gap-4 filter invert brightness-0 sepia contrast-200 hue-rotate-[10deg] saturate-[300%]">
              {/* Note: Inverting social icons so they are light on the dark background */}
              <div style={{ filter: 'invert(1) brightness(2)' }}>
                 <SocialIcons />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
