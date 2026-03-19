import StarField from "@/components/StarField";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import StoriesSection from "@/components/StoriesSection";
import PhilosophySection from "@/components/PhilosophySection";
import StepsSection from "@/components/StepsSection";
import PricingSection from "@/components/PricingSection";
import InspirationSection from "@/components/InspirationSection";
import AuthorSection from "@/components/AuthorSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <StarField />
      <div className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <StoriesSection />
        <PhilosophySection />
        <StepsSection />
        <PricingSection />
        <InspirationSection />
        <AuthorSection />
        <CtaSection />
        <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
          © 2026 Vibe Engineering — Сергей Зисман
        </footer>
      </div>
    </div>
  );
};

export default Index;
