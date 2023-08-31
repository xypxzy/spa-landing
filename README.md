Как пользоваться API.
1. Запустить docker-compose.yml командой docker-compose up --build.
2. Отпралять GET запросы на
- http://localhost:8002/content/employees/ - список сотрудников.
- http://localhost:8002/content/projects/ - список проектов.
- http://localhost:8002/content/emails/ - список имэилов.
- http://localhost:8002/content/phones/ - список телефонов.
- http://localhost:8002/content/addresses/ - список адресов.

3. По умолчанию язык ответа - русский. Это относится только к
запрашиваемому динвмическому контенту. Но если добавить заголовок:
    "Accept-Language": "ru" - тоже русский.
    "Accept-Language": "en" - английский.
    "Accept-Language": "ky" - кыргызский.
