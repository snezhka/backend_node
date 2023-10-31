const Offer = require('./js/offer.js');
const fs = require('fs');
const http = require("http");
const host = 'localhost';
const port = 8080;
const qs = require('querystring');

const offers = new Array(45).fill(null).map(() => new Offer());
fs.writeFileSync('photos.txt', JSON.stringify(offers));

const requestListener = function (req, res) {
    switch (req.url) {
        case "/offers":
            try {
                const content = fs.readFileSync('photos.txt');
                res.writeHead(200, { 'content-type': 'application/json', 'access-control-allow-origin': '*' });
                res.write(content);
            } catch {
                res.writeHead(500);
                res.write("Error during reading the file");
            }
            res.end();
            break
        case "/offer":
            if (req.method == 'POST') {
                console.log('start');
                let body = '';
                req.on("data", (data) => {
                    body += data;

                });
                req.on("end", () => {
                    let newOffers = JSON.parse(fs.readFileSync('photos.txt'));
                    const newO = JSON.parse(body);
                    console.log('New offer', newO);
                    fs.writeFileSync('photos.txt', JSON.stringify(newOffers), (err) => {
                        if (err) throw err;
                        console.log('The "data to append" was appended to file!');
                    });
                });

                const data = fs.readFileSync('photos.txt', { encoding: 'utf8' });
                console.log(data);
                res.writeHead(200, { 'content-type': 'application/json', 'access-control-allow-origin': '*' });
                res.write(data);
                res.end();
            }
            break;
        default:
            res.writeHead(404);
            res.write(JSON.stringify({ error: "Resource not found" }));
            res.end();
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


