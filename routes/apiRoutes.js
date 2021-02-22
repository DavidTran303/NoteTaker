const router = require('express').Router();
const { notStrictEqual } = require('assert');
const fs = require('fs');
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const addNotes = []

// GET "/api/notes" responds with all notes from the database
router.get('/notes', function(req, res) {
  
   readFileAsync('/db/db.json', function(err, data) {
    res.json(getNotes(data));
    console.log(data)
    if (err) throw err;
  });
});

// POST "/api/notes", with current note
router.post('/notes', (req, res) => {
   let addNotes = req.body

    readFileAsync('/db/db.json', function(err, data)  {
    res.json(getNotes)
    if (err) throw err;
    });

    // console.log("GET DATA" + data)
    writeFileAsync('/db/db.json', function(err, data) {
      if(err) throw  err;
      res.send()
      notes.push(addNotes);
    });
  
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {

});

module.exports = router;
