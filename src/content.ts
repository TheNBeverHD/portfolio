export type Language = 'en' | 'uk'
export type Localized = Record<Language, string>
const l = (en: string, uk: string): Localized => ({ en, uk })

export const links = {
  telegram: 'https://t.me/TheNBeverHD',
  github: 'https://github.com/TheNBeverHD',
}

export const copy = {
  nav: { home: l('Home', 'Головна'), projects: l('Projects', 'Проєкти'), services: l('Services', 'Послуги'), about: l('About', 'Про мене'), contact: l('Contact', 'Контакт') },
  brand: l('FIELDWORK / SOFTWARE', 'FIELDWORK / SOFTWARE'),
  role: l('Telegram Bots Developer · Full-Stack & Kotlin Multiplatform Engineer', 'Розробка Telegram-ботів · вебзастосунки та Kotlin Multiplatform'),
  heroEyebrow: l('INDEPENDENT SOFTWARE ENGINEERING', 'НЕЗАЛЕЖНА РОЗРОБКА ПЗ'),
  heroTitle: l('Engineering software that solves real problems.', 'Створюю програмні рішення, які вирішують реальні проблеми.'),
  heroText: l('Telegram business systems, full-stack web applications, cross-platform software, and automation. I investigate the problem, shape the architecture, and build the solution.', 'Telegram-системи для бізнесу, повноцінні вебзастосунки, кросплатформне ПЗ та автоматизація. Досліджую проблему, продумую архітектуру й реалізую рішення.'),
  telegramCta: l('Contact via Telegram', 'Написати в Telegram'),
  projectsCta: l('Explore projects', 'Переглянути проєкти'),
  githubCta: l('Explore GitHub', 'Переглянути GitHub'),
  introLabel: l('01 / SELECTED WORK', '01 / ОБРАНІ РОБОТИ'),
  introTitle: l('Built with a purpose.', 'Рішення з чіткою метою.'),
  introText: l('Three public projects showing business workflows, product architecture, and careful implementation across different platforms.', 'Три відкриті проєкти про бізнес-процеси, архітектуру продуктів і продуману реалізацію на різних платформах.'),
  viewStudy: l('View case study', 'Детальніше про проєкт'),
  source: l('Source on GitHub', 'Код на GitHub'),
  visualNote: l('Interface example supplied in the repository; demonstration data.', 'Приклад інтерфейсу з репозиторію; демонстраційні дані.'),
  serviceLabel: l('02 / WHAT I BUILD', '02 / ЩО Я РОЗРОБЛЯЮ'),
  serviceTitle: l('Services for the whole problem.', 'Рішення для задачі в цілому.'),
  serviceIntro: l('From a focused bot workflow to a complete application, I work across interfaces, APIs, data, and existing systems.', 'Від окремого сценарію бота до повноцінного застосунку: працюю з інтерфейсами, API, даними та наявними системами.'),
  approachLabel: l('03 / METHOD', '03 / ПІДХІД'),
  approachTitle: l('Beyond writing code.', 'Більше, ніж написання коду.'),
  approachText: l('Useful software begins with a clear understanding of the situation. The process stays practical from first question to delivery.', 'Корисне програмне забезпечення починається з розуміння ситуації. Підхід залишається практичним від першого запитання до готового результату.'),
  stackLabel: l('04 / TOOLKIT', '04 / ІНСТРУМЕНТИ'),
  stackTitle: l('Technology in context.', 'Технології для задачі.'),
  stackText: l('Tools demonstrated in public repositories and the profile. The stack follows the requirements of the work.', 'Інструменти, підтверджені відкритими репозиторіями та профілем. Стек добираю під вимоги задачі.'),
  aboutLabel: l('05 / ABOUT', '05 / ПРО МЕНЕ'),
  aboutTitle: l('A practical engineering mindset.', 'Практичний інженерний підхід.'),
  aboutText: l('I build software by understanding the workflow first, then working through the system behind it. My interests span Telegram automation, backend and web development, Android and Kotlin Multiplatform, and the detailed work of debugging and improving existing code. I value clear boundaries, maintainable implementations, and solutions that fit the real problem.', 'Починаю розробку з розуміння процесу, а потім розбираюся із системою, що за ним стоїть. Працюю з автоматизацією в Telegram, бекендом, веброзробкою, Android і Kotlin Multiplatform, а також із пошуком причин помилок та вдосконаленням наявного коду. Ціную зрозумілу архітектуру, підтримувані рішення й відповідність реальній задачі.'),
  contactLabel: l('06 / CONTACT', '06 / ЗВʼЯЗОК'),
  contactTitle: l('Have a problem worth solving?', 'Є задача, яку варто вирішити?'),
  contactText: l('Tell me what you are trying to build, automate, or fix. Telegram is the easiest way to start the conversation.', 'Розкажіть, що потрібно створити, автоматизувати або виправити. Найпростіше почати розмову в Telegram.'),
  footer: l('Independent software development. Built for the web.', 'Незалежна розробка програмного забезпечення. Створено для вебу.'),
  back: l('Back to projects', 'Назад до проєктів'),
  caseOverview: l('Overview', 'Огляд'),
  casePurpose: l('Purpose', 'Мета'),
  caseApproach: l('Technical approach', 'Технічний підхід'),
  caseArchitecture: l('Architecture', 'Архітектура'),
  caseFeatures: l('Main functionality', 'Основні можливості'),
  caseDetails: l('Implementation details', 'Деталі реалізації'),
  caseStack: l('Technology stack', 'Технології'),
  caseScreens: l('Screens from the repository', 'Зображення з репозиторію'),
  caseStatus: l('Project status', 'Стан проєкту'),
  skip: l('Skip to content', 'Перейти до вмісту'),
}

export const services = [
  { number: '01', title: l('Telegram Bots & Business Systems', 'Telegram-боти та бізнес-системи'), text: l('Custom bots, booking and appointment flows, administrative interfaces, notifications, API integrations, and internal workflows.', 'Індивідуальні боти, запис і бронювання, адміністративні інтерфейси, сповіщення, інтеграції з API та внутрішні процеси.'), featured: true },
  { number: '02', title: l('Full-Stack Web Development', 'Веброзробка повного циклу'), text: l('Web applications, frontend and backend development, REST APIs, database-backed systems, and administrative dashboards.', 'Вебзастосунки, фронтенд і бекенд, REST API, системи з базами даних та адміністративні панелі.') },
  { number: '03', title: l('Android & Kotlin Multiplatform', 'Android та Kotlin Multiplatform'), text: l('Android applications, Kotlin development, cross-platform architecture, and shared business logic with KMP.', 'Android-застосунки, розробка на Kotlin, кросплатформна архітектура та спільна бізнес-логіка на KMP.') },
  { number: '04', title: l('Software Architecture & Debugging', 'Архітектура ПЗ та налагодження'), text: l('Codebase investigation, root-cause analysis, complex bug fixing, refactoring, and architecture improvements.', 'Дослідження кодової бази, пошук першопричин помилок, виправлення складної поведінки, рефакторинг та покращення архітектури.') },
  { number: '05', title: l('Business Process Automation', 'Автоматизація бізнес-процесів'), text: l('Automating repetitive operations, connecting external services, API-based integrations, and focused internal tools.', 'Автоматизація повторюваних операцій, підключення зовнішніх сервісів, інтеграції через API та внутрішні інструменти.') },
]

export const approach = [
  { number: '01', title: l('Understand', 'Зрозуміти'), text: l('Clarify the requirements and the problem behind the request.', 'Уточнити вимоги й проблему, що стоїть за запитом.') },
  { number: '02', title: l('Investigate', 'Дослідити'), text: l('Examine the existing system, architecture, APIs, and constraints.', 'Вивчити наявну систему, архітектуру, API та обмеження.') },
  { number: '03', title: l('Engineer', 'Реалізувати'), text: l('Design and implement a solution that fits the context.', 'Спроєктувати й створити рішення, яке відповідає контексту.') },
  { number: '04', title: l('Refine', 'Удосконалити'), text: l('Test, debug, improve, and prepare for reliable use.', 'Перевірити, виправити помилки, покращити й підготувати до використання.') },
]

export const stack = [
  { title: l('Languages', 'Мови'), values: ['Kotlin', 'Python', 'TypeScript', 'JavaScript', 'SQL'] },
  { title: l('Backend', 'Бекенд'), values: ['FastAPI', 'Aiogram', 'REST APIs', 'SQLAlchemy'] },
  { title: l('Frontend', 'Фронтенд'), values: ['React', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: l('Mobile', 'Мобільна розробка'), values: ['Android', 'Kotlin Multiplatform', 'Compose Multiplatform'] },
  { title: l('Data & tools', 'Дані та інструменти'), values: ['PostgreSQL', 'SQLite', 'Redis', 'Git', 'Docker', 'Linux'] },
]

export type Project = {
  id: string; name: string; number: string; category: Localized; status: Localized;
  description: Localized; overview: Localized; purpose: Localized; technical: Localized;
  architecture: Localized; details: Localized; features: Localized[]; technologies: string[];
  repo: string; images: { path: string; alt: Localized }[]
}

export const projects: Project[] = [
  {
    id: 'appointment-booking-bot', number: '01', name: 'ATELIER BARBER',
    category: l('Telegram business system', 'Бізнес-система в Telegram'),
    status: l('Personal project · implemented; no public live bot', 'Особистий проєкт · реалізовано; публічного бота немає'),
    description: l('A role-based barbershop booking system inside Telegram, with customer appointments, staff schedules, and an owner workspace.', 'Система запису до барбершопу в Telegram: клієнтські записи, графіки працівників і панель власника з розподілом прав.'),
    overview: l('A Ukrainian-language Telegram system for customer bookings and barbershop operations. Customer, barber, and owner roles have separate workflows.', 'Україномовна Telegram-система для запису клієнтів і керування роботою барбершопу. Для клієнта, барбера та власника передбачені окремі сценарії.'),
    purpose: l('Make appointment selection and schedule management available in one Telegram conversation, while keeping staff permissions and booking data consistent.', 'Поєднати запис клієнтів і керування розкладом у Telegram, зберігаючи контроль доступу та цілісність даних бронювання.'),
    technical: l('Aiogram handlers connect Telegram interactions to services for availability, booking, catalog, and administration. PostgreSQL stores operational data; Redis holds form state and rate limits.', 'Обробники Aiogram поєднують взаємодію в Telegram із сервісами доступності, запису, каталогу та адміністрування. PostgreSQL зберігає робочі дані, Redis — стан форм і обмеження частоти запитів.'),
    architecture: l('Telegram chat → Aiogram handlers → service and authorization layer → booking domain → PostgreSQL. A separate notification worker processes a transactional outbox.', 'Чат Telegram → обробники Aiogram → сервіси та перевірка прав → логіка запису → PostgreSQL. Окремий воркер обробляє транзакційну чергу сповіщень.'),
    details: l('Availability accounts for working hours, breaks, exceptions, timezones, and daylight-saving changes. Database constraints guard against overlapping appointments; rescheduling is atomic. Employee invitations use one-time expiring tokens whose hashes are stored in the database.', 'Пошук вільного часу враховує робочі години, перерви, винятки, часові пояси й перехід на літній час. Обмеження бази даних захищають від перетину записів, а перенесення відбувається атомарно. Запрошення працівників одноразові: у базі зберігаються хеші токенів.'),
    features: [l('Book, view, cancel, and reschedule appointments', 'Запис, перегляд, скасування й перенесення візитів'), l('Staff schedules, permissions, and time-off requests', 'Графіки, дозволи працівників і запити на відпустку'), l('Owner controls for services, appointments, and statistics', 'Керування послугами, записами й статистикою для власника')],
    technologies: ['Python', 'Aiogram 3', 'PostgreSQL', 'SQLAlchemy', 'Redis', 'Docker'],
    repo: 'https://github.com/TheNBeverHD/AppointmentBookingBot',
    images: [{ path: 'projects/bot-customer-menu.png', alt: l('Illustrative customer menu supplied with the bot repository', 'Ілюстративне меню клієнта з репозиторію бота') }, { path: 'projects/bot-owner-overview.png', alt: l('Illustrative owner overview supplied with the bot repository', 'Ілюстративна панель власника з репозиторію бота') }],
  },
  {
    id: 'finance-tracker', number: '02', name: 'Personal Finance Tracker',
    category: l('Kotlin Multiplatform application', 'Застосунок на Kotlin Multiplatform'),
    status: l('Personal portfolio project · implemented local workflow', 'Особистий портфоліо-проєкт · локальні сценарії реалізовано'),
    description: l('A local-first finance app for Android, iOS, and desktop, with shared Compose UI, precise money modeling, budgets, and reports.', 'Локальний фінансовий застосунок для Android, iOS і настільних систем зі спільним інтерфейсом Compose, точним обліком коштів, бюджетами й звітами.'),
    overview: l('A Kotlin Multiplatform finance application with shared UI, business rules, and SQLite persistence across Android, iOS, and desktop.', 'Фінансовий застосунок на Kotlin Multiplatform зі спільним інтерфейсом, бізнес-логікою та збереженням даних у SQLite для Android, iOS і настільних систем.'),
    purpose: l('Provide a private, locally stored way to track accounts, transactions, budgets, and financial trends without a server account or bank connection.', 'Дати змогу вести рахунки, транзакції, бюджети й аналітику локально, без серверного облікового запису чи підключення до банку.'),
    technical: l('Compose Multiplatform renders shared screens; Kotlin Flow drives presentation state. SQLDelight provides typed SQLite queries and migrations, while platform adapters supply database drivers and file selection.', 'Compose Multiplatform відображає спільні екрани, Kotlin Flow керує станом інтерфейсу. SQLDelight забезпечує типізовані запити й міграції SQLite, а платформні адаптери — драйвери бази даних і вибір файлів.'),
    architecture: l('Android, iOS, and desktop hosts → shared Compose UI and ViewModel → domain rules and repository contract → data module with SQLDelight/SQLite.', 'Android, iOS і настільні системи → спільний інтерфейс Compose і ViewModel → доменні правила та контракт репозиторію → модуль даних із SQLDelight/SQLite.'),
    details: l('Amounts use integer minor units, rational exchange rates, and half-even rounding. Repository writes validate a ledger snapshot and commit atomically. Optimistic revisions reject stale edits; recurring entries use occurrence identities to avoid duplicates.', 'Суми зберігаються в цілих мінімальних одиницях валюти, курси — як раціональні числа, округлення — до найближчого парного числа. Зміни в репозиторії перевіряють стан реєстру й фіксуються атомарно. Ревізії захищають від застарілих змін, ідентифікатори повторів — від дублікатів.'),
    features: [l('Accounts, transactions, transfers, and budgets', 'Рахунки, транзакції, перекази й бюджети'), l('Insights, search, and recurring entries', 'Аналітика, пошук і повторювані операції'), l('Versioned JSON backup and CSV export', 'Версійне резервне копіювання в JSON та експорт CSV')],
    technologies: ['Kotlin', 'Compose Multiplatform', 'SQLDelight', 'SQLite', 'Coroutines', 'Android'],
    repo: 'https://github.com/TheNBeverHD/finance-tracker',
    images: [{ path: 'projects/finance-overview.png', alt: l('Finance Tracker desktop dashboard', 'Головна панель фінансового застосунку') }, { path: 'projects/finance-insights.png', alt: l('Finance Tracker insights screen', 'Екран аналітики фінансового застосунку') }],
  },
  {
    id: 'mini-crm', number: '03', name: 'Folio · Mini CRM',
    category: l('Full-stack web application', 'Вебзастосунок повного циклу'),
    status: l('Personal project · standalone MVP', 'Особистий проєкт · самостійний MVP'),
    description: l('A database-backed CRM for independent work: clients, leads, deals, tasks, search, and analytics across a React interface and FastAPI service.', 'CRM для самостійної роботи з базою даних: клієнти, ліди, угоди, завдання, пошук та аналітика на React і FastAPI.'),
    overview: l('A standalone CRM with a React/TypeScript frontend and FastAPI/PostgreSQL backend. Application records and analytics are served by the API.', 'Самостійна CRM з інтерфейсом на React/TypeScript та бекендом на FastAPI/PostgreSQL. Дані й аналітику надає API.'),
    purpose: l('Organize client relationships and work in one private workspace, from an incoming lead to deals, tasks, and reporting.', 'Організувати роботу з клієнтами в приватному просторі: від нового ліда до угод, завдань і звітів.'),
    technical: l('React and TypeScript implement the responsive workspace. FastAPI routes delegate to service and repository layers; SQLAlchemy and Alembic manage PostgreSQL persistence and migrations.', 'React і TypeScript реалізують адаптивний інтерфейс. Маршрути FastAPI передають роботу сервісам і репозиторіям; SQLAlchemy та Alembic відповідають за PostgreSQL і міграції.'),
    architecture: l('React interface → REST API → authentication and service layer → PostgreSQL. Each request uses a transaction, and owned-record queries scope data to the signed-in account.', 'Інтерфейс React → REST API → автентифікація й сервіси → PostgreSQL. Кожен запит працює в транзакції, а доступ до записів обмежено поточним обліковим записом.'),
    details: l('Lead conversion creates a client and records the change in one transaction. Refresh sessions rotate and can be revoked. The UI includes loading, empty, error, and confirmation states; a seeded demo account is optional and separate from normal registration.', 'Конвертація ліда створює клієнта й фіксує зміну в одній транзакції. Сесії оновлення токенів обертаються та можуть бути відкликані. Інтерфейс обробляє завантаження, порожні стани, помилки й підтвердження; демодані додаються окремо від звичайної реєстрації.'),
    features: [l('Private clients, leads, deals, and tasks', 'Приватні клієнти, ліди, угоди й завдання'), l('Kanban and table deal views with persisted changes', 'Kanban і таблиця угод зі збереженням змін'), l('Search, analytics, and CSV reports', 'Пошук, аналітика й CSV-звіти')],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'SQLAlchemy', 'PostgreSQL'],
    repo: 'https://github.com/TheNBeverHD/MiniCRM',
    images: [{ path: 'projects/crm-overview.jpg', alt: l('Folio CRM overview dashboard', 'Головна панель Folio CRM') }, { path: 'projects/crm-deals.jpg', alt: l('Folio CRM deals workspace', 'Робочий простір угод Folio CRM') }],
  },
]
