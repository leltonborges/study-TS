const somar = function (n1: number, n2: number): number {
    return n1 + n2;
};
console.log(somar(4, 1));

const subtrair = (n1: number, n2: number) => n1 - n2;
console.log(subtrair(4, 1));


const saudacao = () => console.log('Hell!');
saudacao();

const falarCom = (pessoa: string) => console.log(`Ola! ${ pessoa }`);

falarCom('Bob');

// this

// function normalComThis(){
//     console.log(this);
// }

// normalComThis()

// const normalComThisEspecial = normalComThis.bind('d');
// normalComThisEspecial()

// const arrowWithThis = () => console.log(this);