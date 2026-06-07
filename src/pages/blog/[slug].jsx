import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { posts } from "../../components/blog/blogData";
import BottomCTA from "../../components/home/BottomCTA";

export function getStaticPaths() {
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
}

export function getStaticProps({ params }) {
  const post = posts.find((item) => item.slug === params.slug);
  return { props: { post } };
}

export default function BlogDetail({ post }) {
  const containerRef = useRef(null);
  const otherPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.blog-detail-fade');
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>{post.title} | Soul Springs Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <main ref={containerRef}>
        <article className="pt-28 sm:pt-36 pb-16 px-4 md:px-8 max-w-[1100px] mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-dark transition mb-8 blog-detail-fade">
                <i className="ph ph-arrow-left"></i> Back to Blog
            </Link>
            <div className="text-center mb-10 blog-detail-fade">
                <span className="text-xs font-semibold text-brand-accent bg-brand-accent/10 px-4 py-1.5 rounded-full mb-5 inline-block">{post.category}</span>
                <h1 className="text-4xl md:text-6xl font-serif text-brand-dark mb-5 leading-tight">{post.title}</h1>
                <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-center gap-3 text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{post.readTime}</span>
                </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden aspect-[16/8] mb-12 blog-detail-fade">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="prose prose-lg max-w-3xl mx-auto blog-detail-fade">
                <p className="text-gray-600 leading-relaxed mb-6">
                    Healing often begins with awareness. This article explores practical ways to better understand your emotional patterns, support your nervous system, and create small rituals that bring more calm into everyday life.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                    At Soul Springs, we believe mental health care should feel approachable and deeply human. Whether you are beginning therapy, navigating stress, or learning to care for yourself more intentionally, each step matters.
                </p>
                <h2 className="text-3xl font-serif text-brand-dark mt-10 mb-4">A Gentle Place to Begin</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                    Start small. Notice what your body is telling you, pause before reacting, and practice asking for support when you need it. Growth does not need to be rushed — it only needs space and consistency.
                </p>
            </div>
        </article>

        <section className="bg-brand-bg py-16 sm:py-24 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-12 blog-detail-fade">
                    <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 bg-gray-200 px-4 py-1.5 rounded-full mb-4 inline-block">More Reads</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mt-3">Related Articles</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 blog-detail-fade">
                    {otherPosts.map((item, i) => (
                        <Link key={i} href={`/blog/${item.slug}`} className="group bg-white rounded-2xl overflow-hidden block transition-all duration-300">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-5">
                                <p className="text-xs text-brand-accent mb-2">{item.category}</p>
                                <h3 className="font-serif text-xl text-brand-dark mb-2 group-hover:text-brand-accent transition">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

        <BottomCTA
          title={<>Ready for Support<br className="hidden md:block"/> Beyond Reading?</>}
          subtitle="Book a session with our compassionate team and start your healing journey with guidance."
          primaryLabel="Book an Appointment"
          primaryHref="/book-appointment"
          secondaryLabel="View Services"
          secondaryHref="/services"
        />
      </main>
    </>
  );
}
