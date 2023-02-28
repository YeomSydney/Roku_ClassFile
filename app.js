const express = require('express');
const app = express();

const port = process.env.PORT || 3050;
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.listen(port, ()=> {
    console.log(`app is running on ${port}`);
})
