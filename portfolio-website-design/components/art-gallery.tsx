'use client';

import Image from 'next/image';
import { AnimateOnScroll } from './animate-on-scroll';

const artworks = [
  {
    id: 1,
    title: 'Portrait Study I',
    medium: 'Charcoal on Paper',
    style: 'charcoal',
    src: '/art-01.png',
    span: 'row-span-2',
  },
  {
    id: 2,
    title: 'Pencil Figure',
    medium: 'Pencil on Paper',
    style: 'pencil',
    src: '/art-02.png',
    span: '',
  },
  {
    id: 3,
    title: 'Portrait Study II',
    medium: 'Oil Pastel',
    style: 'oil',
    src: '/art-03.png',
    span: '',
  },
  {
    id: 4,
    title: 'Expressive Lines',
    medium: 'Ink Drawing',
    style: 'ink',
    src: null,
    span: '',
  },
  {
    id: 5,
    title: 'Character Study',
    medium: 'Digital Art',
    style: 'digital',
    src: null,
    span: 'row-span-2',
  },
  {
    id: 6,
    title: 'Urban Sketch',
    medium: 'Mixed Media',
    style: 'mixed',
    src: null,
    span: '',
  },
  {
    id: 7,
    title: 'Figure Study',
    medium: 'Graphite',
    style: 'graphite',
    src: null,
    span: '',
  },
  {
    id: 8,
    title: 'Portrait Study III',
    medium: 'Watercolor',
    style: 'watercolor',
    src: null,
    span: '',
  },
];

const placeholderGradients: Record<string, string> = {
  ink:       'linear-gradient(145deg, #0e0e08 0%, #1e1810 40%, #2e2415 100%)',
  digital:   'linear-gradient(145deg, #1a1428 0%, #2e2040 50%, #4a2850 100%)',
  mixed:     'linear-gradient(145deg, #1a180e 0%, #2e2a18 45%, #4e4020 100%)',
  graphite:  'linear-gradient(145deg, #141410 0%, #222218 45%, #303025 100%)',
  watercolor:'linear-gradient(145deg, #0e1820 0%, #162030 45%, #1e3040 100%)',
};

export function ArtGallery() {
  return (
    <section
      id="art"
      className="py-28"
      style={{ background: 'linear-gradient(180deg, #1a1a0e 0%, #2c2d1e 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ─── Section Header ─── */}
        <div className="mb-16 relative">
          <AnimateOnScroll animation="slide-up">
            <p
              className="text-cream-dim uppercase mb-3"
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.65rem',
                letterSpacing: '0.4em',
              }}
            >
              The Artist Within
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-up" delay={100}>
            <div className="relative inline-block">
              <h2
                className="text-cream font-black uppercase leading-none"
                style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontSize: 'clamp(48px, 7.5vw, 120px)',
                  letterSpacing: '-0.02em',
                }}
              >
                Art &amp; Portraits
              </h2>
              <span
                className="text-warm-gold absolute hidden lg:block"
                style={{
                  fontFamily: 'var(--font-great-vibes)',
                  fontSize: '2.5rem',
                  bottom: '-0.5rem',
                  right: '-2rem',
                  lineHeight: 1,
                }}
              >
                drawn from the soul
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-up" delay={200}>
            <p
              className="text-cream-dim mt-8 leading-relaxed max-w-2xl"
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.9rem',
                lineHeight: '1.8',
              }}
            >
              Beyond digital design lies a world of handcrafted artistry. Pencil,
              charcoal, and ink come together to capture the essence of human
              expression through portrait drawings and original artwork series.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-up" delay={300}>
            <div className="flex gap-3 mt-6 flex-wrap">
              {['Pencil', 'Charcoal', 'Digital', 'Ink', 'Mixed Media', 'Oil Pastel'].map(
                (medium) => (
                  <span
                    key={medium}
                    className="text-cream border border-cream/20 px-4 py-2 rounded-full hover:border-warm-gold hover:text-warm-gold transition-colors duration-300 cursor-default"
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {medium}
                  </span>
                )
              )}
            </div>
          </AnimateOnScroll>
        </div>

        {/* ─── Gallery Grid ─── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[280px]">
          {artworks.map((artwork, index) => (
            <AnimateOnScroll
              key={artwork.id}
              animation="scale-in"
              delay={index * 70}
              className={artwork.span}
            >
              <div
                className="art-card w-full h-full"
                style={{
                  background: artwork.src
                    ? '#1a1a0e'
                    : (placeholderGradients[artwork.style] || placeholderGradients.ink),
                }}
              >
                {/* Image or styled placeholder */}
                {artwork.src ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={artwork.src}
                      alt={artwork.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full relative flex items-center justify-center">
                    {/* Texture lines */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          -60deg,
                          transparent,
                          transparent 3px,
                          rgba(200,169,110,0.08) 3px,
                          rgba(200,169,110,0.08) 4px
                        )`,
                      }}
                    />
                    {/* Central mark */}
                    <div className="text-center opacity-30">
                      <div
                        className="text-warm-gold"
                        style={{
                          fontFamily: 'var(--font-east-sea)',
                          fontSize: '3.5rem',
                          lineHeight: 1,
                        }}
                      >
                        {artwork.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                    {/* Corner accents */}
                    <div
                      className="absolute top-4 left-4 w-7 h-7 border-l border-t opacity-40"
                      style={{ borderColor: '#c8a96e' }}
                    />
                    <div
                      className="absolute bottom-4 right-4 w-7 h-7 border-r border-b opacity-40"
                      style={{ borderColor: '#c8a96e' }}
                    />
                  </div>
                )}

                {/* Hover overlay */}
                <div className="art-hover">
                  <p
                    className="text-cream-dim uppercase mb-1"
                    style={{
                      fontFamily: 'var(--font-east-sea)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.3em',
                    }}
                  >
                    {artwork.medium}
                  </p>
                  <h3
                    className="text-cream uppercase font-black"
                    style={{
                      fontFamily: 'var(--font-bricolage)',
                      fontSize: '1.1rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {artwork.title}
                  </h3>
                  <div
                    className="mt-3 h-px w-8"
                    style={{ background: '#c8a96e' }}
                  />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* ─── Commission CTA ─── */}
        <AnimateOnScroll animation="slide-up" delay={400}>
          <div className="mt-20 text-center">
            <p
              className="text-cream-dim mb-8"
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
              }}
            >
              Available for portrait commissions &amp; original artwork
            </p>
            <a
              href="/contact"
              className="inline-block text-cream border border-cream/30 hover:border-warm-gold hover:text-warm-gold transition-all duration-300 px-10 py-4"
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.65rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
              }}
            >
              Commission Artwork
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
