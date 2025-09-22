//El controlador se va a encaragar de recibir la peticion y enviar la respuesta
// moviesControllers.js
const { getMoviesService, createMovieService } = require('../services/moviesServices');

// GET /movies
const getMovies = async (req, res) => {
  try {
    const allMovies = await getMoviesService();
    res.status(200).json(allMovies);
  } catch (error) {
    console.error("Error al obtener películas:", error);
    res.status(500).json({ message: "Error al obtener películas", error });
  }
};

// POST /movies
const createMovie = async (req, res) => {
  try {
    const body = req.body;
    console.log("Body recibido desde frontend:", body);

    // Validaciones básicas
    const requiredFields = ["title", "director", "year", "poster", "rate", "duration", "genre"];
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: "Faltan campos obligatorios",
        missingFields
      });
    }

    // Validación de tipos simples
    if (!Array.isArray(body.genre)) {
      return res.status(400).json({ message: "El campo 'genre' debe ser un array" });
    }

    // Crear la película en la DB
    const newMovie = await createMovieService(body);

    console.log("Nueva película creada:", newMovie);

    res.status(201).json({ 
      message: "Película creada correctamente", 
      movie: newMovie 
    });

  } catch (error) {
    console.error("Error al crear la película:", error);
    res.status(500).json({ message: "Error al crear la película", error });
  }
};

module.exports = { getMovies, createMovie };


