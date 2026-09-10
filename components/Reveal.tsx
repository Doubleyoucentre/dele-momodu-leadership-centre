'use client';

import { useEffect, useRef, useState } from 'react';

export function Reveal({ children, className = '', image = false, delay = 0, id }: { children: React.ReactNode; className?: string; image?: boolean; delay?: number; id?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: .12, rootMargin: '0px 0px -40px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div id={id} ref={ref} style={{ animationDelay: `${delay}ms` }} className={`${image ? 'reveal-image' : 'reveal'} ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
