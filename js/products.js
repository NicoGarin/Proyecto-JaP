//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    let data = getJSONData(PRODUCTS_URL);
    let row = "";

    row = ` 
        <tr>
        <td>`  + data[0].name + ` </td>
        </tr>
        ` ;

    document.getElementById("info").innerHTML += row;
})