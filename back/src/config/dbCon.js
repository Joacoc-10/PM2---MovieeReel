require('dotenv').config();
const mongoose = require('mongoose');


const dbCon = async () => {
  try {
    await mongoose.connect(process.env.moviesURI);
    console.log('¡Conexión a MongoDB exitosa!'); 
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error); 
  }
};

module.exports = dbCon;