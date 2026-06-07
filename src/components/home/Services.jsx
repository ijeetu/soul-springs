import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.svc-item');
      if (items.length) {
        gsap.set(items, { opacity: 1, y: 0 });
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
            },
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.1
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white">
        <div className="py-16 sm:py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 svc-item">
                <h2 className="text-3xl md:text-5xl font-serif text-brand-dark">How we help<br className="hidden md:block"/> you heal</h2>
                <Link href="/services" className="w-full md:w-auto text-center bg-brand-card text-brand-dark px-6 py-3 rounded-full text-sm font-medium hover:bg-brand-dark hover:text-white transition mt-6 md:mt-0">
                    View All Services
                </Link>
            </div>

            <div className="border-t border-gray-200">
                {/* Service Item 1 */}
                <Link href="/services/individual-therapy" className="group border-b border-gray-200 py-6 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-brand-bg transition duration-300 md:px-4 cursor-pointer svc-item">
                    <div className="flex items-center gap-4 w-full md:w-1/3 mb-4 md:mb-0">
                        <i className="ph-fill ph-flower-lotus text-brand-red text-2xl"></i>
                        <h3 className="text-xl md:text-2xl font-serif text-brand-dark">Individual Therapy</h3>
                    </div>
                    <p className="text-gray-500 w-full md:w-1/2 text-sm">Personalized one-on-one sessions to help you manage anxiety, depression, stress, or life transitions in a safe space.</p>
                    <div className="hidden md:flex w-12 h-12 rounded-full border border-gray-300 items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:text-white transition duration-300">
                        <i className="ph ph-arrow-up-right"></i>
                    </div>
                    <div className="md:hidden mt-4 text-brand-accent flex items-center gap-2 text-sm font-medium">
                        Learn more <i className="ph ph-arrow-right"></i>
                    </div>
                </Link>

                {/* Service Item 2 */}
                <Link href="/services/couples-counseling" className="group border-b border-gray-200 py-6 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between bg-brand-bg md:px-4 cursor-pointer svc-item p-4 md:p-0 rounded-lg md:rounded-none">
                    <div className="flex items-center gap-4 w-full md:w-1/3 mb-4 md:mb-0">
                        <i className="ph-fill ph-flower-lotus text-brand-accent text-2xl"></i>
                        <h3 className="text-xl md:text-2xl font-serif text-brand-dark">Couples Counseling</h3>
                    </div>
                    <p className="text-gray-500 w-full md:w-1/2 text-sm">Strengthen communication, rebuild trust, and navigate relationship challenges with the help of an experienced counselor.</p>
                    <div className="hidden md:flex w-12 h-12 rounded-full items-center justify-center bg-brand-accent text-white transition duration-300">
                        <i className="ph ph-arrow-right"></i>
                    </div>
                    <div className="md:hidden mt-4 text-brand-dark flex items-center gap-2 text-sm font-medium">
                        Learn more <i className="ph ph-arrow-right"></i>
                    </div>
                </Link>

                {/* Service Item 3 */}
                <Link href="/services/family-therapy" className="group border-b border-gray-200 py-6 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-brand-bg transition duration-300 md:px-4 cursor-pointer svc-item">
                    <div className="flex items-center gap-4 w-full md:w-1/3 mb-4 md:mb-0">
                        <i className="ph-fill ph-plant text-brand-red text-2xl"></i>
                        <h3 className="text-xl md:text-2xl font-serif text-brand-dark">Family Therapy</h3>
                    </div>
                    <p className="text-gray-500 w-full md:w-1/2 text-sm">Support for families navigating conflict, change, or emotional struggles — creating healthier, more connected relationships.</p>
                    <div className="hidden md:flex w-12 h-12 rounded-full border border-gray-300 items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:text-white transition duration-300">
                        <i className="ph ph-arrow-up-right"></i>
                    </div>
                    <div className="md:hidden mt-4 text-brand-accent flex items-center gap-2 text-sm font-medium">
                        Learn more <i className="ph ph-arrow-right"></i>
                    </div>
                </Link>

                {/* Service Item 4 */}
                <Link href="/services/stress-anxiety-management" className="group border-b border-gray-200 py-6 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-brand-bg transition duration-300 md:px-4 cursor-pointer svc-item">
                    <div className="flex items-center gap-4 w-full md:w-1/3 mb-4 md:mb-0">
                        <i className="ph-fill ph-brain text-brand-red text-2xl"></i>
                        <h3 className="text-xl md:text-2xl font-serif text-brand-dark">Stress & Anxiety Management</h3>
                    </div>
                    <p className="text-gray-500 w-full md:w-1/2 text-sm">Learn practical coping techniques and mindfulness strategies to manage everyday stress, anxiety, and overwhelming emotions.</p>
                    <div className="hidden md:flex w-12 h-12 rounded-full border border-gray-300 items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:text-white transition duration-300">
                        <i className="ph ph-arrow-up-right"></i>
                    </div>
                    <div className="md:hidden mt-4 text-brand-accent flex items-center gap-2 text-sm font-medium">
                        Learn more <i className="ph ph-arrow-right"></i>
                    </div>
                </Link>
            </div>
        </div>
    </section>
  );
}
