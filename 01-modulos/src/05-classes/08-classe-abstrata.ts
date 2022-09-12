abstract class Calculo {
    protected result: number = 0;

    abstract executar(...nums: number[]): void;

    getResult(): number {
        return this.result;
    }
}

class Soma extends Calculo {
    executar(...nums: number[]): void {
        this.result = nums.reduce((total, indice) => total + indice);
    }
}

class Mult extends Calculo {
    executar(...nums: number[]): void {
        this.result = nums.reduce((total, indice) => total * indice);
    }
}

let c1 = new Soma()
c1.executar(2, 5, 3, 2);
console.log(c1);
c1 = new Mult()
c1.executar(2, 5, 3, 2);
console.log(c1);
