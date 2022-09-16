
/* ---------- EXIBE CONTEÚDO ---------- */

function exibeConteudo()
{
  document.getElementById('conteudo').style.display = 'block';
  document.getElementById('submit').style.display = 'none';
  document.getElementById('titulo').style.display = 'none';
}

/* ---------- ARMAZENA IP NO BANCO---------- */

let url = window.location.href;
url_id = url.substring(url.indexOf("?") + 1);

fetch('http://api.ipify.org/?format=json')
.then(response => response.json())
.then(data => {
  fetch('https://fd2m6duull.execute-api.us-east-1.amazonaws.com/senhaIP_V1/', {
    method: "PUT",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "senhaID": url_id,
      "acessoIP": data.ip
    })
  })
});

/* ---------- MOSTRA SENHA ---------- */

fetch('https://wv911b808b.execute-api.us-east-1.amazonaws.com/getSenha/?id=' + url_id)
.then(response => response.json())
.then(data => {
  document.getElementById('info').innerHTML = data.body.senha;
  document.getElementById('infoData').innerHTML = data.body.ate_quando;
})
.catch(error => {
  window.location = "error.html";
});

/* ---------- RECARREGA PÁGINA A CADA 1 MINUTO ---------- */

setTimeout(function() {
  location.reload()
}, 60000 * 1)