"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stories = [
  {
    title: "Маркетолог-фрилансер",
    text: "Устал объяснять одно и то же каждому новому клиенту. Однажды он описал свой процесс словами, настроил, и теперь бриф от клиента превращается в готовое КП за сорок минут. Он не нанял ассистента. Он его построил.",
  },
  {
    title: "Трейдер",
    text: "Каждый день тратил два часа на ресёрч: новости, метрики, уровни, сценарии. Собрал инструмент, который делает это за него и кладёт на стол готовый отчёт к моменту открытия рынка. Решения он принимает сам. Просто теперь у него есть на это время.",
  },
  {
    title: "Владелец школы",
    text: "Записывал вебинары, потом днями переводил их в материалы, посты, письма. Сейчас запись уходит в систему и возвращается конспектом, постами и email-серией. Сам он занимается тем, что приносит деньги.",
  },
  {
    title: "Человек без кода",
    text: 'Никогда в жизни не писал код, увидел приложение в AppStore, которое хотел бы иметь в своей нише. Описал что хочет получить, словами, голосом, с паузами и «ну ты понимаешь». Система поняла. Через три дня приложение уже работало.',
  },
];

const footerText =
  "А ведь каждый из них просто однажды решил говорить с машиной как с человеком, которому доверяешь сложное дело.";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function FooterTypewriter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!isInView) return;
    if (displayed.length >= footerText.length) return;
    const ch = footerText[displayed.length];
    const speed = ch === "." || ch === "," || ch === "?" ? 100 : 25;
    const timer = setTimeout(() => {
      setDisplayed(footerText.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, isInView]);

  return (
    <div
      ref={ref}
      className="mt-8 md:mt-10 px-5 sm:px-7 md:px-9 py-5 md:py-6 border border-[rgba(198,162,69,0.35)]"
      style={{
        background: "linear-gradient(135deg, rgba(198,162,69,0.08) 0%, rgba(198,162,69,0.03) 100%)",
      }}
    >
      <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-white leading-[1.55] italic text-center">
        {displayed}
        {displayed.length < footerText.length && (
          <span className="inline-block w-[2px] h-[1.1em] bg-white/70 align-middle ml-0.5 animate-pulse" />
        )}
      </p>
    </div>
  );
}

export default function ModuleTwo() {
  return (
    <section id="stories" className="bg-void py-14 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-cormorant text-2xl sm:text-3xl md:text-[42px] font-semibold leading-tight mb-10 md:mb-14 hero-gradient-text"
        >
          Вот что уже происходит
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#C6A24530]">
          {stories.map((story, i) => (
            <motion.div
              key={story.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-void p-5 sm:p-7 md:p-9 border border-[rgba(198,162,69,0.2)]"
            >
              <h3 className="font-cormorant text-xl md:text-2xl font-semibold text-accent-bright mb-3 md:mb-4">
                {story.title}
              </h3>
              <p className="font-cormorant text-lg md:text-xl text-text-body leading-[1.7]">
                {story.text}
              </p>
            </motion.div>
          ))}
        </div>

        <FooterTypewriter />
      </div>
    </section>
  );
}
