// https://jsonplaceholder.typicode.com/posts

async function clicou(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    alert(`Título da requisição: ${json[0].title}`);

    alert("Clicou!");
}

function clicou2(){
    alert("OPA");
}

document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#botao').addEventListener('click', clicou2);

