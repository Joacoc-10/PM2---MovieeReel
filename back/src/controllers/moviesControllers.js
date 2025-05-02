//El controlador se va a encaragar de recibir la peticion y enviar la respuesta
const {getAllMovies} = require('../services/moviesServices');

const movieControllers = (req,res) => {
  // res.status(200).send('Proximamente estaran disponibles los datos de peliculas');
  const allMovies = getAllMovies();
  res.json(allMovies);
};

module.exports = {movieControllers};
