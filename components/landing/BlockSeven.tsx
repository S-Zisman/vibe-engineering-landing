"use client";

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const borderGrow = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function BlockSeven() {
  return (
    <section
      className="py-14 sm:py-20 md:py-28 px-4 sm:px-6"
      style={{
        background: "linear-gradient(135deg, #C6A245 0%, #E8D08A 40%, #D4AF50 70%, #B89530 100%)",
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="max-w-4xl mx-auto"
      >
        {/* Frei quote */}
        <motion.div variants={slideIn} className="relative pl-5 sm:pl-6 md:pl-8 mb-8 md:mb-10">
          <motion.div
            variants={borderGrow}
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-void origin-top"
          />
          <p className="font-cormorant text-xl sm:text-2xl md:text-[28px] text-void leading-[1.55] italic">
            Макс Фрай однажды написал: если поблизости нет выхода, следует создать его самостоятельно, из подручных материалов.
          </p>
        </motion.div>

        {/* Context */}
        <motion.p
          variants={fadeUp}
          className="font-cormorant text-lg sm:text-xl md:text-[22px] text-void/80 leading-[1.7] mb-10 md:mb-14"
        >
          Подручные материалы уже у тебя есть. Это твои знания, твой опыт, твоё понимание своего дела. То, что ты накапливал годами. То, что никакой ИИ не заменит и не отнимет.
        </motion.p>

        {/* Transition */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-4 md:gap-6 mb-10 md:mb-14"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[rgba(9,8,10,0.2)]" />
          <span className="font-cormorant text-xl sm:text-2xl md:text-[28px] text-void font-bold italic whitespace-nowrap">
            А вот что изменилось
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[rgba(9,8,10,0.2)]" />
        </motion.div>

        {/* Steinberger story */}
        <motion.div
          variants={fadeUp}
          className="bg-void/95 border border-[rgba(198,162,69,0.2)] p-5 sm:p-7 md:p-9 mb-8 md:mb-10"
        >
          <p className="font-cormorant text-lg sm:text-xl md:text-[22px] text-text-body leading-[1.7] mb-4">
            Питер Штайнбергер, австрийский разработчик, которому надоело что ИИ умеет только отвечать на вопросы. Он хотел агента, который умеет делать. Сам, в одиночку, построил OpenClaw: агент чистил почту, бронировал рестораны, управлял умным домом, выполнял задачи на компьютере пока хозяин занимался другим. Проект стал самым быстрорастущим open-source ИИ-агентом в истории.
          </p>
          <p className="font-cormorant text-lg sm:text-xl md:text-[22px] text-text-body leading-[1.7]">
            За ним пришли Meta и Microsoft. Глава Microsoft Сатья Наделла позвонил лично.{" "}
            <span className="text-white font-medium">Питер выбрал OpenAI.</span>
          </p>
        </motion.div>

        {/* Punchline 1 */}
        <motion.p
          variants={fadeUp}
          className="font-cormorant text-xl sm:text-2xl md:text-3xl text-center leading-[1.4] mb-10 md:mb-14 text-void font-bold"
        >
          Один человек. Одна идея. Сформулированная точно.
        </motion.p>

        {/* Amodei */}
        <motion.div
          variants={fadeUp}
          className="bg-void/95 border border-[rgba(198,162,69,0.2)] p-5 sm:p-7 md:p-9 mb-10 md:mb-14"
        >
          <p className="font-cormorant text-lg sm:text-xl md:text-[22px] text-text-body leading-[1.7] mb-3">
            Дарио Амодеи, CEO Anthropic, когда его спросили когда появится первая компания с одним сотрудником стоимостью в миллиард, ответил:{" "}
            <span className="text-accent-bright font-semibold">2026. С вероятностью 70–80%.</span>
          </p>
          <p className="font-cormorant text-lg sm:text-xl md:text-[22px] text-text-muted leading-[1.7] italic">
            Сэм Алтман держит на это пари в своём закрытом чате с другими CEO крупнейших технокомпаний мира.
          </p>
        </motion.div>

        {/* Boundaries paragraph */}
        <motion.p
          variants={fadeUp}
          className="font-cormorant text-lg sm:text-xl md:text-[22px] text-void/80 leading-[1.7] mb-10 md:mb-14"
        >
          Границы между &laquo;я могу это сделать&raquo; и &laquo;это слишком сложно для меня&raquo; больше не там, где они были год назад. Финансовая система под твои задачи. CRM под твою логику. Аналитический инструмент под твой рынок. Агент, который работает пока ты спишь.{" "}
          <span className="text-void font-semibold">
            Всё это сегодня определяется не техническим образованием и не бюджетом. Это определяется масштабом твоей фантазии и точностью твоего мышления.
          </span>
        </motion.p>

        {/* Final punchline */}
        <motion.p
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-cormorant text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-[1.35] text-center font-semibold text-void"
        >
          Именно этому я хочу тебя научить:
          <br />
          думать от идеала, а не от ограничений.
        </motion.p>
      </motion.div>
    </section>
  );
}
