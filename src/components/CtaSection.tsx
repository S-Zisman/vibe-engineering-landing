import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="relative py-32 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg mb-6 italic"
        >
          «Если поблизости нет выхода, следует создать его самостоятельно, из подручных материалов.»
          <span className="block text-sm mt-2 not-italic">— Макс Фрай</span>
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-heading text-3xl md:text-5xl font-bold mb-8"
        >
          <span className="gradient-cosmic-text">Думать от идеала,</span>
          <br />
          а не от ограничений
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://app.sergeyzisman.tech/"
            className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-heading font-semibold gradient-cosmic text-primary-foreground hover:opacity-90 transition-opacity text-lg"
          >
            Начать путь 🚀
          </a>
          <a
            href="https://wa.me/972586305753?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%BA%D1%83%D1%80%D1%81%D0%B5%20Vibe%20Engineering%202026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-heading font-semibold border border-primary/30 text-primary hover:bg-primary/10 transition-colors text-lg"
          >
            Узнать больше
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
