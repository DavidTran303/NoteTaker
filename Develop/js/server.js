// Dependencies]
const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');

// Sets up the Express App
const app = express();
const PORT = 303;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Notes Data
const notes = [
  {
    title: " ",
    text: " ",
    id: " ",
  },
  {
    title: " ",
    text: " ",
    id: " ",
  },
  {
    title: " ",
    text: " ",
    id: " ",
  },
];


// function to take a filepath and respond with html
const renderHTML = (filePath, res) => {
  return fs.readFile(`${__dirname}${filePath}`, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
};



const handleRequest = (req, res) => {
  // Capture the url the request is made to
  const path = req.url;

  // When we visit different urls, call the function with different arguments
  switch (path) {
    case '/server':
      return renderHTML(`${path}.html`, res);

    default:
      return renderHTML('/index.html', res);
  }
};

// Create the server, assign it to a variable called "server"
const server = http.createServer(handleRequest);

// Starts our server
server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
