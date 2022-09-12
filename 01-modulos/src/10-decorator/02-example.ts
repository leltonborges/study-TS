type Construtor = { new(...args: any[]): {} };

function LogarObjeto(constructor: Construtor) {
    return class extends constructor {
        constructor(...args: any[]) {
            console.log("Antes do super");
            super(...args);
            console.log("Depois do super");
        }
    }
}

@LogarObjeto
class Vehicle{
    constructor(){
        console.log("Default construtor Vehicle");   
    }
}

console.log(new Vehicle());
console.log(new Vehicle());
console.log(new Vehicle());