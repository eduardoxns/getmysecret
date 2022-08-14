
/* ---------- GERA LINK ---------- */

ID = sessionStorage.getItem('ID');

let url = window.location.href;
let urlID = url.slice(0, url.lastIndexOf('/'));

var a = document.createElement('a');
var linkText = document.createTextNode(urlID + '/secret.html?' + ID);

a.appendChild(linkText);
a.href = `secret.html?${ID}`;

document.getElementById('link').appendChild(a);