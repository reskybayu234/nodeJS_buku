const fs = require("fs");

// data yang akan ditulis ke dalam file
let data = `Javascript, python, ruby, PHP`;

// menulis data ke dalam file
fs.writeFile("./data.txt", data, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("File data.txt telah terbuat di direktori aktif");
  }
});
