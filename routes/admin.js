const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

// filtering paths 
// /admin/add-product-GET
router.get('/add-product', (req, res, next) =>{
    // console.log("we are in the middleware again");
    // res.send('<form action = "/admin/add-product" method = "POST"><input type = "text" name = "title"><button type = "submit">Add product</button></form>');
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // next();
});


// /admin/add-product - POST
router.post('/add-product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
})


module.exports = router;
