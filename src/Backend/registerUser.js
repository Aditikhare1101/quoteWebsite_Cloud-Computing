// Add this to your existing Express server code
app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;

    // Query to insert data into the database
    const query = 'INSERT INTO registerUser (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(201).json({ message: 'User registered successfully!' });
    });
});
