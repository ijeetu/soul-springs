import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-bg pt-16 md:pt-20 pb-10 px-6 md:px-12 border-t border-gray-200 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
            <div className="md:col-span-1">
                <Link href="/" className="text-2xl font-serif flex items-center gap-2 text-brand-dark mb-4">
                    <i className="ph-fill ph-flower-lotus text-brand-accent"></i>
                    Soul Springs
                </Link>
                <p className="text-gray-500 text-sm mb-6">
                    Your space to heal, grow, and feel understood. Offering compassionate, personalized mental health support to guide you through life's challenges.
                </p>
                <div className="flex gap-4">
                    <Link href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-brand-dark hover:text-white transition"><i className="ph-fill ph-facebook-logo"></i></Link>
                    <Link href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-brand-dark hover:text-white transition"><i className="ph-fill ph-instagram-logo"></i></Link>
                    <Link href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-brand-dark hover:text-white transition"><i className="ph-fill ph-linkedin-logo"></i></Link>
                </div>
            </div>

            <div>
                <h4 className="font-bold text-brand-dark mb-4 md:mb-6">Quick Links</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                    <li><Link href="/" className="hover:text-brand-accent transition">Home</Link></li>
                    <li><Link href="/about" className="hover:text-brand-accent transition">About Us</Link></li>
                    <li><Link href="/services" className="hover:text-brand-accent transition">Services</Link></li>
                    <li><Link href="/book-appointment" className="hover:text-brand-accent transition">Book Appointment</Link></li>
                    <li><Link href="/testimonials" className="hover:text-brand-accent transition">Testimonials</Link></li>
                    <li><Link href="/contact" className="hover:text-brand-accent transition">Contact Us</Link></li>
                    <li><Link href="/blog" className="hover:text-brand-accent transition">Blog</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-brand-dark mb-4 md:mb-6">Get in Touch</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                    <li>
                        <span className="block font-medium text-brand-dark">Email</span>
                        <a href="mailto:hello@healspace.com" className="hover:text-brand-accent transition">hello@healspace.com</a>
                    </li>
                    <li>
                        <span className="block font-medium text-brand-dark">Phone</span>
                        <span>+1 (123) 456-7890</span>
                    </li>
                    <li>
                        <span className="block font-medium text-brand-dark">Office Hours:</span>
                        <span>Mon-Sat, 9 AM - 7 PM</span>
                    </li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-brand-dark mb-4 md:mb-6 flex items-center gap-2"><i className="ph-fill ph-map-pin text-brand-red"></i> Visit Us</h4>
                <div className="text-sm text-gray-500">
                    <span className="block font-medium text-brand-dark mb-1">Address</span>
                    <p>Soul Springs Counseling Center<br/>123 Tranquil Avenue, Wellness City, CA 90210</p>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-gray-200 flex flex-col gap-4 md:flex-row md:justify-between md:items-center text-xs text-gray-400">
            <p className="text-center md:text-left">&copy; 2026 Soul Springs. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
                <Link href="/faq" className="hover:text-brand-dark transition">FAQ</Link>
                <Link href="/privacy-policy" className="hover:text-brand-dark transition">Privacy Policy</Link>
                <a
                    href="https://vishwalabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Built by Vishwa Labs (opens in a new tab)"
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-2.5 py-1.5 text-[11px] font-medium text-gray-500 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand-accent/40 hover:text-brand-dark hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
                >
                    <Image
                        src="https://vishwalabs.com/logoemail.png"
                        alt=""
                        width={20}
                        height={20}
                        sizes="20px"
                        className="rounded-full transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"
                    />
                    <span>Built by <span className="font-semibold text-brand-dark">Vishwa Labs</span></span>
                </a>
            </div>
        </div>
    </footer>
  );
}
