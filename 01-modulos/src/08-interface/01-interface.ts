type People = { nome: string }
interface Humano {
    nome: string;
    idade?: number;
    [ prop: string ]: any //Propriedade de nome dinâmico
}

function saudarComOla(pessoa: People): void {
    console.log(`Olá, ${ pessoa?.nome }`);
}

function mudarNome(pessoa: Humano): void {
    pessoa.nome = 'Joana';
}

const pessoa = {
    nome: 'João',
    idade: 17
}

saudarComOla(pessoa);
mudarNome(pessoa)
saudarComOla(pessoa);