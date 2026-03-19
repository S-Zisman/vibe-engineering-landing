import { motion } from "framer-motion";
import tierStart from "@/assets/tier-start.jpg";
import tierOrbit from "@/assets/tier-orbit.jpg";
import tierCosmos from "@/assets/tier-cosmos.jpg";
import tierMission from "@/assets/tier-mission.jpg";

const tiers = [
  {
    name: "СТАРТ",
    tagline: "Мечта о звёздах",
    image: tierStart,
    price: "Бесплатно",
    oldPrice: null,
    badge: "Точка входа",
    description:
      "Ты слышал про вайбкодинг, про ИИ-агентов, про людей которые собирают приложения за выходные. Здесь ты получишь первый взгляд на инструменты, которые меняют правила игры. Как маленький мальчик, который смотрит на звёзды и впервые чувствует: там — моё будущее.",
    cta: "Начать бесплатно",
    href: "https://app.sergeyzisman.tech/",
    highlight: false,
  },
  {
    name: "ОРБИТА",
    tagline: "Первый выход",
    image: tierOrbit,
    price: "270 €",
    oldPrice: "390 €",
    badge: null,
    description:
      "Ты уже понимаешь, что ИИ может больше. Тебе нужно наконец выйти за пределы чата и попробовать самому. Как первый выход на орбиту — ты покидаешь привычное и начинаешь видеть Землю по-другому. Строишь первые сценарии под свою задачу и профессию.",
    cta: "Выбрать Орбиту",
    href: "https://wa.me/972586305753?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%9C%D0%BD%D0%B5%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%B5%D0%BD%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%20%C2%AB%D0%9E%D1%80%D0%B1%D0%B8%D1%82%D0%B0%C2%BB.",
    highlight: false,
  },
  {
    name: "КОСМОС",
    tagline: "Свободный полёт",
    image: tierCosmos,
    price: "380 €",
    oldPrice: "590 €",
    badge: "Популярный выбор",
    description:
      "Ты уже попробовал и понял — это работает. Теперь хочешь строить полноценные продукты. Как космонавт в открытом пространстве — вокруг бесконечность возможностей. Архитектура, базы данных, инфраструктура. Мой опыт — в полном объёме.",
    cta: "Выбрать Космос",
    href: "https://wa.me/972586305753?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%9C%D0%BD%D0%B5%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%B5%D0%BD%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%20%C2%AB%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D1%81%C2%BB.",
    highlight: true,
  },
  {
    name: "МИССИЯ",
    tagline: "Выполнение цели",
    image: tierMission,
    price: "980 €",
    oldPrice: "1 490 €",
    badge: "Макс. 5 человек",
    description:
      "У тебя есть конкретная идея и ты хочешь довести её до результата. Как высадка на новую планету — ты водружаешь флаг и знаешь: миссия выполнена. Я иду рядом, пока твой проект не заработает. Максимум 5 человек в потоке.",
    cta: "Подать заявку",
    href: "https://wa.me/972586305753?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%9C%D0%BD%D0%B5%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%B5%D0%BD%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%20%C2%AB%D0%9C%D0%B8%D1%81%D1%81%D0%B8%D1%8F%C2%BB.",
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Выбери свой <span className="gradient-cosmic-text">маршрут</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center mb-16 text-lg max-w-2xl mx-auto"
        >
          От первой мечты о звёздах — до выполнения своей Миссии
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative bg-card border rounded-xl overflow-hidden flex flex-col ${
                tier.highlight
                  ? "border-primary/50 box-glow"
                  : "border-border"
              }`}
            >
              {tier.badge && (
                <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-heading font-semibold ${
                  tier.highlight
                    ? "gradient-cosmic text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}>
                  {tier.badge}
                </div>
              )}

              <div className="h-48 overflow-hidden">
                <img
                  src={tier.image}
                  alt={tier.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-card" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-primary text-xs tracking-[0.2em] uppercase font-heading mb-1">
                  {tier.tagline}
                </p>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{tier.name}</h3>

                <div className="mb-4">
                  <span className="font-heading text-3xl font-bold text-foreground">{tier.price}</span>
                  {tier.oldPrice && (
                    <span className="ml-2 text-muted-foreground line-through text-lg">{tier.oldPrice}</span>
                  )}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                  {tier.description}
                </p>

                <a
                  href={tier.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-lg font-heading font-semibold transition-all ${
                    tier.highlight
                      ? "gradient-cosmic text-primary-foreground hover:opacity-90"
                      : "border border-primary/30 text-primary hover:bg-primary/10"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          Текущие цены действуют до 26 марта 2026 включительно.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
