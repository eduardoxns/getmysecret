
/* ---------- GERAR SENHA SEGURA ---------- */

var senhaEscrita = document.getElementById("senha");    //Referencia o campo onde a senha será escrita
var geraSenha = document.getElementById("geraSenha");   //Referencia o botão que irá gerar a senha

var caracteresMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //Cria uma variavel para as letras maiúsculas
var caracteresMinuscula = 'abcdefghijklmnopqrstuvwxyz'; //Cria uma variavel para as letras minúsculas
var caracteresNumero = '0123456789';                    //Cria uma variavel para números
var caracteresSimbolo = '!@#$%*()-=_+[]}{:?.,';        //Cria uma variavel para simbolos

var senhaGerada = [caracteresMaiuscula, caracteresMinuscula, caracteresNumero, caracteresSimbolo].join('').split('');  // Junta todas as strings e subdivide elas

var senha = ""; //Cria uma variavel vazia para a senha ser armazenada posteriormente

const gerandoSenha = () => {        //Cria uma constante e transforma ela em uma função
    for (let i = 0; i < 12; i++)    //Cria um ciclo onde a variavel "i" será incrementada até possuir 12 caracteres
    {
        senha += senhaGerada[Math.floor(Math.random() * senhaGerada.length)]; //Retorna a variável "senha" e incrementa os caracteres de forma aleatória
    }
    senhaEscrita.textContent = senha; //Chama o campo de senha e insere o conteúdo da variável "senha" dentro dele
    senha = ""                        //Limpa a variável "senha" e retorna o ciclo
}

/* ---------- EFEITO DE GERAR SENHA ---------- */

const efeitoGerarSenha = () => {                    //Cria uma constate para o efeito de gerar senha
    intervalo = setInterval(() => gerandoSenha());  //Diz que a fução "gerandoSenha" está pausada

    setTimeout(() => {                              //Executa a função para rodar o efeito
        clearInterval(intervalo);                   //Limpa o intervalo, ou seja, despausa o efeito
        geraSenha.removeAttribute("disabled");      //Torna o botão ativo
    },500);                                         //Gera senhas no tempo de meio segundo
}

geraSenha.onclick = () => {                     //Ao clicar no botão de gerar senha
    geraSenha.setAttribute("disabled", "true"); //Desabilitar o botão enquanto o efeito ocorre
    efeitoGerarSenha();                         //Roda o efeito de gerar senha
}