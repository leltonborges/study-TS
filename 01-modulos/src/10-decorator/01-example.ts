@logarClasseSe(true)
@decorator(1, 4)
class EletrodoDomestico {
    constructor() {
        console.log("Novo");
    }
}

function logarClasse(construtor: Function) {
    console.log(`Decoretor:: ${ construtor }`);
}
function decoratorVazio(_: Function) { }

function logarClasseSe(value: boolean) {
    return value ? logarClasse : decoratorVazio;
}

function decorator(a: number, b: number) {
    return function (constructor: Function): void {
        console.log(`a + b = ${ a + b }, ${ constructor.name }`);
    }
}

console.log(new EletrodoDomestico());
console.log(new EletrodoDomestico());
console.log(new EletrodoDomestico());
