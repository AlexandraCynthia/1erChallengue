
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
            //Una vez apretado el botón de encriptar, se borrará el texto para aparecer en casilla de texto encriptado, pero quedará almaceado en la variable global
            document.getElementById('inputText').value = '';
            
        }else{
            //Si no se ha ingresado texto, mostrar la imagen y ocultar el botón copiar y texto encriptado
            document.getElementById("img").style.display="block";
            document.getElementById("texto1").style.display="block";
            document.getElementById("texto2").style.display="block";
            document.getElementById("copiarBtn").style.display="none";
            document.getElementById("textEncriptado").style.display="none";
            alert("No se ha ingresado ningún texto");
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
    //Obtiene contenido encriptado del elemento con id "textEncriptado" y se almacena en variable textoEncriptado
    var textoEncriptado = document.getElementById('textEncriptado').innerText;
    //Crea un elemento textarea y le asigna el valor del texto encriptado
    var texarea = document.createElement('textarea');
    texarea.value = textoEncriptado;
    //Se agrega textarea al cuerpo del documento
    document.body.appendChild(texarea);
    //Selecciona contenido del área de texto
    texarea.select();
    //Ejecuta comando "copy" para copiarlo al portapapeles
    document.execCommand("copy");
    //Remueve elemento textarea del cuerpo del documento luego de copiarlo
    document.body.removeChild(texarea);
    alert ("texto copiado al portapapeles")
    
    //Borrar texto desencriptado despues de dar click en botón copiar
    document.getElementById("textEncriptado").innerText="";
    //Habilitar botón para desencriptar
    document.getElementById('desencriptarBtn').removeAttribute('disabled');
 }

 function desencriptarTexto(){
    document.getElementById('inputText').value = desencriptar(textoEncriptadoGlobal);
    document.querySelector('#desencriptarBtn').setAttribute('disabled','true');
 }

 function desencriptar(texto){
    texto = texto.replace(/enter/g, "e");
    texto= texto.replace(/imes/g, "i");
    texto=texto.replace(/ai/g, "a");
    texto=texto.replace(/ober/g, "o");
    texto=texto.replace(/ufat/g, "u");
    return texto;
 }