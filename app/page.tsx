"use client";

import { useState } from "react";

const menu = [
  { label: "Услуги", href: "#services" },
  { label: "Работы", href: "#cases" },
  { label: "Этапы", href: "#process" },
  { label: "Стоимость", href: "#pricing" },
  { label: "Контакты", href: "#contact" },
];

const trustPoints = [
  "Работаем только под ключ — не берём частичные задачи",
  "Полный цикл: от черновой отделки до готового интерьера",
  "Свои мастера, мебельщики, кухни, диваны, потолки и сплит-системы",
  "3D-дизайн-проект, чертежи и понятная смета до старта работ",
];

const services = [
  {
    title: "Ремонт новостроек под ключ",
    text: "Запускаем объект с черновой отделки и доводим до состояния, когда можно заезжать и жить.",
  },
  {
    title: "Электрика и сантехника",
    text: "Проектируем и полностью собираем инженерные системы: точки, разводка, подключение, чистовая установка.",
  },
  {
    title: "Полы, двери, стены, обои",
    text: "Подготовка оснований, выравнивание, чистовая отделка, поклейка обоев, монтаж дверей и напольных покрытий.",
  },
  {
    title: "Ванные комнаты и санузлы",
    text: "Комплексное решение для ванной и туалета: плитка, сантехника, освещение, хранение и финишная комплектация.",
  },
  {
    title: "Натяжные потолки и сплит-системы",
    text: "Закрываем дополнительные работы в одном проекте, чтобы клиент не искал отдельных подрядчиков.",
  },
  {
    title: "Мебель и кухни",
    text: "Свои мебельщики изготавливают кухни, диваны и встроенные решения под конкретную планировку.",
  },
];

const cases = [
  {
    title: "Светлая кухня-гостиная",
    meta: "Новостройка • полный цикл",
    img: "/photo_2026-07-05_18-49-09 (2) 1.jpg",
  },
  {
    title: "Минималистичная спальня",
    meta: "Дизайн + реализация",
    img: "/photo_2026-07-05_18-48-59 (2) 1.jpg",
  },
  {
    title: "Санузел под ключ",
    meta: "Плитка • сантехника • свет",
    img: "/photo_2026-07-05_18-49-02 (2) 1.jpg",
  },
  {
    title: "Светлая лоджия",
    meta: "Двери • мебель • отделка",
    img: "/photo_2026-07-05_18-49-11 (2) 1.jpg",
  },
  {
    title: "Современная ванная",
    meta: "Комплектация и монтаж",
    img: "/photo_2026-07-05_18-49-03 1.jpg",
  },

];

const processSteps = [
  {
    step: "01",
    title: "Замер и бриф",
    text: "Фиксируем задачи, бюджет, стиль, сроки и ограничения по объекту.",
  },
  {
    step: "02",
    title: "Смета и 3D-проект",
    text: "Готовим понятный расчёт, планировку, визуализации и комплект чертежей.",
  },
  {
    step: "03",
    title: "Черновые работы",
    text: "Инженерия, подготовка оснований, выравнивание, технический этап ремонта.",
  },
  {
    step: "04",
    title: "Чистовая отделка",
    text: "Полы, двери, стены, обои, потолки, сантехника, освещение и финишные решения.",
  },
  {
    step: "05",
    title: "Мебель и сдача",
    text: "Устанавливаем кухни и мебель, проводим финальную сдачу готового объекта.",
  },
];

const included = [
  "Ремонт только под ключ",
  "Полный цикл без частичных работ",
  "Смета и поэтапный план работ",
  "3D-эскизы и рабочие чертежи",
  "Электрика, сантехника, полы, двери",
  "Ванные комнаты, санузлы, стены, обои",
  "Натяжные потолки и сплит-системы",
  "Мебель, кухни и встроенные решения",
];

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="pageShell">
      <div
        className={`mobileOverlay ${isOpen ? "isVisible" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <header className="siteHeader">
        <div className="container headerInner">
          <a href="#top" className="brand">
            <span className="brandMark">■</span>
            <span className="brandText">
              <strong>RE:MODEL</strong>
              <small>ремонт квартир под ключ</small>
            </span>
          </a>

          <nav className="desktopNav" aria-label="Основная навигация">
            {menu.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="headerActions">
            <a href="#contact" className="button buttonPrimary headerButton">
              Получить смету
            </a>

            <button
              className={`burger ${isOpen ? "isActive" : ""}`}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Открыть меню"
              aria-expanded={isOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <aside className={`mobileSidebar ${isOpen ? "isOpen" : ""}`}>
        <div className="mobileSidebarTop">
          <div className="mobileBrand">
            <strong>RE:MODEL</strong>
            <span>ремонт под ключ</span>
          </div>

          <button
            className="closeSidebar"
            onClick={() => setIsOpen(false)}
            aria-label="Закрыть меню"
          >
            ×
          </button>
        </div>

        <nav className="mobileNav" aria-label="Мобильное меню">
          {menu.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mobileSidebarCard">
          <span>Базовый ремонт</span>
          <strong>от 24 000 ₽ / м²</strong>
          <p>Без мебели и кухни. Полный проект рассчитываем после замера.</p>
          <a href="#contact" className="button buttonPrimary" onClick={() => setIsOpen(false)}>
            Оставить заявку
          </a>
        </div>
      </aside>

      <section id="top" className="heroSection">
        <div className="heroGlow heroGlowLeft" />
        <div className="heroGlow heroGlowRight" />

        <div className="container heroGrid">
          <div className="heroContent">
            <div className="eyebrow">ремонт квартир и новостроек под ключ</div>

            <h1 className="heroTitle">
              Полный ремонт <span>от черновой отделки</span> до готового
              интерьера
            </h1>

            <p className="heroText">
              Берём объект целиком и доводим его до результата, в который можно
              заехать. Электрика, сантехника, отделка, потолки, двери, мебель,
              кухни, 3D-проект и комплектация — в одном подрядчике.
            </p>

            <div className="heroActions">
              <a href="#contact" className="button buttonPrimary">
                Рассчитать стоимость
              </a>
              <a href="#cases" className="button buttonSecondary">
                Смотреть работы
              </a>
            </div>

            <div className="heroBadges">
              <div className="heroBadge">
                <span>от 24 000 ₽ / м²</span>
                <small>базовый ремонт без мебели</small>
              </div>
              <div className="heroBadge">
                <span>только под ключ</span>
                <small>частичные работы не берём</small>
              </div>
              <div className="heroBadge">
                <span>3D и чертежи</span>
                <small>до старта реализации</small>
              </div>
            </div>
          </div>

          <div className="heroVisual">
            <div className="heroVisualMain">
              <img
                src="/photo_2026-07-05_18-48-49 1.jpg"
                alt="Современный интерьер после ремонта под ключ"
              />
            </div>

            <div className="heroCard heroCardTop">
              <strong>Смета за 24 часа</strong>
              <span>после замера и брифа по объекту</span>
            </div>

            <div className="heroCard heroCardBottom">
              <strong>Свои мастера и мебель</strong>
              <span>кухни, диваны, потолки, сплит-системы</span>
            </div>

            <div className="heroMiniShot">
              <img
                src="/photo_2026-07-05_18-48-50 1.jpg"
                alt="Кухня после ремонта"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="trustSection">
        <div className="container trustGrid">
          <div className="trustIntro">
            <div className="sectionLabel">почему нам доверяют</div>
            <h2 className="sectionTitle">
              Один подрядчик на весь проект вместо набора разных исполнителей
            </h2>
            <p className="sectionText">
              Мы не работаем по частям. Это позволяет держать единый стандарт
              качества, сроки, визуальный результат и логику бюджета от начала
              до финальной сдачи.
            </p>

            <div className="trustMetrics">
              <div>
                <strong>Под ключ</strong>
                <span>единый ответственный за результат</span>
              </div>
              <div>
                <strong>От эконом до премиум</strong>
                <span>подбираем решение под задачу и бюджет</span>
              </div>
              <div>
                <strong>Полный комплект услуг</strong>
                <span>от инженерии до мебели и кухни</span>
              </div>
            </div>
          </div>

          <div className="trustPanel">
            {trustPoints.map((item, index) => (
              <article key={index} className="trustItem">
                <div className="trustItemIndex">0{index + 1}</div>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="servicesSection">
        <div className="container">
          <div className="sectionHead">
            <div className="sectionLabel">что входит в проект</div>
            <h2 className="sectionTitle">
              Полный цикл работ, чтобы клиент не координировал десятки
              подрядчиков
            </h2>
          </div>

          <div className="servicesLayout">
            <article className="serviceFeature">
              <div className="serviceFeatureContent">
                <span className="serviceFeatureTag">full service</span>
                <h3>Ремонт, инженерия, мебель и комплектация в одной системе</h3>
                <p>
                  Мы собираем проект целиком: черновой этап, чистовую отделку,
                  санузлы, двери, потолки, сплит-системы, кухни, мебель и
                  финальную сдачу. Это экономит время клиента и убирает
                  расхождения между исполнителями.
                </p>

                <ul className="serviceFeatureList">
                  <li>ремонт новостроек и квартир под ключ</li>
                  <li>дизайн-проект, 3D-визуализация, чертежи</li>
                  <li>ванные комнаты, туалеты, стены, обои</li>
                  <li>полы, двери, электрика, сантехника</li>
                </ul>
              </div>

              <div className="serviceFeatureMedia">
                <img
                  src="photo_2026-07-05_18-48-54 1.jpg"
                  alt="Ремонт новостройки под ключ"
                />
              </div>
            </article>

            <div className="servicesGrid">
              {services.map((service, index) => (
                <article key={index} className="serviceCard">
                  <span className="serviceNumber">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="casesSection">
        <div className="container">
          <div className="sectionHead casesHead">
            <div>
              <div className="sectionLabel">портфолио</div>
              <h2 className="sectionTitle">Интерьеры, которые выглядят дорого</h2>
            </div>

            <p className="casesText">
              Галерея ниже показывает подачу и уровень результата. На реальном
              проекте здесь можно заменить изображения на фотографии ваших
              объектов или пары “до / после”.
            </p>
          </div>

          <div className="casesMasonry">
            {cases.map((item, index) => (
              <article
                key={index}
                className={`caseCard caseCard${index + 1}`}
              >
                <img src={item.img} alt={item.title} />
                <div className="caseOverlay">
                  <span>{item.meta}</span>
                  <strong>{item.title}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="processSection">
        <div className="container">
          <div className="sectionHead">
            <div className="sectionLabel">этапы работы</div>
            <h2 className="sectionTitle">
              Прозрачный пошаговый процесс от первого замера до сдачи объекта
            </h2>
          </div>

          <div className="processLine">
            {processSteps.map((item, index) => (
              <article key={index} className="processCard">
                <div className="processTop">
                  <span className="processStep">{item.step}</span>
                  <div className="processDot" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="pricingSection">
        <div className="container pricingGrid">
          <div className="pricingIntro">
            <div className="sectionLabel">стоимость</div>
            <h2 className="sectionTitle">
              Понятная отправная точка по цене и честная логика расчёта
            </h2>
            <p className="sectionText">
              Базовый ремонт начинается от <strong>24 000 ₽ / м²</strong> без
              кухни и мебели. Финальная стоимость зависит от состава работ,
              инженерии, материалов, уровня отделки и комплектации.
            </p>

            <div className="pricingNote">
              <strong>Важно:</strong>
              <span>
                частичный ремонт, отдельные комнаты и разрозненные доработки не
                выполняем. Работаем только в формате полного проекта под ключ.
              </span>
            </div>
          </div>

          <div className="pricingCards">
            <article className="priceCard featured">
              <div className="priceTag">стартовый уровень</div>
              <h3>Базовый ремонт</h3>
              <div className="priceValue">
                от 24 000 <span>₽ / м²</span>
              </div>
              <p>
                Подходит для простого решения без мебели и кухни. После замера
                формируем точную смету под объект.
              </p>
            </article>

            <article className="priceCard">
              <div className="priceTag">индивидуальный расчёт</div>
              <h3>Полный под ключ</h3>
              <div className="priceValue">
                смета <span>после брифа</span>
              </div>
              <p>
                Для проектов с 3D-дизайном, мебелью, кухнями, премиальной
                отделкой и полной комплектацией.
              </p>
            </article>

            <article className="includedCard">
              <h3>Что обычно входит</h3>
              <ul>
                {included.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* <section id="contact" className="contactSection">
        <div className="container contactGrid">
          <div className="contactContent">
            <div className="sectionLabel">финальный шаг</div>
            <h2 className="sectionTitle">
              Получите расчёт, структуру этапов и понимание бюджета до старта
            </h2>
            <p className="sectionText">
              Оставьте заявку — можно кратко описать площадь, состояние объекта,
              желаемый стиль и сроки. Это поможет быстрее подготовить предметный
              расчёт.
            </p>

            <div className="contactBenefits">
              <div>
                <strong>1 день</strong>
                <span>на предварительный расчёт после замера</span>
              </div>
              <div>
                <strong>1 подрядчик</strong>
                <span>вместо десятка отдельных исполнителей</span>
              </div>
              <div>
                <strong>1 результат</strong>
                <span>готовая квартира под заселение</span>
              </div>
            </div>
          </div>

          <form className="leadForm">
            <label>
              <span>Ваше имя</span>
              <input type="text" placeholder="Например, Андрей" />
            </label>

            <label>
              <span>Телефон</span>
              <input type="tel" placeholder="+7 (999) 999-99-99" />
            </label>

            <label>
              <span>Площадь и тип объекта</span>
              <input type="text" placeholder="Например, 64 м², новостройка" />
            </label>

            <label>
              <span>Кратко о задаче</span>
              <textarea
                rows="5"
                placeholder="Нужен ремонт под ключ с черновой отделки, кухня, ванная, обои, сплит-система..."
              />
            </label>

            <button type="submit" className="button buttonPrimary buttonBlock">
              Получить консультацию
            </button>

            <p className="formHint">
              Нажимая на кнопку, вы соглашаетесь на обработку данных и обратный
              звонок по заявке.
            </p>
          </form>
        </div>
      </section> */}

      <footer className="siteFooter">
        <div className="container footerGrid">
          <div className="footerBrand">
            <strong>RE:MODEL</strong>
            <span>ремонт квартир под ключ</span>
          </div>

          <div className="footerText">
            Полный цикл ремонта: от черновой отделки до готового интерьера,
            включая дизайн, инженерию, мебель и комплектацию.
          </div>

          <a href="#top" className="footerUp">
            Наверх ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
