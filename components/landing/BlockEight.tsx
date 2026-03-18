"use client";

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const photoReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function BlockEight() {
  return (
    <section className="bg-void py-14 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:gap-10 lg:gap-14 items-start">
          {/* Photo */}
          <motion.div
            variants={photoReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-2/5 mb-8 md:mb-0 flex-shrink-0"
          >
            <div className="relative">
              <div
                className="absolute -inset-px pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(198,162,69,0.25) 0%, transparent 40%, transparent 60%, rgba(198,162,69,0.15) 100%)",
                }}
              />
              <img
                src="/author.png"
                alt="Сергей Зисман"
                className="w-full aspect-[3/4] object-cover object-top grayscale-[20%]"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-accent-mid mt-4"
            >
              Сергей Зисман
            </motion.p>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="md:w-3/5"
          >
            <motion.h2
              variants={fadeUp}
              className="font-cormorant text-2xl sm:text-3xl md:text-[38px] font-semibold leading-[1.25] mb-8 md:mb-10 hero-gradient-text"
            >
              Меня зовут Сергей Зисман.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-cormorant text-lg sm:text-xl md:text-[22px] text-text-body leading-[1.7] mb-6"
            >
              Я всю жизнь строю мосты между тем что кажется несовместимым. Между технологиями и интуицией. Между бизнес-стратегией и работой с сознанием. Между тем что человек хочет создать и тем что мешает ему это сделать.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-cormorant text-lg sm:text-xl md:text-[22px] text-text-body leading-[1.7] mb-6"
            >
              Я не стал программистом. Я стал человеком, который умеет точно формулировать что нужно и находить тех, кто это реализует. Сначала это были люди.{" "}
              <span className="text-white font-medium">Теперь это ИИ.</span>
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-cormorant text-lg sm:text-xl md:text-[22px] text-text-body leading-[1.7] mb-8"
            >
              Стена между идеей и воплощением рухнула. И я хочу показать это каждому, у кого есть экспертиза, опыт и понимание своего дела.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="border-l-2 border-[#C6A245] pl-5 sm:pl-6 md:pl-8"
            >
              <p className="font-cormorant text-xl sm:text-2xl md:text-[26px] text-text-primary leading-[1.5] italic font-medium">
                Потому что единственное что теперь определяет масштаб результата, это масштаб мышления.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
