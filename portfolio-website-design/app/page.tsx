import Image from 'next/image';
import Link from 'next/link';
import { MarqueeTicker } from '@/components/marquee-ticker';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { ArtGallery } from '@/components/art-gallery';
import { SocialIcons } from '@/components/social-icons';
import { Typewriter } from '@/components/typewriter';
import { HeroNavbar } from '@/components/hero-navbar';

export const metadata = {
  title: 'Favour Ranger — Graphic Designer & Visual Artist',
  description:
    'Portfolio of Favour Ranger — graphic designer, brand specialist, and visual artist. 4+ years crafting bold visual identities, logos, and portrait art.',
};

const projects = [
  {
    id: '01',
    title: 'Nike Air Jordan Campaign',
    category: 'Product Design',
    year: '2024',
    tags: ['Product Design', 'Typography'],
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favour_ranger_work-1-CD3xsDMdo6ibrxlIPWykIhVbMf35eA.jpg',
  },
  {
    id: '02',
    title: 'AirPods Max Showcase',
    category: 'Product Marketing',
    year: '2024',
    tags: ['Product Marketing', 'Layout'],
    src:'https://www.image2url.com/r2/default/files/1783334235757-94d8692d-5b46-4168-96fc-f4b79f6eb8c6.jpg'
  },
  {
    id: '03',
    title: 'Happy New Month Campaign',
    category: 'Social Media',
    year: '2023',
    tags: ['Social Media', 'Brand Design'],
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favour_ranger_work-3-jMQhGkTa7p10GZots6TzESWwnvKTvp.jpg',
  },
  {
    id: '04',
    title: 'Favour Design Portfolio',
    category: 'Branding',
    year: '2023',
    tags: ['Branding', 'Print'],
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favour_ranger_work-4-g9peEPwg2ovynnCrgyA7PjyCW2n9Wz.jpg',
  },
  {
    id: '05',
    title: 'Branding & Flyer Campaign',
    category: 'Brand Identity',
    year: '2022',
    tags: ['Flyer Design', 'Brand Identity'],
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favour_ranger_work-5-i6vZZjilw5HaEmQc1harFFue9IiTJj.jpg',
  },
  {
    id: '06',
    title: 'Tastycart Delivery Promo',
    category: 'Social Media',
    year: '2026',
    tags: ['Brand Campaign', 'Social Media'],
    src: 'https://www.image2url.com/r2/default/files/1783359475001-cb1bc173-cd7c-4e4f-9271-f0730c2b4f4f.jpeg',
  },
  {
    id: '07',
    title: 'Tastycart App Launch',
    category: 'Brand Identity',
    year: '2026',
    tags: ['App Promo', 'Flyer Design'],
    src: 'https://www.image2url.com/r2/default/files/1783359524477-b940dacc-7410-4a58-98c4-419a2a92a080.jpeg',
  },
];

const services = [
  { title: 'Brand Identity', icon: '◈', desc: 'Logos, colour systems & brand guidelines' },
  { title: 'Flyer & Poster', icon: '◉', desc: 'Print-ready promotional materials' },
  { title: 'Social Media', icon: '◎', desc: 'Platform-optimised visual content' },
  { title: 'Portrait Art', icon: '◐', desc: 'Pencil, charcoal & digital portraits' },
  { title: 'Typography', icon: '◑', desc: 'Custom type treatments & lettering' },
  { title: 'Motion Design', icon: '◒', desc: 'Animated graphics & micro-motion' },
];

/* (SocialIcons is now a separate client component) */

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════════
          ░░░  HERO — CREAM EDITORIAL  ░░░
          Full-viewport cream section:
          · Inline navbar with FR logo oval
          · Giant "GRAPHIC" display text (edge-to-edge)
          · Circular portrait photo punched through text
          · Great Vibes script "Designer" below
          · Social icons + email pinned to bottom
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        style={{
          background: '#f0ede6',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >

        {/* ─── NAVBAR ─────────────────────────────────────────────── */}
        <HeroNavbar />

        {/* ─── HERO MAIN CONTENT ──────────────────────────────────── */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingBottom: '5rem',
          }}
        >
          {/* Giant GRAPHIC text + circular photo overlay */}
          <div className="relative w-full flex flex-col md:block items-center justify-center">
            {/* Giant display word — typewriter cycles through design words */}
            <h1
              className="hero-text-row-1 relative z-0 md:static"
              style={{
                fontFamily: 'var(--font-bricolage)',
                fontSize: 'clamp(56px, 18vw, 360px)',
                fontWeight: 800,
                color: '#1a1a14',
                lineHeight: 1,
                letterSpacing: '-0.025em',
                textTransform: 'uppercase',
                userSelect: 'none',
                margin: 0,
                padding: '0 1rem',
                width: '100%',
                textAlign: 'center',
                minWidth: 0,
              }}
            >
              <Typewriter />
            </h1>

            {/* Circular portrait — floats above text on desktop, stacks below on mobile */}
            <div
              className="hero-photo relative mt-6 md:mt-0 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10"
              style={{
                width: 'clamp(200px, 22vw, 320px)',
                height: 'clamp(200px, 22vw, 320px)',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '6px solid #f0ede6',
                boxShadow: '0 8px 40px rgba(26,26,20,0.12)',
                flexShrink: 0,
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favour%20ranger%20image.-9Tt86jVc7lqj1EEwHFBCEWjt79eGUl.jpg"
                alt="Favour Ranger — Graphic Designer & Visual Artist"
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
              />
            </div>
          </div>

          {/* Script "Designer" word — beneath the circle */}
          <div
            className="hero-text-row-2"
            style={{
              position: 'relative',
              zIndex: 5,
              marginTop: '-1.5rem',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-great-vibes)',
                fontSize: 'clamp(56px, 9vw, 140px)',
                color: '#1a1a14',
                lineHeight: 1.1,
                display: 'inline-block',
              }}
            >
              Designer
            </span>
          </div>
        </div>

        {/* ─── BOTTOM BAR — Social icons + Email ───────────────────── */}
        <div
          className="hero-content-left absolute bottom-8 left-0 right-0 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 gap-4 sm:gap-0 z-20"
        >
          <div className="scale-90 sm:scale-100 transform origin-left">
            <SocialIcons />
          </div>
          <a
            href="mailto:favouriteisaac231@gmail.com"
            className="text-center sm:text-right"
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: '0.72rem',
              letterSpacing: '0.05em',
              color: '#1a1a14',
              opacity: 0.7,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
          >
            favouriteisaac231@gmail.com
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MARQUEE TICKER — transition to dark
      ══════════════════════════════════════════ */}
      <MarqueeTicker />

      {/* ══════════════════════════════════════════
          SELECTED WORK
      ══════════════════════════════════════════ */}
      <section id="projects" className="py-24" style={{ background: '#2c2d1e' }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Section header */}
          <div className="flex items-end justify-between mb-16 gap-4 flex-wrap">
            <div>
              <AnimateOnScroll animation="slide-up">
                <p
                  className="text-cream-dim uppercase mb-3"
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.4em',
                  }}
                >
                  Selected Work
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="slide-up" delay={100}>
                <h2
                  className="text-cream font-black uppercase leading-none"
                  style={{
                    fontFamily: 'var(--font-bricolage)',
                    fontSize: 'clamp(40px, 7vw, 100px)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Recent Projects
                </h2>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll animation="slide-right" delay={200}>
              <Link
                href="/#projects"
                className="text-cream-dim hover:text-cream transition-colors duration-300 line-hover"
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                View All Work →
              </Link>
            </AnimateOnScroll>
          </div>

          {/* Projects grid */}
          <div className="space-y-6">
            {/* Row 1: large left + small right */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <AnimateOnScroll animation="slide-up" className="lg:col-span-3">
                <div className="project-card group" style={{ height: '520px' }}>
                  <Image
                    src={projects[0].src}
                    alt={projects[0].title}
                    fill
                    className="card-image"
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="card-overlay" />
                  <div className="card-info">
                    <div className="flex items-end justify-between">
                      <div>
                        <span
                          className="text-warm-gold block mb-2"
                          style={{ fontFamily: 'var(--font-black-ops)', fontSize: '2.5rem' }}
                        >
                          {projects[0].id}
                        </span>
                        <h3
                          className="text-cream font-black uppercase"
                          style={{
                            fontFamily: 'var(--font-bricolage)',
                            fontSize: '1.6rem',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {projects[0].title}
                        </h3>
                        <div className="flex gap-2 mt-2 flex-wrap">
                          {projects[0].tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-cream-dim border border-cream/20 rounded-full px-3 py-1"
                              style={{
                                fontFamily: 'var(--font-syne)',
                                fontSize: '0.6rem',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span
                        className="text-cream-dim"
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontSize: '0.65rem',
                          letterSpacing: '0.2em',
                        }}
                      >
                        {projects[0].year}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={120} className="lg:col-span-2">
                <div className="project-card group" style={{ height: '520px' }}>
                  <Image
                    src={projects[1].src}
                    alt={projects[1].title}
                    fill
                    className="card-image"
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="card-overlay" />
                  <div className="card-info">
                    <span
                      className="text-warm-gold block mb-2"
                      style={{ fontFamily: 'var(--font-black-ops)', fontSize: '2rem' }}
                    >
                      {projects[1].id}
                    </span>
                    <h3
                      className="text-cream font-black uppercase"
                      style={{
                        fontFamily: 'var(--font-bricolage)',
                        fontSize: '1.3rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {projects[1].title}
                    </h3>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Row 2: three equal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.slice(2, 5).map((project, i) => (
                <AnimateOnScroll key={project.id} animation="slide-up" delay={i * 100}>
                  <div className="project-card group" style={{ height: '380px' }}>
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      className="card-image"
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="card-overlay" />
                    <div className="card-info">
                      <span
                        className="text-warm-gold block mb-1"
                        style={{ fontFamily: 'var(--font-black-ops)', fontSize: '1.5rem' }}
                      >
                        {project.id}
                      </span>
                      <h3
                        className="text-cream font-black uppercase"
                        style={{
                          fontFamily: 'var(--font-bricolage)',
                          fontSize: '1.1rem',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-cream-dim mt-1"
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontSize: '0.65rem',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {project.category}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Row 3: small left + large right (mirror of Row 1) */}
            {projects.length > 5 && (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <AnimateOnScroll animation="slide-up" className="lg:col-span-2">
                  <div className="project-card group" style={{ height: '520px' }}>
                    <Image
                      src={projects[5].src}
                      alt={projects[5].title}
                      fill
                      className="card-image"
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="card-overlay" />
                    <div className="card-info">
                      <span
                        className="text-warm-gold block mb-2"
                        style={{ fontFamily: 'var(--font-black-ops)', fontSize: '2rem' }}
                      >
                        {projects[5].id}
                      </span>
                      <h3
                        className="text-cream font-black uppercase"
                        style={{
                          fontFamily: 'var(--font-bricolage)',
                          fontSize: '1.3rem',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {projects[5].title}
                      </h3>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="slide-up" delay={120} className="lg:col-span-3">
                  <div className="project-card group" style={{ height: '520px' }}>
                    <Image
                      src={projects[6].src}
                      alt={projects[6].title}
                      fill
                      className="card-image"
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="card-overlay" />
                    <div className="card-info">
                      <div className="flex items-end justify-between">
                        <div>
                          <span
                            className="text-warm-gold block mb-2"
                            style={{ fontFamily: 'var(--font-black-ops)', fontSize: '2.5rem' }}
                          >
                            {projects[6].id}
                          </span>
                          <h3
                            className="text-cream font-black uppercase"
                            style={{
                              fontFamily: 'var(--font-bricolage)',
                              fontSize: '1.6rem',
                              letterSpacing: '-0.01em',
                            }}
                          >
                            {projects[6].title}
                          </h3>
                          <div className="flex gap-2 mt-2 flex-wrap">
                            {projects[6].tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-cream-dim border border-cream/20 rounded-full px-3 py-1"
                                style={{
                                  fontFamily: 'var(--font-syne)',
                                  fontSize: '0.6rem',
                                  letterSpacing: '0.2em',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span
                          className="text-cream-dim"
                          style={{
                            fontFamily: 'var(--font-syne)',
                            fontSize: '0.65rem',
                            letterSpacing: '0.2em',
                          }}
                        >
                          {projects[6].year}
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ART & PORTRAITS GALLERY
      ══════════════════════════════════════════ */}
      <ArtGallery />

      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section className="py-24" style={{ background: '#3a3b27' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll animation="slide-up">
            <div className="flex items-end gap-6 mb-14 flex-wrap">
              <h2
                className="text-cream font-black uppercase leading-none"
                style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontSize: 'clamp(36px, 6vw, 90px)',
                  letterSpacing: '-0.02em',
                }}
              >
                What I Do
              </h2>
              <span
                className="text-warm-gold mb-2"
                style={{ fontFamily: 'var(--font-great-vibes)', fontSize: '2rem' }}
              >
                &amp; how I do it
              </span>
            </div>
          </AnimateOnScroll>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: 'rgba(232,226,213,0.08)' }}
          >
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} animation="fade-in" delay={i * 80}>
                <div
                  className="p-8 hover-lift group cursor-default"
                  style={{ background: '#3a3b27' }}
                >
                  <span
                    className="text-warm-gold block mb-4 transition-transform duration-300 group-hover:scale-110 origin-left"
                    style={{ fontFamily: 'var(--font-east-sea)', fontSize: '2rem' }}
                  >
                    {service.icon}
                  </span>
                  <h3
                    className="text-cream font-black uppercase mb-3"
                    style={{
                      fontFamily: 'var(--font-bricolage)',
                      fontSize: '1.25rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-cream-dim leading-relaxed"
                    style={{ fontFamily: 'var(--font-syne)', fontSize: '0.8rem' }}
                  >
                    {service.desc}
                  </p>
                  <div
                    className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: '#c8a96e' }}
                  />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS
      ══════════════════════════════════════════ */}
      <section className="py-24" style={{ background: '#14140c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { number: '30+', label: 'Projects Completed', sub: 'Delivered with excellence' },
              { number: '90%+', label: 'Client Satisfaction', sub: 'Rated by real clients' },
              { number: '4+', label: 'Years Experience', sub: 'Growing since 2020' },
            ].map((stat, i) => (
              <AnimateOnScroll key={stat.label} animation="slide-up" delay={i * 150}>
                <div
                  className="px-10 py-16 text-center"
                  style={{
                    borderRight: i < 2 ? '1px solid rgba(232,226,213,0.1)' : 'none',
                    borderBottom: '1px solid rgba(232,226,213,0.05)',
                  }}
                >
                  <div
                    className="text-cream block mb-2"
                    style={{
                      fontFamily: 'var(--font-bricolage)',
                      fontSize: 'clamp(60px, 8vw, 100px)',
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {stat.number}
                  </div>
                  <p
                    className="text-warm-gold uppercase mb-1"
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.3em',
                    }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="text-cream-dim"
                    style={{ fontFamily: 'var(--font-syne)', fontSize: '0.7rem' }}
                  >
                    {stat.sub}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section
        className="py-32 relative overflow-hidden"
        style={{ background: '#6b3a2a' }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{ opacity: 0.07 }}
        >
          <span
            className="text-cream whitespace-nowrap font-black uppercase"
            style={{
              fontFamily: 'var(--font-bricolage)',
              fontSize: '20vw',
              letterSpacing: '-0.02em',
            }}
          >
            LETS TALK
          </span>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimateOnScroll animation="slide-up">
            <span
              className="text-cream/60 block mb-4"
              style={{ fontFamily: 'var(--font-great-vibes)', fontSize: '2.5rem' }}
            >
              ready when you are
            </span>
            <h2
              className="text-cream font-black uppercase leading-none mb-8"
              style={{
                fontFamily: 'var(--font-bricolage)',
                fontSize: 'clamp(48px, 8vw, 120px)',
                letterSpacing: '-0.03em',
              }}
            >
              Ready to Elevate Your Brand?
            </h2>
            <p
              className="text-cream/70 mb-12 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem' }}
            >
              Let&apos;s create something extraordinary together. From brand identity to
              portrait art — I bring your vision to life.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                id="main-cta-btn"
                className="inline-block text-ink bg-cream hover:bg-warm-gold transition-colors duration-300 px-10 py-4"
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Start a Project
              </Link>
              <Link
                href="/about"
                className="inline-block text-cream border border-cream/40 hover:border-cream transition-colors duration-300 px-10 py-4"
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Learn More
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
