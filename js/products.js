let preciomin = 0;
let preciomax = 0;
let currency = "All";
let sort = "AZ";
var listadoProductos = [];

//Código del botón buscar
function actualizarlistado() {
    preciomin = document.getElementById("inputmin").value;  //se establece valor del minimo
    preciomax = document.getElementById("inputmax").value;  //se establece valor del maximo
    if (document.getElementById("input$").checked) {        //se establece en qué moneda se quiere visualizar el listado
        currency = "$";
    }
    if (document.getElementById("inputusd").checked) {
        currency = "USD";
    }
    if (document.getElementById("inputall").checked) {
        currency = "All";
    }

    if (document.getElementById("AZ").checked) {            //se establece con qué criterio se muestra el listado
        sort = "AZ";
    }
    if (document.getElementById("ZA").checked) {
        sort = "ZA";
    }
    if (document.getElementById("sold").checked) {
        sort = "soldcount";
    }

    if ((preciomin != undefined) && (preciomin != "") && (parseInt(preciomin)) >= 0) { //se establece undefined
        preciomin = parseInt(preciomin);
    } else {
        preciomin = undefined;
    }
    if ((preciomax != undefined) && (preciomax != "") && (parseInt(preciomax)) >= 0) {
        preciomax = parseInt(preciomax);
    } else {
        preciomax = undefined;
    }
    categorysetter(document.getElementById("cats").value);

}

function mostrarProductos(array) {
    if (currency == "$") {
        let newarray = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i].currency == "$") {
                newarray.push(array[i]);
            }
        }
        if (sort == "AZ") {
            newarray.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
            for (let i = 0; i < newarray.length; i++) {

                let row = "";

                if (((preciomin == undefined) || (preciomin != undefined && newarray[i].cost >= preciomin)) &&
                    ((preciomax == undefined) || (preciomax != undefined && newarray[i].cost <= preciomax))) {

                    row = ` 
                
                <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card card-body mb-3 tarjeta shadow">
                <img class="card-img-top" src="${newarray[i].imgSrc}" alt="${newarray[i].description}">
                <div class="card-body">
                <h5 class="card-title">${newarray[i].name}</h5>
                <div class="col"><p class="card-text">Precio: <strong>${newarray[i].currency} ${newarray[i].cost}</strong></p></div>
                <br><button class="btn btn-dark" onclick="verproducto(${newarray[i].id})">Ver Más</button>
                <p class="card-text"><small class="text-muted"> ${newarray[i].soldCount} artículos</small></p>
                </div>    
                </div>
                </div><br>
                        ` ;
                    document.getElementById("prod-list-container").innerHTML += row;
                }

            }
        }

        if (sort == "ZA") {
            newarray.sort(function (a, b) {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            });
            for (let i = 0; i < newarray.length; i++) {

                let row = "";

                if (((preciomin == undefined) || (preciomin != undefined && newarray[i].cost >= preciomin)) &&
                    ((preciomax == undefined) || (preciomax != undefined && newarray[i].cost <= preciomax))) {

                    row = ` 
                    <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card card-body mb-3 tarjeta shadow">
                    <img class="card-img-top" src="${newarray[i].imgSrc}" alt="${newarray[i].description}">
                    <div class="card-body">
                    <h5 class="card-title">${newarray[i].name}</h5>
                    <div class="col"><p class="card-text">Precio: <strong>${newarray[i].currency} ${newarray[i].cost}</strong></p></div>
                    <br><button class="btn btn-dark" onclick="verproducto(${newarray[i].id})">Ver Más</button>
                    <p class="card-text"><small class="text-muted"> ${newarray[i].soldCount} artículos</small></p>
                    </div>    
                    </div>
                    </div><br><br>
            ` ;
                    document.getElementById("prod-list-container").innerHTML += row;
                }
            }
        }
        if (sort == "soldcount") {
            newarray.sort(function (a, b) {
                if (a.soldCount < b.soldCount) {
                    return 1;
                }
                if (a.soldCount > b.soldCount) {
                    return -1;
                }
                return 0;
            });
            for (let i = 0; i < newarray.length; i++) {

                let row = "";

                if (((preciomin == undefined) || (preciomin != undefined && newarray[i].cost >= preciomin)) &&
                    ((preciomax == undefined) || (preciomax != undefined && newarray[i].cost <= preciomax))) {

                    row = ` 
                    <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card card-body mb-3 tarjeta shadow">
                    <img class="card-img-top" src="${newarray[i].imgSrc}" alt="${newarray[i].description}">
                    <div class="card-body">
                    <h5 class="card-title">${newarray[i].name}</h5>
                    <div class="col"><p class="card-text">Precio: <strong>${newarray[i].currency} ${newarray[i].cost}</strong></p></div>
                    <br><button class="btn btn-dark" onclick="verproducto(${newarray[i].id})">Ver Más</button>
                    <p class="card-text"><small class="text-muted"> ${newarray[i].soldCount} artículos</small></p>
                    </div>    
                    </div>
                    </div><br><br>
            ` ;
                    document.getElementById("prod-list-container").innerHTML += row;
                }

            }
        }
    }
    if (currency == "USD") {
        let newarray = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i].currency == "USD") {
                newarray.push(array[i]);
            }
        }
        if (sort == "AZ") {
            newarray.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
            for (let i = 0; i < newarray.length; i++) {

                let row = "";

                if (((preciomin == undefined) || (preciomin != undefined && newarray[i].cost >= preciomin)) &&
                    ((preciomax == undefined) || (preciomax != undefined && newarray[i].cost <= preciomax))) {

                    row = ` 
                    <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card card-body mb-3 tarjeta shadow">
                    <img class="card-img-top" src="${newarray[i].imgSrc}" alt="${newarray[i].description}">
                    <div class="card-body">
                    <h5 class="card-title">${newarray[i].name}</h5>
                    <div class="col"><p class="card-text">Precio: <strong>${newarray[i].currency} ${newarray[i].cost}</strong></p></div>
                    <br><button class="btn btn-dark" onclick="verproducto(${newarray[i].id})">Ver Más</button>
                    <p class="card-text"><small class="text-muted"> ${newarray[i].soldCount} artículos</small></p>
                    </div>    
                    </div>
                    </div><br><br>
            ` ;
                    document.getElementById("prod-list-container").innerHTML += row;
                }

            }
        }

        if (sort == "ZA") {
            newarray.sort(function (a, b) {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            });
            for (let i = 0; i < newarray.length; i++) {

                let row = "";

                if (((preciomin == undefined) || (preciomin != undefined && newarray[i].cost >= preciomin)) &&
                    ((preciomax == undefined) || (preciomax != undefined && newarray[i].cost <= preciomax))) {

                    row = ` 
                    <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card card-body mb-3 tarjeta shadow">
                    <img class="card-img-top" src="${newarray[i].imgSrc}" alt="${newarray[i].description}">
                    <div class="card-body">
                    <h5 class="card-title">${newarray[i].name}</h5>
                    <div class="col"><p class="card-text">Precio: <strong>${newarray[i].currency} ${newarray[i].cost}</strong></p></div>
                    <br><button class="btn btn-dark" onclick="verproducto(${newarray[i].id})">Ver Más</button>
                    <p class="card-text"><small class="text-muted"> ${newarray[i].soldCount} artículos</small></p>
                    </div>    
                    </div>
                    </div><br><br>
            ` ;
                    document.getElementById("prod-list-container").innerHTML += row;
                }
            }
        }
        if (sort == "soldcount") {
            newarray.sort(function (a, b) {
                if (a.soldCount < b.soldCount) {
                    return 1;
                }
                if (a.soldCount > b.soldCount) {
                    return -1;
                }
                return 0;
            });
            for (let i = 0; i < newarray.length; i++) {

                let row = "";

                if (((preciomin == undefined) || (preciomin != undefined && newarray[i].cost >= preciomin)) &&
                    ((preciomax == undefined) || (preciomax != undefined && newarray[i].cost <= preciomax))) {

                    row = ` 
                    <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card card-body mb-3 tarjeta shadow">
                    <img class="card-img-top" src="${newarray[i].imgSrc}" alt="${newarray[i].description}">
                    <div class="card-body">
                    <h5 class="card-title">${newarray[i].name}</h5>
                    <div class="col"><p class="card-text">Precio: ${newarray[i].currency} ${newarray[i].cost}</strong></p></div>
                    <br><button class="btn btn-dark" onclick="verproducto(${newarray[i].id})">Ver Más</button>
                    <p class="card-text"><small class="text-muted"> ${newarray[i].soldCount} artículos</small></p>
                    </div>    
                    </div>
                    </div><br><br>
            ` ;
                    document.getElementById("prod-list-container").innerHTML += row;
                }

            }
        }
    }
    if (currency == "All") {
        if (sort == "AZ") {
            array.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
            for (let i = 0; i < array.length; i++) {

                let row = "";

                if (((preciomin == undefined) || (preciomin != undefined && array[i].cost >= preciomin)) &&
                    ((preciomax == undefined) || (preciomax != undefined && array[i].cost <= preciomax))) {

                    row = ` 
                    <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card card-body mb-3 tarjeta shadow">
                    <img class="card-img-top imagen" src="${array[i].imgSrc}" alt="${array[i].description}">
                    <div class="card-body">
                    <h5 class="card-title">${array[i].name}</h5>
                    <div class="col"><p class="card-text">Precio: <strong>${array[i].currency} ${array[i].cost}</strong></p></div>
                    <br><button class="btn btn-dark" onclick="verproducto(${array[i].id})">Ver Más</button>
                    <p class="card-text"><small class="text-muted"> ${array[i].soldCount} artículos</small></p>
                    </div>    
                    </div>
                    </div>
            ` ;
                    document.getElementById("prod-list-container").innerHTML += row;
                }

            }
        }

        if (sort == "ZA") {
            array.sort(function (a, b) {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            });
            for (let i = 0; i < array.length; i++) {

                let row = "";

                if (((preciomin == undefined) || (preciomin != undefined && array[i].cost >= preciomin)) &&
                    ((preciomax == undefined) || (preciomax != undefined && array[i].cost <= preciomax))) {

                    row = ` 
                    <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card card-body mb-3 tarjeta shadow">
                    <img class="card-img-top" src="${array[i].imgSrc}" alt="${array[i].description}">
                    <div class="card-body">
                    <h5 class="card-title">${array[i].name}</h5>
                    <div class="col"><p class="card-text">Precio: <strong>${array[i].currency} ${array[i].cost}</strong></p></div>
                    <br><button class="btn btn-dark" onclick="verproducto(${array[i].id})">Ver Más</button>
                    <p class="card-text"><small class="text-muted"> ${array[i].soldCount} artículos</small></p>
                    </div>    
                    </div>
                    </div><br><br>

            ` ;
                    document.getElementById("prod-list-container").innerHTML += row;
                }
            }
        }
        if (sort == "soldcount") {
            array.sort(function (a, b) {
                if (a.soldCount < b.soldCount) {
                    return 1;
                }
                if (a.soldCount > b.soldCount) {
                    return -1;
                }
                return 0;
            });
            for (let i = 0; i < array.length; i++) {

                let row = "";

                if (((preciomin == undefined) || (preciomin != undefined && array[i].cost >= preciomin)) &&
                    ((preciomax == undefined) || (preciomax != undefined && array[i].cost <= preciomax))) {

                    row = ` 
                    <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card card-body mb-3 tarjeta shadow">
                    <img class="card-img-top" src="${array[i].imgSrc}" alt="${array[i].description}">
                    <div class="card-body">
                    <h5 class="card-title">${array[i].name}</h5>
                    <div class="col"><p class="card-text">Precio: <strong>${array[i].currency} ${array[i].cost}</strong></p></div>
                    <br><button class="btn btn-dark" onclick="verproducto(${array[i].id})">Ver Más</button>
                    <p class="card-text"><small class="text-muted"> ${array[i].soldCount} artículos</small></p>
                    </div>    
                    </div>
                    </div><br><br>
        ` ;
                    document.getElementById("prod-list-container").innerHTML += row;
                }
            }
        }
    }
}

function categorysetter(option) {
    document.getElementById("prod-list-container").innerHTML = "";
    if (option == 1) {
        getJSONData(AUTOS_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    } else if (option == 2) {
        getJSONData(CELULARES_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    } else if (option == 3) {
        getJSONData(COMPUTADORAS_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    } else if (option == 4) {
        getJSONData(DEPORTE_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    } else if (option == 5) {
        getJSONData(ELECTRODOMESTICOS_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    } else if (option == 6) {
        getJSONData(HERRAMIENTAS_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    } else if (option == 7) {
        getJSONData(JUGUETES_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    } else if (option == 8) {
        getJSONData(MUEBLES_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    } else if (option == 9) {
        getJSONData(VESTIMENTA_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    } else {
        getJSONData(TODOS_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    }
}

function verproducto(id) {
    localStorage.setItem("Producto",JSON.stringify({productId: id}));
    window.location = "product-info.html";
}

document.addEventListener("DOMContentLoaded", function(e){
    actualizarlistado();
})