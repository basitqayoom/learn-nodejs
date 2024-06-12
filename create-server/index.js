const http = require("http");
const fs = require("fs");
const url = require("url")

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") res.end();
    const date = Date.now()
    const log = `${date.toString()}: New request recieved at ${req.url}\n`;
    const _url = url.parse(req.url, true);
    // console.log(_url)
    switch (_url.pathname) {
        case "/": res.end("Home Page")
            break;
        case "/about":
            const username = _url.query.myName;
            res.end(`Hi ${username}`)
            break;
        case "/search":
            const search = _url.query.search_query;
            res.end(`Here are some results for ${search}`)
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