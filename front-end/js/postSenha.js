var senhaCheck = document.getElementById('senhaDiv');
var textoCheck = document.getElementById('textoDiv');

var radioSenha = document.getElementById('radioSenha');
var radioTexto = document.getElementById('radioTexto');

senhaCheck.style.display = 'block';
textoCheck.style.display = 'none';

/* ---------- ENVIA SENHA OU TEXTO PARA O BANCO ---------- */

function senhaRadio()
{
  senhaCheck.style.display = 'block';
  textoCheck.style.display = 'none';
}

function textoRadio()
{
  senhaCheck.style.display = 'none';
  textoCheck.style.display = 'block';
}

function submit()
{
  var texto = document.getElementById('texto').value;
  var senha = document.getElementById('senha').innerHTML;
  var tempo = document.getElementById('escolhaTempo').value;

  if(radioSenha.checked)
  {
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
  else if (radioTexto.checked)
  {
    if (!texto)
    {
      Swal.fire({
        icon: 'error',
        title: 'NÃO HÁ TEXTO',
        text: 'Você deve escrever algo antes de prosseguir!',
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
          "senha": texto,
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
}