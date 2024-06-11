const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const date = Date.now()
    const log = `${date.toString()}: New request recieved from ${req.socket.remoteAddress} at ${req.url}\n`;

    switch (req.url) {
        case "/": res.end("Home Page")
            break;
        case "/about": res.end("About Page")
            break;
        default:
            res.end("404 Not Found")

    }

    fs.appendFile('log.txt', log, (err, data) => {
        res.end("Hello from server again!");
    })
});

myServer.listen(8000, () => {
    console.log("Server started")
});