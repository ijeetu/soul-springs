import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function ServiceBenefits() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.benefit-fade');
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
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image */}
            <div className="relative benefit-fade">
                <div className="rounded-[2rem] overflow-hidden aspect-[4/5]">
                    <img
                        src="/images/1544027993.webp"
                        alt="Therapy benefits"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-brand-dark rounded-2xl p-5 md:p-6 text-white max-w-[200px]">
                    <h4 className="text-2xl font-serif mb-1">98%</h4>
                    <p className="text-xs text-white/70">Client satisfaction rate across all services</p>
                </div>
            </div>

            {/* Right: Benefits */}
            <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent bg-brand-accent/10 px-4 py-1.5 rounded-full mb-6 inline-block benefit-fade">Why Our Services</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark mb-6 benefit-fade">
                    What Makes Our<br/>Approach Different
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 benefit-fade">
                    We don't believe in one-size-fits-all therapy. Our approach combines proven methods with genuine human connection.
                </p>

                <div className="space-y-5 benefit-fade">
                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="ph-fill ph-ear text-brand-red text-lg"></i>
                        </div>
                        <div>
                            <h4 className="font-serif text-lg text-brand-dark mb-1">You'll Feel Heard</h4>
                            <p className="text-sm text-gray-500">Our counselors listen attentively, creating a space where you can express yourself freely.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="ph-fill ph-lightning text-brand-accent text-lg"></i>
                        </div>
                        <div>
                            <h4 className="font-serif text-lg text-brand-dark mb-1">Evidence-Based Methods</h4>
                            <p className="text-sm text-gray-500">Every approach we use is backed by clinical research and adapted to your individual needs.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-xl bg-brand-dark/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="ph-fill ph-device-mobile text-brand-dark text-lg"></i>
                        </div>
                        <div>
                            <h4 className="font-serif text-lg text-brand-dark mb-1">Online & In-Person</h4>
                            <p className="text-sm text-gray-500">Choose the format that suits you — from the comfort of your home or at our calming office.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-xl bg-[#5C80A1]/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="ph-fill ph-handshake text-[#5C80A1] text-lg"></i>
                        </div>
                        <div>
                            <h4 className="font-serif text-lg text-brand-dark mb-1">Continuous Support</h4>
                            <p className="text-sm text-gray-500">Your journey doesn't end after a session — we're here for you between appointments too.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
