"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Почему ИИ даёт не то",
    text: "Сначала ты поймёшь почему получаешь от ИИ не то что хочешь, и это изменит каждый следующий запрос который ты когда-либо напишешь.",
  },
  {
    num: "2",
    title: "Система мышления",
    text: "Потом освоишь систему мышления, которой пользовались лучшие умы прошлого века. Применительно к своим задачам, своей профессии, своей жизни.",
  },
  {
    num: "3",
    title: "За пределы чата",
    text: "Потом впервые выйдешь за пределы чата в профессиональную среду, где ИИ перестаёт отвечать и начинает делать.",
  },
  {
    num: "4",
    title: "Память, характер и правила",
    text: "Потом научишься давать ему память, характер и правила, чтобы он работал так как нужно тебе, а не усреднённому пользователю из интернета.",
  },
  {
    num: "5",
    title: "Первый агент",
    text: "Потом соберёшь своего первого агента. Под свою задачу. Под свою логику. Без чужих шаблонов.",
  },
  {
    num: "6",
    title: "Личная система",
    text: "И в конце выстроишь личную систему: что автоматизировать в первую очередь, как это масштабировать, как сделать так чтобы это работало без тебя каждый день.",
  },
];

const stepVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function BlockFive() {
  return (
    <section
      id="course-map"
      className="py-14 sm:py-20 md:py-28 px-4 sm:px-6"
      style={{
        background: "linear-gradient(135deg, #C6A245 0%, #E8D08A 40%, #D4AF50 70%, #B89530 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-cormorant text-2xl sm:text-3xl md:text-[42px] font-bold leading-tight mb-10 md:mb-14 text-void"
        >
          Шесть шагов к системе
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-0"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              custom={i}
              variants={stepVariant}
              className="flex gap-4 sm:gap-5 md:gap-7 py-5 md:py-6 border-t border-[rgba(9,8,10,0.15)] first:border-t-0"
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-void flex items-center justify-center mt-0.5">
                <span className="font-mono text-sm md:text-base text-accent-bright font-bold">
                  {step.num}
                </span>
              </div>
              <div>
                <h3 className="font-cormorant text-xl sm:text-2xl md:text-[26px] font-bold text-void leading-tight mb-1.5 md:mb-2">
                  {step.title}
                </h3>
                <p className="font-cormorant text-lg sm:text-xl md:text-[22px] text-void/70 leading-[1.65]">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="font-cormorant text-lg sm:text-xl md:text-[22px] text-void/80 leading-[1.6] text-center mt-10 md:mt-12 border-t border-[rgba(9,8,10,0.15)] pt-6 md:pt-8"
        >
          Шесть шагов. Каждый следующий невозможен без предыдущего.
          <br />
          <span className="text-void font-semibold">
            Именно так складывается система, а не набор случайных навыков.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
