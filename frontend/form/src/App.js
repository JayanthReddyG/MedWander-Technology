import React, { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import './styles/App.css';

const App = () => {
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formType, setFormType] = useState('');
  const [formDataLoaded, setFormDataLoaded] = useState(false);

  const handleFormTypeChange = (type) => {
    setFormType(type);
    setFormDataLoaded(false); // Reset form data loaded state
    setName('');
    setCountryCode('');
    setPhoneNumber('');
  };

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/forms', formData);

      console.log('Form submitted:', response.data);
      setName('');
      setCountryCode('');
      setPhoneNumber('');
      setFormDataLoaded(true); // Set formDataLoaded to true after successful submission
    } catch (err) {
      console.error('Error submitting form:', err.response.data);
    }
  };

  const handleSaveToLocal = (name,countryCode,phoneNumber) => {
    const formData = {
      name,
      countryCode,
      phoneNumber,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    setFormDataLoaded(true); // Set formDataLoaded to true when data is saved locally
  };

  const handleRefreshExcel = async () => {
    try {
      await axios.get('http://localhost:5100/api/updateExcel');
      alert('Excel sheet updated successfully');
    } catch (err) {
      console.error('Error refreshing Excel sheet:', err.response.data);
      alert('Failed to update Excel sheet');
    }
  };

  return (
      <div className="App">
        <h1>Dynamic Forms App</h1>
        <div className="div-button">
          <button onClick={() => handleFormTypeChange('A')}>Form A</button>
          <button onClick={() => handleFormTypeChange('B')}>Form B</button>
        </div>

        {formType && !formDataLoaded && (
            <Form
                formType={formType}
                handleSubmit={handleSubmit}
                handleSaveToLocal={handleSaveToLocal}
                handleRefreshExcel={handleRefreshExcel}
            />
        )}
        <footer>
          <p>&copy; Jayanth Reddy G 2024</p>
        </footer>
      </div>
  );
};

export default App;
