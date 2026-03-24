import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const SWIM_IMG = "https://cdn.poehali.dev/projects/16ba86b7-3f87-4e94-b6a3-0ebb3f28a323/files/8c9b8718-8922-4f31-a85a-db95ef342026.jpg";
const BIKE_IMG = "https://cdn.poehali.dev/projects/16ba86b7-3f87-4e94-b6a3-0ebb3f28a323/files/b1f1be3a-7be9-40bc-b7b1-3818edd1b0c7.jpg";
const RUN_IMG = "https://cdn.poehali.dev/projects/16ba86b7-3f87-4e94-b6a3-0ebb3f28a323/files/31778836-c32c-497c-82c5-e41bc9a46a01.jpg";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "disciplines", "races", "tips", "cta"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.12 }
      );
      observers[id].observe(element);
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  const disciplines = [
    {
      icon: "Waves",
      title: "Плавание",
      distance: "750 м — 3,8 км",
      desc: "Первый этап. Открытая вода, техника кроля, экономия сил перед долгим днём.",
      img: SWIM_IMG,
    },
    {
      icon: "Bike",
      title: "Велогонка",
      distance: "20 км — 180 км",
      desc: "Самый длинный этап. Аэродинамика, темп, питание — ключи к успеху на байке.",
      img: BIKE_IMG,
    },
    {
      icon: "PersonStanding",
      title: "Бег",
      distance: "5 км — 42,2 км",
      desc: "Финальный этап. Когда ноги уже «кирпичные» — только воля и правильная техника.",
      img: RUN_IMG,
    },
  ];

  const formats = [
    { name: "Sprint", swim: "750 м", bike: "20 км", run: "5 км", level: "Начинающим" },
    { name: "Olympic", swim: "1,5 км", bike: "40 км", run: "10 км", level: "Любителям" },
    { name: "Half IRONMAN", swim: "1,9 км", bike: "90 км", run: "21,1 км", level: "Опытным" },
    { name: "IRONMAN", swim: "3,8 км", bike: "180 км", run: "42,2 км", level: "Профессионалам" },
  ];

  const tips = [
    { icon: "Dumbbell", title: "Тренировочный план", desc: "Сбалансированный план из 3 дисциплин — базис любого триатлониста. Минимум 3 тренировки в неделю." },
    { icon: "Utensils", title: "Питание на гонке", desc: "Гели, изотоники, бананы — знай, что и когда есть, чтобы не «стукнуться» на последних километрах." },
    { icon: "Timer", title: "Переходные зоны", desc: "Т1 и Т2 — полноценные этапы гонки. Отработанная смена снаряжения экономит минуты на финише." },
    { icon: "HeartPulse", title: "Восстановление", desc: "Сон, растяжка, периодизация нагрузок. Прогресс происходит не на тренировке, а после неё." },
    { icon: "Shield", title: "Экипировка", desc: "Гидрокостюм, аэрошлем, велотуфли, беговые кроссовки — подбирай под себя и дистанцию." },
    { icon: "Map", title: "Соревнования в России", desc: "От Москвы до Байкала — соревнования по триатлону проходят во всех регионах круглый год." },
  ];

  const stats = [
    { value: "3", label: "Дисциплины в одной гонке" },
    { value: "226", label: "км полный IRONMAN" },
    { value: "17:00", label: "Лимит времени IRONMAN" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/85 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-orange-700 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={18} className="text-white" />
            </div>
            <span className="font-display font-black text-2xl tracking-tight bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              TRIATHLON
            </span>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#disciplines" className="text-muted-foreground hover:text-white transition-colors">Дисциплины</a>
            <a href="#races" className="text-muted-foreground hover:text-white transition-colors">Форматы гонок</a>
            <a href="#tips" className="text-muted-foreground hover:text-white transition-colors">Советы</a>
            <Link to="/articles" className="text-muted-foreground hover:text-white transition-colors">Статьи</Link>
          </nav>
          <Link to="/articles" className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-accent to-orange-600 text-white rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all">
            Читать статьи
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-28 pb-0 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={SWIM_IMG}
            alt="Триатлон — плавание на рассвете"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div
            className={`max-w-2xl transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-6 inline-block">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase bg-accent/10 border border-accent/30 px-4 py-1.5 rounded-full">
                Плыви · Крути · Беги
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-display font-black leading-none mb-6 tracking-tighter">
              <span className="text-white">Три</span>
              <span className="bg-gradient-to-br from-accent to-orange-400 bg-clip-text text-transparent">атлон</span>
            </h1>
            <p className="text-xl text-white/75 leading-relaxed mb-10 font-light max-w-xl">
              Полный гид по самому комплексному виду спорта на выносливость. 
              От первого спринта до финишной черты IRONMAN.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row mb-16">
              <a
                href="#disciplines"
                className="group px-8 py-4 bg-gradient-to-r from-accent to-orange-600 text-white rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all font-semibold text-lg flex items-center gap-3 justify-center"
              >
                Узнать всё о триатлоне
                <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#races"
                className="px-8 py-4 border border-white/30 rounded-full hover:border-accent hover:bg-accent/10 transition-all font-medium text-lg text-white text-center"
              >
                Форматы гонок
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/15">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-black text-accent mb-1">{s.value}</div>
                  <p className="text-sm text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section id="disciplines" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["disciplines"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-semibold tracking-widest text-accent/70 uppercase">3 этапа</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6 text-white">
              Три дисциплины —<br />
              <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">один гонщик</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Каждый этап требует отдельной техники, тактики и физической подготовки. Именно это делает триатлон уникальным.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {disciplines.map((d, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-700 ${visibleSections["disciplines"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center">
                      <Icon name={d.icon} fallback="Star" size={20} className="text-accent" />
                    </div>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      {d.distance}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{d.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Race Formats Section */}
      <section id="races" className="py-28 px-6 bg-card/40">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["races"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-semibold tracking-widest text-accent/70 uppercase">Дистанции</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6 text-white">
              Форматы <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">гонок</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              От 30-минутного спринта до 17-часового испытания — выбери свой уровень.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {formats.map((f, i) => (
              <div
                key={i}
                className={`relative p-7 rounded-2xl border border-white/10 bg-card/70 hover:border-accent/50 hover:bg-card transition-all duration-500 group ${visibleSections["races"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute top-4 right-4">
                  <span className="text-xs text-accent font-semibold bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
                    {f.level}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-6 group-hover:text-accent transition-colors">{f.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Waves" size={16} className="text-accent shrink-0" />
                    <div>
                      <div className="text-xs text-white/40 mb-0.5">Плавание</div>
                      <div className="text-sm font-semibold text-white">{f.swim}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Bike" size={16} className="text-accent shrink-0" />
                    <div>
                      <div className="text-xs text-white/40 mb-0.5">Велосипед</div>
                      <div className="text-sm font-semibold text-white">{f.bike}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="PersonStanding" size={16} className="text-accent shrink-0" />
                    <div>
                      <div className="text-xs text-white/40 mb-0.5">Бег</div>
                      <div className="text-sm font-semibold text-white">{f.run}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section id="tips" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["tips"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-semibold tracking-widest text-accent/70 uppercase">База знаний</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6 text-white">
              Советы <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">новичкам</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Всё, что нужно знать перед первым стартом — от экипировки до тактики питания.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, i) => (
              <div
                key={i}
                className={`group p-8 border border-white/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-500 ${visibleSections["tips"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors">
                  <Icon name={tip.icon} fallback="Star" size={22} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative overflow-hidden rounded-3xl p-16 text-center transition-all duration-1000 ${visibleSections["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="absolute inset-0">
              <img src={RUN_IMG} alt="Финиш триатлона" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-background/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/70" />
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl lg:text-7xl font-display font-black tracking-tighter text-white mb-6">
                Готов к своему <br />
                <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                  первому старту?
                </span>
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light">
                Тысячи людей делают это каждый год. Неважно, сколько тебе лет и какая у тебя физическая форма — 
                триатлон доступен каждому.
              </p>
              <div className="flex gap-4 justify-center flex-col sm:flex-row">
                <button className="group px-10 py-5 bg-gradient-to-r from-accent to-orange-600 text-white rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-bold text-lg flex items-center gap-3 justify-center">
                  Начать подготовку
                  <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition" />
                </button>
                <button className="px-10 py-5 border border-white/30 rounded-full hover:border-accent hover:bg-accent/10 transition-all font-medium text-lg text-white">
                  Расписание гонок
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-accent to-orange-700 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={14} className="text-white" />
            </div>
            <span className="font-display font-black text-xl tracking-tight text-white">TRIATHLON</span>
          </div>
          <nav className="flex gap-8 text-sm text-white/50">
            <a href="#disciplines" className="hover:text-white transition-colors">Дисциплины</a>
            <a href="#races" className="hover:text-white transition-colors">Гонки</a>
            <a href="#tips" className="hover:text-white transition-colors">Советы</a>
          </nav>
          <p className="text-sm text-white/30">© 2025 TRIATHLON. Всё о спорте на выносливость.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;