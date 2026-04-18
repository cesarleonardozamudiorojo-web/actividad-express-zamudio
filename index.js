const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.get('/usuario', (req, res) => {
  const usuario = {
    id: 1,
    nombre: 'Cesar Leonardo Zamudio Rojo',
    rol: 'Estudiante'
  };

  res.json(usuario);
});

app.listen(8080, () => {
  console.log('Servidor corriendo en http://127.0.0.1:8080');
});