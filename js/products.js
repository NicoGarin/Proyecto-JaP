//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var listadoProductos = [];

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(AUTOS_URL).then(function (objeto) {
        if (objeto.status === "ok") {
            listadoProductos = objeto.data;
        } else {
            alert(objeto.status);
        }
        mostrarProductos(listadoProductos)
    }
    )
})

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

function categorysetter(option) {
    let actualcat = option.value;
    if (actualcat === 1) {
        getJSONData(AUTOS_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    }else if (actualcat === 2) {
        getJSONData(CELULARES_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    }else if (actualcat === 3) {
        getJSONData(COMPUTADORAS_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    }else if (actualcat === 4) {
        getJSONData(DEPORTE_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    }else if (actualcat === 5) {
        getJSONData(ELECTRODOMESTICOS_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    }else if (actualcat === 6) {
        getJSONData(HERRAMIENTAS_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    }else if (actualcat === 7) {
        getJSONData(JUGUETES_URL).then(function (objeto) {
            if (objeto.status === "ok") {
                listadoProductos = objeto.data;
            } else {
                alert(objeto.status);
            }
            mostrarProductos(listadoProductos)
        }
        )
    }else if (actualcat === 8) {
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
    
