let nome: string = 'joão';
console.log(nome);

let idade: number = 15;
console.log(idade);

let possuiHobbies: boolean = false;
console.log(possuiHobbies);

let tasks: string[] = [ 'Cozinhar', 'Soccer', 'Pictures' ];
console.log(tasks);
console.log(typeof tasks);

// Tuplas
let address: [ string, number, null | string ] = [ 'Av Principal', 99, null ];
console.log(address);

address = [ 'Rua Oliveira', 4, 'Bloco 43' ];
console.log(address);

enum Cor {Cinza, Verde, Azul}

let minhaCor: Cor = Cor.Azul;
console.log(minhaCor);

let calc: (numA: number, numB: number) => boolean;

type Produco =  {
    qtd: number,
    valorUnitario: number,
    total?: (produto: Produco) => number;
}

type Produtos = Produco[];

let mercadorias: Produtos = [{qtd: 3, valorUnitario: 4}];
console.log(mercadorias);

