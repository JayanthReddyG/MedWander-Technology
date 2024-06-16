import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ formType, handleSubmit, handleSaveToLocal, handleRefreshExcel }) => {
    const [name, setName] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};

        if (!name.trim()) {
            errors.name = 'Name is required';
        } else if (!/^[a-zA-Z ]+$/.test(name)) {
            errors.name = 'Name should contain only alphabetic characters';
        }

        if (!countryCode) {
            errors.country_code = 'Please select a country code';
        }

        if (!phoneNumber.trim()) {
            errors.phone_number = 'Phone number is required';
        } else if (!/^\d+$/.test(phoneNumber)) {
            errors.phone_number = 'Phone number should contain only digits';
        } else {
            // Additional validation based on country code
            if (countryCode === 'IN' && !/^\d{10}$/.test(phoneNumber)) {
                errors.phone_number = 'Phone number should be 10 digits for India';
            } else if (countryCode === 'US' && !/^\d{7,14}$/.test(phoneNumber)) {
                errors.phone_number = 'Phone number should be between 7 to 14 digits for US';
            }
        }

        return errors;
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5100/api/forms', {
                form_type: formType,
                name: name,
                country_code: countryCode,
                phone_number: phoneNumber,
            });

            console.log('Form submitted:', response.data);
            handleSaveToLocal(name,countryCode,phoneNumber); // Save form data to local storage
            setName('');
            setCountryCode('');
            setPhoneNumber('');
            setErrors({});
        } catch (err) {
            console.error('Error submitting form:', err.response.data);
            setErrors(err.response.data.errors.reduce((acc, error) => {
                acc[error.param] = error.msg;
                return acc;
            }, {}));
        }
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="countryCode">Country Code:</label>
                <select
                    id="countryCode"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                >
                    <option value="">Select Country Code</option>
                    <option value="IN">India (+91)</option>
                    <option value="US">United States (+1)</option>
                </select>
                {errors.country_code && <span className="error-message">{errors.country_code}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phone_number && <span className="error-message">{errors.phone_number}</span>}
            </div>

            <div className="div-button">
                <button type="submit">Submit</button>
                <button type="button" onClick={handleRefreshExcel}>Refresh Excel</button>
            </div>
        </form>
    );
};

export default Form;
