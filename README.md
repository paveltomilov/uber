# Uber Landing Page

Адаптивный лендинг для сервиса Uber Partners.

## Технологии

- **HTML5** - семантическая верстка
- **SCSS** - препроцессор CSS с методологией БЭМ
- **Vite** - сборщик проекта
- **GitLab Pages** - деплой

## 📦 Использованные технологии и подходы

### Frontend

- **Vite** - быстрая сборка и разработка
- **SCSS**:
  - Переменные для цветов и брейкпоинтов
  - Миксины для адаптива и переиспользуемых стилей
  - Вложенность по методологии БЭМ
- **Методология БЭМ**:
  - Блоки (header, hero, advantages, footer)
  - Элементы (**title, **container, \_\_list)
  - Модификаторы (--active, --primary)
- **Desktop First** подход с медиа-запросами:
  - laptop (до 1199px)
  - tablet (до 1024px)
  - mobile (до 767px)
  - mobile-sm (до 575px)

### Инструменты разработки

- **Git** - контроль версий
- **GitLab** - хостинг репозитория
- **GitLab CI/CD** - автоматический деплой

## 🛠 Установка и запуск

### Требования

- Node.js (версия 16 или выше)
- npm (устанавливается вместе с Node.js)

### Клонировать репозиторий

```bash
git clone https://github.com/paveltomilov/uber.git
cd uber
```

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

### После запуска откройте в браузере: [http://localhost:5173](http://localhost:5173)

### Сборка для продакшена

```bash
npm run build
```

### Собранные файлы будут в папке dist/

### Предпросмотр сборки

```bash
npm run preview
```

Демо: [https://paveltomilov.ru/work/uber](https://paveltomilov.ru/work/uber)
