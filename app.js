var textoEncriptadoGlobal="";

function encriptarTexto(){
    var inputText = document.getElementById('inputText').value.toLowerCase();

        if (inputText.trim()!==""){
            //Si se ha ingresado texto, ocultará la imagen y mostrará botón copiar y texto encriptado
            document.getElementById('copiarBtn').style.display = "inline-block";
            document.getElementById('textEncriptado').style.display = "block";
            document.getElementById("img").style.display="none"
            document.getElementById("texto1").style.display="none"
            document.getElementById("texto2").style.display="none"
       
       
            var textoEncriptado = encriptar(inputText);
            document.getElementById('textEncriptado').innerText = textoEncriptado
            // Almacenamos el texto encriptado en una variable global
            textoEncriptadoGlobal = textoEncriptado;
            document.querySelector('#inputText').value = '';
            
        }else{
            //Si no se ha ingresado texto, mostrar la imagen y ocultar el botón copiar y texto encriptado
            document.getElementById("img").style.display="block";
            document.getElementById("texto1").style.display="block";
            document.getElementById("texto2").style.display="block";
            document.getElementById("copiarBtn").style.display="none";
            document.getElementById("textEncriptado").style.display="none";
        }

    }

function encriptar(texto){
    texto = texto.replace(/e/g, "enter");
    texto= texto.replace(/i/g, "imes");
    texto=texto.replace(/a/g, "ai");
    texto=texto.replace(/o/g, "ober");
    texto=texto.replace(/u/g, "ufat");
    return texto;
 }
 function copiarTexto(){
    var textoEncriptado = document.getElementById('textEncriptado').innerText;
    var texarea=document.createElement('textarea');
    texarea.value = textoEncriptado;
    document.body.appendChild(texarea);
    texarea.select();
    document.execCommand("copy");
    document.body.removeChild(texarea);
    alert ("texto copiado al portapapeles")
    
    //Borrar despues de copiar
    document.getElementById("textEncriptado").innerText="";
    //Habilitar botón para desencriptar
    //document.getElementById('desencriptarBtn').removeAttribute('disabled');
 }

 function desencriptarTexto(){

    //document.getElementById('inputText').value.toLowerCase() = desencriptar(textoEncriptadoGlobal);

    //document.getElementById('inputText').value = desencriptar(textoEncriptadoGlobal);

    console.log(inputText.value)
    console.log(textoEncriptadoGlobal)

    
    if (textoEncriptadoGlobal!=document.getElementById('inputText').value){
        document.getElementById('inputText').value = desencriptar(inputText.value)
    }else{
        document.getElementById('inputText').value = desencriptar(textoEncriptadoGlobal)
    }
  
}


 function desencriptar(texto){
    texto = texto.replace(/enter/g, "e");
    texto= texto.replace(/imes/g, "i");
    texto=texto.replace(/ai/g, "a");
    texto=texto.replace(/ober/g, "o");
    texto=texto.replace(/ufat/g, "u");
    return texto;
 }