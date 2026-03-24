import { useParams, Link, Navigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { articles } from "@/data/articles";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/articles" replace />;

  const others = articles.filter((a) => a.id !== article.id).slice(0, 3);

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
          <Link to="/articles" className="px-5 py-2.5 text-sm font-semibold border border-white/20 text-white rounded-full hover:border-accent hover:bg-accent/10 transition-all flex items-center gap-2">
            <Icon name="ArrowLeft" size={14} />
            Все статьи
          </Link>
        </div>
      </header>

      {/* Cover */}
      <div className="relative h-[50vh] min-h-72 pt-20">
        <img src={article.coverImg} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pb-28">
        {/* Meta */}
        <div className="flex items-center gap-4 mb-6 -mt-2">
          <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
            {article.category}
          </span>
          <span className="text-xs text-white/40 flex items-center gap-1.5">
            <Icon name="Clock" size={12} />
            {article.readTime} минут чтения
          </span>
        </div>

        <h1 className="text-4xl lg:text-5xl font-display font-black text-white leading-tight mb-10 tracking-tighter">
          {article.title}
        </h1>

        <p className="text-xl text-white/70 leading-relaxed mb-10 font-light border-l-4 border-accent/50 pl-6">
          {article.excerpt}
        </p>

        <div className="space-y-8">
          {article.content.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="text-2xl font-bold text-white mb-3">{section.heading}</h2>
              )}
              <p className="text-white/70 leading-relaxed text-lg">{section.text}</p>
            </div>
          ))}
        </div>


      </div>

      {/* Other Articles */}
      {others.length > 0 && (
        <section className="py-20 px-6 bg-card/30 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-10">Читайте также</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((a) => (
                <Link
                  key={a.id}
                  to={`/articles/${a.slug}`}
                  className="group block rounded-2xl border border-white/10 hover:border-accent/50 bg-card/50 hover:bg-card overflow-hidden transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={a.coverImg} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                      {a.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-3 group-hover:text-accent transition-colors leading-snug">
                      {a.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-accent text-sm font-semibold">
                      Читать <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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

export default ArticlePage;