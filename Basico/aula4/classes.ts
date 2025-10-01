class Pessoa {
  // propriedades
  nome: string;
  idade: number;

  // construtor
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  // métodos
  saudacao(): string {
    return `Olá, sou o ${this.nome} e tenho ${this.idade} anos`;
  }
}

const pessoa = new Pessoa("João", 7);
console.log(pessoa.saudacao());

// Modificadores de acesso
// public, private, protected

class Animal {
  public nome: string; // acessível de qualquer lugar
  private idade: number; // acessível somente dentro da classe Animal
  protected tipo: string; // acessível dentro da classe animal e em suas subclasses

  constructor(nome: string, idade: number, tipo: string) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  public fazerSom(): void {
    console.log(`${this.nome} faz um som.`);
  }

  public mostrarIdade(): void {
    console.log(`${this.nome} tem ${this.idade} anos.`);
  }

  protected mostrarTipo(): void {
    console.log(`${this.nome} é um ${this.tipo}`);
  }
}

class Cachorro extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade, "Cachorro");
  }

  public fazerSom(): void {
    console.log(`${this.nome} late.`);
  }

  public mostrarDetalhes(): void {
    this.mostrarTipo();
  }
}

const animal = new Animal("Animal", 5, "Desconhecido");
animal.fazerSom();
animal.mostrarIdade();



class Carro {
    readonly marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }
}

const carro = new Carro("Toyota");
console.log(carro.marca);
// carro.marca = "Honda"; // Erro pois o atributo é readonly