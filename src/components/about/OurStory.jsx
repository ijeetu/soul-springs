import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function OurStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.story-fade');
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
    <section ref={containerRef} className="bg-brand-bg">
        <div className="py-16 sm:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left: Images Grid */}
                <div className="grid grid-cols-2 gap-4 story-fade">
                    <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                        <img src="/images/1527689368864.webp" alt="Therapy room" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8">
                        <img src="/images/1545205597.webp" alt="Meditation" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Right: Story Text */}
                <div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-brand-red bg-brand-red/10 px-4 py-1.5 rounded-full mb-6 inline-block story-fade">Our Story</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark mb-6 story-fade">
                        From a Vision to<br/>a Healing Space
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 story-fade">
                        Soul Springs was founded in 2015 with a simple but powerful belief: that mental health care should be accessible, personal, and free from stigma. What started as a small counseling practice has grown into a trusted center for emotional wellness.
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 story-fade">
                        Our founder, Dr. Sarah Mitchell, recognized the gap between the need for mental health support and the availability of compassionate, affordable care. She envisioned a space where individuals could feel truly safe — a space to heal without judgment.
                    </p>

                    {/* Timeline */}
                    <div className="space-y-6 story-fade">
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-brand-accent"></div>
                                <div className="w-px h-full bg-gray-200"></div>
                            </div>
                            <div className="pb-6">
                                <p className="text-xs text-brand-accent font-semibold mb-1">2015</p>
                                <p className="text-sm text-brand-dark font-medium">Founded Soul Springs with 2 counselors</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-brand-red"></div>
                                <div className="w-px h-full bg-gray-200"></div>
                            </div>
                            <div className="pb-6">
                                <p className="text-xs text-brand-red font-semibold mb-1">2019</p>
                                <p className="text-sm text-brand-dark font-medium">Expanded to online therapy sessions</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-brand-dark"></div>
                            </div>
                            <div>
                                <p className="text-xs text-brand-dark font-semibold mb-1">2024</p>
                                <p className="text-sm text-brand-dark font-medium">500+ clients served, 5 licensed counselors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
