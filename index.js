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

import express from "express"


const app=   express()

// Va ANTES de las rutas
app.use((req, res, next) => {
console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);
next();
});

app.get("/",(req,res)=>{
    res.send("Hola Mundo")
})

app.get("/actividad",(req,res)=>{
    res.json({mensaje:"holis"})
})

app.post("/actividad",(req,res)=>{
    res.send("Esto es un post llamado actividad")
})


app.listen(3000,()=>{
    console.log('Servidor escuchando en el puerto http://localhost:3000');
})




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
