import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function MissionVision() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.mv-fade');
      if (items.length) {
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 mv-fade">
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 bg-gray-200 px-4 py-1.5 rounded-full mb-4 inline-block">What Drives Us</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-dark">Our Mission & Vision</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Mission */}
            <div className="bg-brand-bg rounded-[2rem] p-8 md:p-10 relative overflow-hidden mv-fade">
                <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center">
                    <i className="ph-fill ph-target text-brand-accent text-2xl"></i>
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent mb-4 block">Our Mission</span>
                <h3 className="text-2xl md:text-3xl font-serif text-brand-dark mb-4">Empowering Minds, One Session at a Time</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    To provide accessible, compassionate, and evidence-based mental health care that empowers individuals to overcome challenges, build resilience, and lead fulfilling lives.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                        <i className="ph-fill ph-check-circle text-brand-accent mt-0.5"></i>
                        Personalized treatment plans for every client
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                        <i className="ph-fill ph-check-circle text-brand-accent mt-0.5"></i>
                        Affordable and accessible therapy options
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                        <i className="ph-fill ph-check-circle text-brand-accent mt-0.5"></i>
                        A stigma-free environment for all
                    </li>
                </ul>
            </div>

            {/* Vision */}
            <div className="bg-brand-dark rounded-[2rem] p-8 md:p-10 relative overflow-hidden mv-fade">
                <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <i className="ph-fill ph-eye text-white text-2xl"></i>
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent mb-4 block">Our Vision</span>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">A World Where Mental Health is a Priority</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    We envision a future where seeking mental health support is as natural as visiting a doctor — a world free from stigma, where emotional wellness is valued and nurtured.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                        <i className="ph-fill ph-star text-brand-accent mt-0.5"></i>
                        Breaking the stigma around mental health
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                        <i className="ph-fill ph-star text-brand-accent mt-0.5"></i>
                        Building emotionally resilient communities
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                        <i className="ph-fill ph-star text-brand-accent mt-0.5"></i>
                        Making therapy the norm, not the exception
                    </li>
                </ul>
            </div>
        </div>
    </section>
  );
}
