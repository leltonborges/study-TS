
interface Motorcycle {
    imprimir?(): void;
}

function imprimivel(constructor: Function) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    }
}

@imprimivel
class Motorcycle {
    constructor() {
        console.log("Default construtor Motorcycle");
    }
}

const motor1 = new Motorcycle();
motor1.imprimir &&  motor1.imprimir();