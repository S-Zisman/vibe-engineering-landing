"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const fullText =
  "Ты когда-нибудь ловил себя на том, что лучшие идеи приходят не за столом, а в душе, в машине, на прогулке, когда руки заняты чем-то другим? Так вот. Именно там теперь и начинается работа.";

function Typewriter() {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), 1200);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= fullText.length) return;

    const ch = fullText[displayed.length];
    const speed = ch === "." || ch === "?" || ch === "," ? 120 : 30;

    const timer = setTimeout(() => {
      setDisplayed(fullText.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, started]);

  return (
    <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-white/90 leading-[1.6] max-w-2xl mx-auto mb-10">
      {displayed}
      <span className="inline-block w-[2px] h-[1.1em] bg-white/70 align-middle ml-0.5 animate-pulse" />
    </p>
  );
}

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-24 sm:py-28 md:py-36 lg:py-40">
      {/* Background image — visible at edges */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Vignette overlay — dark at edges, slightly lighter in center */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 65% at 50% 48%, rgba(9,8,10,0.45) 0%, rgba(9,8,10,0.7) 55%, rgba(9,8,10,0.92) 100%)
          `,
        }}
      />

      {/* Subtle gold ambience */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 50% 55%, rgba(198,162,69,0.06) 0%, transparent 100%)",
        }}
      />

      {/* Content panel with frosted glass */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6"
      >
        <div
          className="text-center px-6 sm:px-10 md:px-14 py-10 sm:py-12 md:py-16"
          style={{
            background: "rgba(9, 8, 10, 0.55)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(198, 162, 69, 0.12)",
          }}
        >
          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-cormorant text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-semibold leading-[1.15] mb-7 hero-gradient-text"
          >
            Думать от идеала,
            <br />
            а не от ограничений
          </motion.h1>

          <Typewriter />

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://app.sergeyzisman.tech/" className="hero-btn-filled">
              <span className="hero-btn-filled-text">Начать обучение</span>
            </a>
            <a
              href="https://wa.me/972586305753?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%BA%D1%83%D1%80%D1%81%D0%B5%20Vibe%20Engineering%202026"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-outline"
            >
              <span className="hero-btn-outline-text">Узнать больше</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
