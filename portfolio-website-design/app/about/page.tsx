import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { MarqueeTicker } from '@/components/marquee-ticker';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

export const metadata = {
  title: 'About Favour Ranger — Graphic Designer & Visual Artist',
  description:
    'Learn about Favour Ranger — 4+ years of graphic design experience, brand identity specialist, visual artist, and portrait drawer.',
};

const skills = [
  { name: 'Adobe Photoshop', level: 95 },
  { name: 'Adobe Illustrator', level: 90 },
  { name: 'CorelDRAW', level: 88 },
  { name: 'Canva', level: 97 },
  { name: 'Figma', level: 80 },
  { name: 'Adobe InDesign', level: 75 },
];

const expertise = [
  'Logo Design',
  'Brand Identity',
  'Flyer & Poster Design',
  'Social Media Content',
  'Portrait Art',
  'Typography',
  'Print Collateral',
  'Business Cards',
  'Event Banners',
  'Illustration',
];

const timeline = [
  {
    year: '2026 — Present',
    role: 'Graphic Designer',
    company: 'Tasty Cart (Food Delivery)',
    desc: 'Designed the brand logo and ongoing social media content for this growing food delivery startup, establishing and maintaining full visual identity.',
  },
  {
    year: '2020 — Present',
    role: 'Freelance Graphic Designer',
    company: 'Self-Employed · Nigeria',
    desc: 'Delivered 30+ custom design projects for churches, businesses, and event organisers. Specialised in faith-based promotional campaigns and cohesive brand systems across Nigeria.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#2c2d1e' }}>
      <Navbar />

      {/* ══════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden pt-24"
        style={{ minHeight: '70vh', background: '#2c2d1e' }}
      >
        {/* Accent panel */}
        <div
          className="absolute top-0 right-0"
          style={{
            width: '35%',
            height: '100%',
            background: '#3a3b27',
            zIndex: 0,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center"
             style={{ minHeight: '70vh' }}>
          <div className="max-w-3xl">
            <div className="hero-text-row-1">
              <p
                className="text-warm-gold uppercase mb-4"
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.4em',
                }}
              >
                About Me
              </p>
            </div>
            <div className="hero-text-row-1">
              <h1
                className="text-cream font-black uppercase leading-none"
                style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontSize: 'clamp(56px, 10vw, 140px)',
                  letterSpacing: '-0.02em',
                  lineHeight: 0.9,
                }}
              >
                Crafting Design
                <br />
                <span style={{ color: '#c8a96e' }}>with Purpose</span>
              </h1>
            </div>
            <div className="hero-text-row-2 mt-8 max-w-xl">
              <p
                className="text-cream-dim leading-relaxed"
                style={{ fontFamily: 'var(--font-syne)', fontSize: '0.95rem', lineHeight: '1.9' }}
              >
                I&apos;m a passionate graphic designer and visual artist dedicated to
                creating meaningful visual identities that help brands stand out and
                connect deeply with their audience.
              </p>
            </div>
          </div>

          {/* Floating script accent */}
          <div
            className="absolute bottom-12 right-10 hidden lg:block pointer-events-none"
            style={{ opacity: 0.45 }}
          >
            <span
              className="text-warm-gold"
              style={{ fontFamily: 'var(--font-great-vibes)', fontSize: '3.5rem' }}
            >
              Favour Ranger
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BIO SECTION
      ══════════════════════════════════════════ */}
      <section className="py-24" style={{ background: '#3a3b27' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Photo */}
            <AnimateOnScroll animation="slide-left">
              <div
                className="relative overflow-hidden"
                style={{ height: '580px' }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favour%20ranger%20image.-9Tt86jVc7lqj1EEwHFBCEWjt79eGUl.jpg"
                  alt="Favour Ranger"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Corner decoration */}
                <div
                  className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2"
                  style={{ borderColor: '#c8a96e' }}
                />
                <div
                  className="absolute top-6 left-6"
                  style={{
                    fontFamily: 'var(--font-east-sea)',
                    fontSize: '1rem',
                    color: '#c8a96e',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    opacity: 0.7,
                  }}
                >
                  The Designer
                </div>
              </div>
            </AnimateOnScroll>

            {/* Text */}
            <div>
              <AnimateOnScroll animation="slide-right">
                <h2
                  className="text-cream font-black uppercase leading-none mb-8"
                  style={{
                    fontFamily: 'var(--font-bricolage)',
                    fontSize: 'clamp(36px, 5vw, 68px)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Who I Am
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="slide-right" delay={100}>
                <p
                  className="text-cream-dim mb-5 leading-relaxed"
                  style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', lineHeight: '1.9' }}
                >
                  I&apos;m Favour Ranger Isaac, a graphic designer with 4+ years of experience
                  delivering brand identity, poster design, and digital marketing visuals for
                  churches, businesses, and educational institutions. I&apos;ve completed 30+ client
                  projects with a 90%+ satisfaction rate, specialising in cohesive visual systems
                  that communicate powerfully.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="slide-right" delay={200}>
                <p
                  className="text-cream-dim mb-5 leading-relaxed"
                  style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', lineHeight: '1.9' }}
                >
                  Beyond the screen, I am a visual artist — pencil and charcoal flow through my
                  hands as naturally as pixels. My portrait drawings capture emotion, character,
                  and depth in ways that digital tools alone cannot.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="slide-right" delay={300}>
                <p
                  className="text-cream-dim leading-relaxed"
                  style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', lineHeight: '1.9' }}
                >
                  Based in Nigeria, I work with clients globally, managing the complete design
                  lifecycle from concept to delivery, always ensuring fast turnarounds and
                  exceptional quality.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="slide-right" delay={400}>
                <Link
                  href="/contact"
                  className="inline-block mt-10 text-ink bg-cream hover:bg-warm-gold transition-colors duration-300 px-8 py-4"
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  Work With Me →
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SKILLS
      ══════════════════════════════════════════ */}
      <section className="py-24" style={{ background: '#2c2d1e' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Tools / Skill bars */}
            <div>
              <AnimateOnScroll animation="slide-up">
                <h2
                  className="text-cream font-black uppercase leading-none mb-12"
                  style={{
                    fontFamily: 'var(--font-bricolage)',
                    fontSize: 'clamp(36px, 5vw, 68px)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Design Tools
                </h2>
              </AnimateOnScroll>
              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <AnimateOnScroll key={skill.name} animation="slide-up" delay={i * 80}>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span
                          className="text-cream uppercase"
                          style={{
                            fontFamily: 'var(--font-syne)',
                            fontSize: '0.7rem',
                            letterSpacing: '0.25em',
                          }}
                        >
                          {skill.name}
                        </span>
                        <span
                          className="text-warm-gold"
                          style={{
                            fontFamily: 'var(--font-black-ops)',
                            fontSize: '0.75rem',
                          }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="h-px w-full"
                        style={{ background: 'rgba(232,226,213,0.1)' }}
                      >
                        <div
                          className="h-px"
                          style={{
                            width: `${skill.level}%`,
                            background: 'linear-gradient(90deg, #c8a96e, #6b3a2a)',
                            transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                        />
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

            {/* Expertise pills */}
            <div>
              <AnimateOnScroll animation="slide-up" delay={100}>
                <h2
                  className="text-cream font-black uppercase leading-none mb-12"
                  style={{
                    fontFamily: 'var(--font-bricolage)',
                    fontSize: 'clamp(36px, 5vw, 68px)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Expertise
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="slide-up" delay={150}>
                <div className="flex flex-wrap gap-3">
                  {expertise.map((item, i) => (
                    <span
                      key={item}
                      className="text-cream border border-cream/20 hover:border-warm-gold hover:text-warm-gold transition-colors duration-300 cursor-default"
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        padding: '0.6rem 1.2rem',
                        animationDelay: `${i * 60}ms`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Deco number */}
              <div
                className="mt-16 text-cream/5 select-none pointer-events-none"
                style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontSize: '10rem',
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '-0.05em',
                }}
              >
                FR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPERIENCE TIMELINE
      ══════════════════════════════════════════ */}
      <section className="py-24" style={{ background: '#14140c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll animation="slide-up">
            <h2
              className="text-cream font-black uppercase leading-none mb-16"
              style={{
                fontFamily: 'var(--font-bricolage)',
                fontSize: 'clamp(40px, 6vw, 90px)',
                letterSpacing: '-0.02em',
              }}
            >
              Experience
            </h2>
          </AnimateOnScroll>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'rgba(200,169,110,0.2)' }}
            />

            <div className="space-y-16 md:pl-12">
              {timeline.map((item, i) => (
                <AnimateOnScroll key={item.role} animation="slide-up" delay={i * 150}>
                  <div className="relative group">
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-14 top-1 w-4 h-4 rounded-full border-2 hidden md:flex items-center justify-center"
                      style={{
                        borderColor: '#c8a96e',
                        background: '#14140c',
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: '#c8a96e' }}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <span
                          className="text-warm-gold block mb-1"
                          style={{
                            fontFamily: 'var(--font-syne)',
                            fontSize: '0.65rem',
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {item.year}
                        </span>
                        <p
                          className="text-cream-dim"
                          style={{ fontFamily: 'var(--font-syne)', fontSize: '0.75rem' }}
                        >
                          {item.company}
                        </p>
                      </div>
                      <div className="md:col-span-2">
                        <h3
                          className="text-cream font-black uppercase mb-4"
                          style={{
                            fontFamily: 'var(--font-bricolage)',
                            fontSize: '1.6rem',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {item.role}
                        </h3>
                        <p
                          className="text-cream-dim leading-relaxed"
                          style={{ fontFamily: 'var(--font-syne)', fontSize: '0.85rem', lineHeight: '1.8' }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom divider */}
                    <div
                      className="mt-8 h-px w-full"
                      style={{ background: 'rgba(232,226,213,0.06)' }}
                    />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS
      ══════════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#6b3a2a' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-0" style={{ borderColor: 'rgba(232,226,213,0.15)' }}>
            {[
              { n: '30+', label: 'Projects' },
              { n: '90%+', label: 'Satisfaction' },
              { n: '4+', label: 'Years' },
            ].map((s, i) => (
              <AnimateOnScroll key={s.label} animation="scale-in" delay={i * 120}>
                <div className="text-center py-10 border-cream/15"
                     style={{ borderColor: 'rgba(232,226,213,0.15)' }}>
                  <div
                    className="text-cream"
                    style={{
                      fontFamily: 'var(--font-bricolage)',
                      fontSize: 'clamp(40px, 7vw, 90px)',
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {s.n}
                  </div>
                  <p
                    className="text-cream/60 mt-2 uppercase"
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.35em',
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <MarqueeTicker />

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section className="py-32 text-center relative overflow-hidden"
               style={{ background: '#2c2d1e' }}>
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: 0.04 }}
        >
          <span
            className="text-cream font-black uppercase"
            style={{
              fontFamily: 'var(--font-bricolage)',
              fontSize: '18vw',
              letterSpacing: '-0.02em',
            }}
          >
            COLLABORATE
          </span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <AnimateOnScroll animation="slide-up">
            <span
              className="text-warm-gold block mb-4"
              style={{ fontFamily: 'var(--font-great-vibes)', fontSize: '2.8rem' }}
            >
              let&apos;s create together
            </span>
            <h2
              className="text-cream font-black uppercase leading-none mb-8"
              style={{
                fontFamily: 'var(--font-bricolage)',
                fontSize: 'clamp(48px, 7vw, 100px)',
                letterSpacing: '-0.03em',
              }}
            >
              Let&apos;s Collaborate
            </h2>
            <p
              className="text-cream-dim mb-12"
              style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem' }}
            >
              Have a project in mind? I&apos;d love to hear about it.
            </p>
            <Link
              href="/contact"
              id="about-cta-btn"
              className="inline-block text-ink bg-cream hover:bg-warm-gold transition-colors duration-300 px-10 py-4"
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              Get in Touch →
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
