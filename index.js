const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static('docs'));

const FILE_PATH = path.join(__dirname, 'productos.txt'); //archivo con info


// Middleware para permitir solo GET y POST
app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }
  next();
});


// GET - obtener productos
app.get('/productos', async (req, res) => {
  try {
    const data = await fs.readFile(FILE_PATH, 'utf8');

    const productos = data 
      .split('\n')
      .filter(line => line.trim() !== '')
      .map(line => {
        const [nombre, precio] = line.split(',');
        return {
          nombre: nombre.trim(),
          precio: Number(precio.trim())
        };
      });

    res.status(200).json(productos);

  } catch (error) {
    res.status(500).json({ error: 'Error leyendo archivo' });
  }
});


// POST - agregar producto
app.post('/productos', async (req, res) => {
  let { nombre, precio } = req.body;

  // Validar nombre
  if (typeof nombre !== 'string') {
    return res.status(400).json({ error: 'El nombre debe ser un string' });
  }

  nombre = nombre.trim();

  if (nombre.length === 0 || nombre.length > 100) {
    return res.status(400).json({ error: 'Nombre inválido' });
  }

  // Validar precio
  precio = Number(precio);

  if (!Number.isFinite(precio)) {
    return res.status(400).json({ error: 'El precio debe ser un número válido' });
  }

  const MIN_PRECIO = 1000;
 
  if (precio < MIN_PRECIO ) {
    return res.status(400).json({
      error: `El precio debe estar entre ${MIN_PRECIO}`
    });
  }

  const nuevaLinea = `${nombre}, ${precio}\n`;

  try {
    await fs.appendFile(FILE_PATH, nuevaLinea);
    res.status(201).json({ mensaje: 'Producto creado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error guardando producto' });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});