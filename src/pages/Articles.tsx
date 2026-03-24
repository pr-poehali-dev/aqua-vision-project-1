import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { articles } from "@/data/articles";

const categories = ["Все", "Для новичков", "Питание", "Плавание", "Тактика", "IRONMAN"];

const Articles = () => {
  const [active, setActive] = useState("Все");

  const filtered = active === "Все" ? articles : articles.filter((a) => a.category === active);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/85 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-orange-700 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={18} className="text-white" />
            </div>
            <span className="font-display font-black text-2xl tracking-tight bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              TRIATHLON
            </span>
          </Link>
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <Link to="/#disciplines" className="text-muted-foreground hover:text-white transition-colors">Дисциплины</Link>
            <Link to="/#races" className="text-muted-foreground hover:text-white transition-colors">Форматы гонок</Link>
            <Link to="/articles" className="text-white font-semibold">Статьи</Link>
          </nav>
          <Link to="/" className="px-5 py-2.5 text-sm font-semibold border border-white/20 text-white rounded-full hover:border-accent hover:bg-accent/10 transition-all">
            На главную
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <span className="text-xs font-semibold tracking-widest text-accent/70 uppercase">База знаний</span>
          </div>
          <h1 className="text-6xl lg:text-7xl font-display font-black tracking-tighter text-white mb-6">
            Статьи о <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">триатлоне</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl font-light">
            Всё, что нужно знать — от первых шагов до финиша IRONMAN. Советы экспертов, тактика гонок и разбор ошибок.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                  active === cat
                    ? "bg-accent text-white border-accent shadow-lg shadow-accent/30"
                    : "border-white/15 text-white/60 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((article, i) => (
              <Link
                key={article.id}
                to={`/articles/${article.slug}`}
                className="group block rounded-2xl border border-white/10 hover:border-accent/50 bg-card/50 hover:bg-card overflow-hidden transition-all duration-300"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={article.coverImg}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-white/40 flex items-center gap-1">
                      <Icon name="Clock" size={12} />
                      {article.readTime} мин
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-white/55 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-accent text-sm font-semibold">
                    Читать статью
                    <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            ))}
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
          <p className="text-sm text-white/30">© 2025 TRIATHLON. Всё о спорте на выносливость.</p>
        </div>
      </footer>
    </div>
  );
};

export default Articles;
