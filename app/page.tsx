import StarField from "@/components/landing/StarField";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import StoriesSection from "@/components/landing/StoriesSection";
import PhilosophySection from "@/components/landing/PhilosophySection";
import StepsSection from "@/components/landing/StepsSection";
import PricingSection from "@/components/landing/PricingSection";
import InspirationSection from "@/components/landing/InspirationSection";
import AuthorSection from "@/components/landing/AuthorSection";
import CtaSection from "@/components/landing/CtaSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
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
    </main>
  );
}
