
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const users = [];

app.get('/users', (req, res) => {
    res.json(users);
});
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;

    for(let user of users) {
        if(user.id === userId) {
            res.send(userId);
            return
        }
    }

    res.status(404).send('User not found');
});
app.post('/users', (req, res) => {
   const user = req.body;
   users.push(user);

    res.send('the user created');
});

app.delete('/users/:id', (req, res) => {
   const userID = req.params.id;

   for(let user of users) {
       if(user.id === userID) {
           users.splice(user.id);
           res.status(200);
           return
       }
   }

   res.status(204);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
