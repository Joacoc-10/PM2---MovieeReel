const axios = require("axios");
const { renderCards } = require("./renderCards");

// // $.get('https://students-api.up.railway.app/movies', (data) => {
// // renderCards(data);
// // });

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    const data = response.data;
    renderCards(data);
  } catch (err) {
    console.log(err);
  }
};

const postMovie = async (newMovie) => {
  try {
    const res = await axios.post("http://localhost:3000/movies", newMovie);
    console.log(res);
    // return res
  } catch (err) {
    console.log(err);
  }
};

module.exports = { fetchData, postMovie };
