const express = require('express');
const formRoutes = require('./formRoutes');

const router = express.Router();

router.use('/forms', formRoutes);

module.exports = router;