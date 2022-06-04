const express = require('express')

const app = express();

app.use('/', (req, res) => {
    res.send("Welcome to web dev weekend deployment")
})

app.listen(4000, () => {
    console.log('server listening on port 4000')
})