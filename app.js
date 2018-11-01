const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 5475;
const app = express();
// Set up mongoose connection
let dev_db_url = 'mongodb://<UserNAME>:<PASSWORD>@ds247223.mlab.com:47223/learning-db';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Get All your routes here
const product = require('./routes/product.route');
app.use('/products', product);


app.listen(PORT, ()=>  console.log(`Server is up and running at port: ${PORT}`));
