'use client';

export function SocialIcons() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/favourdesign_?igsh=Nzg3enBsNHNwb3Rs&utm_source=ig_contact_invite"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="social-icon-link"
        style={{ color: '#1a1a14', display: 'flex' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4.5"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/favour-ranger-25152426a"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="social-icon-link"
        style={{ color: '#1a1a14', display: 'flex' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      </a>


      {/* Twitter / X */}
      <a
        href="https://x.com/FavourRanger"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="social-icon-link"
        style={{ color: '#1a1a14', display: 'flex' }}
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/itzfavour.isaacranger"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="social-icon-link"
        style={{ color: '#1a1a14', display: 'flex' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      </a>
    </div>
  );
}
