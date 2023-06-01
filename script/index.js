// let listaProductos = JSON.parse(localStorage.getItem('listaProductos'));


function mostrarProductos(){

    limpiarHTML();

    const divProductos = document.querySelector('.div-productos');
    
    listaProductos?.forEach( productos => {
        const {id,codigo,nombre,precio,categoria,imagen,descripcion,cantidad} = productos;

        const newProductoCard= document.createElement('div');
        newProductoCard.id = producto.codigo;
        //Agregamos la informacion
        newProductoCard.classList.add('card','d-flex','flex-d-col','justify-content-evenly');
        newProductoCard.style.width = '15rem'
        newProductoCard.innerHTML = 
        `
        <img src=${imagen} class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title text-center">${nombre}</h5>
            <p class="card-text text-center">${descripcion}</p>
            <p class="card-text text-center">$${precio}</p>
            <div class="row m-auto ">
                <a href="./pages/error404.html" class=" btn bg-secondary-subtle ">Ver mas Detalles</a>
                <a href="#" class="btn btn-success my-2" onclick = "agregarCarrito(${producto.codigo})">Agregar al Carrito</a>

            </div>
        </div>
        `; 
        //Buscamos al padre
        const padreConteiner = document.querySelector('.div-productos');
        //Adoptamos al hijo
        padreConteiner.appendChild(newProductoCard);
        
        
        // divProductos.append(newProductoCard);
        // newProductoCard.dataset.id = id;


        // divProductos.appendChild(fila);

        console.log(JSON.stringify(producto))
        let productoBack = JSON.stringify(producto);
        console.log(productoBack);

        let productoLista = JSON.parse(productoBack);
        console.log(productoLista);

        // Guardar en el Local Storage

        localStorage.setItem('codigo',`${codigo}`)
        localStorage.setItem('Nombre',`${nombre}`)
        localStorage.setItem('Precio',`${precio}`)
        localStorage.setItem('Categoria',`${categoria}`)
        localStorage.setItem('Imagen',`${imagen}`)
        localStorage.setItem('Descripcion',`${descripcion}`)
        localStorage.setItem('cantidad',`${cantidad}`)

        // Traer el valor del Local Storage
    
});
}

mostrarProductos();
