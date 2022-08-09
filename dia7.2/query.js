function agregarCarrito(id) {
    let imagen = $("#art" + id + " img").attr("src");
    let titulo = $("#art" + id + " h3").text();
    let descripcion = $("#art" + id + " .descripcion").text();
    let precio = $("#art" + id + " .precio").text();
    let unidades = $("#cesta" + id + " .unidades").text();
    if (unidades == "") {
        unidades = "1 U";
        total += parseFloat(precio);//convierte el precio a un numero
        //basado en Default media= IMAGEN PEQUEÑA TITULO A LA DERECHA Y TEXTO Y AGREGA ROPA A LA CESTA
        $("#cesta").append('<div class="media" id="cesta' + id + '"><div class="media-left"><img class="media-object" src="' + imagen + '" style="width: 60px;"></div><div class="media-body"><h5 class="media-heading">' + titulo + '</h4><p class="descripcion" style="font-size: 14px;">' + descripcion + '</p><p style="text-align: right; margin: 0 20px;"><span style="font-size: 20px; color:#d4195c"><span class="unidades">' + unidades + '</span> - <span class="precio">' + precio + '</span> €</span> <a href="#" onclick="eliminarCarrito(' + id + ')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></a></p></div></div>');
    } else {
        unidades = parseInt(unidades.replace(" U", ""));// busco las unidades y elimino la U porque necesito solo el numero
        total -= parseFloat(precio) * unidades;//elimino el precio para colocar el nuevo
        unidades++;//aumento la cantidad de unidades en 1
        total += parseFloat(precio) * unidades;// calculo el precio basado en la cantidad de unidades
        unidades = unidades + " U";// vuelvo a colocar la U
        $("#cesta" + id + " .unidades").text(unidades);
    }

    $("#total").text("Total " + total + " €");//Mostrar el total

}

function eliminarCarrito(id) {
    let unidades = $("#cesta" + id + " .unidades").text();//busca la cantidad de unidades para saber cuanto dinero tiene que quitar del total
    unidades = parseInt(unidades.replace(" U", ""));
    let precio = $("#art" + id + " .precio").text();
    total -= parseFloat(precio) * unidades;//resto lo que quito del total
    total = round(total);
    $("#cesta" + id).remove();//elimino el elemento de la cesta
    $("#total").text("Total " + total + " €");//Mostrar el total
    if (total == 0) {//si el total es 0 no lo muestre
        $("#total").empty();
    }
}

//copiada de https://www.delftstack.com/es/howto/javascript/javascript-round-to-2-decimal-places/
function round(num) {//porque a veces muestra decimales raro
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

