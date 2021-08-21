//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
})

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
        window.location.href="homepage.html";
    }
}
