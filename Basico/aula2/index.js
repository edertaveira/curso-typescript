// string, number, boolean
var nome = "Eder Taveira";
var numero = 2;
var verdadeiro = true;
// Enum
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Blue"] = "blue";
    Color["Green"] = "green";
})(Color || (Color = {}));
console.log(Color.Blue);
// Arrays e Tuplas
var list = [1, 2, 3];
var tuple = [1, "hello"];
console.log(list, tuple);
