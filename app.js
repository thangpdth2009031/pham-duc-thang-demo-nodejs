const express = require('express');
const app = express();
const port = 8888;
app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('hello');
})
app.listen(port, function () {
    console.log('Example app listening on port' + port);
})