import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const plans = [
  { name: 'Starter Session', desc: 'Perfect for those trying therapy for the first time.', monthly: 49, yearly: 40, popular: false },
  { name: 'Growth Session', desc: 'Ongoing support for personal development and recovery.', monthly: 89, yearly: 70, popular: true },
  { name: 'Complete Session', desc: 'For those who need intensive and comprehensive support.', monthly: 229, yearly: 200, popular: false },
];

const features = [
  'Dedicated therapist',
  'Online or in-person',
  'Personalized goal-setting',
  'Access to client portal',
];

export default function Pricing() {
  const containerRef = useRef(null);
  const priceRefs = useRef([]);
  const [isYearly, setIsYearly] = useState(false);

  const animateCounter = useCallback((el, target) => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 1,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = '$' + Math.round(obj.val);
      }
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.price-fade');
      if (items.length) {
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              onEnter: () => {
                priceRefs.current.forEach((el, i) => {
                  if (el) animateCounter(el, plans[i].monthly);
                });
              }
            },
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, [animateCounter]);

  const handleToggle = () => {
    const newIsYearly = !isYearly;
    setIsYearly(newIsYearly);
    priceRefs.current.forEach((el, i) => {
      if (el) {
        const target = newIsYearly ? plans[i].yearly : plans[i].monthly;
        const current = parseInt(el.textContent.replace('$', '')) || 0;
        const obj = { val: current };
        gsap.to(obj, {
          val: target,
          duration: 0.8,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = '$' + Math.round(obj.val);
          }
        });
      }
    });
  };

  return (
    <section ref={containerRef} className="py-16 sm:py-20 px-4 md:px-8 max-w-[1400px] mx-auto text-center">
        <span className="text-xs font-semibold tracking-wider uppercase text-brand-red bg-brand-red/10 px-4 py-1 rounded-full mb-4 inline-block price-fade">Therapy Pricing</span>
        <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-8 md:mb-10 price-fade">Simple & Transparent Pricing</h2>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12 md:mb-16 price-fade">
            <span className={`text-sm font-medium transition-colors duration-300 ${!isYearly ? 'text-brand-dark' : 'text-gray-400'}`}>Monthly</span>
            <button 
                onClick={handleToggle}
                className={`w-12 h-6 rounded-full relative transition-colors duration-300 focus:outline-none ${isYearly ? 'bg-brand-dark' : 'bg-brand-red'}`}
            >
                <span className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ${isYearly ? 'translate-x-6' : ''}`}></span>
            </button>
            <span className={`text-sm font-medium transition-colors duration-300 ${isYearly ? 'text-brand-dark' : 'text-gray-400'}`}>Yearly</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left price-fade">
            {plans.map((plan, i) => (
                <div key={i} className={`rounded-3xl p-6 md:p-8 relative ${plan.popular ? 'bg-white  border border-gray-100 md:-translate-y-4' : 'bg-brand-bg border border-gray-200'}`}>
                    {plan.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-dark text-white px-4 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                            Most Popular
                        </div>
                    )}
                    <h3 className={`text-xl font-serif text-brand-dark mb-2 ${plan.popular ? 'mt-2 md:mt-0' : ''}`}>{plan.name}</h3>
                    <p className="text-xs text-gray-500 mb-6 min-h-[40px]">{plan.desc}</p>
                    <div className="mb-8">
                        <span
                            ref={el => priceRefs.current[i] = el}
                            className="text-4xl md:text-5xl font-serif text-brand-dark"
                        >
                            ${isYearly ? plan.yearly : plan.monthly}
                        </span>
                        <span className="text-gray-500">/session</span>
                    </div>
                    <ul className="space-y-3 mb-8 text-sm text-gray-600">
                        {features.map((f, j) => (
                            <li key={j} className="flex items-center gap-2">
                                <i className="ph-fill ph-check-circle text-brand-red"></i> {f}
                            </li>
                        ))}
                    </ul>
                    <button className={`w-full py-3 rounded-full font-medium hover:bg-opacity-90 transition ${plan.popular ? 'bg-brand-accent text-white' : 'bg-brand-dark text-white'}`}>
                        Book Your Session
                    </button>
                </div>
            ))}
        </div>
    </section>
  );
}
