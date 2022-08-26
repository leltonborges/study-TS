const caracteristicas = [ 'motor zetec 1.9', 2020 ];

const [ motor, ano ] = caracteristicas;

console.log(motor);
console.log(ano);

const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristica:{
        fabricado: 'Mande in Japan'
    }
}

// nome: n -> aqui n é alias (apelido)
const { nome: n, preco: p, caracteristica: { fabricado} } = item

console.log(n);
console.log(p);
console.log(fabricado);
