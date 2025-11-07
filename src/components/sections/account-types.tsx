import React from 'react';
import { Check } from 'lucide-react';

type AccountTypeProps = {
  title: string;
  subtitle: string;
  features: string[];
  isHotPick?: boolean;
};

const accountTypesData: AccountTypeProps[] = [
  {
    title: "OPTIMUS",
    subtitle: "Engineered for formidable day-trading performance.",
    features: [
      "Leverage 1:5000",
      "️Spreads from 0.8 pips",
      "Deposit from: $10",
      "️Exclusive promotions",
    ],
    isHotPick: true,
  },
  {
    title: "PRO",
    subtitle: "Built for balanced and professional performance.",
    features: [
      "Leverage: 1:1000",
      "Spreads from 0.5 pips",
      "Deposit from: $10",
      "Commissions: $0",
    ],
  },
  {
    title: "ECN ZERO",
    subtitle: "Crafted for raw market access and speed.",
    features: [
      "Leverage: 1:1000",
      "Spreads from 0.0 pips",
      "Deposit from: $100",
      "Institutional-grade execution",
    ],
  },
  {
    title: "STANDARD",
    subtitle: "A versatile solution for all-around trading.",
    features: [
      "Leverage: 1:1000",
      "Deposit from: $10",
      "Wide asset range",
      "Exclusive bonus offerings",
    ],
  },
  {
    title: "MINI",
    subtitle: "The perfect starting point for new traders.",
    features: [
      "Leverage: 1:1000",
      "Deposit from: $5",
      "Micro-lot trading",
      "Ideal for building confidence",
    ],
  },
];

const AccountCard = ({ title, subtitle, features, isHotPick }: AccountTypeProps) => {
  const cleanFeatures = features.map(f => f.replace(/️/g, '').trim());

  return (
    <div className="relative bg-card border border-border rounded-2xl p-8 flex flex-col min-h-[400px] flex-shrink-0 w-[90vw] sm:w-auto md:w-[45vw] lg:w-full snap-start transition-transform duration-300 hover:scale-[1.02]">
      {isHotPick && (
        <span className="absolute top-8 right-8 bg-[#0f766e] text-white text-[12px] font-semibold px-3 py-1 rounded-full">
          HOT PICK
        </span>
      )}
      <div className="flex flex-col flex-grow">
        <h3 className="font-display font-bold text-white text-[28px] leading-tight mb-3 pt-10 lg:pt-0">
          {title}
        </h3>
        <p className="font-body text-muted-foreground text-base mb-6 min-h-[64px]">
          {subtitle}
        </p>
        <ul className="space-y-3">
          {cleanFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-[#0f766e] mr-3 mt-1 flex-shrink-0" />
              <span className="font-body text-[15px] text-[#e5e5e5]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const AccountTypesSection = () => {
  return (
    <section className="bg-black text-foreground">
      <div className="max-w-[1400px] mx-auto px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-white text-[32px] md:text-[40px] lg:text-[48px] leading-tight tracking-[-0.02em]">
            A Trading Account for Every Strategy
          </h2>
          <p className="font-body text-lg text-[#b3b3b3] leading-[1.6] max-w-[900px] mx-auto mt-4">
            Select from five specialized account types, each engineered to match your trading style, experience level, and capital requirements.
          </p>
        </div>

        <div className="flex lg:grid lg:grid-cols-5 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-8 lg:mx-0 px-8 lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {accountTypesData.map((account) => (
            <AccountCard key={account.title} {...account} />
          ))}
        </div>

        <div className="text-center mt-12">
            <a 
              href="#"
              className="inline-block bg-[#0f766e] hover:bg-[#0d6b63] text-white font-semibold py-[14px] px-8 rounded-lg text-base transition-colors"
            >
              Register
            </a>
        </div>
      </div>
    </section>
  );
};

export default AccountTypesSection;