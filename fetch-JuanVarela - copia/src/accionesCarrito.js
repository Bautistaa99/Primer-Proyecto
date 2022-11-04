//*Abre y cierra el carrito

import { eliminarProductoCarrito } from "./carrito.js";
import { guardarCarritoStorage } from "./storage.js";


const modalContenedor = document.querySelector('.modal-container');
const abrirCarrito = document.getElementById('open');
const cerrarCarrito = document.getElementById('close');

abrirCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.toggle('modal-active');
});

cerrarCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.remove('modal-active')
});

//*Precio total del carrito

const actualizarTotalesCarrito= (carrito)=>{  
    const totalCantidad = carrito.reduce((acc,producto)=> acc+ producto.cantidad, 0);
    const totalCompra = carrito.reduce((acc, producto)=>acc+(producto.cantidad*producto.precio),0);
    pintarTotalesCarrito(totalCantidad,totalCompra);
    guardarCarritoStorage(carrito);
};

const pintarTotalesCarrito = (totalCantidad,totalCompra)=>{
    const contadorCarrito=document.getElementById('contador-carrito');
    const precioTotal= document.getElementById('precioTotal');

    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerText=totalCompra;
}


//! eliminar producto
const modalCarrito = document.querySelector('.modal-carrito');

modalCarrito.addEventListener('click',(e)=>{
    e.stopPropagation();
    if(e.target.classList.contains('eliminar-producto')){
            Swal.fire({
                title:'Esta seguro?',
                text:'Va a eliminar el producto!',
                icon:'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor:'#d33',
                confirmButtonText: 'Eliminar',
                cancelButtonText:'Cancelar'
            }).then((result)=>{
                if(result.isConfirmed){
                    eliminarProductoCarrito(e.target.value);
                    Swal.fire(
                        'Eliminado!',
                        'Se ha eliminado el producto.',
                        'success'
                    )
                }
            })
        }
    
});
const iconoToastifyAgregarProducto=()=>{
        Toastify({
            text:`Se agrego el producto al carrito!`,
            duration:1400,
            position:'center',
            gravity:'medium',
            style:{
                background: '#6EB7D4'
            }
        }).showToast()
   
}


//*Botones Ordenar por precio



// //Donde guardo mis productos del inventario//
// let inventarioProductos = [];

// //Funciones de ordenar precios mayor a menor y viceversa//
// function ordenarMenorMayor() {
//     inventarioProductos.sort((a, b) => a.precio - b.precio);
// }
// function ordenarMayorMenor() {
//     inventarioProductos.sort((a, b) => b.precio - a.precio);
// }

// let botonMayorPrecio = getElementById('ordenarMayorPrecio');

// if (botonMayorPrecio) {
//     botonMayorPrecio.addEventListener("click", mayorPrecio);
// }

// let botonMenorPrecio = getElementById('ordenarMenorPrecio');

// if (botonMenorPrecio) {
//     botonMenorPrecio.addEventListener("click", menorPrecio);
// }


// function menorPrecio() {
//     ordenarMenorMayor();
//     actualizarListaProductos();
// }

// function mayorPrecio() {
//     ordenarMayorMenor();
//     actualizarListaProductos();
// }







export {actualizarTotalesCarrito,iconoToastifyAgregarProducto};
