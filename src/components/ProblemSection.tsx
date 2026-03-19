import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-l-2 border-primary/50 pl-8"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ты чувствуешь, что ИИ должен делать{" "}
            <span className="gradient-cosmic-text">больше</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Где-то внутри живёт ощущение, что ИИ должен делать для тебя больше. Намного больше.
            Но каждый раз упираешься в одно и то же место — и не очень понятно, что именно там не так.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            А где-то прямо сейчас обычные люди, далёкие от программирования, спокойно делают то,
            что ещё год назад казалось уделом целых команд разработчиков. Не потому что они умнее.
            Потому что знают один сдвиг в мышлении, который меняет всё.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
