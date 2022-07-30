
/* ---------- ENVIA SENHA PARA O BANCO ---------- */

function submit()                                             //Puxa a função do botão que envia as informações para a API
{
  var senha = document.getElementById('senha').innerHTML;     //Cria uma variavel que guarda a senha gerada 
  var tempo = document.getElementById('escolhaTempo').value;  //Cria uma variavel que guarda o tempo selecionado

  if (!senha)   //Se o usuario não gerou nenhuma senha
  {
    Swal.fire({   //Um alerta ocorre dizendo que o usuario só pode prosseguir se gerar a senha
      icon: 'error',
      title: 'SENHA NÃO GERADA',
      text: 'Você deve gerar a senha antes de prosseguir!',
      confirmButtonColor: '#0897E9'
    })
  }
  else //Se o usuario gerou a senha
  {
    fetch('https://h91swzx2ab.execute-api.us-east-1.amazonaws.com/gravaSenha_V1/', {  //A API é invocada através do Fetch
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({  //Dois valores são enviados para a API, a senha e o tempo limite
        "senha": senha,
        "ate_quando": tempo
      })
    })
    sessionStorage.setItem('senha', senha);   //Guarda a senha no storage do navegador
    Swal.fire({   //Dispara um alerta dizendo que a senha foi gerada
      icon: 'success',
      title: 'Seu link foi gerado!',
      text: 'Aguarde enquanto te redirecionamos...',
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000
    }).then(function(){
      window.location = 'private.html'  //Envia o usuario para a pagina com o link gerado
    })
  }
}

/* ---------- GERA LINK ---------- */

function goPrivate()                          //Puxa a função do link que envia o usuario para o segredo
{
  window.location = `secret.html?${senha}`;   //Envia o usuario para o segredo com a senha na URL
}
senha = sessionStorage.getItem('senha');
link = document.getElementById('link').innerHTML = `http://getmysecret.s3-website-us-east-1.amazonaws.com/secret.html?${senha}`;  //Cria um link com o segredo

function copiaLink()  //ATUALMENTE NÃO FUNCIONA EM S3, POIS NÃO HÁ PROTOCÓLO HTTPS//
{
  navigator.clipboard.writeText(link);
  Swal.fire({
    icon: 'success',
    title: 'Link copiado!',
    showConfirmButton: false,
    timer: 1000
  })
}