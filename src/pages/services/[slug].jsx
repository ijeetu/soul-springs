import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { services } from "../../components/services/ServicesList";
import BottomCTA from "../../components/home/BottomCTA";

const extendedData = {
  'individual-therapy': {
    longDesc: 'Individual therapy at Soul Springs is a deeply personal experience. In a safe, confidential setting, you will work one-on-one with a licensed therapist to explore your thoughts, feelings, and behaviors. Together, you will develop strategies to manage challenges like anxiety, depression, stress, and life transitions.',
    benefits: [
      'Build self-awareness and emotional intelligence',
      'Develop healthy coping mechanisms',
      'Process past experiences and trauma',
      'Improve relationships and communication skills',
      'Set meaningful goals and track progress',
    ],
    approach: 'We use evidence-based approaches including Cognitive Behavioral Therapy (CBT), mindfulness practices, and person-centered therapy. Each session is tailored to your unique needs and pace.',
    duration: '50-minute sessions',
    frequency: 'Weekly or bi-weekly',
  },
  'couples-counseling': {
    longDesc: 'Couples counseling at Soul Springs helps partners strengthen their bond, improve communication, and navigate challenges together. Whether you are facing conflict, rebuilding trust, or preparing for marriage, our experienced counselors provide a safe space for both partners to be heard.',
    benefits: [
      'Improve communication and active listening',
      'Resolve recurring conflicts constructively',
      'Rebuild trust and emotional intimacy',
      'Navigate major life transitions together',
      'Develop a stronger, more resilient partnership',
    ],
    approach: 'Our counselors use Emotionally Focused Therapy (EFT) and Gottman Method techniques to help couples identify patterns, express needs, and build lasting connection.',
    duration: '75-minute sessions',
    frequency: 'Weekly or bi-weekly',
  },
  'family-therapy': {
    longDesc: 'Family therapy at Soul Springs addresses the dynamics that shape your family relationships. We help families work through conflict, improve communication, and build stronger connections — whether you are dealing with behavioral issues, blended family challenges, or generational patterns.',
    benefits: [
      'Improve family communication patterns',
      'Resolve ongoing family conflicts',
      'Support children and adolescents through challenges',
      'Navigate divorce, separation, or blended families',
      'Break unhealthy generational cycles',
    ],
    approach: 'We utilize structural and systemic family therapy approaches, adapting techniques to each family\'s unique situation and cultural background.',
    duration: '60-90 minute sessions',
    frequency: 'Weekly or bi-weekly',
  },
  'stress-anxiety-management': {
    longDesc: 'Our stress and anxiety management program equips you with practical tools and techniques to manage overwhelming emotions. Through guided sessions, you will learn to identify triggers, develop coping strategies, and cultivate a calmer, more balanced life.',
    benefits: [
      'Identify and manage anxiety triggers',
      'Learn breathing and grounding techniques',
      'Build a personalized stress management toolkit',
      'Improve sleep and daily functioning',
      'Develop long-term resilience against stress',
    ],
    approach: 'We combine CBT with mindfulness-based stress reduction (MBSR), relaxation techniques, and lifestyle adjustments for a holistic approach to anxiety management.',
    duration: '50-minute sessions',
    frequency: 'Weekly',
  },
  'grief-loss-support': {
    longDesc: 'Grieving is a deeply personal process, and there is no right or wrong way to do it. Our grief counselors provide compassionate, non-judgmental support to help you navigate loss — whether it is the death of a loved one, the end of a relationship, or any significant life change.',
    benefits: [
      'Process grief at your own pace',
      'Understand the stages and emotions of grief',
      'Find meaning and purpose after loss',
      'Develop healthy coping strategies',
      'Connect with supportive community resources',
    ],
    approach: 'We use grief-focused therapy integrating narrative therapy, meaning-making approaches, and supportive counseling to honor your unique grieving process.',
    duration: '50-minute sessions',
    frequency: 'Weekly or as needed',
  },
  'trauma-ptsd-recovery': {
    longDesc: 'Trauma can affect every aspect of your life — your relationships, your work, your sense of self. Our trauma-informed therapists specialize in helping you process traumatic experiences safely and build lasting resilience through evidence-based treatment approaches.',
    benefits: [
      'Process traumatic memories in a safe environment',
      'Reduce PTSD symptoms like flashbacks and hypervigilance',
      'Rebuild a sense of safety and trust',
      'Develop healthy emotional regulation skills',
      'Reclaim your life and sense of identity',
    ],
    approach: 'We offer EMDR (Eye Movement Desensitization and Reprocessing), trauma-focused CBT, and somatic experiencing — proven methods for trauma recovery.',
    duration: '60-minute sessions',
    frequency: 'Weekly',
  },
};

export function getStaticPaths() {
  const paths = services.map((svc) => ({
    params: { slug: svc.slug },
  }));
  return { paths, fallback: false };
}

export function getStaticProps({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  const extended = extendedData[params.slug] || {};
  return {
    props: {
      service: {
        ...service,
        ...extended,
      },
    },
  };
}

export default function ServiceDetail({ service }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.detail-fade');
      if (items.length) {
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Head>
        <title>{service.title} | Soul Springs Services</title>
        <meta name="description" content={service.desc} />
      </Head>
      <main ref={containerRef}>
        {/* Hero */}
        <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="mb-8 detail-fade">
                <Link href="/services" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-dark transition mb-6">
                    <i className="ph ph-arrow-left"></i> Back to Services
                </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div>
                    <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 detail-fade`}>
                        <i className={`ph-fill ${service.icon} ${service.color} text-2xl`}></i>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark mb-6 leading-tight detail-fade">
                        {service.title}
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 detail-fade">
                        {service.longDesc || service.desc}
                    </p>
                    <div className="flex flex-wrap gap-4 detail-fade">
                        <div className="bg-brand-bg rounded-xl px-5 py-3">
                            <p className="text-xs text-gray-400 mb-0.5">Duration</p>
                            <p className="text-sm font-medium text-brand-dark">{service.duration || '50 min'}</p>
                        </div>
                        <div className="bg-brand-bg rounded-xl px-5 py-3">
                            <p className="text-xs text-gray-400 mb-0.5">Frequency</p>
                            <p className="text-sm font-medium text-brand-dark">{service.frequency || 'Weekly'}</p>
                        </div>
                        <div className="bg-brand-bg rounded-xl px-5 py-3">
                            <p className="text-xs text-gray-400 mb-0.5">Format</p>
                            <p className="text-sm font-medium text-brand-dark">Online & In-Person</p>
                        </div>
                    </div>
                </div>
                <div className="detail-fade">
                    <div className="rounded-[2rem] overflow-hidden aspect-[4/3]">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>

        {/* Benefits + Approach */}
        <section className="bg-brand-bg">
            <div className="py-16 sm:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                    {/* Benefits */}
                    <div className="detail-fade">
                        <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent bg-brand-accent/10 px-4 py-1.5 rounded-full mb-6 inline-block">Benefits</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">How This Helps You</h2>
                        <ul className="space-y-4">
                            {(service.benefits || service.details || []).map((b, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                    <i className={`ph-fill ph-check-circle ${service.color} mt-0.5 flex-shrink-0`}></i>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Approach */}
                    <div className="detail-fade">
                        <span className="text-xs font-semibold tracking-wider uppercase text-brand-red bg-brand-red/10 px-4 py-1.5 rounded-full mb-6 inline-block">Our Approach</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">What to Expect</h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8">
                            {service.approach || 'Our therapists use evidence-based methods tailored to your unique needs.'}
                        </p>

                        <div className="bg-white rounded-2xl p-6 md:p-8">
                            <h4 className="font-serif text-lg text-brand-dark mb-4">What's Included in Every Session:</h4>
                            <ul className="space-y-3">
                                {(service.details || []).map((d, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                        <i className="ph-fill ph-star text-brand-accent mt-0.5 flex-shrink-0"></i>
                                        {d}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Other Services */}
        <section className="py-16 sm:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="text-center mb-12 detail-fade">
                <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 bg-gray-200 px-4 py-1.5 rounded-full mb-4 inline-block">Explore More</span>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mt-3">Other Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 detail-fade">
                {otherServices.map((svc, i) => (
                    <Link key={i} href={`/services/${svc.slug}`} className="group bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 block">
                        <div className={`w-12 h-12 rounded-xl ${svc.bg} flex items-center justify-center mb-5`}>
                            <i className={`ph-fill ${svc.icon} ${svc.color} text-xl`}></i>
                        </div>
                        <h4 className="font-serif text-xl text-brand-dark mb-2">{svc.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed mb-4">{svc.desc}</p>
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent group-hover:text-brand-dark transition">
                            Learn More <i className="ph ph-arrow-right"></i>
                        </span>
                    </Link>
                ))}
            </div>
        </section>

        {/* CTA */}
        <BottomCTA
          title={<>Ready to Book Your<br className="hidden md:block"/> {service.title} Session?</>}
          subtitle="Take the first step today — our therapists are here to support you."
          primaryLabel="Book a Session"
          primaryHref="/book-appointment"
          secondaryLabel="View All Services"
          secondaryHref="/services"
        />
      </main>
    </>
  );
}
