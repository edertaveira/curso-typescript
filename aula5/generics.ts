
// Generics
function printAny<T>(arg: T): T {
    return arg;
}

let output1 = printAny<string>("Hello Typescript");
let output2 = printAny<number>(100);
console.log(output1, output2);

// Union Types
function padLeft(value: string, padding: number | string) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected number or string.")
}

console.log(padLeft("Hello", 5))
console.log(padLeft("Hello", "####"));


// Intersection Types
interface Pessoa {
    nome: string;
    idade: number;
}

interface Funcionario {
    id: number;
    departamento: string;
}

type PessoaFuncionario = Pessoa & Funcionario

function printFuncionario(funcionario: PessoaFuncionario) {
    console.log(funcionario);
}


// Type Gards
function isString(value: any): value is string {
    return typeof value === "string"
}

// Type Assertions
let someValue: any = "TESTE";
let srfLength: number = (someValue as string).length;