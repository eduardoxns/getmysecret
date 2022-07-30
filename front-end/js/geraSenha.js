
/* ---------- GERAR SENHA SEGURA ---------- */

const senhaEscrita = document.getElementById("senha");    // Referencia o campo onde a senha será escrita
const geraSenha = document.getElementById("geraSenha");  // Referencia o botão que irá gerar a senha

const caracteresMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Cria uma constante para as letras maiúsculas
const caracteresMinuscula = 'abcdefghijklmnopqrstuvwxyz'; // Cria uma constante para as letras minúsculas
const caracteresNumero = '0123456789';                    // Cria uma constante para números
const caracteresSimbolo = '!@#$%¨&*()-=_+[]}{:?.,<>';     // Cria uma constante para simbolos

const senhaGerada = [caracteresMaiuscula, caracteresMinuscula, caracteresNumero, caracteresSimbolo].join('').split('')  // Junta todas as strings e subdivide elas

let senha = ""; // Cria uma variável vazia para a senha ser armazenada posteriormente

const gerandoSenha = () => {      // Cria uma constante e transforma ela em uma função
    for (let i = 1; i <= 12; i++) // Cria um ciclo onde a variavel "i" será incrementada até possuir 12 caracteres
    {
        senha += senhaGerada[Math.floor(Math.random() * senhaGerada.length)]; // Retorna a variável "senha" e incrementa os caracteres de forma aleatória
    }
    senhaEscrita.textContent = senha; // Chama o campo de senha e insere o conteúdo da variável "senha" dentro dele
    senha = ""                        // Limpa a variável "senha" e retorna o ciclo
}

/* ---------- EFEITO DE GERAR SENHA ---------- */

const efeitoGerarSenha = (btn, Loop, tempo) => {  // Cria uma constate para o efeito que recebe 3 parametros para configurar o efeito
    intervalo = setInterval(() => {               // Executa uma função de X em X tempos
        gerandoSenha()                            // Chama a função
    }, 12)                                        // Executa a função 12 vezes

    setTimeout(() => {                        // Executa a função de parar o gerador de senha
        clearInterval(intervalo)              // Limpa o intervalo de geração de senha
        geraSenha.removeAttribute("disabled") // Remove o atributo de botão inativo
    }, 12 * 50);                              // Gera 12 senhas, cada uma durante 50 milisegundos
}

geraSenha.onclick = () => {                     // Ao clicar no botão de gerar senha
    geraSenha.setAttribute("disabled", "true")  // Desabilitar o botão enquanto o efeito ocorre
    efeitoGerarSenha()                          // Roda o efeito de gerar senha
}