import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const sections = [
  {
    title: 'Information We Collect',
    content: 'We may collect information you provide directly, such as your name, email address, phone number, appointment preferences, and messages submitted through our contact forms. If you receive services from Soul Springs, additional clinical information may be collected as part of your care.',
  },
  {
    title: 'How We Use Your Information',
    content: 'We use your information to schedule appointments, respond to inquiries, provide therapy services, improve our website, send important updates, and comply with applicable legal and professional obligations.',
  },
  {
    title: 'Confidentiality of Therapy Services',
    content: 'Therapy-related information is treated with a high level of confidentiality. We only disclose such information when required by law, when necessary to protect safety, or when you provide written permission.',
  },
  {
    title: 'Cookies and Website Analytics',
    content: 'Our website may use cookies or analytics tools to understand site performance and improve user experience. These tools do not replace our commitment to protecting your sensitive health information.',
  },
  {
    title: 'Data Sharing',
    content: 'We do not sell personal information. We may share information with trusted service providers who help us operate our website or manage appointments, only as needed and with appropriate safeguards.',
  },
  {
    title: 'Your Rights',
    content: 'Depending on your location, you may have rights to access, correct, restrict, or delete certain personal information. To make a request, contact us at hello@healspace.com.',
  },
];

export default function PrivacyContent() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.privacy-section');
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
        <div className="py-16 sm:py-24 px-4 md:px-8 max-w-[1100px] mx-auto">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10">
                {sections.map((section, i) => (
                    <div key={i} className="privacy-section border-b border-gray-100 last:border-b-0 py-6 first:pt-0 last:pb-0">
                        <div className="flex items-start gap-4">
                            <div className="w-9 h-9 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center flex-shrink-0 text-sm font-medium">
                                {String(i + 1).padStart(2, '0')}
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-serif text-brand-dark mb-3">{section.title}</h2>
                                <p className="text-sm text-gray-500 leading-relaxed">{section.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
