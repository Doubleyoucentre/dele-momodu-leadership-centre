'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import photographs from '@/lib/gallery.json';
import { publicAsset } from '@/lib/site-config';

export function PhotoGallery() {
  const viewport = useRef<HTMLDivElement>(null);
  const thumbnails = useRef<HTMLElement>(null);
  const activeRef = useRef(0);
  const scrollFrame = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const total = photographs.length;

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const resize = new ResizeObserver(() => {
      element.scrollTo({ left: activeRef.current * element.clientWidth, behavior: 'auto' });
    });
    resize.observe(element);
    return () => {
      resize.disconnect();
      if (scrollFrame.current !== null) cancelAnimationFrame(scrollFrame.current);
    };
  }, []);

  useEffect(() => {
    const strip = thumbnails.current;
    const button = strip?.children[active] as HTMLElement | undefined;
    if (strip && button) {
      strip.scrollTo({ left: button.offsetLeft - (strip.clientWidth - button.clientWidth) / 2, behavior: 'auto' });
    }
  }, [active]);

  function goTo(index: number, smooth = true) {
    const element = viewport.current;
    if (!element) return;
    const target = Math.max(0, Math.min(total - 1, index));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollTo({ left: target * element.clientWidth, behavior: smooth && !reducedMotion ? 'smooth' : 'auto' });
  }

  function onScroll() {
    if (scrollFrame.current !== null) return;
    scrollFrame.current = requestAnimationFrame(() => {
      const element = viewport.current;
      if (element?.clientWidth) {
        const index = Math.max(0, Math.min(total - 1, Math.round(element.scrollLeft / element.clientWidth)));
        activeRef.current = index;
        setActive(index);
      }
      scrollFrame.current = null;
    });
  }

  function onKey(event: KeyboardEvent, index = active, thumbnail = false) {
    const targets: Record<string, number> = { ArrowLeft: index - 1, ArrowRight: index + 1, Home: 0, End: total - 1 };
    if (!(event.key in targets)) return;
    event.preventDefault();
    const target = Math.max(0, Math.min(total - 1, targets[event.key]));
    goTo(target, Math.abs(target - active) === 1);
    if (thumbnail) (thumbnails.current?.children[target] as HTMLButtonElement | undefined)?.focus({ preventScroll: true });
  }

  return (
    <section className="centre-gallery" aria-roledescription="carousel" aria-label="Dele Momodu photo gallery">
      <div ref={viewport} id="centre-gallery-slides" className="gallery-viewport" onScroll={onScroll}>
        {photographs.map((photo, index) => (
          <div className="gallery-slide" key={photo.id}>
            <figure className="gallery-figure" aria-roledescription="slide" aria-labelledby={`gallery-caption-${photo.id}`}>
              <div className="gallery-image-frame">
                <picture className="gallery-picture">
                  <source type="image/webp" srcSet={photo.sources.map(source => `${publicAsset(source.src)} ${source.width}w`).join(', ')} sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 68vw, 900px" />
                  <Image unoptimized src={publicAsset(photo.src)} width={photo.width} height={photo.height} alt={photo.caption} loading="lazy" decoding="async" className="gallery-image" />
                </picture>
              </div>
              <figcaption className="gallery-caption" id={`gallery-caption-${photo.id}`}>
                <span className="gallery-photo-number">From the archive · {String(index + 1).padStart(2, '0')}</span>
                <p>{photo.caption}</p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
      <div className="gallery-toolbar">
        <p id="gallery-instructions" className="gallery-instructions">Swipe or use the arrows to explore.</p>
        <div className="gallery-navigation">
          <output className="gallery-counter" aria-live="polite" aria-atomic="true">
            <span className="sr-only">Photograph </span>{String(active + 1).padStart(2, '0')} <span aria-hidden="true">/</span><span className="sr-only"> of </span> {total}<span className="sr-only">. {photographs[active].caption}</span>
          </output>
          <button type="button" className="gallery-arrow" aria-label="Previous photograph" aria-controls="centre-gallery-slides" disabled={active === 0} onClick={() => goTo(active - 1)}><span aria-hidden="true">←</span></button>
          <button type="button" className="gallery-arrow" aria-label="Next photograph" aria-controls="centre-gallery-slides" disabled={active === total - 1} onClick={() => goTo(active + 1)}><span aria-hidden="true">→</span></button>
        </div>
      </div>
      <nav ref={thumbnails} className="gallery-thumbnails" aria-label="Choose a photograph">
        {photographs.map((photo, index) => (
          <button key={photo.id} type="button" className="gallery-thumbnail" aria-label={`Show photograph ${index + 1}: ${photo.caption}`} aria-current={active === index ? 'true' : undefined} tabIndex={active === index ? 0 : -1} onClick={() => goTo(index, false)} onKeyDown={event => onKey(event, index, true)}>
            <Image unoptimized src={publicAsset(photo.thumbnail)} width={160} height={112} alt="" loading="lazy" decoding="async" />
            <span className="gallery-thumbnail-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </nav>
    </section>
  );
}
