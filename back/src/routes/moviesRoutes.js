//Aqui segun cual sea la causa "/usuario" o "/perfil", lo va a encausar hacia el controlador especificado

const {Router} = require('express');
const {getMovies} = require('../controllers/moviesControllers')
const {createMovie} = require('../controllers/moviesControllers')

const router = Router();

router.get('/', getMovies);
router.post('/', createMovie)

module.exports = router;