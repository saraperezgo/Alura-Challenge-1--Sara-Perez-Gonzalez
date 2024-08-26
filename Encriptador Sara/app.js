var btn_encriptado = document.getElementById("Encriptar");
var btn_desencriptado = document.getElementById("Desencriptar");
var texto1 = document.getElementById("tex1");
var texto2 = document.getElementById("tex2");


btn_encriptado.addEventListener("click", ()=>{
    Encriptado()
    limpiarCaja()
})

btn_desencriptado.addEventListener("click", ()=>{
    Desencriptado()
    limpiarCaja()
})

function Encriptado(){
    var texto=document.getElementById('texto_codificacion').value;
    if (texto != ""){
        var Cifrado= texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/o/gi,"ober").replace(/a/gi,"ai").replace(/u/gi,"ufat");
        texto1.innerHTML = Cifrado;
        imagen.style.display = "none";  
        texto2.style.display = "none";}
    else{
        texto1.innerHTML = "Ningún mensaje fue encontrado";
        texto2.style.display ="block";
        imagen.style.display="block";
    }
    console.log(Cifrado)
  
    return
}

function Desencriptado(){
    var texto=document.getElementById('texto_codificacion').value;
    if (texto != ""){
        var dCifrado= texto.replace(/ai/gi,"a").replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi,"u");

        texto1.innerHTML = dCifrado;
        imagen.style.display = "none";  
         texto2.style.display = "none";
    }
    else{
        texto1.innerHTML = "Ningún mensaje fue encontrado";
        texto2.style.display ="block";
        imagen.style.display="block";
    }
  
    
    return
}

function limpiarCaja() {
    document.getElementById('texto_codificacion').value = '';
    // el # en query selector sirve para buscar el documento por ID
return
}