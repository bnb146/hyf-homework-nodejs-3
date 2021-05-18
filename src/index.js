
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

//Require the Route defined in router.js
const router = require('router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);
app.use('/users', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
