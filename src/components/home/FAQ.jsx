import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const faqs = [
  {
    question: "1. What types of therapy do you offer?",
    answer: "We offer individual, couples, and family therapy. We also offer a free 14-day trial so you can explore the Soul Springs experience before committing to a paid plan."
  },
  {
    question: "2. Are sessions confidential?",
    answer: "Your confidentiality is our top priority. All sessions are encrypted and strictly confidential in accordance with applicable health laws."
  },
  {
    question: "3. Do I need a referral to book a session?",
    answer: "No, you do not need a medical referral to start therapy with us. You can book an appointment directly."
  },
  {
    question: "4. What if I'm not sure I need therapy?",
    answer: "It's completely normal to feel unsure. We recommend taking our 'Starter Session' for a light consultation to see if it's a good fit for you without any pressure."
  }
];

export default function FAQ() {
  const containerRef = useRef(null);
  const answerRefs = useRef([]);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.faq-item');
      if (items.length) {
        gsap.fromTo(items,
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

  useEffect(() => {
    answerRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === openIndex) {
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
  }, [openIndex]);

  const handleClick = useCallback((index) => {
    setOpenIndex(prev => prev === index ? -1 : index);
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="faq-item text-center md:text-left">
                <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 bg-gray-200 px-4 py-1 rounded-full mb-4 inline-block">FAQ</span>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-4">Your Questions Answered</h2>
                <p className="text-gray-500 text-sm">Everything you need to know before starting your journey with us.</p>
            </div>

            <div className="space-y-0 faq-item">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200">
                      <button
                        onClick={() => handleClick(index)}
                        className="w-full flex justify-between items-center py-5 md:py-6 text-left focus:outline-none"
                      >
                          <span className="font-serif text-lg md:text-xl text-brand-dark pr-4">{faq.question}</span>
                          <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-brand-dark border-brand-dark text-white' : 'text-brand-dark'}`}>
                              <i className="ph ph-caret-down text-sm"></i>
                          </span>
                      </button>
                      <div
                        ref={el => answerRefs.current[index] = el}
                        className="overflow-hidden"
                        style={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                      >
                          <p className="text-gray-500 text-sm pb-5 md:pb-6 leading-relaxed pr-12">
                              {faq.answer}
                          </p>
                      </div>
                  </div>
                ))}
            </div>
        </div>
    </section>
  );
}
