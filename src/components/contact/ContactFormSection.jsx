import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function ContactFormSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.contact-form-fade');
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
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-12 items-start">
                <div className="contact-form-fade">
                    <span className="text-xs font-semibold tracking-wider uppercase text-brand-red bg-brand-red/10 px-4 py-1.5 rounded-full mb-6 inline-block">Send a Message</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-5 leading-tight">Let's Find the Right Support Together</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">Share a little about what you're looking for and our care team will respond within one business day.</p>
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] hidden lg:block">
                        <img src="/images/1573497620053.webp" alt="Counseling room" className="w-full h-full object-cover" />
                    </div>
                </div>

                <form className="contact-form-fade bg-white rounded-[2rem] p-5 md:p-8 shadow-sm">
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <input type="text" placeholder="First name" className="bg-brand-bg px-5 py-4 rounded-2xl outline-none text-sm text-brand-dark placeholder:text-gray-400" />
                        <input type="text" placeholder="Last name" className="bg-brand-bg px-5 py-4 rounded-2xl outline-none text-sm text-brand-dark placeholder:text-gray-400" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <input type="email" placeholder="Email address" className="bg-brand-bg px-5 py-4 rounded-2xl outline-none text-sm text-brand-dark placeholder:text-gray-400" />
                        <input type="tel" placeholder="Phone number" className="bg-brand-bg px-5 py-4 rounded-2xl outline-none text-sm text-brand-dark placeholder:text-gray-400" />
                    </div>
                    <select className="w-full bg-brand-bg px-5 py-4 rounded-2xl outline-none text-sm text-gray-500 mb-4">
                        <option>What service are you interested in?</option>
                        <option>Individual Therapy</option>
                        <option>Couples Counseling</option>
                        <option>Family Therapy</option>
                        <option>Stress & Anxiety Management</option>
                    </select>
                    <textarea rows="6" placeholder="Tell us how we can help..." className="w-full bg-brand-bg px-5 py-4 rounded-2xl outline-none text-sm text-brand-dark placeholder:text-gray-400 mb-5 resize-none"></textarea>
                    <button type="button" className="w-full sm:w-auto bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-opacity-90 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
  );
}
