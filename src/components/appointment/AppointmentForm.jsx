import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function AppointmentForm() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.appointment-form-fade');
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
    <section ref={containerRef} className="py-16 sm:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-12 items-start">
            <div className="appointment-form-fade">
                <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 bg-gray-200 px-4 py-1.5 rounded-full mb-6 inline-block">Request Form</span>
                <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-5 leading-tight">Tell Us What You Need</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">This form helps us understand your goals and availability before your first session. We'll contact you to confirm the final schedule.</p>
                <div className="bg-brand-dark rounded-[2rem] p-6 md:p-8 text-white">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                            <i className="ph-fill ph-lock-key text-brand-accent"></i>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl">Private & Secure</h3>
                            <p className="text-xs text-white/60">Your information is handled with care.</p>
                        </div>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">Please do not use this form for emergencies. If you are in immediate danger, contact local emergency services.</p>
                </div>
            </div>

            <form className="appointment-form-fade bg-brand-bg rounded-[2rem] md:rounded-[3rem] p-5 md:p-8">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="First name" className="bg-white px-5 py-4 rounded-2xl outline-none text-sm text-brand-dark placeholder:text-gray-400" />
                    <input type="text" placeholder="Last name" className="bg-white px-5 py-4 rounded-2xl outline-none text-sm text-brand-dark placeholder:text-gray-400" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <input type="email" placeholder="Email address" className="bg-white px-5 py-4 rounded-2xl outline-none text-sm text-brand-dark placeholder:text-gray-400" />
                    <input type="tel" placeholder="Phone number" className="bg-white px-5 py-4 rounded-2xl outline-none text-sm text-brand-dark placeholder:text-gray-400" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <select className="bg-white px-5 py-4 rounded-2xl outline-none text-sm text-gray-500">
                        <option>Preferred service</option>
                        <option>Individual Therapy</option>
                        <option>Couples Counseling</option>
                        <option>Family Therapy</option>
                        <option>Stress & Anxiety Management</option>
                    </select>
                    <select className="bg-white px-5 py-4 rounded-2xl outline-none text-sm text-gray-500">
                        <option>Session format</option>
                        <option>Online</option>
                        <option>In-person</option>
                        <option>No preference</option>
                    </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <input type="date" className="bg-white px-5 py-4 rounded-2xl outline-none text-sm text-gray-500" />
                    <select className="bg-white px-5 py-4 rounded-2xl outline-none text-sm text-gray-500">
                        <option>Preferred time</option>
                        <option>Morning</option>
                        <option>Afternoon</option>
                        <option>Evening</option>
                    </select>
                </div>
                <textarea rows="5" placeholder="Briefly share what brings you here..." className="w-full bg-white px-5 py-4 rounded-2xl outline-none text-sm text-brand-dark placeholder:text-gray-400 mb-5 resize-none"></textarea>
                <button type="button" className="w-full sm:w-auto bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-opacity-90 transition">
                    Submit Appointment Request
                </button>
            </form>
        </div>
    </section>
  );
}
