"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

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

const badPrompt = "«Напиши письмо клиенту Х, что мы не можем взяться за его проект У»";

const goodPromptLines = [
  { label: "Роль:", text: "Ты опытный бизнес-коммуникатор с чуткостью психолога." },
  { label: "Тон:", text: "тёплый, уважительный, без канцелярита." },
  { label: "Задача:", text: "написать письмо клиенту Х об отказе от проекта У." },
  { label: "Идеальный результат:", text: "клиент прочитал, почувствовал искреннее уважение к своей идее, понял причину отказа без обид, сам захотел вернуться когда ситуация изменится и порекомендовал нас коллеге." },
  { label: "Ограничения:", text: "не более десяти предложений, никаких шаблонных фраз типа «к сожалению вынуждены», никакого официального тона." },
  { label: "Контекст:", text: "небольшое агентство, долгосрочные отношения важнее разовой сделки." },
];

const lineVariant = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

function BadPromptTyped() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!isInView) return;
    if (displayed.length >= badPrompt.length) return;
    const timer = setTimeout(() => {
      setDisplayed(badPrompt.slice(0, displayed.length + 1));
    }, 28);
    return () => clearTimeout(timer);
  }, [displayed, isInView]);

  return (
    <div ref={ref} className="border-l-2 border-text-ghost pl-4 sm:pl-5 md:pl-6 py-3 my-5 md:my-6">
      <p className="font-mono text-lg sm:text-xl md:text-[22px] text-text-ghost leading-[1.8] italic">
        {displayed}
        {displayed.length < badPrompt.length && (
          <span className="inline-block w-[2px] h-[1em] bg-text-ghost/60 align-middle ml-0.5 animate-pulse" />
        )}
      </p>
    </div>
  );
}

export default function BlockFour() {
  return (
    <section className="bg-void py-14 sm:py-20 md:py-28 px-4 sm:px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeUp}
          className="font-cormorant text-2xl sm:text-3xl md:text-[42px] font-semibold leading-tight mb-10 md:mb-12 hero-gradient-text"
        >
          Смотри как это работает на практике
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-cormorant text-lg sm:text-xl md:text-[22px] lg:text-2xl text-text-body leading-[1.7] mb-2"
        >
          Большинство людей пишут ИИ примерно так:
        </motion.p>

        <motion.div variants={fadeUp}>
          <BadPromptTyped />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-cormorant text-lg sm:text-xl md:text-[22px] lg:text-2xl text-text-muted leading-[1.6] italic mb-10 md:mb-12"
        >
          И получают вежливый, обтекаемый, ни о чём текст. Который потом всё равно переписывают руками.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="h-px w-24 bg-gradient-to-r from-transparent via-accent-dim to-transparent mx-auto mb-10 md:mb-12"
        />

        <motion.p
          variants={fadeUp}
          className="font-cormorant text-lg sm:text-xl md:text-[22px] lg:text-2xl text-text-primary leading-[1.6] mb-5 md:mb-6"
        >
          Человек, который думает от идеала, формулирует иначе:
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="border-l-2 border-[#C6A245] bg-surface/60 pl-4 sm:pl-5 md:pl-7 pr-4 sm:pr-5 md:pr-7 py-5 my-5 md:my-6"
        >
          {goodPromptLines.map((line, i) => (
            <motion.p
              key={line.label}
              custom={i}
              variants={lineVariant}
              className="font-cormorant text-lg sm:text-xl md:text-[22px] leading-[1.8] mb-3 last:mb-0"
            >
              <span className="text-accent-bright font-semibold">{line.label}</span>{" "}
              <span className="text-text-body italic">{line.text}</span>
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 md:mt-12"
        >
          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-white leading-[1.6] font-semibold">
            Это и есть другой способ думать и ставить задачу.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
