const http = require('http');
const datos = require('./datos.js');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`Servidor Node.js activo\n\nMensaje: ${datos.mensaje}`);
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});





// node server.js