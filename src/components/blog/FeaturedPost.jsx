import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { posts } from './blogData';

export default function FeaturedPost() {
  const containerRef = useRef(null);
  const featured = posts.find((post) => post.featured) || posts[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.featured-fade');
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
    <section ref={containerRef} className="px-4 md:px-8 max-w-[1400px] mx-auto pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-8 bg-brand-bg rounded-[2rem] md:rounded-[3rem] p-4 md:p-6 overflow-hidden featured-fade">
            <div className="rounded-2xl md:rounded-[2rem] overflow-hidden aspect-[16/10] lg:aspect-auto">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-4 md:p-8 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-5 featured-fade">
                    <span className="text-xs font-semibold text-brand-red bg-brand-red/10 px-3 py-1 rounded-full">Featured</span>
                    <span className="text-xs text-gray-400">{featured.category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-xs text-gray-400">{featured.readTime}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-4 leading-tight featured-fade">{featured.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 featured-fade">{featured.excerpt}</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 featured-fade">
                    <div>
                        <p className="text-sm font-medium text-brand-dark">{featured.author}</p>
                        <p className="text-xs text-gray-400">{featured.date}</p>
                    </div>
                    <Link href={`/blog/${featured.slug}`} className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition">
                        Read Article <i className="ph ph-arrow-up-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}
