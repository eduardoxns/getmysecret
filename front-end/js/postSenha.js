 
/* ---------- ENVIA SENHA PARA O BANCO ---------- */

function submit()
{
  var senha = document.getElementById('senha').innerHTML;
  var tempo = document.getElementById('escolhaTempo').value;

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
    Swal.fire({
      title: 'CARREGANDO...',
      text: 'Seu link está sendo gerado',
      allowOutsideClick: false,
      allowEscapeKey : false,
      didOpen: () => {
        Swal.showLoading()
      }
    })
    fetch('https://h91swzx2ab.execute-api.us-east-1.amazonaws.com/postSenha_V1/', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "senha": senha,
        "ate_quando": tempo
      })
    })
    .then(response => response.json())
    .then(senhaID => {
      sessionStorage.setItem('ID', senhaID.body);
    })
    .then(function() {
      window.location = 'private.html';
    })
  }
}