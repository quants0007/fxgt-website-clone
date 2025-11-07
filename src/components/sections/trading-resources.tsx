import React from 'react';

const resources = [
  {
    title: 'Trading Toolkit',
    description: 'Access advanced technical indicators, real-time economic calendars, and position calculators to optimize entry and exit points.',
  },
  {
    title: 'Blog',
    description: 'Read daily market news and insights, technical analysis, and fundamental research from our expert team of analysts.',
  },
  {
    title: 'Demo Account',
    description: 'Master your trades in risk-free environment using virtual funds.',
  },
];

const TradingResources = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-8 py-12 md:py-16 lg:py-20">
        <div className="mb-12 text-center">
          <h2 className="font-display text-[2rem] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#1a1a1a] lg:text-[2.5rem]">
            No more guesswork: Trading decisions based on knowledge
          </h2>
          <p className="font-body mx-auto mt-4 max-w-[800px] text-lg leading-[1.6] text-[#666666]">
            Our trading resources are designed to improve performance at every stage of your trading journey – make the most of them.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-xl border border-[#e5e5e5] bg-white p-8 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <h3 className="mb-3 font-display text-2xl font-bold text-[#1a1a1a]">
                {resource.title}
              </h3>
              <p className="font-body text-base leading-6 text-[#666666]">
                {resource.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/register"
            className="inline-block rounded-lg bg-[#0f766e] px-8 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-[#0d6b63]"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default TradingResources;