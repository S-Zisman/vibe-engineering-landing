import { motion } from "framer-motion";
import heroImg from "@/assets/hero-space.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-heading tracking-[0.3em] uppercase text-sm mb-6"
        >
          Vibe Engineering 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="gradient-cosmic-text">Думать от идеала,</span>
          <br />
          <span className="text-foreground">а не от ограничений</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Курс, который превращает твои идеи в работающие продукты с помощью ИИ.
          Без кода. Без команды разработчиков. Только точное мышление.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://app.sergeyzisman.tech/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-heading font-semibold gradient-cosmic text-primary-foreground hover:opacity-90 transition-opacity text-lg"
          >
            Начать обучение
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-heading font-semibold border border-primary/30 text-primary hover:bg-primary/10 transition-colors text-lg"
          >
            Выбрать тариф
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none" className="text-muted-foreground">
          <rect x="1" y="1" width="22" height="34" rx="11" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="10" r="3" fill="currentColor" className="animate-bounce" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
