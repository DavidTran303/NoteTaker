const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const util = require("util");
const {v4: idGenerator} = require("uuid");




// GET "/api/notes" responds with all notes from the database
router.get('/notes', function(req, res) {
  
   fs.readFile('./db/db.json',"utf-8" ,function(err, data) {
    if (err) throw err;

    console.log("GET", data);

     res.json(JSON.parse(data));
    
  });
});

// POST "/api/notes", with current note
router.post('/notes', (req, res) => {
  // note as we get from client
  const newNote = req.body;
  fs.readFile("./db/db.json", "utf-8", function (err, data) {
    if (err) throw err;
    // make the db into an array so we can add data

    let db = JSON.parse(data)

    console.log("DB before push")
    console.log(db)
    newNote.id = idGenerator();
    // and new note to array
    db.push(newNote)

    console.log("DB after push")
    console.log(db)

    // stringify the db again to prepare for transport
    const newDB = JSON.stringify(db)
    
    // target and overwrite our db
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), newDB)
    res.json(newDB)

     
  });
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {


});

module.exports = router;

