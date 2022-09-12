
function congelar(alvo: any, nomePropriedade: string, descritor: PropertyDescriptor) {
    console.log("Alvo:: ", alvo);
    console.log("Property:: ", nomePropriedade);
    descritor.writable = false;
}

function naoNegativo(alvo: any, nomePropriedade: string) {
    delete alvo[ nomePropriedade ]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function (): any {
            return alvo[ `_${ nomePropriedade }` ];
        },

        set: function (value: any): void {
            if (value < 0) throw new Error('Saldo inválido');
            else alvo[ `_${ nomePropriedade }` ] = value;
        }
    })
}

class ContaCorrente {
    @naoNegativo
    private _saldo: number;

    constructor(saldo: number) {
        this._saldo = saldo;
    }

    @congelar
    sacar(@paramInfo valor: number) {
        // if (valor <= this._saldo) {
            this._saldo -= valor;
            return true;
        // } else {
        //     return false;
        // }
    }

    @congelar
    getSaldo() {
        return this._saldo;
    }
}

const cc = new ContaCorrente(1000);
cc.sacar(405);
cc.sacar(-405);
console.log(cc.getSaldo());
// cc.getSaldo = function(){
//     return this['_saldo'] + 7000;
// }
console.log(cc.getSaldo());

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number){
    console.log(`Alvo:: ${alvo}`);
    console.log(`metodo:: ${nomeMetodo}`);
    console.log(`indice:: ${indiceParam}`);
}
