import axios from "axios";
import { renderCards } from "./renderCards.js";

// Esta línea lee la variable de entorno de Vercel
const API_URL = process.env.API_URL;

const fetchData = async () => {
  try {
    // Agregamos la ruta '/movies' aquí
    const response = await axios.get(`${API_URL}/movies`);
    const data = response.data;
    renderCards(data);
  } catch (err) {
    console.log(err);
  }
};

const postMovie = async (newMovie) => {
  try {
    // Agregamos la ruta '/movies' aquí
    const res = await axios.post(`${API_URL}/movies`, newMovie);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export { fetchData, postMovie };

