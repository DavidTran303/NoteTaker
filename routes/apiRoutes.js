const router = require('express').Router();
const fs = require('fs');
const util = require("util");
const notes = []




// GET "/api/notes" responds with all notes from the database
router.get('/notes', function(req, res) {
  
   fs.readFile('./db/db.json', function(err, data) {
    res.json(JSON.parse(data));
    console.log(data)
    if (err) throw err;
  });
});

// POST "/api/notes", with current note
router.post('/notes', (req, res) => {
   let newNote = req.body

    fs.readFile('./db/db.json', function(err, data)  {
    if (err) throw err;

    notes.push(newNote);


    });

    // console.log("GET DATA" + data)
    fs.write('./db/db.json', function(err, data) {
      if(err) throw  err;
      res.send(saveNotes())
      notes.push(addNotes);
    });
  
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {

});

module.exports = router;
