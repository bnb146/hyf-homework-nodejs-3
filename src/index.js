
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

const users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
