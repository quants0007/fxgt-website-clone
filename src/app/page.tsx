import NavigationHeader from '@/components/sections/navigation-header';
import HeroBanner from '@/components/sections/hero-banner';
import TrustpilotBanner from '@/components/sections/trustpilot-banner';
import BenefitsGrid from '@/components/sections/benefits-grid';
import AccountTypesSection from '@/components/sections/account-types';
import CopyTradingSection from '@/components/sections/copy-trading';
import MobileAppShowcase from '@/components/sections/mobile-app-showcase';
import TradingResources from '@/components/sections/trading-resources';
import AwardsShowcase from '@/components/sections/awards-showcase';
import VideoCta from '@/components/sections/video-cta';
import Footer from '@/components/sections/footer';
import CookieNoticeModal from '@/components/sections/cookie-notice-modal';

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-background font-body antialiased">
      <NavigationHeader />
      
      <main className="w-full">
        <HeroBanner />
        <TrustpilotBanner />
        <BenefitsGrid />
        <AccountTypesSection />
        <CopyTradingSection />
        <MobileAppShowcase />
        <TradingResources />
        <AwardsShowcase />
        <VideoCta />
      </main>

      <Footer />
      <CookieNoticeModal />
    </div>
  );
}