class Producto{
    constructor(codigo,nombre,precio,imagen,categoria,cantidad,descripcion,detalle){
        
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        this.detalle = detalle;
    }
}



let productos = [
    new Producto('HR1191','Running Terrex Soulstride' ,50.999,'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a42ad7da955e490b8526af5f00abad27_9366/Zapatillas_de_Trail_Running_Terrex_Soulstride_Negro_HR1191_01_standard.jpg'),
    new Producto('GW2009','Forum 84 Low' , 58.999 ,'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cbda5ef5ab0a4581bf75aeda015ae546_9366/Zapatillas_Forum_84_Low_Blanco_GW2009_01_standard.jpg'),
    new Producto('HQ6339','Ultraboost Light' , 89.999 ,'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0fbed4646c1d46e0aae0af6901301ff4_9366/Zapatillas_Ultraboost_Light_Blanco_HQ6351_01_standard.jpg')

]

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// let carrito = [];

productos?.forEach(
    producto => {
        //Creamos al elemento

        const newProductoCard= document.createElement('div');
        
        newProductoCard.id = producto.codigo;
        
        //Agregamos la informacion
        newProductoCard.classList.add('card','d-flex','flex-d-col','justify-content-evenly');
        newProductoCard.style.width = '15rem'
        newProductoCard.innerHTML = 
        `<div class="card text-center m-auto w-100">
            <img src=${producto.imagen} class="card-img-top w-100 m-auto" alt=${producto.nombre}>
        <div >
        
            <h5 class="card-title text-center my-2">${producto.nombre}</h5>
            <p class="card-text text-center">$${producto.precio}</p>
            <div class="row mx-3">
                <a href="#" class="btn btn-success my-3 " onclick = "agregarCarrito(${producto.codigo})">Agregar al Carrito</a>
            </div>
        </div>
        </div>
        `;
        //Buscamos al padre
        const padreConteiner = document.querySelector('.div-productosCargados');
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

    const id = new Date().getTime();
    newProductoCard.id = id;
    //Agregamos la informacion
    newProductoCard.classList.add('card','d-flex','flex-d-col','justify-content-evenly','rounded');
    newProductoCard.style.width = '15rem'
    newProductoCard.innerHTML = 
    `
    <div class="bg-secondary-subtle">
    <img src=${producto.imagen} class="card-img-top w-100" alt=${producto.nombre}>
<div class="card-body">

    <h5 class="card-title text-center my-2">${producto.nombre}</h5>
    <p class="card-text text-center">$${producto.precio}</p>
    
    <div class="row m-auto ">
        <button class="btn btn-secondary my-3" onclick= "eliminarCarrito(${id})">Eliminar</button>
    </div>
    
</div>
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
            const id = new Date().getTime();
            newProductoCard.id = id;
            
            //Agregamos la informacion
            newProductoCard.classList.add('card','d-flex','justify-content-evenly','rounded');
            newProductoCard.style.width = '15rem'
            newProductoCard.innerHTML = `
            <div class="bg-secondary-subtle">
            <img src=${producto.imagen} class="card-img-top w-100 my-2 " alt=${producto.nombre}>
            <div class="card-body">
        
            <h5 class="card-title text-center ">${producto.nombre}</h5>
            <p class="card-text text-center">$${producto.precio}</p>
            <div class="row m-auto  ">
                <button class="btn btn-secondary my-3" onclick= "eliminarCarrito(${id})">Eliminar</button>
            </div>

            
        </div>
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

function eliminarCarrito(id){

    const eliminarProductoCart = document.getElementById(id);
    carrito = carrito.filter(cart => {cart.codigo !== id});
    localStorage.setItem('carrito',JSON.stringify(carrito));
    eliminarProductoCart.remove(id);
}
