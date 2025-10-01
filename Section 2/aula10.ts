// Mapped Types

type User4 = {
  id: number;
  name: string;
  email: string;
};

type OptionalUser = {
  [K in keyof User4]?: User4[K];
};

type ReadonlyUser = {
  [K in keyof User4]: Readonly<User4[K]>;
};

type Stringfy<T> = {
  [K in keyof T]: string;
};

type UserStringfy = Stringfy<User4>;
// { id: string, name: string, email: string }

// Index Signatures
type Scores = {
  [key: string]: number;
};
const s: Scores = {
    math: 10,
    english: 20,
    history: 30
}


// Diferença entre Index Signature e Mapped types

// Index Signature -> Define um padrão para todas as chaves
// Mapped types -> Gera um novo tipo a partir de chaves conhecidas (keyof)

type Dictionary = { 
    [key: string]: string;
}

type Fixed = { 
    [K in "a" | "b" | "c"]: string;
}