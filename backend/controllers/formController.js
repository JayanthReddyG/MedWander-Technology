const  Form = require('../models/Form');
const submitForm = async (req, res) => {
    const { form_type, name, country_code, phone_number } = req.body;
    //console.log("request got",req.body)
    //console.log('form',Form)
    try {
        const newForm = await Form.create({
            form_type,
            name,
            country_code,
            phone_number,
        });
        res.status(201).json(newForm);
    } catch (err) {
        console.error('Error creating form:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    submitForm,
};
