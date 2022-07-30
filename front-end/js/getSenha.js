
function exibeConteudo()                                        //Puxa a função do botão que exibe o conteúdo
{
  document.getElementById('conteudo').style.display = 'block';  //Torna o conteúdo visivel
  document.getElementById('submit').style.display = 'none';     //Torna o botão invisivel
}

/* ---------- MOSTRA SENHA ---------- */

fetch('https://te1xj5xes3.execute-api.us-east-1.amazonaws.com/getSenha_V1/').then(response => {   //Roda uma função fetch que retorna todos os itens da tabela
 return response.json()
})
.then(data => {
  let url = window.location.href;                   //Pega a URL da página atual
  url_senha = url.substring(url.indexOf("?") + 1);  //Pega o texto da URL após o "?" (contém somente a senha)

  getData = data.filter(data => data.senha === url_senha);  //Vai fazer uma pesquisa pelos itens em qual senha do banco condiz com a senha da URL

  document.getElementById('info').innerHTML = getData[0].senha;           //Exibe o segredo na tela
  document.getElementById('infoData').innerHTML = getData[0].ate_quando;  //Exibe a data de expiração do segredo
})
.catch(error => {
  window.location = 'error.html'  //Se o processo falhar (A API não encontrar o segredo no banco), o usuario é redirecionado para a pagina de erro
})