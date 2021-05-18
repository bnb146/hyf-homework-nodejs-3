
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Require the Route defined in router.js
const router = require('router.js');

app.use('/users', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
