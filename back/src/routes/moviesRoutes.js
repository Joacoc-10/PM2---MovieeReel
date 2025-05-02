//Aqui segun cual sea la causa "/usuario" o "/perfil", lo va a encausar hacia el controlador especificado

const {Router} = require('express');
const {movieControllers} = require('../controllers/moviesControllers')


const router = Router();

router.get('/', movieControllers);

module.exports = router;