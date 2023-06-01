const nameHTML = document.getElementById("InputName");
const apellidoHTML = document.getElementById("InputApellido");
const emailHTML = document.getElementById("InputEmail");
const passHTML = document.getElementById("InputPassword");
const textInfo = document.getElementById("textInfo")

function regiterHandler(e) {
    e.preventDefault()
    const expreEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let warnings = ""
    let verific = false
    const exprePass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const datos = {
        Nombre: nameHTML.value,
        Apellido: apellidoHTML.value,
        Email: emailHTML.value,
        Contraseña: passHTML.value
    }
    console.log(datos);
    for (const key in datos) {
        const element = datos[key].trim();

        if (element == "") {
            warnings += key + " esta vacio" + "<br>"
            verific = true
            if (verific) {
                textInfo.innerHTML = warnings;
            }
        } else {
            if (key == "Email") {
                if (!expreEmail.test(emailHTML.value)) {
                    warnings += `El Email no es valido <br>`
                    verific = true
                }
            }
            if (key == "Contraseña") {
                if (!exprePass.test(element)) {
                    if (passHTML.value.length < 8) {
                        warnings += "La contraseña debe tener al menos 8 caracteres.";
                        verific = true
                    } else if (!/(?=.*[a-z])/.test(element)) {
                        warnings += "La contraseña debe contener al menos una letra minúscula.";
                        verific = true
                    } else if (!/(?=.*[A-Z])/.test(element)) {
                        warnings += "La contraseña debe contener al menos una letra mayúscula.";
                        verific = true
                    } else if (!/(?=.*\d)/.test(element)) {
                        warnings += "La contraseña debe contener al menos un dígito.";
                        verific = true
                    } else if (!/(?=.*[@$!%*?&])/.test(element)) {
                        warnings += `La contraseña debe contener al menos un carácter especial (@, $, !, %, *, ?, &).`;
                        verific = true
                    }
                }
            }

            if (verific) {
                textInfo.innerHTML = warnings;
            } else {
                textInfo.innerHTML = "";
            }
        }

    }
}