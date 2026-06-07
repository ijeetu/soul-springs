import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { categories, posts } from './blogData';

export default function BlogGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.blog-card');
      gsap.fromTo(items,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
          opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.08
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white">
        <div className="py-16 sm:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-14 blog-card">
                <div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 bg-gray-200 px-4 py-1.5 rounded-full mb-4 inline-block">Latest Articles</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mt-3">Explore the Journal</h2>
                </div>
                <div className="flex flex-wrap gap-2 max-w-xl md:justify-end">
                    {categories.map((category, i) => (
                        <button key={i} className={`text-xs px-4 py-2 rounded-full transition ${i === 0 ? 'bg-brand-dark text-white' : 'bg-brand-bg text-gray-500 hover:bg-brand-accent hover:text-white'}`}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {posts.map((post, i) => (
                    <Link key={i} href={`/blog/${post.slug}`} className="blog-card group bg-brand-bg rounded-2xl md:rounded-3xl overflow-hidden flex flex-col transition-all duration-300">
                        <div className="aspect-[16/10] overflow-hidden relative">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <span className="absolute top-4 left-4 text-xs font-medium bg-white/80 backdrop-blur-sm text-brand-dark px-3 py-1 rounded-full">{post.category}</span>
                        </div>
                        <div className="p-5 md:p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                                <span>{post.date}</span>
                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif text-brand-dark mb-3 leading-tight group-hover:text-brand-accent transition">{post.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                <div>
                                    <p className="text-xs text-gray-400">Written by</p>
                                    <p className="text-sm font-medium text-brand-dark">{post.author}</p>
                                </div>
                                <span className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:text-white text-brand-dark transition-all duration-300">
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
