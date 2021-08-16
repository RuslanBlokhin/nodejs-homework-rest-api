## GoIT Node.js Course Template Homework

- Написан код для создания подключения к MongoDB при помощи Mongoose.
- В функциях обработки запросов заменен код CRUD-операций над контактами из файла, на Mongoose-методы для работы с коллекцией контактов в базе данных.
- Использована библиотека "http-errors" для обработки ошибок.
- Реализован для обновления статуса контакта favorite новый маршрут: PATCH/api/contacts/:contactId/favorite.

Команды:
- `npm start` — старт сервера в режиме production
- `npm run start:dev` — старт сервера в режиме разработки (development)
- `npm run lint` — запустить выполнение проверки кода с eslint, необходимо выполнять перед каждым PR и исправлять все ошибки линтера
- `npm lint:fix` — та же проверка линтера, но с автоматическими исправлениями простых ошибок
