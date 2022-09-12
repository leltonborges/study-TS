function echo<T>(object: T): T{
    return object;
}


console.log(echo('João').length);
console.log(echo<number>(23));

const avaliacoes: Array<number> = [ 10, 9.3, 7.9 ];
console.log(avaliacoes);

abstract class OperacaoFunction<T, U, R> {
    constructor(
        protected operator1: T,
        protected operator2: U
    ){ }

    abstract executar(): R
}

abstract class OperacaoBinaria<T, R> extends OperacaoFunction<T, T, R> {
    constructor(
        protected operator1: T,
        protected operator2: T
    ){ super(operator1, operator2); }
}

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number{
        return this.operator1 + this.operator2;
    }
}

class DateDiferenca extends OperacaoBinaria<Date, number> {
    executar(): number{
        const time = Math.abs(this.operator1.getTime() - this.operator2.getTime());
        const dias = 1000 * 60 * 60 * 24;
        return Math.ceil(time / dias);
    }
}

console.log(new SomaBinaria(4, 1).executar());
console.log(new DateDiferenca(new Date(2022, 5, 4), new Date(2022, 5, 1)).executar());
console.log(new Date(Date.parse("12/25/2002")));


