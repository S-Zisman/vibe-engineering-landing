import { motion } from "framer-motion";
import { Rocket, BarChart3, GraduationCap, Smartphone } from "lucide-react";

const stories = [
  {
    icon: Rocket,
    title: "Маркетолог-фрилансер",
    text: "Устал объяснять одно и то же каждому клиенту. Описал свой процесс словами, настроил — и теперь бриф превращается в готовое КП за сорок минут. Он не нанял ассистента. Он его построил.",
  },
  {
    icon: BarChart3,
    title: "Трейдер",
    text: "Каждый день тратил два часа на ресёрч. Собрал инструмент, который кладёт на стол готовый отчёт к открытию рынка. Решения принимает сам. Просто теперь у него есть на это время.",
  },
  {
    icon: GraduationCap,
    title: "Владелец школы",
    text: "Записывал вебинары, потом днями переводил их в материалы. Сейчас запись уходит в систему и возвращается конспектом, постами и email-серией.",
  },
  {
    icon: Smartphone,
    title: "Человек без кода",
    text: "Никогда не писал код. Описал что хочет получить — словами, голосом. Через три дня приложение уже работало.",
  },
];

const StoriesSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Вот что уже <span className="gradient-cosmic-text">происходит</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center mb-16 text-lg"
        >
          Обычные люди строят необычные вещи
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 hover:box-glow transition-shadow duration-500"
            >
              <s.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
