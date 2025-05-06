//El controlador se va a encaragar de recibir la peticion y enviar la respuesta
const {getMoviesService} = require('../services/moviesServices');
const {createMovieService} = require('../services/moviesServices')

const getMovies = async (req,res) => {
  // res.status(200).send('Proximamente estaran disponibles los datos de peliculas');
  const allMovies = await getMoviesService();
  res.status(200).json(allMovies);
};

const createMovie = async (req,res) => {
  const body = req.body;
  console.log('body');
  const newMovie = await createMovieService(body)
  res.status(201).json({ message: 'Pelicula creada correctamente', mmovie: newMovie});
}

const updateMovie = (req,res) => {}
const deleteMovie = (req,res) => {}


module.exports = {getMovies,createMovie};

