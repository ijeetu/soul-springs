import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function FeaturedStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.featured-story-fade');
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-brand-bg">
        <div className="py-16 sm:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-center">
                <div className="featured-story-fade rounded-[2rem] overflow-hidden aspect-[4/3]">
                    <img src="/images/1521791136064.webp" alt="Client success story" className="w-full h-full object-cover" />
                </div>
                <div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-brand-red bg-brand-red/10 px-4 py-1.5 rounded-full mb-6 inline-block featured-story-fade">Featured Story</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-5 leading-tight featured-story-fade">Finding Peace After Years of Anxiety</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 featured-story-fade">“Soul Springs helped me understand my anxiety instead of fighting it. I learned tools I use every day, and for the first time in years, I feel hopeful.”</p>
                    <div className="flex items-center gap-3 mb-8 featured-story-fade">
                        <img src="/images/1438761681033.webp" alt="Sarah Larson" className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h4 className="text-sm font-semibold text-brand-dark">Sarah Larson</h4>
                            <p className="text-xs text-gray-400">Individual Therapy Client</p>
                        </div>
                    </div>
                    <Link href="/book-appointment" className="featured-story-fade inline-flex items-center gap-2 bg-brand-dark text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-opacity-90 transition">
                        Start Your Story <i className="ph ph-arrow-up-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}
