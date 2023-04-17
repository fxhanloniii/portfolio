const express = require('express');
const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(PORT, () => {
    console.log(`Frankie's Portfolio on ${PORT}`)
  })