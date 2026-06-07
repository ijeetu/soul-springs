import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const tags = ['Therapy', 'Counseling', 'Wellness', 'Support', 'Coaching', 'Mindfulness', 'Crisis Care', 'Family Therapy', 'Self-Care', 'Healing'];

export default function MarqueeStats() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const items = track.querySelectorAll('.marquee-tag');
      const halfWidth = Array.from(items).slice(0, tags.length).reduce(
        (acc, el) => acc + el.offsetWidth + 16, 0
      );

      gsap.to(track, {
        x: -halfWidth,
        duration: halfWidth / 50,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % halfWidth)
        }
      });

      const statsItems = containerRef.current.querySelectorAll('.mq-stat');
      if (statsItems.length) {
        gsap.fromTo(statsItems,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: { trigger: containerRef.current, start: 'top 85%' },
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const tripled = [...tags, ...tags, ...tags];

  return (
    <section ref={containerRef} className="bg-brand-bg overflow-hidden border-b border-gray-200">
        <div className="pt-16 sm:pt-20 px-4 md:px-8 max-w-[1400px] mx-auto mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mq-stat">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-dark max-w-lg">Explore our core services and find the right support.</h2>
            <div className="hidden md:flex w-12 h-12 rounded-full border border-gray-300 items-center justify-center hover:bg-brand-dark hover:text-white transition cursor-pointer">
                <i className="ph ph-arrow-up-right"></i>
            </div>
        </div>

        {/* Scrolling Tags - GSAP infinite */}
        <div className="relative w-full overflow-hidden mb-12 md:mb-20 py-4">
            <div ref={trackRef} className="flex gap-4 w-max">
                {tripled.map((tag, i) => (
                    <span key={i} className="marquee-tag border border-gray-300 px-5 md:px-6 py-2.5 rounded-full text-sm md:text-base text-brand-dark whitespace-nowrap flex-shrink-0 hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-colors duration-300 cursor-default">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        {/* Stats */}
        <div className="pb-16 sm:pb-20 px-4 md:px-8 max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mq-stat">
            <div>
                <h3 className="text-4xl md:text-6xl font-serif text-brand-dark mb-2">72+</h3>
                <p className="text-xs md:text-sm text-gray-500">Clients have taken the step toward emotional wellness.</p>
            </div>
            <div>
                <h3 className="text-4xl md:text-6xl font-serif text-brand-dark mb-2">23%</h3>
                <p className="text-xs md:text-sm text-gray-500">Noticeable Improvement Within 3 Sessions.</p>
            </div>
            <div>
                <h3 className="text-4xl md:text-6xl font-serif text-brand-dark mb-2">3+</h3>
                <p className="text-xs md:text-sm text-gray-500">Professional team bringing deep experience.</p>
            </div>
            <div>
                <h3 className="text-4xl md:text-6xl font-serif text-brand-dark mb-2">239+</h3>
                <p className="text-xs md:text-sm text-gray-500">Virtual Sessions ensure continuous support.</p>
            </div>
        </div>
    </section>
  );
}
