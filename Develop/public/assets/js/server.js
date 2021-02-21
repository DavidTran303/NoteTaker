//dependencies 
const express = require('express')
const path = require('path');
const fs = require('fs');

//setting up the express app
const app = express()
const PORT = 3000;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// notes (DATA)
const notes = [
  {
    title: 'Testing Title  1',
    text: 'Testing Text 1',
    id: 1,
  },
  {
    title: 'Testing Title  1',
    text: 'Testing Text 1',
    id: 2,
  },
  {
    title: 'Testing Title  1',
    text: 'Testing Text 1',
    id: 3,
  },
];

const handleRequest = (req, res) => {
  // Capture the url the request is made to
  const path = req.url;

  // When we visit different urls, read and respond with different files
  switch (path) {
    case '/notes':
      return fs.readFile(`${__dirname}/notes.html`, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });

    // default to rendering index.html, if none of above cases are hit
    default:
      return fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
  }
};

// Create the server, assign it to a variable called "server"
const server = http.createServer(handleRequest);

// Starts our server.
server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});






