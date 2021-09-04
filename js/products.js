//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let preciomin = 0;
let preciomax = 0;
let currency = "All";
let sort = "AZ";
var listadoProductos = [];

//Código del botón buscar
document.getElementById("rangoprecio").addEventListener("click", function (e) {
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

    if ((preciomin != undefined) && (preciomin != "") && (parseInt(preciomin)) >= 0) { //se establece rango de precio
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
})

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
        <div class="row">
        <div class="col-3">
            <img src="` + newarray[i].imgSrc + `" alt="` + newarray[i].description + `" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">`+ newarray[i].name + `</h4>
                <small class="text-muted">` + newarray[i].soldCount + ` artículos</small>
            </div>
            <p class="mb-1">` + newarray[i].description + `</p>
            <h6 class="mb-1">` + newarray[i].currency + ` ` + newarray[i].cost + `</h6>
        </div>
    </div><hr>
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
        <div class="row">
        <div class="col-3">
            <img src="` + newarray[i].imgSrc + `" alt="` + newarray[i].description + `" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">`+ newarray[i].name + `</h4>
                <small class="text-muted">` + newarray[i].soldCount + ` artículos</small>
            </div>
            <p class="mb-1">` + newarray[i].description + `</p>
            <h6 class="mb-1">` + newarray[i].currency + ` ` + newarray[i].cost + `</h6>
        </div>
        </div><hr>
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
    <div class="row">
    <div class="col-3">
        <img src="` + newarray[i].imgSrc + `" alt="` + newarray[i].description + `" class="img-thumbnail">
    </div>
    <div class="col">
        <div class="d-flex w-100 justify-content-between">
            <h4 class="mb-1">`+ newarray[i].name + `</h4>
            <small class="text-muted">` + newarray[i].soldCount + ` artículos</small>
        </div>
        <p class="mb-1">` + newarray[i].description + `</p>
        <h6 class="mb-1">` + newarray[i].currency + ` ` + newarray[i].cost + `</h6>
    </div>
    </div><hr>
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
        <div class="row">
        <div class="col-3">
            <img src="` + newarray[i].imgSrc + `" alt="` + newarray[i].description + `" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">`+ newarray[i].name + `</h4>
                <small class="text-muted">` + newarray[i].soldCount + ` artículos</small>
            </div>
            <p class="mb-1">` + newarray[i].description + `</p>
            <h6 class="mb-1">` + newarray[i].currency + ` ` + newarray[i].cost + `</h6>
        </div>
        </div><hr>
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
        <div class="row">
        <div class="col-3">
            <img src="` + newarray[i].imgSrc + `" alt="` + newarray[i].description + `" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">`+ newarray[i].name + `</h4>
                <small class="text-muted">` + newarray[i].soldCount + ` artículos</small>
            </div>
            <p class="mb-1">` + newarray[i].description + `</p>
            <h6 class="mb-1">` + newarray[i].currency + ` ` + newarray[i].cost + `</h6>
        </div>
        </div><hr>
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
    <div class="row">
    <div class="col-3">
        <img src="` + newarray[i].imgSrc + `" alt="` + newarray[i].description + `" class="img-thumbnail">
    </div>
    <div class="col">
        <div class="d-flex w-100 justify-content-between">
            <h4 class="mb-1">`+ newarray[i].name + `</h4>
            <small class="text-muted">` + newarray[i].soldCount + ` artículos</small>
        </div>
        <p class="mb-1">` + newarray[i].description + `</p>
        <h6 class="mb-1">` + newarray[i].currency + ` ` + newarray[i].cost + `</h6>
    </div>
    </div><hr>
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
        <div class="row">
        <div class="col-3">
            <img src="` + array[i].imgSrc + `" alt="` + array[i].description + `" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">`+ array[i].name + `</h4>
                <small class="text-muted">` + array[i].soldCount + ` artículos</small>
            </div>
            <p class="mb-1">` + array[i].description + `</p>
            <h6 class="mb-1">` + array[i].currency + ` ` + array[i].cost + `</h6>
        </div>
        </div><hr>
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
        <div class="row">
        <div class="col-3">
            <img src="` + array[i].imgSrc + `" alt="` + array[i].description + `" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">`+ array[i].name + `</h4>
                <small class="text-muted">` + array[i].soldCount + ` artículos</small>
            </div>
            <p class="mb-1">` + array[i].description + `</p>
            <h6 class="mb-1">` + array[i].currency + ` ` + array[i].cost + `</h6>
        </div>
        </div><hr>

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
    <div class="row">
    <div class="col-3">
        <img src="` + array[i].imgSrc + `" alt="` + array[i].description + `" class="img-thumbnail">
    </div>
    <div class="col">
        <div class="d-flex w-100 justify-content-between">
            <h4 class="mb-1">`+ array[i].name + `</h4>
            <small class="text-muted">` + array[i].soldCount + ` artículos</small>
        </div>
        <p class="mb-1">` + array[i].description + `</p>
        <h6 class="mb-1">` + array[i].currency + ` ` + array[i].cost + `</h6>
    </div>
    </div><hr>
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
    } else {
        getJSONData(VESTIMENTA_URL).then(function (objeto) {
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
