// console.log('Hello, Node!');
// console.log('GoodBye');

// const http = require("http");
//
// http
//   .createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Welcome to my book club!\n");
//   })
//   .listen(8080);
//
// console.log("My first Node test server is running on Port 8080.");

// const http = require("http"),
//   url = require("url");
//
// http
//   .createServer((request, response) => {
//     let requestURL = url.parse(request.url, true);
//     if (requestURL.pathname == "/documentation.html") {
//       response.writeHead(200, { "Content-Type": "text/plain" });
//       response.end("Documentation on the bookclub API.\n");
//     } else {
//       response.writeHead(200, { "Content-Type": "text/plain" });
//       response.end("Welcome to my book club!\n");
//     }
//   })
//   .listen(8080);
//
// console.log("My first Node test server is running on Port 8080.");

const express = require("express"),
  app = express();

let myLogger = (req, res, next) => {
  console.log(req.url);
  next();
};

app.use(myLogger);

app.get("/", (req, res) => {
  res.send("Welcome to my app!");
});

app.get("/secreturl", (req, res) => {
  res.send("This is a secret url with super top-secret content.");
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
