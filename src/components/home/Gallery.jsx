import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const images = [
  { src: '/images/1527689368864.webp', alt: 'Calm therapy room' },
  { src: '/images/1545205597.webp', alt: 'Meditation and mindfulness' },
  { src: '/images/1506126613408.webp', alt: 'Peaceful wellness moment' },
  { src: '/images/1544027993.webp', alt: 'Supportive conversation' },
];

export default function Gallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.gallery-card');
      if (items.length) {
        gsap.fromTo(items,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            scrollTrigger: { trigger: containerRef.current, start: 'top 85%' },
            opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="mb-8 md:mb-10 text-center md:text-left">
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 bg-gray-200 px-4 py-1 rounded-full mb-4 inline-block">Gallery</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-dark">Inside Soul Springs</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {images.map((img, i) => (
                <div key={i} className="gallery-card rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[3/4]">
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            ))}
        </div>
    </section>
  );
}
