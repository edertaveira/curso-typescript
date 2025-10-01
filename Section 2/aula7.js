// Union Types - |
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
function formatId(id) {
    if (typeof id === 'string') {
        return id.toUpperCase();
    }
    return id.toFixed(2);
}
console.log(formatId('123'));
console.log(formatId(123));
var user = { id: '1', createAt: new Date() };
console.log(user);
// Type Narrowing  - typeof, instanceof, in
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
printId('usuario');
printId(123);
function speak(pet) {
    if ('bark' in pet) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
speak({ bark: function () { return console.log('bark'); } });
speak({ meow: function () { return console.log('meow'); } });
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(message) {
        return _super.call(this, message) || this;
    }
    return HttpError;
}(Error));
function handle(e) {
    if (e instanceof HttpError) {
        console.log('HTTP error: ' + e.message);
    }
    else {
        console.log('Error: ' + e.message);
    }
}
handle(new HttpError("Not Found "));
handle(new Error("Internal Server Error"));
function isSuccess(value) {
    return value.ok;
}
function handleResult(result) {
    if (isSuccess(result)) {
        console.log(result.data);
    }
    else {
        console.log(result.error);
    }
}
handleResult({ ok: true, data: 'Success' });
handleResult({ ok: false, error: 'Error' });
