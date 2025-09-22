import axios from "axios";
import { renderCards } from "./renderCards.js";

// // $.get('https://students-api.up.railway.app/movies', (data) => {
// // renderCards(data);
// // });


// const API_URL = "http://localhost:3000/movies";
const API_URL = "https://pm2-movieereel-production.up.railway.app/movies"

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;
    renderCards(data);
  } catch (err) {
    console.log(err);
  }
};

const postMovie = async (newMovie) => {
  try {
    const res = await axios.post(API_URL, newMovie);
    console.log(res);
    // return res
  } catch (err) {
    console.log(err);
  }
};

export { fetchData, postMovie };

