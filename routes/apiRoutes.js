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

  fs.readFile("./db/db.json", "utf-8", function (err, data) {
    if (err) throw err;

// use json.parse  to convert the data string to an array
    newNote = JSON.parse(data);
//  add the newNote to the data array. You'll use the push method to do this.
    newNotes.push(data);

    console.log(data);
//     dataArray.push(newNote);



// write the updated data array to your db.json file. Remember that this function takes 2 parameters 1) the path to the file 2) what should be written to the file. So if I had an object called myObject and I wanted it written to myFile.json then I would do so like this:
    fs.writeFile("./db/db.json", newNote)
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