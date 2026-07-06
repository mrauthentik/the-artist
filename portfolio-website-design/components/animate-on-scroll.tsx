'use client';

import React, { useEffect, useRef, ReactNode } from 'react';

type Animation = 'slide-up' | 'slide-left' | 'slide-right' | 'fade-in' | 'scale-in';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: Animation;
  delay?: number;
  threshold?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export function AnimateOnScroll({
  children,
  className = '',
  animation = 'slide-up',
  delay = 0,
  threshold = 0.1,
  as: Tag = 'div',
}: AnimateOnScrollProps) {
  const ref = useRef<Element>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use a Map to keep track of timeout IDs so we can clear them if the user scrolls past quickly
    const timerMap = new WeakMap<Element, NodeJS.Timeout>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => {
              entry.target.classList.add('animated');
            }, delay);
            timerMap.set(entry.target, timer);
          } else {
            const existingTimer = timerMap.get(entry.target);
            if (existingTimer) {
              clearTimeout(existingTimer);
              timerMap.delete(entry.target);
            }
            entry.target.classList.remove('animated');
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      const existingTimer = timerMap.get(el);
      if (existingTimer) clearTimeout(existingTimer);
    };
  }, [delay, threshold]);

  const Comp = Tag as React.ElementType;

  return (
    <Comp
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`anim-${animation} ${className}`}
    >
      {children}
    </Comp>
  );
}
