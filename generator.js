function generarCodigoQr() {
    let sitioWeb = document.getElementById("sitioWeb").value;
    if(sitioWeb){
        let contenedorCodigoQr = document.getElementById("codigoQr");
        contenedorCodigoQr.innerHTML = "";
        new QRCode(contenedorCodigoQr, sitioWeb);

    document.getElementById("contenedorCodigoQr").style.display = "block";
    }else {
        alert("Por favor, ingresa una URL válida");
    }
}