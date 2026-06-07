import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    name: 'Sarah Larson',
    role: 'Anxiety Recovery',
    avatar: '/images/1438761681033.webp',
    text: '"Life-changing. After years of battling anxiety, I finally sought help — and I am so grateful I did. My counselor was incredibly kind and supportive."',
    stars: 5,
  },
  {
    name: 'Marcus Lane',
    role: 'Online Therapy Client',
    avatar: '/images/1500648767791.webp',
    text: '"The online sessions made it so easy to get help without stepping out of my comfort zone. I felt just as connected and cared for."',
    stars: 5,
  },
  {
    name: 'Hannah Mitchell',
    role: 'Grief Counseling',
    avatar: '/images/1544005313.webp',
    text: '"After losing my father, I struggled deeply. My grief therapist helped me find space for the pain, without letting it define me."',
    stars: 5,
  },
  {
    name: 'Daniel F.',
    role: 'Relationship Support',
    avatar: '/images/1507003211169.webp',
    text: '"I was going through a difficult breakup. Counseling gave me the tools to heal. I felt safe, respected, and heard from day one."',
    stars: 5,
  },
  {
    name: 'Amelia Chen',
    role: 'Stress Management',
    avatar: '/images/1534528741775.webp',
    text: '"I didn\'t realize how much stress was affecting my health until I started therapy. Now I have real tools to manage it. Thank you, Soul Springs."',
    stars: 5,
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.testi-item');
      if (items.length) {
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-brand-bg overflow-hidden">
        <div className="py-16 sm:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-16 testi-item">
                <div className="text-center md:text-left">
                    <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent bg-brand-accent/10 px-4 py-1.5 rounded-full mb-4 inline-block">Client Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-brand-dark max-w-lg mt-3">
                        Hear From Those<br/>We've Helped
                    </h2>
                </div>
                <p className="text-gray-500 text-sm mx-auto md:mx-0 max-w-xs mt-4 md:mt-0 text-center md:text-right">
                    Real stories from real clients who found healing and hope through Soul Springs.
                </p>
            </div>

            {/* Swiper Carousel */}
            <div className="testi-item">
                <Swiper
                    onSwiper={setSwiperRef}
                    modules={[Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 h-full flex flex-col">
                                {/* Stars */}
                                <div className="flex gap-1 mb-5">
                                    {[...Array(t.stars)].map((_, j) => (
                                        <i key={j} className="ph-fill ph-star text-yellow-400 text-sm"></i>
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-brand-dark text-sm md:text-base leading-relaxed flex-1 mb-6">
                                    {t.text}
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                                    <img src={t.avatar} className="w-11 h-11 rounded-full object-cover" alt={t.name} />
                                    <div>
                                        <h5 className="text-sm font-semibold text-brand-dark">{t.name}</h5>
                                        <p className="text-xs text-gray-400">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Arrows */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={() => swiperRef?.slidePrev()}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all duration-300"
                        aria-label="Previous"
                    >
                        <i className="ph ph-arrow-left text-lg"></i>
                    </button>
                    <button
                        onClick={() => swiperRef?.slideNext()}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all duration-300"
                        aria-label="Next"
                    >
                        <i className="ph ph-arrow-right text-lg"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
}
