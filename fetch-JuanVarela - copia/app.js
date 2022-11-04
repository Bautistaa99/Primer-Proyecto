import { iconoToastifyAgregarProducto } from "./src/accionesCarrito.js";
import {contadorProductoRepetido} from "./src/carrito.js";
import { obtenerProductos } from "./src/obtenerProductos.js";



const mostrarProductos = async () =>{
    const contenedorProductos = document.getElementById('p2-div--productos');


    const productos = await obtenerProductos();


    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('p2-div2--productos');
        div.innerHTML += `<div>
            <img src="${producto.img}" alt="">
            <h4>${producto.nombre}</h4>
            <p>Alimento para ${producto.mascota}</p>
            <p>${producto.descripcion}</p>
            <p>${producto.peso}</p>
            <p>$${producto.precio}</p>   
            <button id="boton${producto.id}">Comprar</button>           
        </div>`

    contenedorProductos.appendChild(div);
    
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click',()=>{
        contadorProductoRepetido(producto.id);
        iconoToastifyAgregarProducto()
    });
});

}


export{mostrarProductos };