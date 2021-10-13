var cartprods;
var prods;

function mostrarcarrito(array) {
    let carrito = "";
    for (let i = 0; i < array.length; i++) {
        let prodcargado = array[i];
        carrito += `
        <div class="col-md-6">
            <img class="card-img-top" src="${prodcargado.src}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${prodcargado.name}</h5>
            <div class="col"><p class="card-text">Precio del producto: ${prodcargado.currency} ${prodcargado.unitCost}</p></div>
            <div class="col"><p class="card-text">Cantidad seleccionada: <span id="count${i}">${prodcargado.count}</span> <button onclick="mas(${i})" class="btn btn-success">+</button> <button onclick="menos(${i})" class="btn btn-danger">-</button></p></div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
}

function menos(index) {
    let prodcount = parseInt(document.getElementById("count" + index).innerHTML);
    prodcount -= 1;
    document.getElementById("count" + index).innerHTML = prodcount;
    prods[index].count -= 1;
    mostrarboleta(prods);
    calculosboleta(prods);
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
        ${productoboleta.name} X${productoboleta.count} $${productoboleta.unitCost}  $${prodxcant}<br>
        `;
        document.getElementById("listacompras").innerHTML = boleta;
    }
}

function calculosboleta(array) {
    let subtotal = "";
    let sumaparcial = 0;
    for (let i = 0; i < array.length; i++) {
        let prodxcant = array[i].unitCost * array[i].count;
        sumaparcial += prodxcant;
    }
    subtotal = `
    Subtotal = $${sumaparcial}
    `;
    document.getElementById("subtotalcompras").innerHTML = subtotal;
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
        };
    });
});