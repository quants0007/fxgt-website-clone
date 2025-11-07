import React from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
}

const benefitsData: BenefitCardProps[] = [
  {
    title: "Diverse Account Types",
    description: "Match your strategy and costs",
  },
  {
    title: "Copy Trading",
    description: "Copy top strategies on your terms",
  },
  {
    title: "Rewards",
    description: "Earn more on every trade",
  },
  {
    title: "Mobile App",
    description: "Seamless, intuitive trading experience",
  },
  {
    title: "10+ industry awards",
    description: "Acknowledged, rewarded, and respected",
  },
  {
    title: "$1,000,000",
    description: "In liability insurance for all clients",
  },
];

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 transition-transform duration-300 ease-out hover:-translate-y-1">
      <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-3">
        {title}
      </h3>
      <p className="font-body text-base font-normal text-[#666666] leading-normal">
        {description}
      </p>
    </div>
  );
};

const BenefitsGrid: React.FC = () => {
  return (
    <section className="bg-light-gray-bg w-full">
      <div className="max-w-[1400px] mx-auto px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {benefitsData.map((benefit, index) => (
            <BenefitCard key={index} title={benefit.title} description={benefit.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;