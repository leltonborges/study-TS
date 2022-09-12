class Data {
    private _dia: number;
    private _mes: number;
    private _ano: number;

    constructor(dia: number = new Date().getDay(), mes: number = new Date().getMonth(), ano: number= new Date().getFullYear()) {
        this._dia = dia;
        this._ano = ano;
        this._mes = mes;
    }

    public get dia(): number {
        return this._dia;
    }
    public set dia(value: number) {
        this._dia = value;
    }

    public get mes(): number {
        return this._mes;
    }
    public set mes(value: number) {
        this._mes = value;
    }

    public get ano(): number {
        return this._ano;
    }
    public set ano(value: number) {
        this._ano = value;
    }
}

const aniversario = new Data(3, 5, 2015);
console.log(aniversario);
const aniversario2 = new Data();
console.log(aniversario2);
