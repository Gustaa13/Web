let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

let paraString = lista.toString();
console.log(paraString);

let paraString2 = lista.join(', ');
console.log(paraString2);

let posicaoString = lista.indexOf('Corante');
console.log(posicaoString);

lista.pop();
let listaSemUltimo = lista;
console.log(listaSemUltimo);

lista.push('Massa');

lista.shift();
let listaSemPrimeiro = lista;
console.log(listaSemPrimeiro);

lista.splice(2, 1); 
console.log(lista);

let lista2 = ['Prato', 'Liquidificador', 'Forno'];

let listasJuntas = lista.concat(lista2);
console.log(listasJuntas);

listasJuntas.sort();
console.log(listasJuntas);

listasJuntas.reverse();
console.log(listasJuntas);


