import HeroSection from "@/components/HeroSection";
import PersonalStory from "@/components/PersonalStory";
import ProblemExposed from "@/components/ProblemExposed";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import ProgramSteps from "@/components/ProgramSteps";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import ComplianceFooter from "@/components/ComplianceFooter";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PersonalStory />
      <ProblemExposed />
      <SolutionSection />
      <TestimonialsSection />
      <OfferSection />
      <ProgramSteps />
      <FAQSection />
      <FinalCTA />
      <ComplianceFooter />
      <StickyMobileCTA />
      <ExitIntentPopup />
    </main>
  );
};

export default Index;
