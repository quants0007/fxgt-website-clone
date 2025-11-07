import Image from 'next/image';

type Award = {
  imgSrc: string;
  title: string;
  year: string;
};

const awardsData: Award[] = [
  {
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/winner-awards_png-17.webp",
    title: "BEST TRADING ENVIRONMENT",
    year: "2025",
  },
  {
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/UFA1_png-19.webp",
    title: "BEST TRADING CONDITIONS APAC",
    year: "2024",
  },
  {
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/UFA1_png-19.webp",
    title: "MOST INNOVATIVE BROKER",
    year: "2024",
  },
  {
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/brokersview-award-20.webp",
    title: "BEST GLOBAL TRADING CONDITIONS",
    year: "2024",
  },
  {
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/brokersview-award-20.webp",
    title: "BEST GLOBAL CFD BROKER",
    year: "2024",
  },
  {
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/brokersview-award-20.webp",
    title: "BEST GLOBAL IB/AFFILIATE PROGRAM",
    year: "2024",
  },
  {
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/Atoz1_png-21.webp",
    title: "BEST BROKER",
    year: "2023",
  },
  {
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/UFA1_png-19.webp",
    title: "BEST HYBRID BROKER",
    year: "2022",
  },
];

const AwardCard = ({ award }: { award: Award }) => (
  <div className="flex-shrink-0 snap-center bg-white border border-[#e5e5e5] rounded-xl p-8 flex flex-col items-center min-w-[280px] w-[280px]">
    <Image
      src={award.imgSrc}
      alt={`${award.title} ${award.year}`}
      width={80}
      height={80}
      className="mb-4"
    />
    <p className="font-display text-[#1a1a1a] text-[1.125rem] font-bold text-center mb-2 leading-tight">
      {award.title}
    </p>
    <p className="font-body text-[#666666] text-[15px] font-medium">
      {award.year}
    </p>
  </div>
);

export default function AwardsShowcase() {
  return (
    <section className="bg-[#f9fafb]">
      <div className="mx-auto max-w-[1400px] px-8 py-12 md:py-16 lg:py-20">
        <div className="mb-12 text-center">
          <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.02em] text-[#1a1a1a] md:text-[2.25rem] lg:text-[2.75rem]">
            Globally recognized excellence
          </h2>
          <p className="font-body mx-auto mt-4 max-w-[900px] text-[1.125rem] leading-[1.6] text-[#666666]">
            Our commitment to offering the best trading experience continues to earn recognition from leading industry authorities.
          </p>
        </div>
        <div className="-mx-8">
          <div className="flex snap-x snap-mandatory gap-x-6 overflow-x-auto px-8 pb-4">
            {awardsData.map((award, index) => (
              <AwardCard key={index} award={award} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}