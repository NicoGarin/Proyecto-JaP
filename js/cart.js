var cartprods;
var prods;
var sumaparcial;
var preciofinal;
let tarjeta = true;
var env = 1;
var valorusd = 40;

//Muestra productos cargados en formato de carta
function mostrarcarrito(array) {
    let carrito = "";
    for (let i = 0; i < array.length; i++) {
        let prodcargado = array[i];
        carrito += `
        <div class="col-md-12 col-lg-6">
            <img class="card-img-top" src="${prodcargado.src}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${prodcargado.name}</h5>
            <div class="row justify-content-between">
            <div class="col-2 text-center"><p class="card-text">Precio</p></div> 
            <div class="col-5 text-center"><p class="card-text">${prodcargado.currency} ${prodcargado.unitCost}</p></div>
            </div>
            <div class"row">
            <div class="col"><p class="card-text">Cantidad seleccionada: <span id="count${i}">${prodcargado.count}</span></p></div>
            
            <button onclick="mas(${i})" class="btn btn-success">+</button> <button onclick="menos(${i})" class="btn btn-danger">-</button></p></div>
            <p class="card-text"><small class="text-muted"></small></p>
        </div>
        </div>        
        `;
        document.getElementById("carritoprod").innerHTML = carrito;
    }
}

function mas(index) {
    let prodcount = parseInt(document.getElementById("count" + index).innerHTML);
    prodcount += 1;
    document.getElementById("count" + index).innerHTML = prodcount;
    prods[index].count += 1;
    mostrarboleta(prods);
    calculosboleta(prods);
    calculoenvio();
    resumen();
}

function menos(index) {    
    let prodcount = parseInt(document.getElementById("count" + index).innerHTML);
    if (prodcount !== 1) {
    prodcount -= 1;
    document.getElementById("count" + index).innerHTML = prodcount;
    prods[index].count -= 1;
    mostrarboleta(prods);
    calculosboleta(prods);
    calculoenvio();
    resumen();
    }
}

function conversionusd(array) {
    for (let i = 0; i < array.length; i++) {
        let productoboleta = array[i];
        if (productoboleta.currency == "USD") {
            productoboleta.unitCost *= valorusd;  
        }
    }
}

function conversion$(array) {
    for (let i = 0; i < array.length; i++) {
        let productoboleta = array[i];
        if (productoboleta.currency == "USD") {
            productoboleta.unitCost /= valorusd;  
        }
    }
}

function borrarprod(indice) {
    
}

//Muestra lista de productos
function mostrarboleta(array) {
    let boleta = "";
    for (let i = 0; i < array.length; i++) {
        let productoboleta = array[i];
        let prodxcant = productoboleta.unitCost * productoboleta.count;
        boleta += `
        <div class="row">
        <div class="col-5 card-body">
        ${productoboleta.name}
        </div>
        <div class="col-1 card-body">
        ${productoboleta.count}
        </div>
        <div class="col-3 text-center card-body">
        <span class="currency">$ </span>${productoboleta.unitCost}
        </div>
        <div class="col-3 text-center card-body">
        <span class="currency">$ </span>${prodxcant}
        </div>
        </div><hr>
        `;
        document.getElementById("listacompras").innerHTML = boleta;
    }
}

//Calcula subtotal
function calculosboleta(array) {
    let subtotal = "";
    sumaparcial = 0;
    for (let i = 0; i < array.length; i++) {
        let prodxcant = array[i].unitCost * array[i].count;
        sumaparcial += prodxcant;
    }
    subtotal = `
    <div class="col-4"><b>Subtotal</b></div>
    <div class="col-3 text-center"><b><span class="currency">$ </span>${sumaparcial}</b></div>
    `;
    document.getElementById("subtotalcompras").innerHTML = subtotal;
}

//Calcula costo de envío
function calculoenvio() {
    let coefenvio;
    let opciones = document.getElementsByName("tipoenvio");
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            coefenvio = opciones[i].value;
        }
    }
    preciofinal = parseInt(sumaparcial * coefenvio);
    resumen();
}

//Selector de medio de pago dentro del modal
function mediodepago() {
    if (document.getElementById("option1").checked) {
        document.getElementById("tarjeta").style.display = "block";
        document.getElementById("transferencia").style.display = "none";
        tarjeta = true;
        validtarjeta();
    } else {
        document.getElementById("tarjeta").style.display = "none";
        document.getElementById("transferencia").style.display = "block";
        tarjeta = false;
        validtransfer();
    }
}

//Función para cambiar la moneda de la compra (en proceso)
function moneda() {
    if (document.getElementById("preciousd").checked) {
        for (let i = 0; i < prods.length; i++) {
                prods[i].unitCost /= 40;
        }
        mostrarboleta(prods);
        calculosboleta(prods);
        calculoenvio(prods);
    
        let monedas = document.getElementsByClassName("currency");
            for (let i = 0; i < monedas.length; i++) {
                monedas[i].innerHTML = "USD ";
            }
    }
    if (document.getElementById("precio$").checked) {
        for (let i = 0; i < prods.length; i++) {
                prods[i].unitCost *= 40;  
        }
        mostrarboleta(prods);
        calculosboleta(prods);
        calculoenvio(prods);
        let monedas = document.getElementsByClassName("currency");
        for (let i = 0; i < monedas.length; i++) {
            monedas[i].innerHTML = "$ ";
        }

    }
}

//Función que calcula y muestra el resumen final de la compra
function resumen() {
    //Cantidad de productos
    let cantidad = 0;
    for (let i = 0; i < prods.length; i++) {
        cantidad += prods[i].count;
    }
    document.getElementById("prodaenviar").innerHTML = cantidad;
    //Tiempo de entrega
    let op = document.getElementsByName("tipoenvio");
    if (op[0].checked) {
        document.getElementById("tiempoentrega").innerHTML = "2 - 5 Días";
    } if (op[1].checked) {
        document.getElementById("tiempoentrega").innerHTML = "5 - 8 Días";
    } if (op[2].checked) {
        document.getElementById("tiempoentrega").innerHTML = "12 - 15 Días";
    }
    //Costo de envío
    let coefenvio;
    let opciones = document.getElementsByName("tipoenvio");
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            coefenvio = opciones[i].value;
        }
    }
    let costoenvio = parseInt(sumaparcial * (coefenvio -1));
    document.getElementById("costoenvio").innerHTML = "$ " + costoenvio;
    //Subtotal
    document.getElementById("subtotalfinal").innerHTML = "$ " + sumaparcial;
    //Precio final
    document.getElementById("precio_final").innerHTML = "$ " + preciofinal;
}

//Cambia estilos si los campos están vacíos
function invalidenvio() {
    let inpdireccion = document.getElementById("direccion");
    if (inpdireccion.value == "") {
        inpdireccion.style.backgroundColor = "rgb(252, 212, 212)";
    } else {
        inpdireccion.style.backgroundColor = "white";
    }
    let inppais = document.getElementById("pais");
    if (inppais.value == "") {
        inppais.style.backgroundColor = "rgb(252, 212, 212)";
    } else {
        inppais.style.backgroundColor = "white";

    }

}

//Validación campos de envío
function validenvio() {
    flag = true;
    let inpdireccion = document.getElementById("direccion").value;
    if (inpdireccion == "") {
        flag = false;
    } 
    let inppais = document.getElementById("pais").value;
    if (inppais == "") {
        flag = false;
    }
    return flag;
}     

//Validación para medio de pago tarjeta
function validtarjeta() {
    if (tarjeta == true) {
        let numtarj = document.getElementById("numcuenta");
        numtarj.required = false;
        let inptarj = document.getElementsByClassName("inputstarjeta");
        for (let i = 0; i < inptarj.length; i++) {
            inptarj[i].required = true;
        }
    }
}

//Validación para medio de pago cuenta
function validtransfer() {
    if (tarjeta == false) {
        let inptarj = document.getElementsByClassName("inputstarjeta");
        for (let i = 0; i < inptarj.length; i++) {
            inptarj[i].required = false;
        }
        let inptransfer = document.getElementById("numcuenta");
        inptransfer.required = true;
    }
}

//Función que dispara el alert al finalizar la compra
function alertmediodepago() {
    document.getElementById("alert").innerHTML = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>¡Alto ahí!</strong>   Hay campos del método de envío sin completar.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `
}

//Alert para cuando la compra se finalizó con éxito
function alertexito() {
    document.getElementById("alert2").innerHTML = `
    <div id="myAlert" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>¡Felicitaciones!</strong> Has completado tu compra con éxito.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `
}

//Validaciones
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault()
            event.stopPropagation()
          if (!form.checkValidity() || !validenvio()) {
              invalidenvio()
            
          }
          if (!validenvio()) {
              alertmediodepago()
          }
          if (validenvio() && form.checkValidity()){
              alertexito()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL)
    .then(function(resultObj){
        if (resultObj.status === "ok") {
        cartprods = resultObj.data;
        prods = cartprods.articles;
        mostrarcarrito(prods);
        conversionusd(prods);
        mostrarboleta(prods);
        calculosboleta(prods);
        calculoenvio()
        resumen()
        };
    });
});