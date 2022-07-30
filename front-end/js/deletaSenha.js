
/* ---------- DELETA SENHA DO BANCO ---------- */

function deletaSenha()  //Cria uma função para deletar o segredo
{
  Swal.fire({           //Dispara um alerta para confirmar se o usuario realmente deseja apagar o segredo
    icon: 'warning',
    title: 'Deseja excluir seu segredo?',
    text: "Não será possível reverter!",
    showCancelButton: true,
    confirmButtonText: 'SIM',
    cancelButtonText: 'NÃO',
    reverseButtons: true,
    confirmButtonColor: '#0897E9',
    iconColor: '#F19F01'
  })
  .then((result) => {
    if (result.isConfirmed) //Se a resposta do alerta for "SIM"
    {
      fetch('https://131wfoo2w3.execute-api.us-east-1.amazonaws.com/deletaSenha_V1/', {   //Executa a função delete na API via Fetch
        method: "DELETE",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"senha": document.getElementById('info').innerHTML})        //Envia o segredo exibido na tela para a API
      })
      Swal.fire({   //Dispara um alerta dizendo que o segredo foi excluído
        icon: 'success',
        title: 'Excluído!',
        text: 'Seu segredo foi excluído',
        confirmButtonColor: '#0897E9',
      })
      .then(function(){                 //Após o usuario clicar em "OK"
        window.location = 'index.html'  //O usuario é redirecionado para a pagina inicial
      })
    }
    else if (result.dismiss === Swal.DismissReason.cancel)  //Porém, se a resposta para o alerta for "NÃO"
    {
      Swal.fire({ //É disparado um alerta dizendo que o segredo continua no banco
        icon: 'error',
        title: 'Cancelado',
        text: 'Seu segredo continua seguro!',
        confirmButtonColor: '#0897E9'
      })
    }
  })
}