'use client';

import { useState, useEffect } from 'react';

const WORDS = ['GRAPHIC', 'VISUAL', 'BRAND', 'CREATIVE', 'DIGITAL', 'ARTISTIC'];

const TYPE_SPEED   = 110;   // ms per character typed
const DELETE_SPEED = 55;    // ms per character deleted (faster)
const PAUSE_AFTER  = 2200;  // pause when word fully typed
const GAP_BETWEEN  = 350;   // gap before next word starts

type Phase = 'typing' | 'pausing' | 'deleting' | 'waiting';

export function Typewriter({ className = '' }: { className?: string }) {
  const [text,     setText]    = useState('');
  const [phase,    setPhase]   = useState<Phase>('typing');
  const [wordIdx,  setWordIdx] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);

  // ─── cursor blink ──────────────────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // ─── typing state machine ──────────────────────────────────────
  useEffect(() => {
    const word = WORDS[wordIdx];

    if (phase === 'typing') {
      if (text === word) {
        const t = setTimeout(() => setPhase('pausing'), 10);
        return () => clearTimeout(t);
      }
      const t = setTimeout(
        () => setText(word.slice(0, text.length + 1)),
        TYPE_SPEED
      );
      return () => clearTimeout(t);
    }

    if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('deleting'), PAUSE_AFTER);
      return () => clearTimeout(t);
    }

    if (phase === 'deleting') {
      if (text === '') {
        setPhase('waiting');
        return;
      }
      const t = setTimeout(() => setText(text.slice(0, -1)), DELETE_SPEED);
      return () => clearTimeout(t);
    }

    if (phase === 'waiting') {
      const t = setTimeout(() => {
        setWordIdx((i) => (i + 1) % WORDS.length);
        setPhase('typing');
      }, GAP_BETWEEN);
      return () => clearTimeout(t);
    }
  }, [text, phase, wordIdx]);

  return (
    <span className={className} style={{ display: 'inline-block', position: 'relative' }}>
      {/* The typed characters — non-breaking space keeps height when empty */}
      <span>{text || '\u00A0'}</span>

      {/* Blinking cursor bar — scales with the parent font-size via em */}
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: '0.055em',
          height: '0.88em',
          background: '#1a1a14',
          marginLeft: '0.05em',
          verticalAlign: 'middle',
          transform: 'translateY(-0.04em)',
          opacity: cursorOn ? 1 : 0,
          transition: 'opacity 0.06s',
        }}
      />
    </span>
  );
}
