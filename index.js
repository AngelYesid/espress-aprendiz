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

import express from "express";

const app = express();
app.use((req, res, next) => {
  console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);
  next();
});
//middleware, imprime la fecha y lo que pidió el usuario y la URL. el next permite que continue con la ejecución del código, si no se pone next() se queda en el middleware y no ejecuta lo demás.
const actividades = [
  { id: 1, nombre: "Rafting en el río Fonce", tipo: "agua", precio: 60000 },
  { id: 2, nombre: "Parapente en el cañón", tipo: "aire", precio: 180000 },
  {
    id: 3,
    nombre: "Caminata Camino Real a Barichara",
    tipo: "tierra",
    precio: 0,
  },
  { id: 4, nombre: "Torrentismo en cascada", tipo: "agua", precio: 70000 },
];

app.get('/actividades/:id', (req, res) => {
const id = Number(req.params.id);
const actividad = actividades.find((a) => a.id == id);
if (!actividad) {
return res.status(404).json({ mensaje: `No existe la actividad con id ${req.params.id}`
});
}
res.json(actividad);
});

app.get('/actividades', (req, res) => {
console.log('query:', req.query);
const { tipo } = req.query;
if (!tipo) {
return res.json(actividades);
}
const filtradas = actividades.filter((a) => a.tipo == tipo.toLowerCase());
res.json(filtradas);
});

app.get("/actividades", (req, res) => {
  res.json(actividades);
});

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.get("/actividad", (req, res) => {
  res.json({ mensaje: "holis" });
});

app.post("/actividad", (req, res) => {
  res.send("Esto es un post llamado actividad");
});

app.listen(3001, () => {
  console.log("Servidor escuchando en el puerto http://localhost:3001");
});


/*

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
res.send('API Aventuras San Gil funcionando');
});
app.listen(PORT, () => {
console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
*/
