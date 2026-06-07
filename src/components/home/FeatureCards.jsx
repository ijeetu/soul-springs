import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function FeatureCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-fade-up', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gsap-fade-up">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-dark max-w-lg mb-4 md:mb-0">Space to Talk.</h2>
            <p className="text-gray-600 max-w-xs text-sm">At Soul Springs, we believe healing begins with feeling heard.</p>
        </div>

        <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-8 gsap-fade-up snap-x snap-mandatory">
            {/* Card 1 */}
            <div className="min-w-[280px] md:min-w-[400px] h-[350px] md:h-[400px] rounded-[2rem] overflow-hidden relative group cursor-pointer snap-center">
                <img src="/images/1616486029423.webp" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="Session" />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs bg-white/30 backdrop-blur px-3 py-1 rounded-full"><i className="ph-fill ph-flower-lotus"></i> Heal</span>
                        <span className="text-xs bg-white/30 backdrop-blur px-3 py-1 rounded-full"><i className="ph-fill ph-arrows-clockwise"></i> Renew</span>
                    </div>
                    <h3 className="text-xl font-serif">Inside a Therapy Session</h3>
                </div>
            </div>

            {/* Card 2 */}
            <div className="min-w-[280px] md:min-w-[400px] h-[350px] md:h-[400px] rounded-[2rem] p-6 md:p-8 flex flex-col justify-between snap-center" style={{ background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)' }}>
                <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <i className="ph ph-lightbulb text-brand-dark"></i>
                    </div>
                    <span className="text-xs font-medium bg-white px-3 py-1 rounded-full shadow-sm">This Year</span>
                </div>
                <div>
                    <h3 className="text-4xl md:text-5xl font-serif text-brand-dark mb-2">+83%</h3>
                    <p className="text-sm font-medium text-brand-dark mb-4">Wellness Improvement</p>
                    <p className="text-xs text-gray-500">Mental clarity and emotional peace aren't distant dreams, but real outcomes.</p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="min-w-[280px] md:min-w-[400px] h-[350px] md:h-[400px] rounded-[2rem] bg-brand-card overflow-hidden snap-center grid grid-rows-[auto_1fr]">
                <div className="p-6 md:p-8 pb-0">
                    <h3 className="text-2xl font-serif text-brand-dark mb-1">Expert Care</h3>
                    <p className="text-sm text-gray-600 mb-4">Meet our Counseling Team at Soul Springs.</p>
                    <div className="flex items-center gap-5">
                        <div>
                            <h4 className="text-2xl font-serif text-brand-dark leading-none">5+</h4>
                            <p className="text-[11px] text-gray-500">Licensed Counselors</p>
                        </div>
                        <div className="w-px h-8 bg-gray-300"></div>
                        <div>
                            <h4 className="text-2xl font-serif text-brand-dark leading-none">11+</h4>
                            <p className="text-[11px] text-gray-500">Years of Experience</p>
                        </div>
                    </div>
                </div>
                <div className="relative mt-4">
                    <img src="/images/1551836022.webp" className="w-full h-full object-cover object-top rounded-t-[2rem]" alt="Counselor" />
                </div>
            </div>
        </div>
    </section>
  );
}
