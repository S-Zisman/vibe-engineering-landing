import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Зажигание",
    subtitle: "Почему ИИ даёт не то",
    text: "Ты поймёшь, почему получаешь от ИИ не тот результат — и это изменит каждый следующий запрос.",
  },
  {
    num: "02",
    title: "Навигация",
    subtitle: "Система мышления",
    text: "Освоишь систему мышления ТРИЗ — применительно к своим задачам, профессии, жизни.",
  },
  {
    num: "03",
    title: "Отрыв от Земли",
    subtitle: "За пределы чата",
    text: "Впервые выйдешь за пределы чата в профессиональную среду, где ИИ перестаёт отвечать и начинает делать.",
  },
  {
    num: "04",
    title: "Орбитальный манёвр",
    subtitle: "Память, характер, правила",
    text: "Научишься давать ИИ память и правила, чтобы он работал для тебя, а не для усреднённого пользователя.",
  },
  {
    num: "05",
    title: "Открытый космос",
    subtitle: "Первый агент",
    text: "Соберёшь своего первого агента — под свою задачу, под свою логику, без чужих шаблонов.",
  },
  {
    num: "06",
    title: "Миссия выполнена",
    subtitle: "Личная система",
    text: "Выстроишь систему: что автоматизировать, как масштабировать, как сделать чтобы это работало без тебя.",
  },
];

const StepsSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Шесть этапов <span className="gradient-cosmic-text">полёта</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center mb-16 text-lg"
        >
          Каждый следующий невозможен без предыдущего
        </motion.p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`bg-card border border-border rounded-lg p-6 ml-12 md:ml-0 ${i % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                    <span className="text-primary font-heading text-sm tracking-widest">{step.num}</span>
                    <h3 className="font-heading text-xl font-bold text-foreground mt-1">{step.title}</h3>
                    <p className="text-muted-foreground/70 text-sm mb-2">{step.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2 border-primary bg-background mt-6" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
