'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { MarqueeTicker } from '@/components/marquee-ticker';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

const contactLinks = [
  { label: 'Email', value: 'favouriteisaac231@gmail.com', href: 'mailto:favouriteisaac231@gmail.com' },
  { label: 'Phone', value: '+234 912 792 1197', href: 'tel:+2349127921197' },
  { label: 'Location', value: 'Nigeria (Remote)', href: null },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/favour-ranger-25152426a' },
  { name: 'Instagram', href: 'https://www.instagram.com/favourdesign_?igsh=Nzg3enBsNHNwb3Rs&utm_source=ig_contact_invite' },
  { name: 'Twitter / X', href: 'https://x.com/FavourRanger' },
  { name: 'Facebook', href: 'https://www.facebook.com/itzfavour.isaacranger' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const fieldStyle = (field: string) => ({
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focused === field ? '#c8a96e' : 'rgba(232,226,213,0.2)'}`,
    color: '#e8e2d5',
    padding: '1rem 0',
    fontFamily: 'var(--font-syne)',
    fontSize: '0.85rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    letterSpacing: '0.05em',
  });

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#2c2d1e' }}>
      <Navbar />

      {/* ══════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden pt-24 pb-16"
        style={{ background: '#14140c', minHeight: '45vh' }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none select-none"
          style={{ opacity: 0.04 }}
        >
          <span
            className="text-cream font-black uppercase absolute"
            style={{
              fontFamily: 'var(--font-bricolage)',
              fontSize: '20vw',
              letterSpacing: '-0.03em',
              bottom: '-2rem',
              left: '0',
              lineHeight: 1,
            }}
          >
            CONTACT
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col justify-end"
             style={{ minHeight: '40vh' }}>
          <div className="hero-text-row-1">
            <p
              className="text-warm-gold uppercase mb-4"
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.65rem',
                letterSpacing: '0.4em',
              }}
            >
              Get In Touch
            </p>
          </div>
          <div className="hero-text-row-1">
            <h1
              className="text-cream font-black uppercase leading-none"
              style={{
                fontFamily: 'var(--font-bricolage)',
                fontSize: 'clamp(56px, 11vw, 160px)',
                letterSpacing: '-0.03em',
                lineHeight: 0.9,
              }}
            >
              Let&apos;s Talk
            </h1>
          </div>
          <div className="hero-text-row-2 mt-6">
            <span
              className="text-warm-gold"
              style={{ fontFamily: 'var(--font-great-vibes)', fontSize: '2.5rem' }}
            >
              ready to create something extraordinary
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT GRID
      ══════════════════════════════════════════ */}
      <section className="py-24" style={{ background: '#2c2d1e' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">

            {/* ─── Form ─── */}
            <div className="lg:col-span-3">
              <AnimateOnScroll animation="slide-up">
                <h2
                  className="text-cream font-black uppercase leading-none mb-12"
                  style={{
                    fontFamily: 'var(--font-bricolage)',
                    fontSize: 'clamp(32px, 4vw, 56px)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Send a Message
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={100}>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-cream-dim uppercase mb-3"
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.3em',
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        required
                        placeholder="Your name"
                        style={{
                          ...fieldStyle('name'),
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-cream-dim uppercase mb-3"
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.3em',
                        }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        required
                        placeholder="your@email.com"
                        style={fieldStyle('email')}
                      />
                    </div>
                  </div>

                  {/* Phone + Project type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-cream-dim uppercase mb-3"
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.3em',
                        }}
                      >
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                        placeholder="+234 xxx xxx xxxx"
                        style={fieldStyle('phone')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-cream-dim uppercase mb-3"
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.3em',
                        }}
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        onFocus={() => setFocused('projectType')}
                        onBlur={() => setFocused(null)}
                        style={{
                          ...fieldStyle('projectType'),
                          cursor: 'pointer',
                        }}
                      >
                        <option value="" style={{ background: '#2c2d1e' }}>Select a service</option>
                        <option value="brand" style={{ background: '#2c2d1e' }}>Brand Identity</option>
                        <option value="logo" style={{ background: '#2c2d1e' }}>Logo Design</option>
                        <option value="flyer" style={{ background: '#2c2d1e' }}>Flyer / Poster</option>
                        <option value="social" style={{ background: '#2c2d1e' }}>Social Media</option>
                        <option value="portrait" style={{ background: '#2c2d1e' }}>Portrait Art</option>
                        <option value="other" style={{ background: '#2c2d1e' }}>Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-cream-dim uppercase mb-3"
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.3em',
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      required
                      rows={5}
                      placeholder="Tell me about your project, goals, and timeline..."
                      style={{
                        ...fieldStyle('message'),
                        resize: 'none',
                        lineHeight: '1.8',
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center gap-6 flex-wrap">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="text-ink bg-cream hover:bg-warm-gold transition-colors duration-300 px-10 py-4"
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        cursor: 'pointer',
                        border: 'none',
                      }}
                    >
                      Send Message →
                    </button>
                    <span
                      className="text-cream-dim"
                      style={{ fontFamily: 'var(--font-syne)', fontSize: '0.7rem' }}
                    >
                      Response within 24 hours
                    </span>
                  </div>

                  {submitted && (
                    <div
                      className="p-5 border-l-2"
                      style={{
                        borderColor: '#c8a96e',
                        background: 'rgba(200,169,110,0.08)',
                      }}
                    >
                      <p
                        className="text-warm-gold"
                        style={{ fontFamily: 'var(--font-syne)', fontSize: '0.8rem' }}
                      >
                        ✓ Thank you! Your message has been sent. I&apos;ll be in touch soon.
                      </p>
                    </div>
                  )}
                </form>
              </AnimateOnScroll>
            </div>

            {/* ─── Contact info ─── */}
            <div className="lg:col-span-2">
              <AnimateOnScroll animation="slide-right">
                <h2
                  className="text-cream font-black uppercase leading-none mb-12"
                  style={{
                    fontFamily: 'var(--font-bricolage)',
                    fontSize: 'clamp(32px, 4vw, 56px)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Other Ways
                </h2>
              </AnimateOnScroll>

              {/* Contact links */}
              <div className="space-y-8 mb-14">
                {contactLinks.map((item, i) => (
                  <AnimateOnScroll key={item.label} animation="slide-right" delay={i * 100}>
                    <div
                      className="pb-6"
                      style={{ borderBottom: '1px solid rgba(232,226,213,0.08)' }}
                    >
                      <p
                        className="text-warm-gold uppercase mb-2"
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.35em',
                        }}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-cream hover:text-warm-gold transition-colors duration-300 line-hover"
                          style={{
                            fontFamily: 'var(--font-syne)',
                            fontSize: '0.85rem',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          className="text-cream"
                          style={{ fontFamily: 'var(--font-syne)', fontSize: '0.85rem' }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              {/* Social links */}
              <AnimateOnScroll animation="slide-right" delay={300}>
                <p
                  className="text-warm-gold uppercase mb-5"
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.35em',
                  }}
                >
                  Social Media
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream border border-cream/20 hover:border-warm-gold hover:text-warm-gold transition-all duration-300 px-4 py-2"
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AVAILABILITY STRIP
      ══════════════════════════════════════════ */}
      <section
        className="py-16 text-center"
        style={{ background: '#6b3a2a' }}
      >
        <AnimateOnScroll animation="scale-in">
          <div className="max-w-2xl mx-auto px-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: '#4ade80', animation: 'pulseGold 2s ease infinite' }}
              />
              <span
                className="text-cream uppercase"
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.35em',
                }}
              >
                Available for New Projects
              </span>
            </div>
            <p
              className="text-cream/70"
              style={{ fontFamily: 'var(--font-syne)', fontSize: '0.8rem' }}
            >
              I typically respond within 24 hours. Looking forward to creating something great with you.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      <MarqueeTicker />
    </div>
  );
}
