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

const login = (event) =>{
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userFound = users.find(user => user.email  == email && user.password == password)
    if(userFound){
        const verficacion =userFound.email = email && userFound.password == password;
        if(verficacion){
            alertMensaje1('Entro');
            document.querySelector('.formularioLogin').reset();

            let sesionLogueada = document.createElement('button');
            sesionLogueada.onclick = () => deslogueoSesion(userFound);
            sesionLogueada.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i>`;
            sesionLogueada.classList.add('mx-2','bg-success','text-light','my-2','p-2','rounded-2','class="SesionLogueada"', 'onclick="deslogueoSesion()"');
            const padreSesionLogueada = document.querySelector('.sesionLogueada');
            
            padreSesionLogueada.appendChild(sesionLogueada);
            document.querySelector('#buttonInicioSesion').remove();
            document.querySelector('#buttonRegistro').remove();
            const administracion = document.querySelector('.linkAdmin').textContent = 'Administracion';
            administracion.onclick = () => mantenerSesion(event);
            // Administracion.classList.add()

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

function deslogueoSesion(userFound){
    window.location.reload(userFound);
}

// function obetenerDatosUsarios(){
//     users = JSON.parse(localStorage.getItem('userList'));
//     guardarDatosUsuarios();
// }



// function guardarDatosUsuarios(){
//     localStorage.setItem('userList',JSON.stringify(users));
// }