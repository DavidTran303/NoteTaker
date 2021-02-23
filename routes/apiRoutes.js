const router = require('express').Router();
const fs = require('fs');
const { parse } = require('path');
const util = require("util");




// GET "/api/notes" responds with all notes from the database
router.get('/notes', function(req, res) {
  
   fs.readFile('./db/db.json', function(err, data) {
    if (err) throw err;

    console.log(data);

     res.json(JSON.parse(data));
    
  });
});

// POST "/api/notes", with current note
router.post('/notes', (req, res) => {
   let newNote = req.body;
  // add an ID to newNote

  fs.readFile("./db/db.json", function (err, data) {
    if (err) throw err;
    const dataArray = // parse data -----------^
    dataArray.push(newNote);

    fs.writeFile()
        // respond with the new note

  });
  
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {

});

module.exports = router;

// POST "/api/notes", with current note
router.post("/notes", (req, res) => {
  
});