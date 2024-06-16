// Functions
function soma(x, y) {
    return x + y;
}
console.log(soma(1, 2));
function printName(first, last) {
    return first + " " + (last !== null && last !== void 0 ? last : "");
}
console.log(printName("Eder"));
console.log(printName("Eder", "Taveira"));
// Funções Anônimas
var substracao = function (x, y) {
    return x - y;
};
var array = ["Eder", "João", "Maria", "Divina"];
var result = array.find(function (item) {
    return item === "Divina";
});
console.log(result);
// Arrow Functions
var res = array.filter(function (item) { return item.includes("r"); });
console.log(res);
