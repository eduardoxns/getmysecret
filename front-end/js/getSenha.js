function exibeConteudo()
{
  document.getElementById('conteudo').style.display = 'block';
  document.getElementById('submit').style.display = 'none';
}

/* ---------- MOSTRA SENHA ---------- */

fetch('https://te1xj5xes3.execute-api.us-east-1.amazonaws.com/getSenha_V1/').then(response => {
 return response.json()
})
.then(data => {
  let url = window.location.href;
  url_senha = url.substring(url.indexOf("?") + 1);

  getData = data.filter(data => data.senha === url_senha);

  document.getElementById('info').innerHTML = getData[0].senha;
  document.getElementById('infoData').innerHTML = getData[0].ate_quando;
})
.catch(error => {
  window.location = 'error.html'
})