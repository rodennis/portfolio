const express = require('express');
const app = express()

const PORT = 8080

app.use(express.static('views'));
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})