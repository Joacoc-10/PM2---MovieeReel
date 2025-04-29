
const {renderCards} = require('./renderCards');
const {formValidation} = require('./formControl')
const axios = require('axios');

// $.get('https://students-api.up.railway.app/movies', (data) => {
// renderCards(data);
// });

const fetchData = async () => {
  try{
    const response = await  axios.get('https://students-api.up.railway.app/movies');
    const data = response.data;
    renderCards(data);
  } catch (err) {
    console.log(err);
  }
}
 fetchData();