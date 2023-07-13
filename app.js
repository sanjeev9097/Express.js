
const express = require('express')

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin.js');

const shopRoutes = require('./routes/shop.js');

const app = express();


app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin',adminRoutes);

app.use(shopRoutes);


app.use((req, res, next) =>{
    res.status(404).send("Page not Found");
})


app.listen(3000);
// http.createServer(app).listen(8000);



