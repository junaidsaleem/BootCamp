const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const PORT = process.env.PORT || 3000;

//API

app.post('/items', (req, res) => {
    // Logic to add item
    res.status(201).send('Item created');
});
app.get('/items', (req, res) => {
    // Logic to retrieve items
    res.status(200).send('Items retrieved');
});

// Get a single item by id
app.get('/items/:id', (req, res) => {
    const { id } = req.params;
    // Logic to retrieve item by id
    res.status(200).send(`Item ${id} retrieved`);
});

app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    // Logic to update item by id
    res.status(200).send(`Item ${id} updated`);
});
app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    // Logic to delete item by id
    res.status(200).send(`Item ${id} deleted`);
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
