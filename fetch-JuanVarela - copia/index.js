import { mostrarProductos } from "./app.js"
import { actualizarTotalesCarrito } from "./src/accionesCarrito.js";
import { pintarCarrito } from "./src/carrito.js";
import { obtenerCarritoStorage } from "./src/storage.js";

document.addEventListener('DOMContentLoaded',()=>{
    mostrarProductos();
    
    if(localStorage.getItem('carrito')){
        const carrito= obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    }
})

