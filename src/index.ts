let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let agregar = document.getElementById("btn-agregar");
let calcular = document.getElementById("suma");
let lista = document.getElementById("lista");
let total = document.getElementById("total");
let vaciar = document.getElementById("vaciar");
let productos: string[] = [];
let precios: number[] = [];
let suma: number = 0;

//metodo push para agregar un elemento al final del arreglo (asignar evento),
const agregarAlCarrito = () => {
  productos.push(producto.value);
  precios.push(Number(precio.value));

  lista?.innerHTML += `<li>${producto.value} : $${precio.value}</li>`;

  const calcularTotal = () => {
    suma = 0;
    for (let i: number = 0; i < precios.length; i++) {
      suma += Number(precios[i]);
      total?.innerHTML = suma`<span>${total.value}</span>`;
    }
  };

  //vaciar los campos de entrada
  producto.value = "";
  precio.value = "";
};

/*const calcularTotal = () => {
  suma = 0;
  for (let i: number = 0; i < precios.length; i++) {
    suma += Number(precios[i]);
  }
  total?.innerHTML = suma;
};*/

const vaciarLista = () => {
  lista?.innerHTML = "";
  total.innerHTML = "";
};
//agregar eventos a los botones
agregar?.addEventListener("click", agregarAlCarrito);
//calcular?.addEventListener("click", calcularTotal);
vaciar?.addEventListener("click", vaciarLista);
