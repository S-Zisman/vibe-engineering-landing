"use client";

import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ModuleOne() {
  return (
    <section
      className="py-14 sm:py-20 md:py-28 px-4 sm:px-6"
      style={{
        background: "linear-gradient(135deg, #C6A245 0%, #E8D08A 40%, #D4AF50 70%, #B89530 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-void/95 px-6 py-8 sm:px-8 sm:py-10 md:px-14 md:py-14"
        >
          <h2 className="font-cormorant text-2xl sm:text-3xl md:text-[40px] font-semibold leading-[1.25] mb-8 md:mb-10 hero-gradient-text border-l-2 border-[#C6A245] pl-5 sm:pl-6">
            Ты чувствуешь, что ИИ должен делать больше
          </h2>

          <p className="font-cormorant text-lg sm:text-xl md:text-[22px] lg:text-2xl text-text-body leading-[1.7] mb-6 md:mb-8">
            Где-то внутри живёт ощущение, что ИИ должен
            делать для тебя больше. Намного больше. Но каждый раз упираешься в одно и то же
            место, и не очень понятно, что именно там не так.
          </p>

          <p className="font-cormorant text-lg sm:text-xl md:text-[22px] lg:text-2xl text-text-body leading-[1.7]">
            А где-то прямо сейчас обычные люди, далёкие от
            программирования, спокойно делают то, что ещё год назад
            казалось уделом целых команд разработчиков.{" "}
            <span className="text-white font-medium">
              Не потому что они умнее. Потому что знают один сдвиг в мышлении, который меняет всё.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
