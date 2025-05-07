const Movie = require("../models/Movie");

const getMoviesService = async () => {
  const movies = await Movie.find();
  return movies;
};
const createMovieService = async (newMovie) => {
  const createdMovie = await Movie.create(newMovie);
  return createdMovie;
};

const updateMovieService = () => {};
const deleteMovieService = () => {};

module.exports = {
  getMoviesService,
  createMovieService,
};
