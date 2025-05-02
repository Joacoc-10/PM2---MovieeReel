//Entry Point

const app = require('./src/server');

app.listen(3000, () => {
  console.log('Servidor encontrado en el puerto 3000');
})