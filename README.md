﻿#  Редактор табличных данных - React App (тестовое задание)
 
## Функционал:
1. Просмотр, добавление, изменение, удаление данных, в том числе изменение
порядка записей.
2. Загрузку и обновление данных из отдельной textarea на той же странице (в
формате JSON).
3. Выгрузку данных обратно в ту же textarea по запросу пользователя (нажатие
кнопки “Сохранить”).

### Примечание:
Решил немного усложнить тестовое задание, но не сразу обратил внимание, что в бесплатной версии https://mockapi.io/, теперь не возможно использовать метод PATCH, поэтому обновление списка из textarea и drag and drop реализованы только на frontend (при обновлении страницы сбрасываются до дефолтного состояния). 

>Стек: </br>
>Frontend: React, Redux, Redux thunk, JS, SCSS </br>
>Backend: https://mockapi.io/ (условный backend с сгенерированными данными, связка через fetch запросы)

## Запуск:
***
Deploy - https://tabular-data-editor.netlify.app/
***
Локально:
Клонировать репозиторий или скачать. В проекте выполнить команды: 
```
npm i
npm start
```

> Для удобства в проекте лежит JSON для тестирования textarea, по пути src\mock\data.json
