# 2022-autumn-n.kuznetsov

# Туториал для начинающих

1) Установка Docker

Для того, чтобы установить Docker на ваш персональный компьютер, вам необходимо зарегистрироваться на официальном сайте .После того как вы скачали файл установщика, запустите его для установки Docker Desktop на ваш компьютер.

2)Установка pgAdmin

pgAdmin - приложение, позволяющее визуализировать работу с базами данных. Скачать установщик данной программы можно с официального сайта pgAdmin. 

3) Развёртка контейнера PostgreSQL. Запуск и подключение при помощи консоли.

Для того, чтобы создать новый контейнер, нужно ввести в командную строку следующую команду:

docker run -p 5432:5432 -d --name=postgres_cont -e POSTGRES_PASSWORD=1234 -e POSTGRES_USER=postgres postgres

После выполнения этой команды контейнер появляется в Docker Desktop

4) Подключение к базе в pgAdmin

Для того, чтобы подключиться к базе в pgAdmin, необходимо создать новый сервер. Чтобы это сделать, надо правой кнопкой мыши нажать на строку с надписью Server с левой стороны окна программы, в выпавшем меню выбрать Create -> Server:

Для того, чтобы считывать порт контейнера (5432) перейдём на вкладку Connections и в графе Host/name adress введём "localhost". Также необходимо задать пароль. 

5) Запуск скрипта

После этого в списке баз данных необходимо найти вашу БД и открыть ее двойным щелчком мыши. После этого, нужно нажать кнопку <Выплнить пользовательские SQL запросы> на панели инструментов.

В результате откроется окно для выполнения SQL запросов. Копируете туда <script-5.sql> и нажимаете <Выполнить>
Теперь у вас будет создана таблица и заполнена

6) Запуск проекта

После этого, заходите в ваш Visual Studio Code, открывает папку  с проектом, устанавливаете все dependencies, которые указаны в package.json. <npm install "необходимый dependencies ">

Потом, вводите в проекте в файлике <.env> параметры своей БД:
Название БД, имя пользователя, хост, пароль и ваш порт. Все это настраивается при создании вашей БД в СУБД(это чтобы у вас приложение связалось с БД).

Потом заходите в терминал и запускаете проет, прописап в терминале "npm run start".

И все готово!

Спасибо, что вместе с нами прошли этот не легкий путь.

Отдельные благодарности нашему руководителю - Михаилу, без которого этого туториала никогда бы не было. 