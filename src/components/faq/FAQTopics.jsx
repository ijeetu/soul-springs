import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const topics = [
  { icon: 'ph-calendar-check', title: 'Booking', desc: 'Appointments, rescheduling, and first sessions.' },
  { icon: 'ph-shield-check', title: 'Privacy', desc: 'Confidentiality, records, and data protection.' },
  { icon: 'ph-heart', title: 'Therapy', desc: 'Services, formats, and what to expect.' },
  { icon: 'ph-credit-card', title: 'Payments', desc: 'Pricing, insurance, and payment options.' },
];

export default function FAQTopics() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.topic-card');
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-brand-bg">
        <div className="py-16 sm:py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="text-center mb-10 topic-card">
                <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 bg-gray-200 px-4 py-1.5 rounded-full mb-4 inline-block">Popular Topics</span>
                <h2 className="text-3xl md:text-5xl font-serif text-brand-dark">Browse by Category</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                {topics.map((topic, i) => (
                    <div key={i} className="topic-card bg-white rounded-2xl p-6 md:p-7">
                        <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-5">
                            <i className={`ph-fill ${topic.icon} text-brand-accent text-lg`}></i>
                        </div>
                        <h3 className="font-serif text-xl text-brand-dark mb-2">{topic.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{topic.desc}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-10 topic-card">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-dark text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-opacity-90 transition">
                    Contact Support <i className="ph ph-arrow-up-right"></i>
                </Link>
            </div>
        </div>
    </section>
  );
}
