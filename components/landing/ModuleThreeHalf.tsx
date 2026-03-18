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

const cardLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const cardRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ModuleThreeHalf() {
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
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={fadeUp}
          className="font-cormorant text-2xl sm:text-3xl md:text-[42px] font-semibold leading-tight mb-10 md:mb-12 text-void"
        >
          Вайбкодинг и ТРИЗ: почему шаблоны не работают
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <motion.div
            variants={cardLeft}
            className="bg-void/95 p-5 sm:p-7 md:p-9 border border-[rgba(198,162,69,0.2)]"
          >
            <h3 className="font-cormorant text-xl md:text-2xl font-semibold text-accent-bright mb-4 md:mb-5">
              Проблема шаблонов
            </h3>
            <p className="font-cormorant text-lg md:text-xl text-text-body leading-[1.7]">
              Интернет переполнен бесплатными материалами по ИИ. Промпты на все случаи жизни, шаблоны воронок, готовые инструкции в стиле «подставь своё название и получи результат». Всё это работает ровно до того момента, когда твоя задача чуть сложнее шаблона. А она всегда чуть сложнее.
            </p>
          </motion.div>

          <motion.div
            variants={cardRight}
            className="bg-void/95 p-5 sm:p-7 md:p-9 border border-[rgba(198,162,69,0.2)]"
          >
            <h3 className="font-cormorant text-xl md:text-2xl font-semibold text-accent-bright mb-4 md:mb-5">
              Что такое вайбкодинг
            </h3>
            <p className="font-cormorant text-lg md:text-xl text-text-body leading-[1.7] mb-4 md:mb-5">
              То же самое происходит с вайбкодингом. Красивое слово, вокруг которого сейчас много шума. Если совсем просто:
            </p>
            <p className="font-cormorant text-lg md:text-xl text-white leading-[1.7] italic font-medium mb-4 md:mb-5">
              Вайбкодинг это когда ты описываешь задачу словами, а ИИ пишет за тебя код, собирает приложение, строит систему.
            </p>
            <p className="font-cormorant text-lg md:text-xl text-text-body leading-[1.7]">
              Без технического образования, без знания языков программирования. Звучит как магия и действительно работает. Но только если ты умеешь формулировать. Потому что ИИ делает именно то, что ты описал. Со всей точностью. И со всей неточностью тоже.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="bg-void/95 p-5 sm:p-7 md:p-9 border border-[rgba(198,162,69,0.2)] mt-4 md:mt-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="font-cormorant text-xl md:text-2xl font-semibold text-accent-bright mb-4 md:mb-5">
                Почему ТРИЗ
              </h3>
              <p className="font-cormorant text-lg md:text-xl text-text-body leading-[1.7] mb-4">
                Теория решения изобретательских задач - система, которую создал инженер Генрих Альтшуллер после изучения{" "}
                <span className="font-mono text-accent-bright">40 000</span> патентов. Он искал ответ на один вопрос: можно ли научить человека мыслить гениально?
              </p>
              <p className="font-cormorant text-lg md:text-xl text-text-body leading-[1.7]">
                Оказалось, можно. Гениальное решение почти всегда начинается с точно сформулированного противоречия, а не с перебора вариантов.
              </p>
            </div>
            <div>
              <h3 className="font-cormorant text-xl md:text-2xl font-semibold text-accent-bright mb-4 md:mb-5">
                ТРИЗ + вайбкодинг
              </h3>
              <p className="font-cormorant text-lg md:text-xl text-text-body leading-[1.7] mb-4">
                В этом курсе я соединяю ТРИЗ с вайбкодингом. Правильно сформулированная задача в руках ИИ становится не просто ответом на вопрос, а реализованной идеей.
              </p>
              <p className="font-cormorant text-lg md:text-xl text-text-body leading-[1.7] mb-4">
                Есть понятие <span className="font-mono text-accent-bright">ИКР</span>, идеальный конечный результат. Это когда ты описываешь не <em>как</em> сделать, а <em className="text-white">что именно должно произойти в идеале</em>.
              </p>
              <p className="font-cormorant text-lg md:text-xl text-accent-bright leading-[1.6] italic font-medium">
                И система сама находит путь.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-cormorant text-xl sm:text-2xl md:text-3xl lg:text-[36px] text-void leading-[1.35] text-center font-semibold mt-10 md:mt-14"
        >
          Именно этому я хочу тебя научить:
          <br />
          думать от идеала, а не от ограничений.
        </motion.p>
      </motion.div>
    </section>
  );
}
