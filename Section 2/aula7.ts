// Union Types - |

type ID = string | number;

function formatId(id: ID) {
    if (typeof id === 'string') {
        return id.toUpperCase();
    }
    return id.toFixed(2);
}

console.log(formatId('123'));
console.log(formatId(123));


// Intersection Types - &
type User = { id: string } & { createAt: Date }
const user: User = { id: '1', createAt: new Date() }
console.log(user);


// Type Narrowing  - typeof, instanceof, in, is
function printId(id: string | number) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(2));
    }
}

printId('usuario');
printId(123);

type Dog = { bark: () => void }
type Cat = { meow: () => void }

function speak(pet: Dog | Cat) {
    if ('bark' in pet) {
        pet.bark();
    } else {
        pet.meow();
    }
}

speak({ bark: () => console.log('bark') });
speak({ meow: () => console.log('meow') });

class HttpError extends Error {
    constructor(message: string) {
        super(message);
    }
}
function handle(e: Error) {
    if (e instanceof HttpError) {
        console.log('HTTP error: ' + e.message);
    } else {
        console.log('Error: ' + e.message);
    }
}

handle(new HttpError("Not Found "));
handle(new Error("Internal Server Error"));

// is 
type Success = { ok: true, data: string}
type Failure = { ok: false, error: string}
type Result = Success | Failure

function isSuccess(value: Result): value is Success {
    return value.ok;
}

function handleResult(result: Result) {
    if (isSuccess(result)) {
        console.log(result.data);
    } else {
        console.log(result.error);
    }
}

handleResult({ ok: true, data: 'Success' });
handleResult({ ok: false, error: 'Error' });

// Discriminated Unions
type Shape = { type: 'circle', radius: number } | { type: 'square', side: number }

function area(shape: Shape) {
    switch (shape.type) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side ** 2;
    }
}

// Conditional Types
type Unbox<T> = T extends Promise<infer U> ? U : T

type A = Unbox<Promise<number>> // number
type B = Unbox<string> // string

//infer => inferir o tipo de dentro da Promise


// Excercício: Crie um função toArray que recebe T | T[] e retorna T[]