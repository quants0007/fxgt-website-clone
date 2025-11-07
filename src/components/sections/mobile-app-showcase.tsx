import Image from 'next/image';

const deviceMockupUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/trade-from-the-palm-of-your-hands_jpg-13.webp";
const qrCodeUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/app_qr_code-1-14.webp";
const playStoreUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/playstore_badge-1-15.webp";
const appStoreUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/appstore_badge-1-16.webp";

const MobileAppShowcase = () => {
    return (
        <section className="relative overflow-hidden bg-[#0a0a0a] text-white">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]"></div>
            
            <div className="relative z-10 mx-auto max-w-[1400px] px-8 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-5 lg:gap-x-12">
                    <div className="text-center lg:col-span-2 lg:flex lg:flex-col lg:justify-center lg:text-left">
                        <h2 className="mb-6 font-raleway text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] md:text-[36px] lg:text-[44px]">
                            Trade from the palm of your hands
                        </h2>
                        <p className="mb-10 font-montserrat text-lg leading-[1.6] text-[#b3b3b3]">
                            Access markets anytime, on-the-go,&nbsp;with our responsive mobile app, featuring real-time data, advanced charting, and instant order execution.
                        </p>
                        
                        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row lg:justify-start">
                            <div className="flex-shrink-0">
                                <Image 
                                    src={qrCodeUrl}
                                    alt="QR code to download Fusion FX app"
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-3 sm:items-start">
                                <a href="https://play.google.com/store/apps/details?id=com.fxgt.app" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                                    <Image
                                        src={playStoreUrl}
                                        alt="Get it on Google Play"
                                        width={135}
                                        height={40}
                                    />
                                </a>
                                <a href="https://apps.apple.com/app/fxgt-trade-the-markets/id6680187341" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                                     <Image
                                        src={appStoreUrl}
                                        alt="Download on the App Store"
                                        width={135}
                                        height={40}
                                     />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-3">
                        <Image
                            src={deviceMockupUrl}
                            alt="Fusion FX mobile app showcase on two smartphones"
                            width={900}
                            height={600}
                            className="h-auto w-full shadow-[0_0_60px_rgba(15,118,110,0.3)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileAppShowcase;