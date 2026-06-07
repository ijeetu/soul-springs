import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const services = [
  {
    slug: 'individual-therapy',
    icon: 'ph-flower-lotus',
    title: 'Individual Therapy',
    desc: 'Personalized one-on-one sessions to help you manage anxiety, depression, stress, or life transitions in a safe space.',
    details: [
      'Cognitive Behavioral Therapy (CBT)',
      'Mindfulness-based approaches',
      'Goal-setting and progress tracking',
      'Flexible scheduling (online & in-person)',
    ],
    color: 'text-brand-red',
    bg: 'bg-brand-red/10',
    image: '/images/1573497620053.webp',
  },
  {
    slug: 'couples-counseling',
    icon: 'ph-heart',
    title: 'Couples Counseling',
    desc: 'Strengthen communication, rebuild trust, and navigate relationship challenges with the help of an experienced counselor.',
    details: [
      'Communication improvement techniques',
      'Conflict resolution strategies',
      'Rebuilding trust after setbacks',
      'Pre-marital counseling available',
    ],
    color: 'text-brand-accent',
    bg: 'bg-brand-accent/10',
    image: '/images/1516589178581.webp',
  },
  {
    slug: 'family-therapy',
    icon: 'ph-users-three',
    title: 'Family Therapy',
    desc: 'Support for families navigating conflict, change, or emotional struggles — creating healthier, more connected relationships.',
    details: [
      'Improving family communication',
      'Managing generational trauma',
      'Parenting support and guidance',
      'Blended family dynamics',
    ],
    color: 'text-[#3D5A47]',
    bg: 'bg-[#3D5A47]/10',
    image: '/images/1544027993.webp',
  },
  {
    slug: 'stress-anxiety-management',
    icon: 'ph-brain',
    title: 'Stress & Anxiety Management',
    desc: 'Learn practical coping techniques and mindfulness strategies to manage everyday stress, anxiety, and overwhelming emotions.',
    details: [
      'Breathing and grounding exercises',
      'Stress reduction techniques',
      'Anxiety management plans',
      'Mindfulness and meditation practices',
    ],
    color: 'text-brand-dark',
    bg: 'bg-brand-dark/10',
    image: '/images/1506126613408.webp',
  },
  {
    slug: 'grief-loss-support',
    icon: 'ph-cloud-rain',
    title: 'Grief & Loss Support',
    desc: 'Compassionate guidance to help you process loss, navigate grief, and find meaning in the healing journey.',
    details: [
      'Individual grief counseling',
      'Support for sudden or anticipated loss',
      'Coping with life after loss',
      'Group grief support sessions',
    ],
    color: 'text-[#5C80A1]',
    bg: 'bg-[#5C80A1]/10',
    image: '/images/1545205597.webp',
  },
  {
    slug: 'trauma-ptsd-recovery',
    icon: 'ph-shield-check',
    title: 'Trauma & PTSD Recovery',
    desc: 'Evidence-based trauma therapy to help you reclaim your life and build lasting resilience after difficult experiences.',
    details: [
      'EMDR (Eye Movement Desensitization)',
      'Trauma-focused CBT',
      'Somatic experiencing',
      'Safety planning and stabilization',
    ],
    color: 'text-brand-red',
    bg: 'bg-brand-red/10',
    image: '/images/1559757175.webp',
  },
];

export default function ServicesList() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.svc-card');
      if (items.length) {
        gsap.fromTo(items,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
            opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.08
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white">
        <div className="py-16 sm:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 svc-card">
                <div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 bg-gray-200 px-4 py-1.5 rounded-full mb-4 inline-block">What We Offer</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mt-3">Our Therapy Services</h2>
                </div>
                <p className="text-gray-500 text-sm max-w-sm mt-4 md:mt-0">
                    Explore our range of services and find the right support for your journey.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {services.map((svc, i) => (
                    <Link
                        key={i}
                        href={`/services/${svc.slug}`}
                        className="svc-card group relative bg-brand-bg rounded-2xl md:rounded-3xl overflow-hidden flex flex-col  transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="aspect-[16/10] overflow-hidden">
                            <img
                                src={svc.image}
                                alt={svc.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 md:p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`w-9 h-9 rounded-lg ${svc.bg} flex items-center justify-center flex-shrink-0`}>
                                    <i className={`ph-fill ${svc.icon} ${svc.color} text-base`}></i>
                                </div>
                                <h3 className="text-lg md:text-xl font-serif text-brand-dark">{svc.title}</h3>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{svc.desc}</p>

                            {/* Features preview */}
                            <ul className="space-y-2 mb-5">
                                {svc.details.slice(0, 2).map((d, j) => (
                                    <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                                        <i className={`ph-fill ph-check-circle ${svc.color} flex-shrink-0`}></i>
                                        {d}
                                    </li>
                                ))}
                            </ul>

                            {/* Link */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                <span className="text-sm font-medium text-brand-dark group-hover:text-brand-accent transition">
                                    Learn More
                                </span>
                                <span className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:text-white text-brand-dark transition-all duration-300">
                                    <i className="ph ph-arrow-up-right text-sm"></i>
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  );
}
