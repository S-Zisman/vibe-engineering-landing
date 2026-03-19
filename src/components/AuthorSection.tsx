import { motion } from "framer-motion";

const AuthorSection = () => {
  return (
    <section className="relative py-24 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/30 box-glow flex-shrink-0">
            <img
              src="https://vibecodingcourse.sergeyzisman.tech/author.png"
              alt="Сергей Зисман"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Сергей Зисман
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Всю жизнь строю мосты между тем, что кажется несовместимым. Между технологиями и интуицией.
              Между бизнес-стратегией и работой с сознанием.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Я не стал программистом. Я стал человеком, который умеет точно формулировать, что нужно —
              и находить тех, кто это реализует. Сначала это были люди. Теперь это ИИ.
            </p>
            <p className="text-foreground font-heading text-lg italic">
              «Стена между идеей и воплощением рухнула. И я хочу показать это каждому.»
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
