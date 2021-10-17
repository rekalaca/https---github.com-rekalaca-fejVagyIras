const http = require('http');
const fs = require('fs');
const port = 4444; // Port megadása

// Szerver létrehozása
const server = http.createServer((req, res) => {

    // Kiiratni a terminálba a get kéréseket
    console.log(req.url);
    console.log(req.method);

    switch (true) {
        // Főoldal és aloldalak beállítása
        case req.url === "/" && req.method === "GET":
            fs.readFile("index.html", "utf-8", (err, data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            });

            break;
        case req.url === "/fej.html" && req.method === "GET":
            fs.readFile("fej.html", "utf-8", (err, data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            });

            break;
        case req.url === "/iras.html" && req.method === "GET":
            fs.readFile("iras.html", "utf-8", (err, data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            });

            break;

        // Stílus beállítása
        case req.url === "/fejes.css" && req.method === "GET":
            fs.readFile("fejes.css", "utf8", (err, data) => {
                res.setHeader('Content-Type', 'text/css');
                res.writeHead(200);
                res.end(data);
            });

            break;

        // Képek beállítása
        case req.url === "/fej.jpg" && req.method === "GET":
            fs.readFile("fej.jpg", (err, data) => {
                res.setHeader('Content-Type', 'image/jpg');
                res.writeHead(200);
                res.end(data);
            });

            break;

        case req.url === "/iras.jpg" && req.method === "GET":
            fs.readFile("iras.jpg", (err, data) => {
                res.setHeader('Content-Type', 'image/jpg');
                res.writeHead(200);
                res.end(data);
            });

            break;

        default:

            // Hiba oldal
            fs.readFile("hiba.html", "utf8", (err, data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            });

            break;
    }
});

// kiirja a port számot is
server.listen(port, () => {
    console.log(`Server fut a ${port} porton`);
})