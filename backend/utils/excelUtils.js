
const AddRow = require('./AddRow')
const updateExcel = async (formData) => {
    try{
        console.log(formData)
        formData.forEach(form => {
            const formVal={
                form_type:  form.dataValues.form_type ,
                 name:   form.dataValues.name ,
                  country_code:  form.dataValues.country_code,
                   phone_number: form.dataValues.phone_number,
            }
            AddRow(formVal)
        });

    }catch(err){
        console.error("unable to add row",err)
    }
};

module.exports = {
    updateExcel,
};