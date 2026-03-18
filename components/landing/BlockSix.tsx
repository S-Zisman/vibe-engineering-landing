"use client";

import { motion } from "framer-motion";

const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeChild = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function StartCard() {
  return (
    <motion.div
      variants={fadeChild}
      whileHover={{ borderColor: "rgba(198,162,69,0.45)" }}
      className="col-span-1 sm:col-span-2 border border-dashed border-[rgba(198,162,69,0.25)] p-6 sm:p-8 md:p-10 transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row md:items-start md:gap-12">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <span className="block font-mono text-xs uppercase tracking-[0.2em] text-text-ghost font-medium">
            Точка входа
          </span>
          <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-accent-bright font-medium mt-3 mb-4">
            СТАРТ
          </h3>
          <div className="font-mono text-3xl sm:text-4xl font-bold text-text-primary leading-none mb-5">
            Бесплатно
          </div>
          <a
            href="https://app.sergeyzisman.tech/"
            className="inline-block text-center font-mono text-xs uppercase tracking-[0.15em] font-medium py-3 px-8 border border-[rgba(198,162,69,0.3)] text-accent-bright hover:bg-[rgba(198,162,69,0.08)] transition-all duration-500"
          >
            Начать бесплатно
          </a>
        </div>
        <div className="md:w-2/3">
          <p className="font-cormorant text-lg md:text-xl text-text-body leading-[1.65]">
            Ты слышал про вайбкодинг, про ИИ-агентов, про людей которые собирают приложения за выходные. Звучит интересно, но пока не очень понятно как это вообще работает и есть ли тебе туда дорога. Здесь ты получишь ответ на этот вопрос. Живые примеры, логика ТРИЗ и ИКР, первый взгляд на инструменты которые меняют правила игры. Как сказал один мудрый человек: когда перестаёшь что-либо понимать, ты на верном пути. Добро пожаловать.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function OrbitCard() {
  return (
    <motion.div
      variants={fadeChild}
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
      className="relative flex flex-col bg-surface border border-[rgba(198,162,69,0.15)] transition-colors duration-500 hover:border-[rgba(198,162,69,0.35)]"
    >
      <div
        className="w-full"
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(198,162,69,0.3) 50%, transparent 100%)",
        }}
      />
      <div className="flex flex-col flex-1 p-6 sm:p-7 md:p-8">
        <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-accent-mid font-medium mb-4">
          ОРБИТА
        </h3>
        <div className="mb-5">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-3xl sm:text-4xl md:text-[42px] font-bold text-text-primary leading-none">
              270 €
            </span>
            <span className="font-mono text-base text-text-ghost line-through">
              390 €
            </span>
          </div>
        </div>
        <p className="font-cormorant text-lg md:text-xl text-text-body leading-[1.65] mb-7 flex-1">
          Ты уже понимаешь что ИИ может делать для тебя больше. Тебе не нужны долгие объяснения, тебе нужно наконец выйти за пределы чата и попробовать самому. В этом тарифе ты впервые работаешь в профессиональной среде, строишь первые сценарии под свою задачу и свою профессию, получаешь инструмент который начинает работать сразу. Именно для твоей области, твоего ритма, твоих задач.
        </p>
        <a
          href="https://wa.me/972586305753?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%9C%D0%BD%D0%B5%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%B5%D0%BD%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%20%C2%AB%D0%9E%D1%80%D0%B1%D0%B8%D1%82%D0%B0%C2%BB.%20%D0%9A%D0%B0%D0%BA%20%D1%8F%20%D0%BC%D0%BE%D0%B3%D1%83%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B8%D1%82%D1%8C%20%D0%B8%20%D0%BD%D0%B0%D1%87%D0%B0%D1%82%D1%8C%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn-outline block text-center"
        >
          <span className="hero-btn-outline-text">Выбрать Орбиту</span>
        </a>
      </div>
    </motion.div>
  );
}

function CosmosCard() {
  return (
    <motion.div
      variants={fadeChild}
      whileHover={{ y: -4, boxShadow: "0 0 90px rgba(198,162,69,0.12), 0 12px 40px rgba(0,0,0,0.4)" }}
      className="relative flex flex-col sm:-mt-2 sm:mb-2"
      style={{
        boxShadow: "0 0 80px rgba(198,162,69,0.08), 0 12px 40px rgba(0,0,0,0.4)",
      }}
    >
      {/* Gradient border */}
      <div
        className="absolute inset-0 pointer-events-none cosmos-border-shimmer"
        style={{
          background: "linear-gradient(135deg, #8B7530 0%, #C6A245 30%, #E8D08A 50%, #C6A245 70%, #8B7530 100%)",
          backgroundSize: "200% 200%",
          padding: "2px",
        }}
      >
        <div className="w-full h-full bg-surface" />
      </div>

      {/* Badge */}
      <div className="relative z-10 flex justify-center -mt-3.5">
        <span
          className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] font-medium px-5 py-1.5 text-void"
          style={{
            background: "linear-gradient(135deg, #C6A245 0%, #E8D08A 50%, #C6A245 100%)",
          }}
        >
          Популярный выбор
        </span>
      </div>

      <div className="relative z-10 flex flex-col flex-1 p-6 sm:p-7 md:p-8">
        <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-accent-bright font-medium mb-4">
          КОСМОС
        </h3>
        <div className="mb-5">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-3xl sm:text-4xl md:text-[44px] font-bold text-accent-bright leading-none">
              380 €
            </span>
            <span className="font-mono text-base text-text-ghost line-through">
              590 €
            </span>
          </div>
        </div>
        <p className="font-cormorant text-lg md:text-xl text-text-body leading-[1.65] mb-7 flex-1">
          Ты уже попробовал и понял что это работает. Теперь хочешь глубже. Хочешь строить не просто сценарии, а полноценные продукты с архитектурой, базами данных, реальной инфраструктурой. Хочешь понимать не только как нажимать кнопки, но и почему что-то идёт не так и как это исправить. Здесь ты получаешь мой личный опыт в полном объёме: что работает на практике, где типичные ловушки, как выстроить систему которая не рассыпается при первой нестандартной задаче. Это тариф для тех, кто пришёл не просто попробовать, а построить.
        </p>
        <a
          href="https://wa.me/972586305753?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%9C%D0%BD%D0%B5%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%B5%D0%BD%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%20%C2%AB%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D1%81%C2%BB.%20%D0%9A%D0%B0%D0%BA%20%D1%8F%20%D0%BC%D0%BE%D0%B3%D1%83%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B8%D1%82%D1%8C%20%D0%B8%20%D0%BD%D0%B0%D1%87%D0%B0%D1%82%D1%8C%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn-filled block text-center"
        >
          <span className="hero-btn-filled-text">Выбрать Космос</span>
        </a>
      </div>
    </motion.div>
  );
}

function MissionCard() {
  return (
    <motion.div
      variants={fadeChild}
      whileHover={{ borderColor: "rgba(198,162,69,0.4)" }}
      className="relative flex flex-col col-span-1 sm:col-span-2 overflow-hidden transition-all duration-500"
      style={{
        background: "linear-gradient(135deg, rgba(198,162,69,0.06) 0%, rgba(9,8,10,1) 40%, rgba(9,8,10,1) 60%, rgba(198,162,69,0.04) 100%)",
        border: "1px solid rgba(198,162,69,0.25)",
      }}
    >
      <div className="flex flex-col md:flex-row md:gap-10 p-6 sm:p-8 md:p-10">
        <div className="md:w-2/5 mb-6 md:mb-0">
          <span
            className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] font-medium px-4 py-1.5 text-void mb-5"
            style={{
              background: "linear-gradient(135deg, #C6A245 0%, #E8D08A 50%, #C6A245 100%)",
            }}
          >
            Максимум 5 человек
          </span>
          <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-accent-bright font-medium mb-4">
            МИССИЯ
          </h3>
          <div className="mb-5">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-3xl sm:text-4xl md:text-[44px] font-bold text-text-primary leading-none">
                980 €
              </span>
              <span className="font-mono text-base text-text-ghost line-through">
                1 490 €
              </span>
            </div>
          </div>
          <a
            href="https://wa.me/972586305753?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%9C%D0%BD%D0%B5%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%B5%D0%BD%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%20%C2%AB%D0%9C%D0%B8%D1%81%D1%81%D0%B8%D1%8F%C2%BB.%20%D0%9A%D0%B0%D0%BA%20%D1%8F%20%D0%BC%D0%BE%D0%B3%D1%83%20%D0%BF%D0%BE%D0%B4%D0%B0%D1%82%D1%8C%20%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D1%83%20%D0%B8%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B8%D1%82%D1%8C%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-filled inline-block text-center"
          >
            <span className="hero-btn-filled-text">Подать заявку</span>
          </a>
        </div>
        <div className="md:w-3/5">
          <p className="font-cormorant text-lg md:text-xl text-text-body leading-[1.65]">
            У тебя есть конкретная идея или задача, и ты хочешь довести её до результата, а не просто научиться. Максимум 5 человек в потоке. Я иду рядом пока твой проект не заработает: ты строишь, я думаю вместе с тобой, задаю правильные вопросы, разбираю где застрял, помогаю видеть то что изнутри не видно. Это про твой конкретный результат. Именно поэтому больше пяти человек одновременно я не беру.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlockSix() {
  return (
    <section id="pricing" className="bg-void py-14 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-cormorant text-2xl sm:text-3xl md:text-[42px] font-semibold leading-tight mb-10 md:mb-16 hero-gradient-text text-center"
        >
          Выбери как ты хочешь пройти этот путь
        </motion.h2>

        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 items-start"
        >
          <StartCard />
          <OrbitCard />
          <CosmosCard />
          <MissionCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 md:mt-14 text-center"
        >
          <p className="font-cormorant text-lg md:text-xl text-text-muted leading-[1.6] max-w-3xl mx-auto italic">
            Текущие цены действуют до 26 марта 2026 включительно. После этой даты они будут зафиксированы по верхней планке, и пересмотра в меньшую сторону не планируется.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
