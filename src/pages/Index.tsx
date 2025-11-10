import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    { name: "Ультразвуковая чистка", price: "1 500 ₽" },
    { name: "Механическая чистка", price: "1 800 ₽" },
    { name: "Комбинированная чистка", price: "2 200 ₽" },
    { name: "Пилинг", price: "от 1 000 ₽" },
    { name: "Карбокситерапия", price: "от 1 000 ₽" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-white to-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-primary-foreground flex items-center gap-2">
              <Icon name="Sparkles" size={24} className="text-primary" />
              Ляйсан Губайдуллина
            </h2>
            <div className="hidden md:flex gap-6">
              {["Главная", "Услуги", "Проблемная кожа", "Отзывы", "Контакты"].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(["hero", "services", "skin-care", "reviews", "contacts"][idx])}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <a href="https://wa.me/79870275971" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <section id="hero" className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                Косметик-эстетист в Уфе
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Косметик-эстетист Ляйсан Губайдуллина
            </h1>
            <p className="text-xl text-muted-foreground">
              Чистка лица и уход за кожей в Уфе
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Добро пожаловать в кабинет косметика-эстетиста Ляйсан Губайдуллиной.
              Здесь всё создано для вашей красоты и комфорта — профессиональный уход, 
              глубокое очищение кожи, восстановление и естественное сияние.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/79870275971" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Записаться в WhatsApp
                </Button>
              </a>
              <a href="https://www.avito.ru/ufa/predlozheniya_uslug/chistka_litsa_v_ufe_kosmetolog_2648942426" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/30 hover:bg-primary/5">
                  <Icon name="Star" size={20} className="mr-2" />
                  Отзывы на Авито
                </Button>
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-60 h-60 bg-secondary/30 rounded-full blur-3xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/2e5266c1-d3c0-4e75-a5da-cbf5789b29bc/files/c7758b1e-aa47-4b4a-b06e-6468f496819e.jpg"
              alt="Кабинет косметолога"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-lg bg-accent/30">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4">
                <Icon name="Video" size={32} className="text-accent-foreground mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-accent-foreground">Видео "Обо мне"</h3>
                  <p className="text-accent-foreground/80 leading-relaxed">
                    В этом коротком видео я покажу мой кабинет и расскажу, как проходит процедура.
                    Главное — доверие, спокойствие и результат.
                  </p>
                  <div className="mt-6 bg-accent-foreground/10 rounded-2xl p-8 text-center">
                    <Icon name="Play" size={48} className="mx-auto text-accent-foreground/50" />
                    <p className="mt-4 text-sm text-accent-foreground/60">Видео появится здесь</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-secondary bg-secondary/20 px-4 py-2 rounded-full">
            Прайс-лист
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">Процедуры и стоимость услуг</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Все процедуры подбираются индивидуально, с учётом состояния кожи.
            Использую современные техники и сертифицированную косметику.
            Результат заметен уже после первого сеанса.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <Card key={idx} className="border-2 border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{service.name}</h3>
                    <p className="text-2xl font-bold text-primary">{service.price}</p>
                  </div>
                  <Icon name="Sparkles" size={24} className="text-primary/40" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://wa.me/79870275971" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на чистку лица
            </Button>
          </a>
        </div>

        <Card className="mt-12 border-none shadow-lg bg-secondary/20">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-start gap-4">
              <Icon name="FileVideo" size={32} className="text-secondary-foreground mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-secondary-foreground">Видео "Процедура"</h3>
                <p className="text-secondary-foreground/80 leading-relaxed mb-6">
                  В коротком видео вы можете увидеть, как проходит процесс очищения кожи.
                  Всё максимально бережно и комфортно.
                </p>
                <div className="bg-secondary-foreground/10 rounded-2xl p-8 text-center">
                  <Icon name="Play" size={48} className="mx-auto text-secondary-foreground/50" />
                  <p className="mt-4 text-sm text-secondary-foreground/60">Видео появится здесь</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="skin-care" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-accent bg-accent/20 px-4 py-2 rounded-full">
                Специализация
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
                Восстановление и уход за проблемной кожей при высыпаниях и акне
              </h2>
            </div>

            <Card className="border-2 border-accent/20 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center">
                      <Icon name="Heart" size={48} className="text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <p className="text-foreground/90 leading-relaxed">
                      Я помогаю коже очищаться и восстанавливаться во время и после высыпаний.
                      Использую деликатные методики: чистка, пилинги, маски, карбокситерапия.
                    </p>
                    <p className="text-foreground/90 leading-relaxed">
                      Эти процедуры уменьшают воспаления, улучшают тон и текстуру кожи.
                      Всё безопасно, мягко и без боли.
                    </p>
                    <div className="pt-4">
                      <a href="https://wa.me/79870275971" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                          <Icon name="MessageCircle" size={20} className="mr-2" />
                          Узнать подробнее в WhatsApp
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary bg-primary/20 px-4 py-2 rounded-full">
            Отзывы
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">Реальные отзывы клиентов</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Благодарю всех клиентов за доверие ❤️
            Посмотрите видео-отзыв и убедитесь в качестве процедур.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {[1, 2].map((item) => (
            <Card key={item} className="border-2 border-primary/10 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/5 rounded-2xl p-12 text-center">
                  <Icon name="User" size={64} className="mx-auto text-primary/30 mb-4" />
                  <Icon name="Play" size={40} className="mx-auto text-primary/50" />
                  <p className="mt-4 text-sm text-muted-foreground">Видео-отзыв {item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a href="https://www.avito.ru/ufa/predlozheniya_uslug/chistka_litsa_v_ufe_kosmetolog_2648942426" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
              <Icon name="ExternalLink" size={20} className="mr-2" />
              Смотреть все отзывы на Авито
            </Button>
          </a>
        </div>
      </section>

      <section id="contacts" className="bg-gradient-to-b from-white to-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-secondary bg-secondary/20 px-4 py-2 rounded-full">
              Контакты
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">Записаться на процедуру</h2>
            <p className="text-muted-foreground mb-8">
              Приём веду в уютном кабинете салона красоты в Уфе.
              Можно записаться через WhatsApp или позвонить напрямую.
              Всегда рада новым клиентам и постоянным гостям!
            </p>

            <Card className="border-2 border-primary/20 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-3">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <a href="tel:+79870275971" className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
                      +7 987 027-59-71
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <a href="tel:+79870275971">
                      <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                        <Icon name="Phone" size={20} className="mr-2" />
                        Позвонить
                      </Button>
                    </a>
                    <a href="https://wa.me/79870275971" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90">
                        <Icon name="MessageCircle" size={20} className="mr-2" />
                        Написать в WhatsApp
                      </Button>
                    </a>
                  </div>

                  <div className="pt-4">
                    <a href="https://www.avito.ru/ufa/predlozheniya_uslug/chistka_litsa_v_ufe_kosmetolog_2648942426" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full sm:w-auto border-primary/30 hover:bg-primary/5">
                        <Icon name="Star" size={20} className="mr-2" />
                        Смотреть отзывы на Авито
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 border-t border-primary/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Красота начинается с заботы.
          </p>
          <p className="text-sm text-foreground font-medium mb-1">
            Косметик-эстетист Ляйсан Губайдуллина, Уфа
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
