//funcion auxiliar para manipular img 
function nombreImagen(nombre) {
  return nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_");
}

function formatearPrecio(valor) {
  return `$ ${Number(valor).toLocaleString('es-CL')}`;
}


const btnLista = document.getElementById('btnList');
const listaDiv = document.getElementById('list');
const form = document.getElementById('formProduct');
const ordenarSelect = document.getElementById('order');

let productos = [];

btnLista.addEventListener('click', obtenerProductos);
ordenarSelect.addEventListener('change', ordenarProductos);
form.addEventListener('submit',agregarProducto);

async function obtenerProductos() {
  try {
    const res = await fetch('/productos');
    productos = await res.json();
    mostrarProductos(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
  }
}

function mostrarProductos(lista) {
  listaDiv.innerHTML = '';

  if (lista.length === 0) {
    listaDiv.innerHTML = '<p>No hay productos disponibles</p>';
    return;
  }

  lista.forEach(prod => {
    const imagen = nombreImagen(prod.nombre);

    const card = document.createElement('div');
    card.classList.add('card-producto');

    card.innerHTML = `
      <div class="card-img">
        <img src="img/${imagen}.png" alt="${prod.nombre}" onerror="this.src='img/default.png'">
      </div>
      <div class="card-body">
        <h3 class="card-title">${prod.nombre}</h3>
        <p class="card-price">${formatearPrecio(prod.precio)}</p>
      </div>
    `;

    listaDiv.appendChild(card);
  });
}

function ordenarProductos() {
  const criterio = ordenarSelect.value;

  if (criterio === 'nombre') {
    productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  } else if (criterio === 'precio'){
    productos.sort((a,b) => Number(a.precio) - Number(b.precio));
  }

  mostrarProductos(productos);
}

async function agregarProducto(e) {
  e.preventDefault();

   const nombre = document.getElementById('name').value;
   const precio = Number(document.getElementById('price').value);

   //valida precio
  if(precio < 1000){
    alert("Error: Ingresa un precio mayor a $1.000");
    return;
  }
   try {
    const res = await fetch('/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ nombre, precio })
    });

    if(!res.ok) {
      const data = await res.json();
      console.error('Error al agregar producto:', data.error);
      return;
    }

    form.reset();
    obtenerProductos();
  } catch (error) {
    console.error('Error al agregar producto:', error);
  }
}

