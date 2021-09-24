var producto 
var arraycomentarios
var username
var comenrate
var categoryarray
var relprod

function mostrarinfo(producto) {
    let imagenes = "";
    let infoproducto = "";

    infoproducto += `
        <h3>${producto.name}</h2>
        <hr class="my-3">
        <dl>
            <dt>Descripción</dt>
            <dd>
                <p>${producto.description}</p>
            </dd>
            <dt>Costo</dt>
            <dd>
                <p>${producto.currency} ${producto.cost}</p>
            </dd>
            <dt>Cantidad de productos vendidos</dt>
            <dd>
                <p>${producto.soldCount}</p>
            </dd>
            <dt>Categoría</dt>
            <dd>
                <p>${producto.category}</p>
            </dd>
        </dl>
            `;
    imagenes += `
            <img src="img/${JSON.parse(localStorage.getItem("Producto")).productId}.jpg">
            `;

    document.getElementById("infoproducto").innerHTML = infoproducto;
    document.getElementById("imagenes").innerHTML = imagenes;
    document.getElementById("prodtitle").innerHTML = producto.name;
}

function mostrarcomentarios(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].score == 1) {
        let row = "";

            row = ` 
        <div class="row">
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">`+ array[i].user + `</h6>
                <small class="text-muted">` + array[i].dateTime + `</small>
            </div>
            <p class="mb-1">` + array[i].description + `</p>
            <h6 class="mb-1">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </h6><div id="star"></div>
        </div>
        </div><hr>
        ` ;
        document.getElementById("comentarios").innerHTML += row;
        };
        if (array[i].score == 2) {
        let row = "";

            row = ` 
        <div class="row">
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">`+ array[i].user + `</h6>
                <small class="text-muted">` + array[i].dateTime + `</small>
            </div>
            <p class="mb-1">` + array[i].description + `</p>
            <h6 class="mb-1">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </h6><div id="star"></div>
        </div>
        </div><hr>
        ` ;
        document.getElementById("comentarios").innerHTML += row;
        };
        if (array[i].score == 3) {
        let row = "";
    
            row = ` 
        <div class="row">
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">`+ array[i].user + `</h6>
                <small class="text-muted">` + array[i].dateTime + `</small>
            </div>
            <p class="mb-1">` + array[i].description + `</p>
            <h6 class="mb-1">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </h6><div id="star"></div>
        </div>
        </div><hr>
        ` ;
        document.getElementById("comentarios").innerHTML += row;
        };
        if (array[i].score == 4) {
            let row = "";
    
                row = ` 
            <div class="row">
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">`+ array[i].user + `</h6>
                <small class="text-muted">` + array[i].dateTime + `</small>
            </div>
            <p class="mb-1">` + array[i].description + `</p>
            <h6 class="mb-1">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star "></span>
            </h6>
        </div>
        </div><hr>
        ` ;
        document.getElementById("comentarios").innerHTML += row;
        };
        if (array[i].score == 5) {
            let row = "";
            
                row = ` 
            <div class="row">
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">`+ array[i].user + `</h6>
                <small class="text-muted">` + array[i].dateTime + `</small>
            </div>
            <p class="mb-1">` + array[i].description + `</p>
            <h6 class="mb-1">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            </h6>
        </div>
        </div><hr>
        ` ;
        document.getElementById("comentarios").innerHTML += row;
        };
    }
}

function enviarcomentario() {
    let nuevocomentario = document.getElementById("comentstring").value;
    if (nuevocomentario == "") {
        alert("Debes ingresar un comentario válido")
    } else {
    username = JSON.parse(localStorage.getItem("User_logueado")).user;
    document.getElementById("newcomentuser").innerHTML = username;
    document.getElementById("newcomentdescription").innerHTML = nuevocomentario;
    starrating();
    document.getElementById("nuevocomentario").style = "display: inline-block";
    document.getElementById("comentstring").value = "";
    }
}

function starrating() {
    if (document.getElementById("star-1").checked) {
        let row = "";
        row= `
        <h6 class="mb-1">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </h6><div id="star"></div>
            `
        document.getElementById("newcomentrate").innerHTML = row;
    }
    if (document.getElementById("star-2").checked) {
        let row = "";
        row= `
        <h6 class="mb-1">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </h6><div id="star"></div>
            `
        document.getElementById("newcomentrate").innerHTML = row;
    }
    if (document.getElementById("star-3").checked) {
        let row = "";
        row= `
        <h6 class="mb-1">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
            </h6><div id="star"></div>
            `
        document.getElementById("newcomentrate").innerHTML = row;
    }
    if (document.getElementById("star-4").checked) {
        let row = "";
        row= `
        <h6 class="mb-1">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star "></span>
            </h6><div id="star"></div>
            `
        document.getElementById("newcomentrate").innerHTML = row;
    }
    if (document.getElementById("star-5").checked) {
        let row = "";
        row= `
        <h6 class="mb-1">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
            </h6><div id="star"></div>
            `
        document.getElementById("newcomentrate").innerHTML = row;
    }
}

function relatedprod(category,product) {
    let relaprod = product.relatedProducts;
    for (let i = 0; i < relaprod.length; i++) {
    relprod = category[relaprod[i]];
    let prod = "";
    prod = `
            <div class="card">
                <img class="card-img-top" src="img/${relprod.id}.jpg" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${relprod.name}</h5>
                <p class="card-text">${relprod.description}</p>
                <button class="btn btn-dark" onclick="verproducto(${relprod.id})">Ver Más</button>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
    `;
    document.getElementById("prorel").innerHTML += prod;
    }
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData("https://nicolasgarin.github.io/Proyecto-JaP/jsons/" + JSON.parse(localStorage.getItem("Producto")).productId + ".json")
    .then(function(resultObj){
        if (resultObj.status === "ok") {
        producto = resultObj.data;
        mostrarinfo(producto);
        getJSONData("https://nicolasgarin.github.io/Proyecto-JaP/jsons/" + producto.category + ".json")
    .then(function(resultObj){
        if (resultObj.status === "ok") {
        categoryarray = resultObj.data;
        relatedprod(categoryarray,producto);
        }
    });
        }
    });
    getJSONData("https://nicolasgarin.github.io/Proyecto-JaP/jsons/comentarios/coment-" + JSON.parse(localStorage.getItem("Producto")).productId + ".json")
    .then(function(resultObj){
        if (resultObj.status === "ok") {
        arraycomentarios = resultObj.data;
        mostrarcomentarios(arraycomentarios);
        }
    });
});