# Инструкция для пользователя

Добро пожаловать в проект сайт My Ticket!

## Описание проекта

"Проект представляет собой одностраничный веб-сайт-визитку компании My Ticket. Этот сайт создан для представления основной информации о компании и ее услугах на одной странице."

## Требования к окружению

Для успешной работы с проектом, вам потребуется следующее:

1. Docker: Убедитесь, что у вас установлен Docker на вашей машине. Если у вас его нет, вы можете скачать и установить Docker с [официального сайта Docker](https://www.docker.com/get-started).

## Установка и запуск проекта

Чтобы установить и запустить проект, выполните следующие шаги:

1. Склонируйте репозиторий проекта с GitHub:

   ```bash
   git clone https://github.com/xypxzy/spa-landing
   ```

2. Перейдите в корневую директорию проекта:

   ```bash
   cd spa-landing
   ```

3. Создайте файл окружения `.env` в папке `/backend/` и настройте необходимые переменные окружения, если это необходимо.

4. Запустите проект с использованием Docker Compose:

   ```bash
   docker-compose up -d --build
   ```

   Эта команда создаст и запустит контейнеры для фронтенда (React TypeScript Vite) и бэкенда (Python Django) в фоновом режиме.

5. Откройте ваш веб-браузер и перейдите по адресу `http://localhost:8082`, чтобы просмотреть фронтенд приложения.

## Использование проекта

Теперь, когда проект запущен, вы можете начать его использовать. Вот некоторые общие действия:

1. Взаимодействие с веб-приложением: Откройте ваш браузер и перейдите по адресу `http://localhost:8082`, чтобы начать использовать фронтенд часть проекта.

2. Взаимодействие с бэкендом: Бэкенд находится в контейнере Docker и доступен по адресу `http://localhost:8002`. Вы можете взаимодействовать с бэкендом через API запросы, используя инструменты, такие как `curl` или Postman.

## Завершение работы

По завершении работы с проектом, вы можете остановить его, выполнив следующую команду в корневой директории проекта:

```bash
docker-compose down
```

Это остановит контейнеры Docker, связанные с проектом.

## Поддержка и обратная связь

Если у вас возникли вопросы, проблемы или вы хотите предложить улучшения, пожалуйста, свяжитесь с нами через [почту](xypxzy@gmail.com).

Спасибо за использование нашего проекта!
