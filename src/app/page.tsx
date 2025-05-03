import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ComparisonSection } from "@/components/comparison-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ContactFormSection } from "@/components/contact-form-section";
import { FAQSection } from "@/components/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ComparisonSection />
      <CaseStudiesSection />
      <HowItWorksSection />
      <ContactFormSection />
      <FAQSection />
    </>
  );
}
