let telefone = '678';

console.log(
    telefone.padEnd(9, 'x')
);

console.log(
    telefone.padStart(9, 'x')
);

let cartao = '1234123412341234';

let ultimosDigitos = cartao.slice(-4);

let cartaoMascarado = ultimosDigitos.padStart(16, '*');

console.log(
    'Este é o seu cartão? ' + cartaoMascarado
);