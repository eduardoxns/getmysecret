
/* ---------- ENVIA SENHA PARA O BANCO ---------- */

function submit() {
  var senha = document.getElementById('senha').innerHTML;

  fetch('https://h91swzx2ab.execute-api.us-east-1.amazonaws.com/gravaSenha_V1/', {
    method: "POST",
    body: JSON.stringify({
      "senha": senha,
      "ate_quando": document.getElementById('escolha_tempo').value
    }),
    headers: {
    'Content-Type': 'application/json'
    }
  })

  window.alert("Sua senha é: " + senha);
  sessionStorage.setItem('senha', senha);
  window.location = 'private.html'
}

/* ---------- GERA LINK ---------- */

function goPrivate() {
  window.location = `secret.html?${senha}`
}

senha = sessionStorage.getItem('senha');

document.getElementById('link').innerHTML = `http://getmysecret.s3-website-us-east-1.amazonaws.com/secret.html?${senha}`