const express = require('express');
const cors = require('cors');
const sequelize = require('./config');
const routes = require('./routes');
const { updateExcel } = require('./utils/excelUtils');
const  Form = require('./models/Form');
const app = express();
const PORT = process.env.PORT || 5100;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/api/updateExcel', async (req, res) => {
    try {
        const forms = await Form.findAll();
        await updateExcel(forms);
        res.status(200).json({ message: 'Excel sheet updated successfully' });
    } catch (err) {
        console.error('Error updating Excel sheet:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

sequelize.sync()
    .then(() => {
        console.log('Database synced');
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });