const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url == "/") {
      res.write("<h1>Halaman Utama</h1>");
      res.end();
    } else if (req.url == "/katalog") {
      res.write("<h1>Halaman Katalog</h1>");
      res.end();
    } else {
      res.status = 404;
      res.end("<h2>Halaman tidak ditemukan</h2>");
    }
  })
  .listen(3000);
