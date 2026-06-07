import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Founder & Lead Therapist',
    specialty: 'Anxiety & Depression',
    image: '/images/1573496359142.webp',
  },
  {
    name: 'James Carter',
    role: 'Senior Counselor',
    specialty: 'Couples & Family Therapy',
    image: '/images/1507003211169.webp',
  },
  {
    name: 'Priya Sharma',
    role: 'Clinical Psychologist',
    specialty: 'Trauma & PTSD',
    image: '/images/1534528741775.webp',
  },
  {
    name: 'Daniel Okafor',
    role: 'Grief Counselor',
    specialty: 'Loss & Bereavement',
    image: '/images/1500648767791.webp',
  },
];

export default function Team() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.team-card');
      if (items.length) {
        gsap.fromTo(items,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
            opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-brand-bg">
        <div className="py-16 sm:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
                <div className="text-center md:text-left">
                    <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent bg-brand-accent/10 px-4 py-1.5 rounded-full mb-4 inline-block">Our Team</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mt-3">Meet the Counselors</h2>
                </div>
                <p className="text-gray-500 text-sm max-w-xs mt-4 md:mt-0 text-center md:text-right">
                    Experienced, licensed professionals dedicated to your mental well-being.
                </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {team.map((member, i) => (
                    <div key={i} className="team-card group">
                        <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[3/4] mb-4 relative">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <p className="text-xs bg-white/20 backdrop-blur-sm inline-block px-3 py-1 rounded-full">{member.specialty}</p>
                            </div>
                        </div>
                        <h4 className="font-serif text-lg text-brand-dark mb-0.5">{member.name}</h4>
                        <p className="text-xs text-gray-400">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
