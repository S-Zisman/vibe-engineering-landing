import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section className="relative py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Вайбкодинг и ТРИЗ:{" "}
          <span className="gradient-cosmic-text">навигация по звёздам</span>
        </motion.h2>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h3 className="font-heading text-xl font-semibold text-primary mb-3">Что такое вайбкодинг</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ты описываешь задачу словами — а ИИ пишет за тебя код, собирает приложение, строит систему.
              Без технического образования. Звучит как магия и действительно работает.
              Но только если ты умеешь формулировать.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h3 className="font-heading text-xl font-semibold text-accent mb-3">Почему ТРИЗ</h3>
            <p className="text-muted-foreground leading-relaxed">
              Теория решения изобретательских задач — система, созданная Генрихом Альтшуллером после изучения 40 000 патентов.
              Гениальное решение почти всегда начинается с точно сформулированного противоречия.
              Как звёздная карта — показывает путь там, где другие видят только темноту.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-primary/30 rounded-lg p-8 box-glow"
          >
            <h3 className="font-heading text-xl font-semibold gradient-cosmic-text mb-3">ТРИЗ + вайбкодинг = полёт</h3>
            <p className="text-muted-foreground leading-relaxed">
              Правильно сформулированная задача в руках ИИ становится не просто ответом — а реализованной идеей.
              Есть понятие ИКР — идеальный конечный результат. Ты описываешь не <em>как</em> сделать,
              а <em>что именно должно произойти в идеале</em>. И система сама находит путь.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
