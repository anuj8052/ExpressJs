const http = require('http')

const express = require('express');

// console.log(routes.someText);
const app = express();

app.use((req, res, next) =>{
    console.log("we are in the middleware");
    next(); // allows to request to continue to the next middleware in the line
});

app.use((req, res, next) =>{
    console.log("we are in the middleware agian");
    res.send('<h1>Hello world from Express</h1>');
});

const server = http.createServer(app);

server.listen(1000);