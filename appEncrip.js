const muneco = document.querySelector(".contenedor-muneco");
const contenedor = document.querySelector(".mensaje-desencriptado");
const resultado = document.querySelector(".resultado");
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 
const imagenMuneco = document.querySelector("#muneco");
const tituloMensaje = document.querySelector("#tituloMensaje");
const parrafo = document.querySelector("parrafo");
const contRes = document.querySelector(".contenedor-resultado");

const matriz_encrip = [
    ["e","enter"], 
    ["i","imes"], 
    ["a","ai"], 
    ["o","ober"],
    ["u","ufat"],
];
const matriz_desencrip = [
    ["enter","e"], 
    ["imes","i"], 
    ["ai","a"], 
    ["ober","o"],
    ["ufat","u"],
];


function btnEncriptar(){
    ocultarCampos();
    var cajaTexto = recuperarTexto();
    resultado.textContent = encriptar(cajaTexto);
}

function btnDesencriptar(){
    ocultarCampos();
    var cajaTexto = recuperarTexto();
    resultado.textContent = desencriptar(cajaTexto);
}

function recuperarTexto(){
    var cajaTexto = document.querySelector("#textoEncriptar");
    cajaTextoSinAcento = removeAccents(cajaTexto.value);
    return cajaTextoSinAcento.toLowerCase();
}

function ocultarCampos(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function mostrarCampos(){
    muneco.classList.remove("ocultar");
    contenedor.classList.remove("ocultar");
}


function encriptar(textoEncriptado){
    var cajaTexto = recuperarTexto();
    if(cajaTexto.length != 0){
        for (let i =0; i < matriz_encrip.length; i++){
            if (textoEncriptado.includes(matriz_encrip[i][0])){
                textoEncriptado = textoEncriptado.replaceAll(
                    matriz_encrip[i][0],
                    matriz_encrip[i][1]
                );
            }
        }
        return textoEncriptado;
    }
    else{
        mostrarCampos();
        imagenMuneco.src = "./img/muneco.png";
        tituloMensaje.textContent="Ningún mensaje fue encontrado";
        parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar";
        contRes.textContent=null;//NO QUITA EL VALOR YA DESENCRIPTADO ¡¡¡!!!! REVISAR
    }
}

function desencriptar(textoDesencriptado){
    var cajaTexto = recuperarTexto();
    if(cajaTexto.length != 0){
        for (let i=0; i<matriz_desencrip.length; i++){
                if (textoDesencriptado.includes(matriz_desencrip[i][0])){
                    textoDesencriptado = textoDesencriptado.replaceAll(
                        matriz_desencrip[i][0],
                        matriz_desencrip[i][1]
                    );
                }
            }
        return textoDesencriptado;
    }
    else{
        mostrarCampos();
        imagenMuneco.src = "./img/muneco.png";
        tituloMensaje.textContent="Ningún mensaje fue encontrado";
        parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar";
        resultado.textContent=null; //NO QUITA EL VALOR YA DESENCRIPTADO ¡¡¡!!!! REVISAR
    }
}

const btnCopiar = document.querySelector(".btnCopiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
});








//const campo_encriptar = document.querySelector("#textoEncriptar");
//const campo_desencriptar = document.querySelector("#textoDesencriptar");
//---- E N C R I P T A D O ----
/*    function btnEncriptar(){
        if (campo_encriptar.length != 0){
            const texto_encriptar = encriptar(campo_encriptar.value);
            campo_desencriptar.value = texto_encriptar;
        }
        else{
            alert("Favor de ingresar el texto a encriptar");
        }
    }

    function encriptar(textoEncriptado){
        for (let i =0; i < matriz_encrip.length; i++){
            if (textoEncriptado.includes(matriz_encrip[i][0])){
                textoEncriptado = textoEncriptado.replaceAll(
                    matriz_encrip[i][0],
                    matriz_encrip[i][1]
                );
            }
        }
    return textoEncriptado;
    }
*/

//---- D E S E N C R I P T A D O ----
/*function btnDesencriptar(){
    const texto_desencriptar = desencriptar(campo_encriptar.value);
    campo_desencriptar.value = texto_desencriptar;
}

function desencriptar(textoDesencriptado){
    for (let i=0; i<matriz_desencrip.length; i++){
        if (textoDesencriptado.includes(matriz_desencrip[i][0])){
            textoDesencriptado = textoDesencriptado.replaceAll(
                matriz_desencrip[i][0],
                matriz_desencrip[i][1]
            );
        }
    }
return textoDesencriptado;
}
*/
//---- C O P I A R ----