const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
})