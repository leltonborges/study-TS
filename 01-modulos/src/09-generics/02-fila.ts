class Fila<T>{
    private dados: Array<T> = new Array;

    constructor(...args: T[]) {
        this.dados = args;
    }

    entrar(field: T) {
        this.dados.push(field);
    }

    proximo(): T | null {
        const first = this.dados[ 0 ];
        this.dados.splice(0, 1);
        return first ?? null;
    }

    imprimir() {
        console.log(this.dados);
    }
}

const fila = new Fila<string>('Ana', 'Bia', 'Joana', 'Bob', 'Alex');
fila.imprimir();
fila.entrar('Marcos')
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
