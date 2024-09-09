const http = require('http');

// Счетчики просмотров для страниц
let countFirst = 0;
let countSecond = 0;

// Функция для обработки запросов
const requestHandler = (req, res) => {
	if (req.url === '/') {
		countFirst++;
		res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
		res.end(`
            <html>
                <head><title>Главная страница</title></head>
                <body>
                    <h1>Главная страница</h1>
                    <a href="/about">На About</a>
                    <p>Посещений: ${countFirst}</p>
                </body>
            </html>
        `);
	} else if (req.url === '/about') {
		countSecond++;
		res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
		res.end(`
            <html>
                <head><title>Страница About</title></head>
                <body>
                    <h1>Страница About</h1>
                    <a href="/">На главную</a>
                    <p>Посещений: ${countSecond}</p>
                </body>
            </html>
        `);
	} else {
		res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
		res.end(`
            <html>
                <head><title>Not Found 404</title></head>
                <body>
                    <h1>Not Found 404</h1>
                    <p>Страницы не существует</p>
                    <a href="/">На главную</a>
                </body>
            </html>
        `);
	}
};

// Создание HTTP сервера
const server = http.createServer(requestHandler);

// Запуск сервера на порту 3000
server.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});