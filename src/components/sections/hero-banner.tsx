import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center text-center overflow-hidden"
      style={{ height: '700px' }}
    >
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/Hero-GT_png-10.webp"
        alt="Stylized GT lettermark in the background"
        fill
        className="object-cover z-0"
        priority
      />
      
      <div className="absolute inset-0 bg-black/90 z-10"></div>

      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-4 flex flex-col items-center py-12 md:py-16 lg:py-24">
        <h1 
          className="font-display font-extrabold text-[40px] md:text-[48px] lg:text-[64px] leading-tight tracking-[-0.01em] text-text-primary"
        >
          Trade your way.
        </h1>

        <h2 
          className="font-display font-light text-[24px] md:text-[28px] lg:text-[32px] mt-4 text-text-secondary"
        >
          experience the difference
        </h2>

        <p className="font-body text-lg max-w-[800px] mt-6 leading-relaxed text-text-muted">
          Join <strong className="font-semibold text-text-secondary">750,000+</strong> traders and shape your trading journey across global markets with seamless, pro-grade tools.
        </p>

        <Link 
          href="/register" 
          className="bg-primary text-primary-foreground font-body font-semibold text-base py-[14px] px-10 rounded-lg mt-8 transition-all duration-300 ease-in-out hover:bg-[var(--color-brand-teal-hover)] hover:scale-[1.02] shadow-[0_4px_12px_rgba(23,164,153,0.3)]"
        >
          Register
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;