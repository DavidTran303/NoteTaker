const router = require('express').Router();

// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {

});

// POST "/api/notes", with current note
router.post('/notes', (req, res) => {

});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {

});

module.exports = router;
