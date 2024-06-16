// Generics
function printAny(arg) {
    return arg;
}
var output1 = printAny("Hello Typescript");
var output2 = printAny(100);
console.log(output1, output2);
// Union Types
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected number or string.");
}
console.log(padLeft("Hello", 5));
console.log(padLeft("Hello", "####"));
