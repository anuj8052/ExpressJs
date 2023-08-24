const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

//  /admin
router.get('/', (req, res, next) =>{
    // res.send('<h1> Hello Express js</h1>');
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;