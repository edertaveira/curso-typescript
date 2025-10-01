// Tipos Condicionais e Inferência Avançada.

// extends, ?, :, infer

// O que são tipos Condicionais?
// if/else para tipos

type IsString<T> = T extends string ? true : false;
type A3 = IsString<string>; // true
type B3 = IsString<number>; // false

// Exemplo 2
type IsNumber<T> = T extends number ? true : false;
type A4 = IsNumber<string>; // false
type B4 = IsNumber<number>; // true

// Exemplo 3
type IsArray<T> = T extends any[] ? true : false;
type A5 = IsArray<string>; // false
type B5 = IsArray<number[]>; // true


// O poder do infer
type Unbox2<T> = T extends Promise<infer U> ? U : T;

// Extraindo o tipo de retorno de uma função
type MyReturnType2<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

function hello2() {
    return "Hello"
}

type A6 = MyReturnType2<typeof hello2>; // string

// Extraindo os argumentos de uma função
type MyParameters<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never;

function hello3(name: string, age: number) {
    return "Hello"
}

type A7 = MyParameters<typeof hello3>; // [string, number]


// Distributividade dos Condicionais

type ToPromise<T> = T extends any ? Promise<T> : never;
type A8 = ToPromise<string | number>; // Promise<string> | Promise<number>

type ToPromiseStrict<T> = [T] extends [any] ? Promise<T> : never;
type A9 = ToPromiseStrict<string | number>; // Promise<string | number>

// Uso Prático 

async function getUser2() {
    return { id: 1, name: "John", email: "john@example.com" }
}

type User3 = Awaited<ReturnType<typeof getUser>>; // { id: 1, name: "John", email: "john@example.com" }

// Awaited
type A10 = Awaited<Promise<number>>  // -> number
type A11 = Awaited<Promise<Promise<number>>>  // -> number
type A12 = Awaited<string> // -> string