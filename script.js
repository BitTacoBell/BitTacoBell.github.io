const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}

function encriptar(stringEncriptado) {
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < codigo.length; i++) {
        if(stringEncriptado.includes(codigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(codigo[i][0], codigo[i][1])
        }
    }
    return stringEncriptado;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}

function desencriptar(stringDesencriptado) {
    let codigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < codigo.length; i++) {
        if(stringDesencriptado.includes(codigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(codigo[i][1], codigo[i][0])
        }
    }
    return stringDesencriptado;
}

function copiar() {
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
}