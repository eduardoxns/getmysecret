
/* ---------- EXIBE CONTEÚDO ---------- */

function exibeConteudo()
{
  document.getElementById('conteudo').style.display = 'block';
  document.getElementById('submit').style.display = 'none';
}

/* ---------- MOSTRA SENHA ---------- */

let url = window.location.href;
url_id = url.substring(url.indexOf("?") + 1);

fetch('https://wv911b808b.execute-api.us-east-1.amazonaws.com/getSenha/?id=' + url_id)
.then(response => {
  return response.json()
})
.then(data => {
  document.getElementById('info').innerHTML = data.body.senha;
  document.getElementById('infoData').innerHTML = data.body.ate_quando;
})
.catch(error => {
  window.location = "error.html"
})