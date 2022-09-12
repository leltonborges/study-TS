class Car {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 200
    ) { }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValidade = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

        if (velocidadeValidade) this.velocidadeAtual = novaVelocidade;
        else this.velocidadeAtual = delta >= 0 ? this.velocidadeMaxima : 0;

        return this.velocidadeAtual;
    }

    public acelerar(): number {
        return this.alterarVelocidade(5);
    }

    public frear(): number {
        return this.alterarVelocidade(-5);
    }
}

class Ferrari extends Car {
    constructor(modelo: string, velocidadeMaxima: number) {
        super(modelo, 'Ferrari', velocidadeMaxima);
    }
    public acelerar(): number {
        return this.alterarVelocidade(20);
    }

    public frear(): number {
        return this.alterarVelocidade(-15);
    }
}

const f40 = new Ferrari('F40', 320);
console.log(`${ f40.marca } ${ f40.modelo }`);
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40.frear());
