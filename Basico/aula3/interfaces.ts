
// Objects
let usuario: { nome: string, age: number };
usuario = { nome: "Maria", age: 11}


// Interface
interface Pessoa {
    readonly nascimento: string
}
interface Pessoa {
    primeiroNome: string,
    ultimoNome?: string,
    idade: number
}

interface Funcionario extends Pessoa {
    salario: number;
}

class Diretor implements Funcionario {
    idade = 21;
    primeiroNome = "Maria";
    salario = 1000;
    nascimento = "05/06/2003"
}



// type
type Pontos = {
    x: number,
    y: number
}

type Dimensoes = { largura: number, altura: number }
type Retangulo = Pontos & Dimensoes;

const retangulo: Retangulo = {
    altura: 100,
    largura: 100,
    x: 0,
    y: 0
}