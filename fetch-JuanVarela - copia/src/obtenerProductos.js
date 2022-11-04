const obtenerProductos = async ()=>{
    try {
        const response = await fetch('./src/data/productos.json');
        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Hubo un error:', error);
    }; 
};

export{obtenerProductos}

