class User{
    constructor(email,password){
        
        this.email = email;
        this.password = password;
    }
}

const users = [
    new User('admin@gmail.com' , '1234'),
    new User('emiliano@gmail.com','123456')
]

let arrayUsers = JSON.parse(localStorage.getItem('arrayUsers')) || [];

const login = (event) =>{
    event.preventDefault();


    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userFound = users.find(user => user.email  == email && user.password == password)
    if(userFound){
        const verficacion =userFound.email = email && userFound.password == password;
        if(verficacion){

            
            console.log(userFound);
            arrayUsers.push(userFound);
            
            localStorage.setItem('arrayUsers',JSON.stringify(arrayUsers));
            localStorage.getItem('arrayUsers');

            alertMensaje1('Inicio de Sesion Exitoso');
            document.querySelector('.formularioLogin').reset();

            const sesionLogueada = document.createElement('button');
            const id = new Date().getTime();
            sesionLogueada.id = id;

            sesionLogueada.classList.add('mx-2','bg-success','text-light','my-2','p-2','rounded-2','class="SesionLogueada"');
            sesionLogueada.innerHTML = `
            <i onclick = "deslogueoSesion(${id})" class="fa-solid fa-right-to-bracket"></i>
            
            `;
            
            const padreSesionLogueada = document.querySelector('.sesionLogueada');
            
            padreSesionLogueada.appendChild(sesionLogueada);

            document.querySelector('#buttonInicioSesion').remove();
            
            document.querySelector('.linkAdmin').textContent = 'Administracion';

            const verficacion2 = arrayUsers == [];
            if(verficacion2){
                deslogueoSesion(id);
            }else{
            
                document.querySelector('#buttonInicioSesion').remove();
                document.querySelector('.linkAdmin').textContent = 'Administracion';
                
            }
            

        }else{
            alertMensaje2('Usuario o Contraseña Incorrectos');
            document.querySelector('.formularioLogin').reset();
        }
    }
    else{
        alertMensaje2('Usuario o Contraseña Incorrectos');
        document.querySelector('.formularioLogin').reset();
    }   
}

function alertMensaje1(mensaje){
    let alertMensaje = document.createElement('div');
    alertMensaje.classList.add('alert' , 'alert-success');
    alertMensaje.setAttribute('role','alert');
    alertMensaje.innerText = mensaje;
    let container = document.querySelector('.formularioLogin');
    container.appendChild(alertMensaje);
}

function alertMensaje2(mensaje){
    let alertMensaje = document.createElement('div');
    alertMensaje.classList.add('alert' , 'alert-danger');
    alertMensaje.setAttribute('role','alert');
    alertMensaje.innerText = mensaje;
    let container = document.querySelector('.formularioLogin');
    container.appendChild(alertMensaje);
}

function deslogueoSesion(id){

    const singOutUser = document.getElementById(id);
    arrayUsers = arrayUsers.filter(user => {user.userFound !== id});
    localStorage.setItem('arrayUsers',JSON.stringify(arrayUsers));
    singOutUser.remove(id);
    window.location.reload();

}

