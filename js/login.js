//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var usuarios_habilitados = [];

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(USUARIOS_URL).then(function (objeto) {
        if (objeto.status === "ok") {
            usuarios_habilitados = objeto.data;
        } else {
            alert(objeto.status);
        }
});
alert(usuarios_habilitados[0].user)
}
)


function login() {

    window.location.href="homepage.html";
}