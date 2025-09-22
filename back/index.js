//Entry Point

const app = require('./src/server');
const dbCon = require('./src/config/dbCon');


const port = process.env.PORT || 3000;

dbCon()
.then((res) => {
    app.listen(port, () => {
      console.log(`Servidor encontrado en el puerto ${port}!`);
    })
  })
  .catch((err) => {
    console.log('Error al conectar la Base de Datos');
    
  })

