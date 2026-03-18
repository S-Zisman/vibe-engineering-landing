"use client";

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
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

export default function ModuleThree() {
  return (
    <section className="bg-deep py-14 sm:py-20 md:py-28 px-4 sm:px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeUp}
          className="font-cormorant text-2xl sm:text-3xl md:text-[42px] font-semibold leading-tight mb-10 md:mb-12 hero-gradient-text"
        >
          Один вопрос меняет всё
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-cormorant text-lg sm:text-xl md:text-[22px] lg:text-2xl text-text-body leading-[1.7] mb-6 md:mb-8"
        >
          Эйнштейн не выводил теорию относительности из формул. Он задал себе один вопрос: что я увижу, если буду лететь рядом со световой волной? Одно точно сформулированное противоречие. Всё остальное вышло из него само.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="font-cormorant text-lg sm:text-xl md:text-[22px] lg:text-2xl text-text-body leading-[1.7] mb-6 md:mb-8"
        >
          Примерно в те же годы двое исследователей, Ричард Бэндлер и Джон Гриндер, занялись странной на первый взгляд задачей: они решили выяснить, есть ли система за гениальностью. Не талант или слепая удача, а именно воспроизводимая структура. Они изучали лучших терапевтов, переговорщиков, коммуникаторов своего времени и искали одно: что именно эти люди делают, когда достигают результата, который другим кажется невозможным. Структура нашлась. И оказалась универсальной.
        </motion.p>

        <motion.div
          variants={slideIn}
          className="relative pl-5 sm:pl-6 md:pl-8 py-2 mt-8 md:mt-10"
        >
          <motion.div
            variants={borderGrow}
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C6A245] origin-top"
          />
          <p className="font-cormorant text-lg sm:text-xl md:text-[22px] lg:text-2xl text-text-primary leading-[1.7] mb-4">
            К разговору с ИИ это имеет самое прямое отношение. Когда получаешь не тот результат, это почти никогда не проблема инструмента. Это нераспознанная структура в самом запросе. Научись её видеть, и ИИ начнёт делать именно то, что ты имел в виду.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="font-cormorant text-lg sm:text-xl md:text-2xl text-accent-bright leading-[1.5] italic font-medium"
          >
            Даже если ты сам ещё не до конца это сформулировал.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
