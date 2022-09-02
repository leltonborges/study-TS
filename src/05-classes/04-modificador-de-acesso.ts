class Carro {
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

const car1 = new Carro('Ford', 'Ka', 180);
Array(60).fill(0).forEach(() => console.log(car1.acelerar()))
