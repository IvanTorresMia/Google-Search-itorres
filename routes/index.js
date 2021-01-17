const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// This calls the api routes. 
router.use('/api', apiRoutes);

// if there are none then send the react app.
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router;