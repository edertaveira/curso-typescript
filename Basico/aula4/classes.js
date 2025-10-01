var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    // construtor
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    // métodos
    Pessoa.prototype.saudacao = function () {
        return "Ol\u00E1, sou o ".concat(this.nome, " e tenho ").concat(this.idade, " anos");
    };
    return Pessoa;
}());
var pessoa = new Pessoa("João", 7);
console.log(pessoa.saudacao());
// Modificadores de acesso
// public, private, protected
var Animal = /** @class */ (function () {
    function Animal(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    Animal.prototype.fazerSom = function () {
        console.log("".concat(this.nome, " faz um som."));
    };
    Animal.prototype.mostrarIdade = function () {
        console.log("".concat(this.nome, " tem ").concat(this.idade, " anos."));
    };
    Animal.prototype.mostrarTipo = function () {
        console.log("".concat(this.nome, " \u00E9 um ").concat(this.tipo));
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome, idade) {
        return _super.call(this, nome, idade, "Cachorro") || this;
    }
    Cachorro.prototype.fazerSom = function () {
        console.log("".concat(this.nome, " late."));
    };
    Cachorro.prototype.mostrarDetalhes = function () {
        this.mostrarTipo();
    };
    return Cachorro;
}(Animal));
var animal = new Animal("Animal", 5, "Desconhecido");
animal.fazerSom();
animal.mostrarIdade();
var Carro = /** @class */ (function () {
    function Carro(marca) {
        this.marca = marca;
    }
    return Carro;
}());
var carro = new Carro("Toyota");
console.log(carro.marca);
carro.marca = "Honda";
console.log(carro.marca);
