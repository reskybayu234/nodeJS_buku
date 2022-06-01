let http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Halo Bayu</h1>");
  })
  .listen(3000);
