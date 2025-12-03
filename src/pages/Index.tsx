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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заявка отправлена:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/300fa320-e5d6-4589-b3cd-e784994992ed/files/d2c1417c-4b4f-4769-aa3b-d13a421adb2a.jpg')] bg-cover bg-center opacity-10" />
        
        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">🐾 Франшиза №1 в России</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Откройте свой <span className="text-primary">зоомагазин</span> с нуля
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Проверенная бизнес-модель с окупаемостью 12-18 месяцев. 
              Полное сопровождение от запуска до масштабирования.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                Получить презентацию
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">магазинов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-sm text-muted-foreground">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">успешных кейсов</div>
              </div>
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
