
/* ---------- GERAR SENHA SEGURA ---------- */

const senhaEscrita = document.getElementById("senha");   // Referencia o campo onde a senha será escrita
const geraSenha = document.getElementById("gera_senha"); // Referencia o botão que irá gerar a senha

const caracteresMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Cria uma constante para as letras maiúsculas
const caracteresMinuscula = 'abcdefghijklmnopqrstuvwxyz'; // Cria uma constante para as letras minúsculas
const caracteresNumero = '0123456789';                    // Cria uma constante para números
const caracteresSimbolo = '!@#$%¨&*()-=_+[]}{:?.,<>';     // Cria uma constante para simbolos

const senhaGerada = [caracteresMaiuscula, caracteresMinuscula, caracteresNumero, caracteresSimbolo].join('').split('') // Junta todas as strings e subdivide elas

let senha = "";                                                             // Cria uma variável vazia para a senha ser armazenada posteriormente

const gerandoSenha = ()=>{                                                  // Cria uma constante e transforma ela em uma função
  for(let i = 1; i <= 12; i++){                                             // Cria um ciclo onde a variavel "i" será incrementada até possuir 12 caracteres
    senha += senhaGerada[Math.floor(Math.random() * senhaGerada.length)];   // Retorna a variável "senha" e incrementa os caracteres de forma aleatória
  }
    senhaEscrita.textContent = senha; // Chama o campo de senha e insere o conteúdo da variável "senha" dentro dele
    senha = ""                        // Limpa a variável "senha" e retorna o ciclo
}

/* ---------- EFEITO DE GERAR SENHA ---------- */

const efeitoGerarSenha = (btn, Loop, tempo)=>{ // Cria uma constate para o efeito, essa constante recebe 3 parametros
  intervalo = setInterval(() => {
    gerandoSenha()
  }, 12)

  setTimeout(()=>{
    clearInterval(intervalo)
    geraSenha.removeAttribute("disabled")
  }, 12 * 50);
}

geraSenha.onclick = ()=> {
  geraSenha.setAttribute("disabled", "true")
  efeitoGerarSenha()
}

senhaEscrita.onclick = ()=>{
  navigator.clipboard.writeText(senhaEscrita.textContent)
}