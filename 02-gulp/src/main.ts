import Livro from "./modelo/livro";
import $ from 'jquery';

const livro = new Livro('Clean coder', 108, 0.10);

$('body').append(`<h1>${ livro.nome }</h1>`)
$('body').append(`<h2>${ livro.precoComDesconto() }</h2>`)

console.log(livro.precoComDesconto());