class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0
    ) { }

    public precoTotalProduto(): number {
        return this.preco * (1 - this.desconto);
    }
}

const prod1 = new Produto('Caneta big preta', 4.1);
const prod2 = new Produto('Geladeira Frost free', 4649.99,0.08);

console.log(prod2.precoTotalProduto());
