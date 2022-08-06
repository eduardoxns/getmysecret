
/* ---------- DELETA SENHA DO BANCO ---------- */

function deletaSenha()
{
  Swal.fire({
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
    if (result.isConfirmed)
    {
      let url = window.location.href;
      url_id = url.substring(url.indexOf("?") + 1);

      fetch('https://131wfoo2w3.execute-api.us-east-1.amazonaws.com/deletaSenha_V1/', {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"id_senha": url_id})
      })
      Swal.fire({
        icon: 'success',
        title: 'Excluído!',
        text: 'Seu segredo foi excluído',
        confirmButtonColor: '#0897E9',
      })
      .then(function()  {
        window.location = 'index.html'
      })
    }
    else if (result.dismiss === Swal.DismissReason.cancel)
    {
      Swal.fire({
        icon: 'error',
        title: 'Cancelado',
        text: 'Seu segredo continua seguro!',
        confirmButtonColor: '#0897E9'
      })
    }
  })
}