"use client";

import { motion } from "framer-motion";

const InspirationSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
            Один человек. Одна идея.{" "}
            <span className="gradient-cosmic-text">Сформулированная точно.</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Питер Штайнбергер</strong>, австрийский разработчик,
              построил OpenClaw в одиночку: агент чистил почту, бронировал рестораны, управлял умным домом.
              Проект стал самым быстрорастущим open-source ИИ-агентом в истории.
              За ним пришли Meta и Microsoft. Глава Microsoft Сатья Наделла позвонил лично.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Дарио Амодеи</strong>, CEO Anthropic, предсказал:
              первая компания-миллиардник с одним сотрудником появится в 2026 году. С вероятностью 70–80%.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground text-xl leading-relaxed font-heading max-w-3xl mx-auto">
            Границы между «я могу» и «это слишком сложно» больше не там, где были год назад.
            Всё определяется масштабом твоей фантазии и точностью мышления.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InspirationSection;
