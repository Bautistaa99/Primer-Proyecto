import { actualizarTotalesCarrito } from "./accionesCarrito.js";
import { obtenerCarritoStorage } from "./storage.js";
import { obtenerProductos } from "./obtenerProductos.js";



let carrito =[];


const renderProductosCarrito = async (productoId)=>{
const contenedorCarrito = document.getElementById('carrito-contenedor');


    
    
    const productos = await obtenerProductos();
    const producto = productos.find(producto=> producto.id===productoId);
    //producto alamcene el objeto que nosotros tenemos dentro del array de objetos, siempre y cuando productoID sea igual a producto.id
    carrito.push(producto);

    const div= document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML =`
    <p>${producto.nombre}</p>
    <p>${producto.descripcion}</p>
    <p>Precio:$ ${producto.precio}</p>
    <p id=cantidad${producto.id}>Cantidad:${producto.cantidad}</p>
    <button id=eliminar${producto.id} value=${producto.id} class="eliminar-producto" >X</button>
    `;
    contenedorCarrito.appendChild(div);
    actualizarTotalesCarrito(carrito);
}

const contadorProductoRepetido= (productoId)=>{
    

        
    if(localStorage.getItem('carrito')){
        carrito = obtenerCarritoStorage();
    }

    const productoRepetido = carrito.find(producto=> producto.id===productoId);
        
    if(productoRepetido){
        productoRepetido.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innnerText=`Cantidad:${productoRepetido.cantidad}`;
        actualizarTotalesCarrito(carrito);
    }else{
        renderProductosCarrito(productoId);
    }

    
};



//! Pintar carrito recibe por parametro un array de objetos
const pintarCarrito =  (carrito) =>{
    const contenedorCarrito = document.getElementById('carrito-contenedor');           
        //producto alamcene el objeto que nosotros tenemos dentro del array de objetos, siempre y cuando productoID sea igual a producto.id

        
        contenedorCarrito.innerHTML='';

        carrito.forEach(producto => {
            const div= document.createElement('div');
            div.classList.add('productoEnCarrito');
            div.innerHTML =`
                <p>${producto.nombre}</p>
                <p>${producto.descripcion}</p>
                <p>Precio:$ ${producto.precio}</p>
                <p id=cantidad${producto.id}>Cantidad:${producto.cantidad}</p>
                <button id=eliminar${producto.id} value=${producto.id} class="eliminar-producto" >X</button>
                `;
            contenedorCarrito.appendChild(div);
            actualizarTotalesCarrito(carrito);
            
            
        });
    
};


//!Eliminar productos del carrito

const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId);

    actualizarTotalesCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
};



export{contadorProductoRepetido,pintarCarrito, renderProductosCarrito,eliminarProductoCarrito};





// <button id=agregar${producto.id} class="agregar-producto"><img src=../public/img/carrito_compras/mas.png></button>
//                 <button id=sacar${producto.id} class="sacar-producto"><img src=../public/img/carrito_compras/sacar.png></button>