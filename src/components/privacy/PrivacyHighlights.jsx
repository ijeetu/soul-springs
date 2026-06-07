import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const highlights = [
  {
    icon: 'ph-lock-key',
    title: 'Secure Data',
    desc: 'We use safeguards designed to protect sensitive information from unauthorized access.',
  },
  {
    icon: 'ph-user-circle-check',
    title: 'Your Control',
    desc: 'You may request access, correction, or deletion of eligible personal information.',
  },
  {
    icon: 'ph-hand-heart',
    title: 'No Selling',
    desc: 'We do not sell your personal health information or therapy-related data.',
  },
];

export default function PrivacyHighlights() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.privacy-card');
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="px-4 md:px-8 max-w-[1400px] mx-auto pb-16 sm:pb-20">
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {highlights.map((item, i) => (
                <div key={i} className="privacy-card bg-brand-bg rounded-2xl md:rounded-3xl p-6 md:p-8">
                    <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-5">
                        <i className={`ph-fill ${item.icon} text-brand-accent text-xl`}></i>
                    </div>
                    <h3 className="font-serif text-xl text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
    </section>
  );
}
