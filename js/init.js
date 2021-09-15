const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
const USUARIOS_URL = "https://nicolasgarin.github.io/Proyecto-JaP/jsons/usuarios.json";
//Urls de Jsons de las diferentes categorías
const AUTOS_URL = "https://nicolasgarin.github.io/Proyecto-JaP/jsons/autos.json";
const HERRAMIENTAS_URL = "https://nicolasgarin.github.io/Proyecto-JaP/jsons/herramientas.json";
const DEPORTE_URL ="https://nicolasgarin.github.io/Proyecto-JaP/jsons/deporte.json";
const VESTIMENTA_URL ="https://nicolasgarin.github.io/Proyecto-JaP/jsons/vestimenta.json";
const MUEBLES_URL ="https://nicolasgarin.github.io/Proyecto-JaP/jsons/muebles.json";
const COMPUTADORAS_URL ="https://nicolasgarin.github.io/Proyecto-JaP/jsons/computadoras.json";
const ELECTRODOMESTICOS_URL ="https://nicolasgarin.github.io/Proyecto-JaP/jsons/electrodomesticos.json";
const JUGUETES_URL ="https://nicolasgarin.github.io/Proyecto-JaP/jsons/juguetes.json";
const CELULARES_URL ="https://nicolasgarin.github.io/Proyecto-JaP/jsons/celulares.json";


var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

function verproducto(id) {
    localStorage.setItem("Producto",JSON.stringify({productId: id}));
    window.location = "product-info.html";
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
  let user_log = localStorage.getItem("User_logueado");
  let cuadro_log = document.getElementById("Userlogged");
  let user = document.getElementById("username");

  if (user_log) {
    user_loged = JSON.parse(user_log);
    cuadro_log.innerHTML = "Usuario: " + user_loged.user;
    cuadro_log.style = "display: inline-block;color: white;"
    document.getElementById("salir").style = "display: inline-block";         
  }

  if (document.getElementById("salir")) {
    document.getElementById("salir").addEventListener("click",function(){
      localStorage.removeItem("User_logueado");
      window.location = "index.html"
    }
    )
  }
});