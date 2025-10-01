// string, number, boolean
let nome: string = "Eder Taveira";
let numero: number = 2;
let verdadeiro: boolean = true;

// Enum
enum Color {
  Red = "red",
  Blue = "blue",
  Green = "green",
}
console.log(Color.Blue);

// Arrays e Tuplas
let list: number[] = [1, 2, 3];
let tuple: [number, string] = [1, "hello"];
console.log(list, tuple);

// Any e Unknown
let notSure: any = "teste";
notSure = 1;

let value: unknown = "Typescript";
if (typeof value === "string") {
    console.log(value.toUpperCase())
}