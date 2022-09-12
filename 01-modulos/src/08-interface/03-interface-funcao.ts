interface FuncaoCalculo {
    (num1: number, num2: number): number;
}

let potencia: FuncaoCalculo;
potencia = (base: number, exp: number) => base ** exp;


console.log(potencia(3, 10));
