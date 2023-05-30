class Producto{
    constructor(codigo,nombre,precio,imagen,categoria,cantidad,descripcion){
        
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
    }
}



let productos = [
    new Producto('Air15','jordan' , 30000 , 'https://4app.kicksonfire.com/kofapp/upload/events_master_images/thumb_ipad_air-jordan-14-hyper-royal.jpg' , 'categoria',1000 , 'zapatillas de uso diario'),
    new Producto('Air16','tillas' , 30000 , 'https://4app.kicksonfire.com/kofapp/upload/events_master_images/thumb_ipad_air-jordan-14-hyper-royal.jpg' , 'categoria',1000 , 'zapatillas de uso diario'),
    new Producto('Air17','poosad' , 30000 , 'https://4app.kicksonfire.com/kofapp/upload/events_master_images/thumb_ipad_air-jordan-14-hyper-royal.jpg' , 'categoria',1000 , 'zapatillas de uso diario'),
    new Producto('Air19','sadassdgasdad' , 30000 , 'https://media.revistagq.com/photos/6401c484c792b2decae2194e/1:1/w_2613,h_2613,c_limit/zapatillas%20retro%20homnbre.jpg' , 'categoria',1000 , 'zapatillas de uso diario'),
    new Producto('Air20','bfbfd' , 30000 , 'https://media.revistagq.com/photos/6401c484c792b2decae2194e/1:1/w_2613,h_2613,c_limit/zapatillas%20retro%20homnbre.jpg' , 'categoria',1000 , 'zapatillas de uso diario'),
    new Producto('Air21','46534vdfs' , 30000 , 'https://media.revistagq.com/photos/6401c484c792b2decae2194e/1:1/w_2613,h_2613,c_limit/zapatillas%20retro%20homnbre.jpg' , 'categoria',1000 , 'zapatillas de uso diario')

]

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// let carrito = [];

productos?.forEach(
    producto => {
        //Creamos al elemento

        const newProductoCard= document.createElement('div');
        newProductoCard.id = producto.codigo;
        //Agregamos la informacion
        newProductoCard.classList.add('card','mx-5');
        newProductoCard.style.width = '18rem'
        newProductoCard.innerHTML = `
        <div >
        <img src=${producto.imagen} class="card-img-top" alt=${producto.nombre}>
        <div class="card-body">
        
            <h5 class="card-title text-center">${producto.nombre}</h5>
            <p class="card-text text-center">${producto.descripcion}</p>
            <p class="card-text text-center">$${producto.precio}</p>
            <div class="row m-auto ">
                <a href="../pages/detalle.html" class="btn bg-secondary-subtle ">Ver mas Detalles</a>
                <a href="#" class="btn btn-dark my-2" onclick = "agregarCarrito(${producto.codigo})">Agregar al Carrito</a>

            </div>
            
        </div>
        </div>
        `; 
        //Buscamos al padre
        const padreConteiner = document.querySelector('main');
        //Adoptamos al hijo
        padreConteiner.appendChild(newProductoCard);
    }
)

function agregarCarrito(codigo){

    let producto = productos.find(producto => producto.codigo == codigo.id)
    console.log(producto);
    carrito.push(producto);

    localStorage.setItem('carrito',JSON.stringify(carrito));
    localStorage.getItem('carrito');


    //Creamos al elemento
    const newProductoCard= document.createElement('div');
    newProductoCard.id = producto.codigo;
    //Agregamos la informacion
    newProductoCard.classList.add('card','mx-2');
    newProductoCard.style.width = '18rem'
    newProductoCard.innerHTML = `
    <img src=${producto.imagen} class="card-img-top" alt=${producto.nombre}>
    <div class="card-body">
        <h5 class="card-title text-center">${producto.nombre}</h5>
        <p class="card-text text-center">${producto.descripcion}</p>
        <p class="card-text text-center">$${producto.precio}</p>
        <button class="btn btn-danger d-flex m-auto" onclick = "eliminarProducto(${producto.id})">Eliminar</i></button>
        
    </div>
    `; 
    //Buscamos al padre
    const padreConteiner = document.querySelector('#cart-body');
    //Adoptamos al hijo
    padreConteiner.appendChild(newProductoCard);

    
}

function gerCart (){

    carrito.forEach(
        producto => {
            //Creamos al elemento
    
            const newProductoCard= document.createElement('div');
            newProductoCard.id = producto.codigo;
            //Agregamos la informacion
            newProductoCard.classList.add('card','mx-2');
            newProductoCard.style.width = '18rem'
            newProductoCard.innerHTML = `
            <img src=${producto.imagen} class="card-img-top" alt=${producto.nombre}>
            <div class="card-body">
                <h5 class="card-title text-center">${producto.nombre}</h5>
                <p class="card-text text-center">${producto.descripcion}</p>
                <p class="card-text text-center">$${producto.precio}</p>
                <button onclick = "eliminarProducto(${id})">Eliminar</button>
            </div>
            `; 
            //Buscamos al padre
            const padreConteiner = document.querySelector('#cart-body');
            //Adoptamos al hijo
            padreConteiner.appendChild(newProductoCard);
        }
    )
}

gerCart ();


// Funcion para guardar en el local storage

// const saveLocalStorage = (carrito) => {
//     localStorage.setItem("cart", JSON.stringify(Producto));
// };

