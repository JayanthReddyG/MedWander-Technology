const express = require('express');
const { submitForm } = require('../controllers/formController');
const { validateForm } = require('../utils/validators');

const router = express.Router();

router.post('/', validateForm, submitForm);

module.exports = router;
