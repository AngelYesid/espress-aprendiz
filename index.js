/*
// servidor-nativo.js
const http = require('http');
// Esta función se ejecuta UNA VEZ por cada petición que llega
const servidor = http.createServer((req, res) => {
console.log('Llegó una petición:', req.method, req.url);
res.end('Hola desde el servidor');
});
servidor.listen(3000, () => {
console.log('Escuchando en http://localhost:3000');
});
*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
res.send('API Aventuras San Gil funcionando');
});
app.listen(PORT, () => {
console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
