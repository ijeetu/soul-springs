import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const faqGroups = [
  {
    title: 'Getting Started',
    faqs: [
      {
        question: 'Do I need a referral to start therapy?',
        answer: 'No referral is required. You can book directly through our contact form or appointment request button.',
      },
      {
        question: 'What happens during the first session?',
        answer: 'Your first session focuses on understanding your goals, concerns, history, and preferences so we can create a supportive care plan.',
      },
      {
        question: 'How do I know which service is right for me?',
        answer: 'If you are unsure, we recommend a free consultation. Our care team can guide you toward individual, couples, family, or specialized support.',
      },
    ],
  },
  {
    title: 'Therapy & Sessions',
    faqs: [
      {
        question: 'Are sessions confidential?',
        answer: 'Yes. Confidentiality is central to therapy. Information is only shared when required by law, for safety reasons, or with your written permission.',
      },
      {
        question: 'Do you offer online therapy?',
        answer: 'Yes. Soul Springs offers both online and in-person sessions so you can choose the format that feels most comfortable and accessible.',
      },
      {
        question: 'How often should I attend therapy?',
        answer: 'Most clients begin weekly or bi-weekly. Your therapist will help you choose a rhythm based on your goals and current needs.',
      },
    ],
  },
  {
    title: 'Pricing & Policies',
    faqs: [
      {
        question: 'Can I reschedule an appointment?',
        answer: 'Yes. Please contact us at least 24 hours before your session so we can help you find another time.',
      },
      {
        question: 'Do you accept insurance?',
        answer: 'Coverage may vary. Contact our team with your insurance details and we can help you understand available options.',
      },
      {
        question: 'What if I am in crisis?',
        answer: 'Soul Springs is not an emergency service. If you are in immediate danger, please call your local emergency number or crisis hotline right away.',
      },
    ],
  },
];

export default function FAQAccordion() {
  const containerRef = useRef(null);
  const answerRefs = useRef({});
  const [openKey, setOpenKey] = useState('0-0');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.faq-page-item');
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.06
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    Object.entries(answerRefs.current).forEach(([key, el]) => {
      if (!el) return;
      if (key === openKey) {
        gsap.set(el, { height: 'auto', opacity: 1 });
        const h = el.offsetHeight;
        gsap.fromTo(el,
          { height: 0, opacity: 0 },
          { height: h, opacity: 1, duration: 0.4, ease: 'power3.out' }
        );
      } else {
        gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: 'power3.in' });
      }
    });
  }, [openKey]);

  const handleClick = useCallback((key) => {
    setOpenKey(prev => prev === key ? '' : key);
  }, []);

  return (
    <section ref={containerRef} className="px-4 md:px-8 max-w-[1200px] mx-auto pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-[0.35fr_0.65fr] gap-8 md:gap-12">
            <div className="faq-page-item">
                <div className="sticky top-28 bg-brand-bg rounded-[2rem] p-6 md:p-8">
                    <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent bg-brand-accent/10 px-4 py-1.5 rounded-full mb-5 inline-block">Support Center</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-4">Still Have Questions?</h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">If you cannot find the answer here, our team is always happy to help.</p>
                    <a href="mailto:hello@healspace.com" className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent hover:text-brand-dark transition">
                        Email Us <i className="ph ph-arrow-right"></i>
                    </a>
                </div>
            </div>

            <div className="space-y-10">
                {faqGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="faq-page-item">
                        <h3 className="text-2xl font-serif text-brand-dark mb-4">{group.title}</h3>
                        <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden">
                            {group.faqs.map((faq, faqIndex) => {
                                const key = `${groupIndex}-${faqIndex}`;
                                return (
                                    <div key={key} className="border-b border-gray-100 last:border-b-0">
                                        <button onClick={() => handleClick(key)} className="w-full flex justify-between items-center py-5 md:py-6 px-5 md:px-7 text-left focus:outline-none">
                                            <span className="font-serif text-lg md:text-xl text-brand-dark pr-4">{faq.question}</span>
                                            <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-transform duration-300 ${openKey === key ? 'rotate-180 bg-brand-dark border-brand-dark text-white' : 'text-brand-dark'}`}>
                                                <i className="ph ph-caret-down text-sm"></i>
                                            </span>
                                        </button>
                                        <div ref={el => answerRefs.current[key] = el} className="overflow-hidden" style={{ height: openKey === key ? 'auto' : 0, opacity: openKey === key ? 1 : 0 }}>
                                            <p className="text-gray-500 text-sm pb-5 md:pb-6 px-5 md:px-7 leading-relaxed pr-12">{faq.answer}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
