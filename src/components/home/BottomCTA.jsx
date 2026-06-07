import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function BottomCTA({
  title = <>Your journey to healing begins<br className="hidden md:block"/> with a single step.</>,
  subtitle,
  primaryLabel = 'Book an Appointment',
  primaryHref = '/book-appointment',
  secondaryLabel,
  secondaryHref,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = containerRef.current.querySelector('.cta-block');
      if (el) {
        gsap.fromTo(el,
          { opacity: 0, scale: 0.95 },
          {
            scrollTrigger: { trigger: el, start: 'top 80%' },
            opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out'
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="cta-block rounded-3xl md:rounded-[3rem] overflow-hidden relative py-16 md:py-24 text-center px-6" style={{ background: "url('/images/1557672172.webp') center/cover" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/80 to-pink-500/80 mix-blend-multiply"></div>
            
            <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 text-white/90 mb-4">
                    <i className="ph-fill ph-flower-lotus text-2xl"></i>
                    <span className="font-serif text-xl">Soul Springs</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-white/70 text-sm md:text-base max-w-md mx-auto mb-8">{subtitle}</p>
                )}
                <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${!subtitle ? 'mt-8' : ''}`}>
                    <Link href={primaryHref} className="bg-white text-brand-dark px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition inline-block text-sm">
                        {primaryLabel}
                    </Link>
                    {secondaryLabel && secondaryHref && (
                        <Link href={secondaryHref} className="border border-white/40 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition inline-block text-sm">
                            {secondaryLabel}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
}
