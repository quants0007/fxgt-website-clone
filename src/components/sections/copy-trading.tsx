import Image from 'next/image';
import { Check } from 'lucide-react';

const features = [
  {
    title: "Real-Time Synchronization",
    description: "Instantly mirror trades and strategies as they happen, with no delays."
  },
  {
    title: "Flexible Roles, Maximum Control",
    description: "Switch between Copier and Strategy Provider, or manage both – tailor your trading journey."
  },
  {
    title: "Beginner-Friendly Platform",
    description: "Start investing with confidence, even if you’re new or short on time."
  },
  {
    title: "Performance Visibility",
    description: "Access detailed strategy histories and set risk controls for peace of mind."
  }
];

const CopyTradingSection = () => {
  return (
    <section className="bg-[#f9fafb]">
      <div className="mx-auto max-w-[1200px] px-8 py-12 md:py-16 lg:py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/copytrading_png-12.webp"
              alt="3D visualization of a device with exploding dollar coins, representing copy trading"
              width={600}
              height={600}
              className="drop-shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-[#1a1a1a] lg:text-[40px] mb-4">
              Copy Trading
            </h2>
            <p className="font-body text-lg font-normal text-[#555555] mb-10" style={{ lineHeight: 1.6 }}>
              Mirror other traders or share your own strategies – unlock smarter investing for everyone.
            </p>
            <ul className="mb-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 mb-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#e6f7f5]">
                    <Check className="h-6 w-6 text-[#0f766e]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#1a1a1a] mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-body text-base font-normal leading-normal text-[#666666]">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-block self-start rounded-lg bg-[#0f766e] px-8 py-3.5 font-body text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#0d6b63]"
            >
              Start Copy Trading
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopyTradingSection;