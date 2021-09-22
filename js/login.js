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
