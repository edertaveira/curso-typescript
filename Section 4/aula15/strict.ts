function greet(name: string | null) {
  return "Olá " + name?.toUpperCase();
}

let user: string | null = null;
console.log(greet(user)); // ERRO: 'null' não é 'string'
