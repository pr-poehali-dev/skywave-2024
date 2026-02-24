import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Марина К.",
    text: "Вызвала в 2 ночи — приехали за 40 минут. Клопов не видим уже полгода. Огромное спасибо!",
    stars: 5,
    avatar: "М",
  },
  {
    name: "Алексей В.",
    text: "Профессионалы своего дела. Тараканы пропали после первой же обработки. Гарантия реально работает.",
    stars: 5,
    avatar: "А",
  },
  {
    name: "Ольга П.",
    text: "Живём с маленькими детьми — объяснили, что препараты безопасны. Мышей нет уже 8 месяцев.",
    stars: 5,
    avatar: "О",
  },
  {
    name: "Дмитрий С.",
    text: "Быстро, чисто, без запаха. Приехали через час после звонка. Рекомендую всем соседям.",
    stars: 5,
    avatar: "Д",
  },
];

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [reviewIndex, setReviewIndex] = useState(0);
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "features", "services", "how", "reviews", "contacts"];

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
        { threshold: 0.1 }
      );
      observers[id].observe(element);
    });

    return () => Object.values(observers).forEach((o) => o.disconnect());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/90 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
              <Icon name="ShieldCheck" size={22} className="text-white" />
            </div>
            <div>
              <div className="font-display font-black text-xl tracking-tight text-white">
                Эко-Контроль <span className="text-accent">24</span>
              </div>
              <div className="text-xs text-muted-foreground leading-none">Дезинсекция и дератизация</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#services" className="text-muted-foreground hover:text-white transition-colors">Услуги</a>
            <a href="#how" className="text-muted-foreground hover:text-white transition-colors">Как работаем</a>
            <a href="#reviews" className="text-muted-foreground hover:text-white transition-colors">Отзывы</a>
            <a href="#contacts" className="text-muted-foreground hover:text-white transition-colors">Контакты</a>
          </nav>
          <a
            href="tel:+78001234567"
            className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-full hover:bg-accent/90 transition-all font-semibold text-sm shadow-lg shadow-accent/30"
          >
            <Icon name="Phone" size={16} className="text-white" />
            <span className="hidden sm:inline">Экстренный вызов 24/7</span>
            <span className="sm:hidden">Вызвать</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-28 pb-24 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,107,0,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,107,0,0.08)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="mb-6 inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium tracking-wider text-accent uppercase">Работаем круглосуточно</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-black leading-tight mb-6 tracking-tighter">
                <span className="text-white">Тараканы, клопы</span>
                <br />
                <span className="text-white">или грызуны?</span>
                <br />
                <span className="text-accent">Уничтожим за 1 час!</span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
                Бесплатный выезд специалиста. Гарантия до 3-х лет. Безопасно для детей и животных.
              </p>
              <div className="flex gap-4 flex-col sm:flex-row">
                <a
                  href="tel:+78001234567"
                  className="group px-8 py-4 bg-accent text-white rounded-full hover:bg-accent/90 hover:shadow-2xl hover:shadow-accent/40 transition-all font-bold text-lg flex items-center gap-3 justify-center"
                >
                  <Icon name="Siren" size={22} className="text-white" />
                  Вызвать бригаду
                </a>
                <a
                  href="#contacts"
                  className="px-8 py-4 border border-white/20 rounded-full hover:border-accent/60 hover:bg-accent/10 transition-all font-medium text-lg text-white text-center"
                >
                  Оставить заявку
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/10">
                <div>
                  <div className="text-3xl font-black text-accent mb-1">30–60</div>
                  <p className="text-sm text-white/50">Минут до приезда</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">3 года</div>
                  <p className="text-sm text-white/50">Гарантия на работы</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-accent mb-1">5000+</div>
                  <p className="text-sm text-white/50">Довольных клиентов</p>
                </div>
              </div>
            </div>

            <div
              className={`relative hidden lg:flex items-center justify-center h-[500px] transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent rounded-3xl blur-3xl animate-pulse" />
              <div className="relative z-10 w-72 h-72 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center">
                <div className="w-52 h-52 bg-accent/20 border border-accent/30 rounded-full flex items-center justify-center">
                  <div className="w-36 h-36 bg-accent/30 border border-accent/40 rounded-full flex items-center justify-center">
                    <Icon name="ShieldCheck" size={64} className="text-accent" />
                  </div>
                </div>
              </div>
              <div className="absolute top-12 right-8 bg-card border border-accent/30 rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={18} className="text-accent" />
                  <span className="text-sm font-semibold text-white">Приедем за 60 мин</span>
                </div>
              </div>
              <div className="absolute bottom-16 left-4 bg-card border border-accent/30 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Icon name="Star" size={18} className="text-accent" />
                  <span className="text-sm font-semibold text-white">Рейтинг 5.0 · 500+ отзывов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="features" className="py-20 px-6 bg-accent/5 border-y border-accent/10">
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${visibleSections["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {[
              { icon: "Clock", title: "Прибытие за 30–60 минут", desc: "Работаем круглосуточно, без выходных" },
              { icon: "Search", title: "Бесплатная диагностика", desc: "Специалист оценит объём работ без оплаты" },
              { icon: "ShieldCheck", title: "Гарантия до 3 лет", desc: "Письменная гарантия на все виды работ" },
              { icon: "Heart", title: "Безопасно для семьи", desc: "Препараты не вредят детям и животным" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-card/50 border border-accent/10 hover:border-accent/40 rounded-2xl transition-all"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon as "Clock"} size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections["services"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Каталог услуг</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Что мы уничтожаем
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Bug",
                title: "Уничтожение клопов",
                desc: "Горячий туман, химическая обработка. Полное уничтожение за 1 визит.",
                price: "от 1 500 ₽",
                tag: "Хит",
              },
              {
                icon: "AlertTriangle",
                title: "Уничтожение тараканов",
                desc: "Гель, инсектицид, приманки. Гарантия 1 год на результат.",
                price: "от 1 200 ₽",
                tag: "",
              },
              {
                icon: "Rat",
                title: "Дератизация",
                desc: "Крысы и мыши. Раскладка приманок, установка ловушек, пломбировка нор.",
                price: "от 2 000 ₽",
                tag: "",
              },
              {
                icon: "Wind",
                title: "Холодный/горячий туман",
                desc: "Профессиональная обработка помещений — склады, рестораны, офисы.",
                price: "от 2 500 ₽",
                tag: "Профи",
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`group relative flex flex-col border border-accent/10 hover:border-accent/50 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-500 overflow-hidden ${visibleSections["services"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {s.tag && (
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
                    {s.tag}
                  </div>
                )}
                <div className="p-6 flex-1">
                  <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all">
                    <Icon name={s.icon as "Bug"} size={28} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="text-2xl font-black text-accent">{s.price}</div>
                </div>
                <div className="p-4 border-t border-accent/10">
                  <a
                    href="#contacts"
                    className="w-full block text-center py-3 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-all"
                  >
                    Заказать обработку
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как мы работаем */}
      <section id="how" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Процесс</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Как мы работаем
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", icon: "Phone", title: "Звонок", desc: "Позвоните или оставьте заявку — операторы ответят в любое время суток" },
              { num: "02", icon: "Car", title: "Приезд", desc: "Специалист приедет с оборудованием через 30–60 минут после вызова" },
              { num: "03", icon: "Spray", title: "Обработка", desc: "Профессиональная обработка сертифицированными препаратами" },
              { num: "04", icon: "ClipboardCheck", title: "Проверка", desc: "Осмотр результата, выдача гарантийного талона, рекомендации" },
            ].map((step, i) => (
              <div
                key={i}
                className={`relative transition-all duration-700 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="group bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/50 rounded-2xl p-8 h-full flex flex-col transition-all cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl font-display font-black text-accent">{step.num}</div>
                    <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                      <Icon name={step.icon as "Phone"} size={20} className="text-accent" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2 text-white">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/50 to-transparent z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections["reviews"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Отзывы</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Нам доверяют
              </span>
            </h2>
          </div>

          <div
            className={`transition-all duration-700 ${visibleSections["reviews"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="relative bg-card/50 border border-accent/20 rounded-3xl p-10 mb-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: reviews[reviewIndex].stars }).map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-xl text-white/90 leading-relaxed mb-6 italic">
                «{reviews[reviewIndex].text}»
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent text-white font-bold rounded-full flex items-center justify-center text-lg">
                  {reviews[reviewIndex].avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{reviews[reviewIndex].name}</div>
                  <div className="text-sm text-muted-foreground">Подтверждённый клиент</div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-center">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setReviewIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === reviewIndex ? "bg-accent w-8" : "bg-white/20"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-32 px-6 bg-accent/5 border-t border-accent/10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections["contacts"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Контакты</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Нужна срочная помощь?
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">Оставьте заявку — перезвоним за 2 минуты</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Форма */}
            <div
              className={`bg-card/50 border border-accent/20 rounded-3xl p-8 transition-all duration-700 ${visibleSections["contacts"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              {formSent ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                    <Icon name="CheckCircle" size={32} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Заявка принята!</h3>
                  <p className="text-muted-foreground">Перезвоним в течение 2 минут</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-bold text-white mb-6">Оставить заявку</h3>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Ваше имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-background/50 border border-accent/20 focus:border-accent/60 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Телефон</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-background/50 border border-accent/20 focus:border-accent/60 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Описание проблемы</label>
                    <textarea
                      placeholder="Расскажите, что случилось..."
                      rows={4}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="w-full bg-background/50 border border-accent/20 focus:border-accent/60 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-accent text-white rounded-xl font-bold text-lg hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 transition-all"
                  >
                    Вызвать специалиста
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>

            {/* Контактная информация + карта */}
            <div
              className={`space-y-6 transition-all duration-700 ${visibleSections["contacts"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <div className="bg-card/50 border border-accent/20 rounded-3xl p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={22} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Телефон (круглосуточно)</div>
                    <a href="tel:+78001234567" className="text-2xl font-black text-white hover:text-accent transition-colors">
                      8-800-123-45-67
                    </a>
                    <div className="text-sm text-accent mt-1">Звонок бесплатный</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={22} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Адрес офиса</div>
                    <div className="text-white font-semibold">г. Москва, ул. Профессиональная, 12</div>
                    <div className="text-sm text-muted-foreground mt-1">Пн–Пт: 9:00–21:00, выезд — 24/7</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={22} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <a href="mailto:info@ecocontrol24.ru" className="text-white font-semibold hover:text-accent transition-colors">
                      info@ecocontrol24.ru
                    </a>
                  </div>
                </div>
              </div>

              {/* Карта-заглушка */}
              <div className="rounded-3xl overflow-hidden border border-accent/20 h-52 bg-card/50 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                <div className="relative z-10 text-center">
                  <Icon name="MapPin" size={40} className="text-accent mx-auto mb-2" />
                  <div className="text-white font-semibold">Карта</div>
                  <div className="text-muted-foreground text-sm">г. Москва, ул. Профессиональная, 12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-black tracking-tighter mb-4 text-white">
            Не терпите — вызывайте прямо сейчас!
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Каждый час промедления — это новые колонии вредителей. Звоните — мы уже едем!
          </p>
          <a
            href="tel:+78001234567"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-accent rounded-full font-black text-xl hover:bg-white/90 hover:shadow-2xl transition-all"
          >
            <Icon name="Phone" size={24} className="text-accent" />
            8-800-123-45-67
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/10 py-10 px-6 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="ShieldCheck" size={18} className="text-accent" />
            <span>© 2025 Эко-Контроль 24 — Дезинсекция и дератизация</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
            <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
