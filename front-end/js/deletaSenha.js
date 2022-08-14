
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
      Swal.fire({
        title: 'CARREGANDO...',
        allowOutsideClick: false,
        allowEscapeKey : false,
        didOpen: () => {
          Swal.showLoading()
        }
      })

      let url = window.location.href;
      url_id = url.substring(url.indexOf("?") + 1);

      fetch('https://131wfoo2w3.execute-api.us-east-1.amazonaws.com/deleteSenha_V1/', {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"id_senha": url_id})
      })
      .then(function() {
        Swal.fire({
          icon: 'success',
          title: 'EXCLUÍDO!',
          text: 'O seu segredo foi excluído com sucesso',
          confirmButtonColor: '#0897E9',
          allowOutsideClick: false,
          allowEscapeKey : false,
        })
        .then(function() {
          location.reload();
        })
      })
    }
    else if (result.dismiss === Swal.DismissReason.cancel)
    {
      Swal.fire({
        icon: 'error',
        title: 'Cancelado',
        text: 'O seu segredo continua seguro!',
        confirmButtonColor: '#0897E9'
      })
    }
  })
}