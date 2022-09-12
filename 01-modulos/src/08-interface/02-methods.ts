interface Validade {
    saudar(sobrenome: string): void;
}

class Client implements Validade {
    saudar(sobrenome: string): void {
        console.log(`Ola, ${ sobrenome }`);
    }
}

