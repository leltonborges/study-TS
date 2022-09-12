class Aviao {
    public readonly modelo: string;

    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo;
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC');
console.log(turboHelice);
