const dotenv = require('dotenv')
dotenv.config()

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// API endpoint
app.post('/api/contact', async (req, res) => {
    const uri = process.env.DB_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('18SEE-website');
        const collection = db.collection('contact us');
        console.log(req.body);

        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ success: false, error: 'All fields are required.' });
        }

        await collection.insertOne({ name, email, subject, message, createdAt: new Date() });

        res.json({ success: true, message: 'Contact saved successfully.' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: 'Database error.' });
    } finally {
        await client.close();
    }
});

// api route to handle newsletter subscriptions
app.post('/api/newsletter', async (req, res) => {
    const uri = process.env.DB_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('18SEE-website');
        const collection = db.collection('newsletter');

        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ success: false, error: 'Email is required.' });
        }

        await collection.insertOne({ email, createdAt: new Date() });

        res.json({ success: true, message: 'Subscribed to newsletter successfully.' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: 'Database error.' });
    } finally {
        await client.close();
    }
});

// Handle requests by serving index.html for all routes (catch-all)
// This must be the last route defined
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Start the server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});