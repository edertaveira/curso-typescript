// Functions
function soma(x: number, y: number): number {
  return x + y;
}
console.log(soma(1, 2));

function printName(first: string, last?: string): string {
  return first + " " + (last ?? "");
}
console.log(printName("Eder"));
console.log(printName("Eder", "Taveira"));

// Funções Anônimas
const substracao = function (x: number, y: number) {
  return x - y;
};

const array = ["Eder", "João", "Maria", "Divina"];
const result = array.find(function (item: string): boolean {
  return item === "Divina";
});
console.log(result);

// Arrow Functions
const res = array.filter((item: string): boolean => item.includes("r"));
console.log(res);