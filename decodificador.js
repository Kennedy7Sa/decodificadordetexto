
let imagemProcurando = document.querySelector(".mensagens_div_img");
let titulo = document.querySelector(".mensagem_div_titulo");
let paragrafo = document.querySelector(".mensagens_div_texto");
let resposta = document.querySelector(".resposta");
let copiar = document.querySelector("#btn-copiar");

function criptografar(){
    let stringCriptografada = document.querySelector('#input').value;

    stringCriptografada = stringCriptografada.replaceAll("e","enter").replaceAll("i","re").replaceAll("a","mi").replaceAll("o","fa").replaceAll("u","sol");

    imagemProcurando.remove();
    titulo.remove();
    paragrafo.remove();

    if (!stringCriptografada) stringCriptografada = 'Nenhuma mensagem, tente novamente! ';

    copiar.removeAttribute("hidden");

    resposta.innerHTML = stringCriptografada;
}

function descriptografar(){
    let stringDescriptografada = document.querySelector("#input").value;

    stringDescriptografada = stringDescriptografada.replaceAll("enter","e").replaceAll("re","i").replaceAll("mi","a").replaceAll("fa","o").replaceAll("sol","u");
    
    imagemProcurando.remove();
    titulo.remove();
    paragrafo.remove();

    if (!stringDescriptografada) stringDescriptografada = 'Nenhuma mensagem, tente novamente! ';

    copiar.removeAttribute("hidden");

    resposta.innerHTML = stringDescriptografada;
}

function copiarTexto(){
    navigator.clipboard.writeText(resposta.innerHTML).then(() => copiar.innerHTML = "Texto copiado!");

    limparInput();

    setTimeout(function() {
        copiar.innerHTML = "Copiar texto"
    },2000)
}

function limparInput(){
    let input = document.querySelector(".input");
    input.value = "";
}