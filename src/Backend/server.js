const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3306;
const bucket = BUCKET_NAME;
const region = REGION_NAME;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection (RDS instance)
const db = mysql.createConnection({
    host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database!');
});

// Register API route
app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Insert the user data into the database
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting data into database:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        res.status(201).json({ message: 'User registered successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// db.connect(err => {
//     if (err) throw err;
//     console.log('MySQL Connected!');
// });

// app.get('/api/register', (req, res) => {
//     db.query('SELECT * FROM registerUsers', (err, results) => {
//         if (err) return res.status(500).json(err);
//         return res.status(200).json(results);
//     });
// });

// const PORT = process.env.PORT || 3306;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
