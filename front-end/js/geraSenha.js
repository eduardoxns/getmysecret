
/* ---------- GERAR SENHA SEGURA ---------- */

var senhaEscrita = document.getElementById("senha");
var campoSenha = document.getElementById("campoSenha");
var geraSenha = document.getElementById("geraSenha");

var caracteresMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var caracteresMinuscula = 'abcdefghijklmnopqrstuvwxyz';
var caracteresNumero = '0123456789';
var caracteresSimbolo = '!@#$%*()-=_+[]}{:?.,';

var senhaGerada = [caracteresMaiuscula, caracteresMinuscula, caracteresNumero, caracteresSimbolo].join('').split('');

var senha = "";

const gerandoSenha = () => {
    for (let i = 0; i < 12; i++)
    {
        senha += senhaGerada[Math.floor(Math.random() * senhaGerada.length)];
    }
    senhaEscrita.textContent = senha;
    senha = ""
}

/* ---------- EFEITO DE GERAR SENHA ---------- */

const efeitoGerarSenha = () => {
    intervalo = setInterval(() => gerandoSenha());

    setTimeout(() => {
        clearInterval(intervalo);
        geraSenha.removeAttribute("disabled");
    },500);
}

geraSenha.onclick = () => {
    campoSenha.style = "padding: 0%"
    geraSenha.setAttribute("disabled", "true");
    efeitoGerarSenha();
}