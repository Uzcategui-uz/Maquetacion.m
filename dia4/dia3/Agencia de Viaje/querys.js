var contactos = Array();

function solicitarInformacion(event) {
    event.preventDefault();
    let nombre = document.getElementById("connombre").value;
    let origen = document.getElementById("conorigen").value.toLowerCase();
    let destino = document.getElementById("condestino").value.toLowerCase();
    let cantidad = document.getElementById("concantidad").value;
    let fecha = document.getElementById("confecha").value;
    let mensaje = document.getElementById("conmensaje").value;

    contactos.push({
        nombre: nombre,
        origen: origen,
        destino: destino,
        cantidad: cantidad,
        fecha: fecha,
        mensaje: mensaje
    })

    alert("Información guardada");
    document.getElementById("contacto").reset();
}

function filtrarContactos() {
    let origen = document.getElementById("origen").value.toLowerCase();
    let destino = document.getElementById("destino").value.toLowerCase();
    let cantidad = document.getElementById("cantidad").value;
    let fecha = document.getElementById("fecha").value;
    console.log(origen + " " + destino + " " + cantidad + " " + fecha);

    let text = "<table><tr><th>Nombre</th><th>Origen</th><th>Destino</th><th>Cantidad de personas</th><th>Fecha de viaje</th><th>Mensaje</th></tr>";
    for (let i = 0; i < contactos.length; i++) {
        if ((origen == '' || origen == contactos[i].origen) && (destino == '' || destino == contactos[i].destino) && (cantidad == contactos[i].cantidad) && (fecha == '' || fecha == contactos[i].fecha))
            text += " <tr><td>" + contactos[i].nombre + "</td><td>" + contactos[i].origen + "</td><td>" + contactos[i].destino + "</td><td>" + contactos[i].cantidad + "</td> <td>" + contactos[i].fecha + "</td><td>" + contactos[i].mensaje + "</td> </tr>";
    }

    document.getElementById("resultados").innerHTML = text + "</table>";


}