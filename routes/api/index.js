const router = require('express').Router();
const booksRoutes = require('./books');

// Post Routes
router.use('./books', booksRoutes);

module.exports = router;