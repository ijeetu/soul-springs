import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import gsap from 'gsap';

const menuPages = {
  left: [
    { label: 'Homepage', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Service Details', href: '/services/individual-therapy' },
    { label: 'Book Appointment', href: '/book-appointment' },
    { label: 'Testimonials', href: '/testimonials' },
  ],
  right: [
    { label: 'Blog', href: '/blog' },
    { label: 'Blog Details', href: '/blog/how-to-start-therapy-with-confidence' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'FAQ', href: '/faq' },
    { label: '404', href: '/404' },
  ],
};

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef(null);
  const mobileDropRef = useRef(null);
  const timeoutRef = useRef(null);

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/';
    if (href === '#') return false;
    return router.pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileDropdown(false);
  }, [router.pathname]);

  useEffect(() => {
    if (!megaRef.current) return;
    if (megaOpen) {
      gsap.fromTo(megaRef.current,
        { opacity: 0, y: -10, display: 'none' },
        { opacity: 1, y: 0, display: 'grid', duration: 0.3, ease: 'power3.out' }
      );
    } else {
      gsap.to(megaRef.current, {
        opacity: 0, y: -10, duration: 0.2, ease: 'power2.in',
        onComplete: () => gsap.set(megaRef.current, { display: 'none' })
      });
    }
  }, [megaOpen]);

  useEffect(() => {
    if (!mobileDropRef.current) return;
    if (mobileDropdown) {
      gsap.set(mobileDropRef.current, { height: 'auto', opacity: 1 });
      const h = mobileDropRef.current.offsetHeight;
      gsap.fromTo(mobileDropRef.current,
        { height: 0, opacity: 0 },
        { height: h, opacity: 1, duration: 0.35, ease: 'power3.out' }
      );
    } else {
      gsap.to(mobileDropRef.current, { height: 0, opacity: 0, duration: 0.25, ease: 'power2.in' });
    }
  }, [mobileDropdown]);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setMegaOpen(false), 200);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 px-4 md:px-8 backdrop-blur-md bg-brand-bg/80 ${scrolled ? 'py-2 shadow-sm' : 'py-4'}`} id="navbar">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex justify-between items-center w-full md:w-auto">
                <Link href="/" className="text-2xl font-serif flex items-center gap-2 text-brand-dark">
                    <i className="ph-fill ph-flower-lotus text-brand-accent"></i>
                    Soul Springs
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl focus:outline-none">
                    <i className={`ph ${isOpen ? 'ph-x' : 'ph-list'}`}></i>
                </button>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm font-medium items-center">
                <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                    <button className={`hover:text-brand-accent transition flex items-center gap-1 ${megaOpen ? 'text-brand-accent' : ''}`}>
                        All Pages <i className={`ph ph-caret-down text-xs transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`}></i>
                    </button>

                    {/* Mega Menu */}
                    <div
                      ref={megaRef}
                      className="absolute top-full left-0 mt-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-[680px] grid-cols-[1fr_1fr_2.5fr] gap-4"
                      style={{ display: 'none' }}
                      onMouseEnter={handleEnter}
                      onMouseLeave={handleLeave}
                    >
                        <div className="space-y-1">
                            {menuPages.left.map((item, i) => (
                                <Link key={i} href={item.href} className={`block py-2 px-3 rounded-lg font-serif text-base transition-colors duration-200 ${isActive(item.href) ? 'bg-brand-accent/10 text-brand-accent' : 'text-brand-dark hover:bg-brand-bg hover:text-brand-accent'}`}>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <div className="space-y-1">
                            {menuPages.right.map((item, i) => (
                                <Link key={i} href={item.href} className={`block py-2 px-3 rounded-lg font-serif text-base transition-colors duration-200 ${isActive(item.href) ? 'bg-brand-accent/10 text-brand-accent' : 'text-brand-dark hover:bg-brand-bg hover:text-brand-accent'}`}>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <div className="relative rounded-xl overflow-hidden min-h-[220px]">
                            <img
                              src="/images/1573497620053.webp"
                              alt="Counseling"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-5 text-white">
                                <h4 className="font-serif text-lg mb-1">Need help with counselling?</h4>
                                <p className="text-xs text-white/70">Book your free meeting today</p>
                            </div>
                            <Link href="/book-appointment" className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all duration-300">
                                <i className="ph ph-arrow-up-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                {navLinks.map((link, i) => (
                    <Link key={i} href={link.href} className={`transition relative ${isActive(link.href) ? 'text-brand-accent' : 'hover:text-brand-accent'}`}>
                        {link.label}
                        {isActive(link.href) && (
                            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-accent rounded-full"></span>
                        )}
                    </Link>
                ))}
            </div>

            {/* Desktop CTA */}
            <Link href="/book-appointment" className="hidden md:block bg-brand-dark text-brand-bg px-6 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition">
                Book an Appointment
            </Link>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[calc(100vh-92px)] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="border-t border-gray-200 pt-4 pb-4 space-y-1 max-h-[calc(100vh-110px)] overflow-y-auto overscroll-contain pr-1">
                {/* All Pages Dropdown */}
                <button
                    onClick={() => setMobileDropdown(!mobileDropdown)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-left font-serif text-base transition-colors ${mobileDropdown ? 'bg-brand-accent/10 text-brand-accent' : 'text-brand-dark hover:bg-brand-bg'}`}
                >
                    All Pages
                    <i className={`ph ph-caret-down text-sm transition-transform duration-300 ${mobileDropdown ? 'rotate-180' : ''}`}></i>
                </button>
                <div ref={mobileDropRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
                    <div className="pl-4 space-y-0.5 pb-2">
                        {[...menuPages.left, ...menuPages.right].map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                className={`block py-2.5 px-4 rounded-lg text-sm transition-colors ${isActive(item.href) ? 'bg-brand-accent/10 text-brand-accent font-medium' : 'text-gray-600 hover:bg-brand-bg hover:text-brand-dark'}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Nav Links */}
                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        href={link.href}
                        className={`block py-3 px-4 rounded-xl font-serif text-base transition-colors ${isActive(link.href) ? 'bg-brand-accent/10 text-brand-accent' : 'text-brand-dark hover:bg-brand-bg'}`}
                    >
                        <span className="flex items-center gap-3">
                            {isActive(link.href) && <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>}
                            {link.label}
                        </span>
                    </Link>
                ))}

                {/* CTA */}
                <div className="pt-3 pb-2">
                    <Link href="/book-appointment" className="block text-center bg-brand-dark text-brand-bg px-6 py-3.5 rounded-full text-sm font-sans font-medium hover:bg-opacity-90 transition">
                        Book an Appointment
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  );
}
