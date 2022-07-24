function exibeConteudo() {
  document.getElementById('conteudo').style.display = 'block';
  document.getElementById('submit').style.display = 'none';
}

/* ---------- MOSTRA SENHA ---------- */

senha = sessionStorage.getItem('senha');

fetch('https://te1xj5xes3.execute-api.us-east-1.amazonaws.com/getSenha_V1/').then(response => {
  return response.json()
}).then(data => {

console.log(data)

puxaDado = data.filter(data => data.senha === senha);
document.getElementById('info').innerHTML = puxaDado[0].senha;
})