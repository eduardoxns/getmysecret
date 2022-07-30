
/* ---------- ENVIA SENHA PARA O BANCO ---------- */

function submit()
{
  let senha = document.getElementById('senha').innerHTML;
  let tempo = document.getElementById('escolhaTempo').value

  if (!senha)
  {
    Swal.fire({
      icon: 'error',
      title: 'SENHA NÃO GERADA',
      text: 'Você deve gerar a senha antes de prosseguir!',
      confirmButtonColor: '#0897E9'
    })
  }
  else
  {
    fetch('https://h91swzx2ab.execute-api.us-east-1.amazonaws.com/gravaSenha_V1/', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "senha": senha,
        "ate_quando": tempo
      })
    })
    sessionStorage.setItem('senha', senha);
    Swal.fire({
      icon: 'success',
      title: 'Seu link foi gerado!',
      text: 'Aguarde enquanto te redirecionamos...',
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000
    }).then(function(){
      window.location = 'private.html'
    })
  }
}

/* ---------- GERA LINK ---------- */

function goPrivate()
{
  window.location = `secret.html?${senha}`;
}
senha = sessionStorage.getItem('senha');
link = document.getElementById('link').innerHTML = `http://getmysecret.s3-website-us-east-1.amazonaws.com/secret.html?${senha}`;

function copiaLink()
{
  navigator.clipboard.writeText(link)
  Swal.fire({
    icon: 'success',
    title: 'Link copiado!',
    showConfirmButton: false,
    timer: 1000
  })
}