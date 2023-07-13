
const exprees = require('express');

const app1 = exprees.Router();

app1.get('/', (req, res, next) => {
    res.send('<h1> Hello World!</h1>')
});

module.exports = app1;