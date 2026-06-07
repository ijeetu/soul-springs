import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from('.hero-badge', { y: 30, opacity: 0, duration: 0.8 })
              .from('.hero-heading', { y: 40, opacity: 0, duration: 1 }, '-=0.5')
              .from('.hero-sub', { y: 30, opacity: 0, duration: 0.8 }, '-=0.6')
              .from('.hero-cta', { y: 20, opacity: 0, duration: 0.7 }, '-=0.5')
              .from('.hero-features > div', { y: 15, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.4')
              .from('.hero-trust', { y: 20, opacity: 0, duration: 0.7 }, '-=0.3')
              .from('.hero-visual', { y: 60, opacity: 0, duration: 1.2, ease: 'power2.out' }, '-=1')
              .from('.hero-side-card', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)' }, '-=0.5')
              .from('.hero-stat-item', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.4');
        }, containerRef);

        const video = videoRef.current;
        if (video) {
            video.muted = true;
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    const handleClick = () => {
                        video.play();
                        document.removeEventListener('click', handleClick);
                    };
                    document.addEventListener('click', handleClick);
                });
            }
        }

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 md:px-8 max-w-[1400px] mx-auto relative overflow-hidden">

            {/* ── Main 2-Column Layout ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14 md:mb-20">

                {/* ── Left: Text Content ── */}
                <div className="text-center lg:text-left order-1">
                    <div className="hero-badge inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 px-5 py-2 rounded-full text-sm font-medium mb-6">
                        <i className="ph-fill ph-flower-lotus text-brand-accent"></i>
                        <span className="text-brand-dark">Mental Health & Wellness</span>
                    </div>

                    <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-serif leading-[1.1] mb-5 text-brand-dark tracking-tight">
                        You Don't Have to Carry <span className="italic text-brand-red">Everything</span> Alone
                    </h1>

                    <p className="hero-sub text-base md:text-lg text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        You're not alone. Soul Springs is here to help you process life's challenges and rediscover your strength—one conversation at a time.
                    </p>

                    <div className="hero-cta flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
                        <Link href="/book-appointment" className="bg-brand-dark text-white w-full sm:w-auto px-8 py-4 rounded-full font-medium hover:bg-brand-dark/90 transition-all text-center text-sm">
                            Book an Appointment
                        </Link>
                        <Link href="/services" className="group flex items-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full font-medium  transition-all text-center text-sm text-brand-dark justify-center">
                            <span className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/20 transition">
                                <i className="ph-fill ph-play text-brand-red text-xs"></i>
                            </span>
                            See How It Works
                        </Link>
                    </div>

                   
                    {/* Trust Indicators */}
                    <div className="hero-trust flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 ">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                <img src="/images/1534528741775.webp" className="w-8 h-8 rounded-full border-2 border-brand-bg object-cover" alt="Client" />
                                <img src="/images/1506794778202.webp" className="w-8 h-8 rounded-full border-2 border-brand-bg object-cover" alt="Client" />
                                <img src="/images/1544005313.webp" className="w-8 h-8 rounded-full border-2 border-brand-bg object-cover" alt="Client" />
                            </div>
                            <span className="text-sm text-gray-600">200+ happy clients</span>
                        </div>
                        <div className="hidden sm:block w-px h-5 bg-gray-300"></div>
                        <div className="flex items-center gap-1.5">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="ph-fill ph-star text-yellow-400 text-sm"></i>
                                ))}
                            </div>
                            <span className="text-sm text-gray-600 font-medium">4.9/5 rating</span>
                        </div>
                    </div>
                </div>

                {/* ── Right: Visual Section ── */}
                <div className="order-2 my-auto">
                    {/* Main Video */}
                    <div className="hero-visual relative rounded-2xl md:rounded-3xl overflow-hidden" style={{ aspectRatio: '5/4' }}>
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster="/images/1573497620053.webp"
                            src="/videos/hero.mp4"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-brand-dark/5 to-transparent pointer-events-none"></div>

                        {/* Video overlay info */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                            <div className="flex items-end justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                        <i className="ph-fill ph-flower-lotus text-white text-lg"></i>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">Guided Therapy</p>
                                        <p className="text-white/60 text-xs">Watch how we help</p>
                                    </div>
                                </div>
                                <span className="hidden sm:flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                    Live
                                </span>
                            </div>
                        </div>
                    </div>

                 
                </div>
            </div>

            {/* ── Stats Bar ── */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-10 border-t border-gray-200">
                <div className="hero-stat-item text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-serif text-brand-dark mb-1">200+</h3>
                    <p className="text-xs text-gray-500">Clients guided toward healing</p>
                </div>
                <div className="hero-stat-item text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-serif text-brand-dark mb-1">95%</h3>
                    <p className="text-xs text-gray-500">Client satisfaction rate</p>
                </div>
                <div className="hero-stat-item text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-serif text-brand-dark mb-1">11+</h3>
                    <p className="text-xs text-gray-500">Years of experience</p>
                </div>
                <div className="hero-stat-item text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-serif text-brand-dark mb-1">24/7</h3>
                    <p className="text-xs text-gray-500">Crisis support available</p>
                </div>
            </div>
        </section>
    );
}
