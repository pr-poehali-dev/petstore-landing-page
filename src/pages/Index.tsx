import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    city: "",
  });

  const benefits = [
    {
      icon: "TrendingUp",
      title: "Стабильная прибыль",
      description: "Окупаемость 12-18 месяцев. Средняя прибыль от 300 000₽/мес",
    },
    {
      icon: "Users",
      title: "Полная поддержка",
      description: "Обучение персонала, маркетинг, консультации на всех этапах",
    },
    {
      icon: "Package",
      title: "Готовый бизнес",
      description: "Проверенная модель, все инструменты для быстрого старта",
    },
    {
      icon: "Award",
      title: "Узнаваемый бренд",
      description: "15 лет на рынке, 200+ магазинов в России и СНГ",
    },
  ];

  const services = [
    {
      icon: "ShoppingCart",
      title: "Товары для животных",
      description: "Корма, аксессуары, игрушки премиум-сегмента",
    },
    {
      icon: "Scissors",
      title: "Груминг-салон",
      description: "Профессиональный уход за питомцами",
    },
    {
      icon: "Stethoscope",
      title: "Ветеринарные услуги",
      description: "Консультации и базовая диагностика",
    },
    {
      icon: "Heart",
      title: "Дополнительные услуги",
      description: "Зоогостиница, выгул, дрессировка",
    },
  ];

  const financials = [
    { label: "Инвестиции", value: "от 3 000 000₽", icon: "Wallet" },
    { label: "Роялти", value: "5% от выручки", icon: "Percent" },
    { label: "Площадь", value: "от 80 м²", icon: "Maximize" },
    { label: "Окупаемость", value: "12-18 месяцев", icon: "Clock" },
  ];

  const testimonials = [
    {
      name: "Алексей Морозов",
      city: "Москва",
      text: "За два года работы открыл уже третий магазин. Отличная поддержка франчайзера, проверенные поставщики и готовые маркетинговые инструменты.",
      rating: 5,
    },
    {
      name: "Екатерина Волкова",
      city: "Санкт-Петербург",
      text: "Франшиза окупилась за 14 месяцев. Особенно ценю систему обучения персонала и постоянные акции для клиентов.",
      rating: 5,
    },
    {
      name: "Дмитрий Козлов",
      city: "Казань",
      text: "Первый опыт в бизнесе, но благодаря детальным инструкциям и поддержке запустились без проблем. Клиентов становится больше каждый месяц.",
      rating: 5,
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заявка отправлена:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", email: "", message: "", city: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-12">
              <div className="w-40 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">🐾 ЛОГО</span>
              </div>
              
              <nav className="hidden lg:flex items-center gap-8">
                <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                  О компании
                </a>
                <a href="#news" className="text-sm font-medium hover:text-primary transition-colors">
                  Новости
                </a>
                
                <div className="relative group">
                  <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                    Франшизы
                    <Icon name="ChevronDown" size={16} />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <a href="#franchise" className="block px-4 py-3 text-sm hover:bg-muted transition-colors">
                      Франшиза
                    </a>
                    <a href="#grooming" className="block px-4 py-3 text-sm hover:bg-muted transition-colors">
                      Франшиза груминг-салона
                    </a>
                    <a href="#turnkey" className="block px-4 py-3 text-sm hover:bg-muted transition-colors">
                      Бизнес под ключ
                    </a>
                  </div>
                </div>
                
                <div className="relative group">
                  <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                    Для бизнеса
                    <Icon name="ChevronDown" size={16} />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <a href="#development" className="block px-4 py-3 text-sm hover:bg-muted transition-colors">
                      Программа развития зоомагазинов
                    </a>
                    <a href="#mentorship" className="block px-4 py-3 text-sm hover:bg-muted transition-colors">
                      Наставничество
                    </a>
                  </div>
                </div>
                
                <a href="#academy" className="text-sm font-medium hover:text-primary transition-colors">
                  Академия
                </a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="tel:89231175474" 
                className="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={18} />
                <span>8 923 117 5474</span>
              </a>
              
              <button className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors">
                <Icon name="Menu" size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-20">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/300fa320-e5d6-4589-b3cd-e784994992ed/files/d2c1417c-4b4f-4769-aa3b-d13a421adb2a.jpg')] bg-cover bg-center opacity-10" />
        
        <div className="container relative z-10 px-4 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight uppercase">
                Открой <span className="text-primary">зоомагазин</span> по франшизе
              </h1>
              
              <div className="mb-8">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  ПРИБЫЛЬ 250 000 руб. в мес.
                </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Актуальный бизнес по продаже товаров для животных с рентабельностью от 40%. Проверено на 190+ магазинах!
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-background/60 backdrop-blur p-4 rounded-lg border">
                  <div className="text-2xl font-bold text-primary mb-1">2.4 млрд</div>
                  <div className="text-sm text-muted-foreground">товарооборот за 2024 г.</div>
                </div>
                <div className="bg-background/60 backdrop-blur p-4 rounded-lg border">
                  <div className="text-2xl font-bold text-primary mb-1">ТОП-10</div>
                  <div className="text-sm text-muted-foreground">товаров высокого спроса</div>
                </div>
                <div className="bg-background/60 backdrop-blur p-4 rounded-lg border">
                  <div className="text-2xl font-bold text-primary mb-1">213</div>
                  <div className="text-sm text-muted-foreground">магазинов в сети в 38 городах</div>
                </div>
              </div>
            </div>
            
            <div className="bg-background/90 backdrop-blur-lg p-8 rounded-2xl border shadow-2xl animate-fade-in">
              <h3 className="text-2xl font-bold mb-2">Получить финансовый план</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Оставьте заявку, чтобы узнать подробнее как выйти на прибыль от 250 000 руб. с собственным зоомагазином
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Имя"
                    required
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Телефон"
                    required
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Город"
                    required
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  Получить финансовый план
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Финансовая модель отправляется только менеджером по продажам после звонка
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создали идеальные условия для успешного бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, idx) => (
              <Card 
                key={idx} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon name={benefit.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Услуги и товары
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент для максимальной прибыли
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, idx) => (
              <Card 
                key={idx}
                className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Icon name={service.icon} size={36} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Инвестиции и доходность
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные условия сотрудничества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {financials.map((item, idx) => (
              <Card key={idx} className="border-2 hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <Icon 
                    name={item.icon} 
                    size={40} 
                    className="text-primary mx-auto mb-4" 
                  />
                  <div className="text-3xl font-bold text-primary mb-2">
                    {item.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-background/50 backdrop-blur">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Что входит в пакет</h3>
                    <ul className="space-y-3">
                      {[
                        "Обучение команды",
                        "Готовый дизайн-проект",
                        "Маркетинговая стратегия",
                        "CRM-система и ПО",
                        "Договоры с поставщиками",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Поддержка</h3>
                    <ul className="space-y-3">
                      {[
                        "Личный менеджер 24/7",
                        "Регулярные тренинги",
                        "Помощь в найме персонала",
                        "Анализ конкурентов",
                        "Контроль качества",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Icon name="CheckCircle2" size={20} className="text-secondary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Видео от успешных партнёров
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные истории успеха наших франчайзи
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/300fa320-e5d6-4589-b3cd-e784994992ed/files/ca06a0ba-c55b-4277-bb3f-f2eb64c3678f.jpg"
                alt="Интервью с партнёрами"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Play" size={40} className="text-white ml-2" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { title: "История Алексея", duration: "8:32", views: "12K" },
                { title: "От идеи до открытия", duration: "6:15", views: "8K" },
                { title: "Как выбрать локацию", duration: "5:47", views: "15K" },
              ].map((video, idx) => (
                <Card 
                  key={idx} 
                  className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Play" size={20} className="text-primary ml-1" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{video.title}</h4>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {video.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Eye" size={14} />
                            {video.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Отзывы партнёров
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят наши франчайзи
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-2 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.city}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Готовы начать?
              </h2>
              <p className="text-xl opacity-90">
                Оставьте заявку и получите презентацию франшизы с финансовой моделью
              </p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Ваше имя *
                      </label>
                      <Input
                        required
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Телефон *
                      </label>
                      <Input
                        required
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="example@mail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Ваш вопрос или комментарий
                    </label>
                    <Textarea
                      placeholder="Расскажите о вашем опыте в бизнесе, городе для открытия..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-32 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg"
                  >
                    Получить презентацию
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-muted/30">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">ЗооФранш</h3>
              <p className="text-muted-foreground">Лучшая франшиза зоомагазинов</p>
            </div>

            <div className="flex gap-6">
              <a href="tel:+79999999999" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
                <span>+7 (999) 999-99-99</span>
              </a>
              <a href="mailto:info@zoofransh.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
                <span>info@zoofransh.ru</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 ЗооФранш. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;