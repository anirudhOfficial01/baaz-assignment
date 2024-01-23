const express = require('express');
const mongoose = require('mongoose')
const app = express()

//routes
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send(req.body);
})
mongoose.
    connect('mongodb+srv://admin:admin0000@anirudhapi.hvkssxu.mongodb.net/NODE-API?retryWrites=true&w=majority')
    .then(() => {
        console.log('connected to MongoDB')
        app.listen(3000, () => {
            console.log('Node API is running on port 3000')
        })
    }).catch((error) => {
        console.log(error)
    });