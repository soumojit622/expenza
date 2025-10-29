import ContentSection from "@/components/content-1";
import ContentSections from "@/components/content-7";
import FAQsThree from "@/components/faqs-3";
import FeaturesSection from "@/components/features-8";
import FeaturesSections from "@/components/features-9";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-5";
import StatsSection from "@/components/stats-3";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <FeaturesSections />
      <IntegrationsSection />
      <ContentSection />
      <StatsSection />
      <Testimonials />
      <FAQsThree />
      <ContentSections />
      <FooterSection />
    </div>
  );
}
