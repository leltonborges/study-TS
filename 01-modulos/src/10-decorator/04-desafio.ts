type Usuario = { nome: string, email: string, admin: boolean }
type ConstrutorUser = { new(user: Usuario): void };

const alex: Usuario = { nome: 'Alex', email: 'alex@desafio.com', admin: false };
const ana: Usuario = { nome: 'Ana', email: 'ana@desafio.com', admin: true };


function perfilAdmin<T extends ConstrutorUser>(_constructor: T) {
    console.log("Construtor ", _constructor);

    return class extends MudancaAdministrativa {
        constructor(user: Usuario) {
            super(user);
            if (!user.admin) throw new Error('Usuário sem perfil');
        }
    }

}

@perfilAdmin
class MudancaAdministrativa {
    constructor(protected user: Usuario) { }
    critico(): void {
        console.log("Algo critico foi alterado!!");
    }
}

// const m1 = new MudancaAdministrativa(alex)
// m1.critico && m1.critico()
const m2 = new MudancaAdministrativa(ana)
m2.critico()
