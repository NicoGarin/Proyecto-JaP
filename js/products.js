//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var listadoProductos = [];
var URLS = ["elem0","AUTOS_URL","CELULARES_URL","COMPUTADORAS_URL","DEPORTE_URL","ELECTRODOMESTICOS_URL","HERRAMIENTAS_URL","JUGUETES_URL","MUEBLES_URL","VESTIMENTA_URL"]
//document.addEventListener("DOMContentLoaded", function (e) {
//    getJSONData(AUTOS_URL).then(function (objeto) {
//        if (objeto.status === "ok") {
//            listadoProductos = objeto.data;
//        } else {
//            alert(objeto.status);
//        }
//        mostrarProductos(listadoProductos)
//    }
//    )
//})

function mostrarProductos(array) {
    for (let i = 0; i < array.length;i++) {

        let row = "";

        row = ` 
            <tr>
                <td class="tablaproductos">`  + array[i].name + ` </td>
                <td class="tablaproductos">`  + array[i].description + ` </td>
                <td class="tablaproductos">`  + array[i].cost + ` </td>
                <td class="tablaproductos">`  + array[i].currency + ` </td>
                <td class="tablaproductos"><img style="width:200px"; src=`  + array[i].imgSrc + `> </td>
            </tr>
            ` ;
        document.getElementById("info").innerHTML += row;
    }
}
//Trabajarlo con un switch
function categorysetter(option) {
    document.getElementById("info").innerHTML = "";
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
    }else if (option == 2) {
        getJSONData(CELULARES_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    }else if (option == 3) {
        getJSONData(COMPUTADORAS_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    }else if (option == 4) {
        getJSONData(DEPORTE_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    }else if (option == 5) {
        getJSONData(ELECTRODOMESTICOS_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    }else if (option == 6) {
        getJSONData(HERRAMIENTAS_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    }else if (option == 7) {
        getJSONData(JUGUETES_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    }else if (option == 8) {
        getJSONData(MUEBLES_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    }else {
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
