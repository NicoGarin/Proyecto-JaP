//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let datosUser = [];

/*
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(USUARIOS_URL).then(function (objeto) {
        if (objeto.status === "ok") {
            datosUser = objeto.data;
        }
    })    
*/


function login() {
    let useringresado = document.getElementById("email").value;
    let passingresada = document.getElementById("password").value;
    if (useringresado === "" && passingresada === "") {
        alert("Debes completar los campos");
    } else if (useringresado === "" && passingresada !== "") {
        alert("Debes ingresar tu usuario");
    } else if  (useringresado !== "" && passingresada === "") {
        alert("Debes ingresar tu contraseña");
    } else {
        localStorage.setItem("User_logueado",JSON.stringify({user: useringresado}));
        window.location.href="homepage.html";
    }
}
