const { body, validationResult } = require('express-validator');

const validateForm = [
    body('form_type').notEmpty().withMessage('Form type is required'),
    body('name').notEmpty().withMessage('Name is required').isAlpha().withMessage('Name must contain only alphabetic characters'),
    body('country_code').notEmpty().withMessage('Country code is required').isIn(['IN', 'US']).withMessage('Invalid country code'),
    body('phone_number').notEmpty().withMessage('Phone number is required').custom((value, { req }) => {
        const countryCode = req.body.country_code;
        if (countryCode === 'IN') {
            if (!/^[789]\d{9}$/.test(value)) {
                throw new Error('Phone number must be 10 digits starting with 7, 8, or 9 for India');
            }
        } else if (countryCode === 'US') {
            if (!/^\d{10}$/.test(value)) {
                throw new Error('Phone number must be 10 digits for USA');
            }
        }
        return true;
    }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateForm,
};