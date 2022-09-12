class DataEsperta {

    constructor(
        public dia: number = new Date().getDay(), 
        public mes: number = new Date().getMonth(), 
        public ano: number = new Date().getFullYear()) {}

    
}

const aniversarioEsperto = new DataEsperta(3, 5, 2015);
console.log(aniversarioEsperto);
const aniversario2Esperto = new DataEsperta();
console.log(aniversario2Esperto);