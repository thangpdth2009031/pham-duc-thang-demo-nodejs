var express = require('express');
var app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/products', function (req, res) {
    res.render('products');
})

app.get('/product-details', function (req, res) {
    res.render('product-details');
})
app.listen(8888, function () {
    console.log("Example app listening  at http://localhost:8888");
})