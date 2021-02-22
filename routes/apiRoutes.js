const router = require('express').Router();
const fs = require('fs');






var newNoteData = require("../public/assets/js/index");


// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', function(err, data) {
    res.json(JSON.parse(data));
    if (err) throw err;
  });
});

// POST "/api/notes", with current note
router.post('/notes', (req, res) => {
   var newNote = req.body
    console.log("newNote")

    fs.readFile('./db/db.json', function(err, data) {
    res.json(JSON.parse(data));
    if (err) throw err;

    





  });
  
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {
    res.json(deleteNote);
});

module.exports = router;
