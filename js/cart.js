var cartprods;
var prods;
var sumaparcial;
var preciofinal;

function mostrarcarrito(array) {
    let carrito = "";
    for (let i = 0; i < array.length; i++) {
        let prodcargado = array[i];
        carrito += `
        <div class="col-md-12 col-lg-6">
            <img class="card-img-top" src="${prodcargado.src}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${prodcargado.name}</h5>
            <div class="col"><p class="card-text">Precio del producto: ${prodcargado.currency} ${prodcargado.unitCost}</p></div>
            <div class="col"><p class="card-text">Cantidad seleccionada: <span id="count${i}">${prodcargado.count}</span> <button onclick="mas(${i})" class="btn btn-success">+</button> <button onclick="menos(${i})" class="btn btn-danger">-</button></p></div>
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
    }
}

function conversionusd(array) {
    for (let i = 0; i < array.length; i++) {
        let productoboleta = array[i];
        if (productoboleta.currency == "USD") {
            productoboleta.unitCost *= 40;  
        }
    }
}

function mostrarboleta(array) {
    let boleta = "";
    for (let i = 0; i < array.length; i++) {
        let productoboleta = array[i];
        let prodxcant = productoboleta.unitCost * productoboleta.count;
        boleta += `
        <div class="row">
        <div class="col-6">
        ${productoboleta.name}
        </div>
        <div class="col-1 text-center">
        X${productoboleta.count}
        </div>
        <div class="col-2 text-center">
        <span class="currency">$</span>${productoboleta.unitCost}
        </div>
        <div class="col-3 text-center">
        <span class="currency">$</span>${prodxcant}
        </div>
        </div><hr>
        `;
        document.getElementById("listacompras").innerHTML = boleta;
    }
}

function calculosboleta(array) {
    let subtotal = "";
    sumaparcial = 0;
    for (let i = 0; i < array.length; i++) {
        let prodxcant = array[i].unitCost * array[i].count;
        sumaparcial += prodxcant;
    }
    subtotal = `
    Subtotal = <span class="currency">$</span>${sumaparcial}
    `;
    document.getElementById("subtotalcompras").innerHTML = subtotal;
}

function calculoenvio() {
    let coefenvio;
    let opciones = document.getElementsByName("tipoenvio");
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            coefenvio = opciones[i].value;
        }
    }
    preciofinal = parseInt(sumaparcial * coefenvio);
    document.getElementById("preciofinal").innerHTML = preciofinal;
}

function moneda() {
    if (document.getElementById("preciousd").checked) {
        for (let i = 0; i < prods.length; i++) {
                prods[i].unitCost /= 40;
        }
        let monedas = document.getElementsByClassName("currency");
            for (let i = 0; i < monedas.length; i++) {
                monedas[i].innerHTML = "USD";
            }
    }
    if (document.getElementById("precio$").checked) {
        for (let i = 0; i < prods.length; i++) {
                prods[i].unitCost *= 40;  
        }
    }
    mostrarboleta(prods);
    calculosboleta(prods);
    calculoenvio(prods);
}

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
        };
    });
});