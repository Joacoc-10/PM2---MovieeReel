//Entry Point

const app = require('./src/server');
const dbCon = require('./src/config/dbCon');

dbCon()
.then((res) => {
    app.listen(3000, () => {
      console.log('Servidor encontrado en el puerto 3000!');
    })
  })
  .catch((err) => {
    console.log('Error al conectar la Base de Datos');
    
  })

