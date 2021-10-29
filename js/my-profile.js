let modificarflag = true;

$(function () {
    $('[data-toggle="popover"]').popover({html:true})
  })

function modifdatos() {
    modificarflag = !modificarflag;

    if (modificarflag) {
    document.getElementById("cambiosbtn").innerHTML = "Editar perfil";
    document.getElementById("cambiosbtn").className = "btn btn-info btn-md btn-block"

    let inputs = document.getElementsByClassName("inputusuario");
    for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.display = "none" ;
        }
    let datos = document.getElementsByClassName("datosusuario");
    for (let i = 0; i < datos.length; i++) {
    datos[i].style.display = "block" ;
        }
    document.getElementById("selectorimg").style.display = "none";
    document.getElementById("bloque2").className = "";
    document.getElementById("bloque1").className = "col-lg-8 col-md-12 col-sm-12";
    guardardatos();
    datosusuario = JSON.parse(localStorage.getItem("User_datos"));
    datosinput();
    datoshtml();
    }


    else {
    document.getElementById("cambiosbtn").innerHTML = "Guardar cambios";
    document.getElementById("cambiosbtn").className = "btn btn-success btn-md btn-block"

    let inputs = document.getElementsByClassName("inputusuario");
    for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.display = "block" ;
    }
    let datos = document.getElementsByClassName("datosusuario");
    for (let i = 0; i < datos.length; i++) {
    datos[i].style.display = "none" ;
    }
    document.getElementById("selectorimg").style.display = "block";
    document.getElementById("bloque2").className = "col-lg-3 col-md-6"
    document.getElementById("bloque1").className = "col-lg-6 col-md-12 col-sm-12"
}
}


function guardardatos() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;
    let mail = document.getElementById("mail").value;
    let phone = document.getElementById("phone").value;
    localStorage.setItem("User_datos",JSON.stringify({nombre: name, apellido: surname, edad: age, email: mail, telefono: phone}));
}

function datosinput() {
    document.getElementById("name").value = datosusuario.nombre;
    document.getElementById("surname").value = datosusuario.apellido;
    document.getElementById("age").value = datosusuario.edad;
    document.getElementById("mail").value = datosusuario.email;
    document.getElementById("phone").value = datosusuario.telefono;
}

function datoshtml() {
    document.getElementById("name_span").innerHTML = datosusuario.nombre;
    document.getElementById("surname_span").innerHTML = datosusuario.apellido;
    document.getElementById("age_span").innerHTML = datosusuario.edad;
    document.getElementById("mail_span").innerHTML = datosusuario.email;
    document.getElementById("phone_span").innerHTML = datosusuario.telefono;
}

//Funciónes para seleccionar imagen

function guardarimg() {
    let URL_foto = document.getElementById("urlfoto").value;
    localStorage.setItem("User_img",JSON.stringify({imagen: URL_foto, flag: "false"}))
    document.getElementById("imgperfil").src = URL_foto;
}

function avatar1() {
    document.getElementById("imgperfil").src = "img/avatar1.jpg";
    localStorage.setItem("User_img",JSON.stringify({imagen: "img/avatar1.jpg", flag: "true"}))
    document.getElementById("urlfoto").value = "";

}

function avatar2() {
    document.getElementById("imgperfil").src = "img/avatar2.jpg";
    localStorage.setItem("User_img",JSON.stringify({imagen: "img/avatar2.jpg", flag: "true"}))
    document.getElementById("urlfoto").value = "";
}

function avatar3() {
    document.getElementById("imgperfil").src = "img/avatar3.jpg";
    localStorage.setItem("User_img",JSON.stringify({imagen: "img/avatar3.jpg", flag: "true"}))
    document.getElementById("urlfoto").value = "";
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    let user_log = localStorage.getItem("User_logueado");
    let user_name = document.getElementById("nombreusuario");
    let imgperfil = JSON.parse(localStorage.getItem("User_img"));
  
    usname = JSON.parse(user_log);
    user_name.innerHTML = usname.user;
    datosusuario = JSON.parse(localStorage.getItem("User_datos"));
    document.getElementById("imgperfil").src = imgperfil.imagen;
    if (imgperfil.flag == "false") {
        document.getElementById("urlfoto").value = imgperfil.imagen;
    }
    datosinput();
    datoshtml();
});