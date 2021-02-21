// Routes

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

// Displays all notes
app.get('/api/notes', (req, res) => res.json(notes));

// Displays a single note, or returns false
app.get('/api/notes/:notes', (req, res) => {
  const text  = req.params.notes;

  console.log(text);

  

  for (let i = 0; i < notes.length; i++) {
    if (text === notes[i].title) {
      return res.json(notes[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post('/api/notes', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newNotes = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newNotes.title = newNotes.text.replace(/\s+/g, '').toLowerCase();
  console.log(newNotes);

  notes.push(newNotes);
  res.json(newNotes);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));