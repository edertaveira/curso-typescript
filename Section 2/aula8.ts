// Utility Types

// 1. Definição 
// 2. Partial
type UserType = {
    id: number;
    name: string;
    email: string;
    password: string;
}

type UserUpdate = Partial<UserType>;

function updateUser(id: number, user: UserUpdate) {
    console.log(id, user);
}

updateUser(1, { name: 'John' });


// 3. Required
type Options = {
    debug?: boolean;
    log?: boolean;
    cache?: boolean;
}

type OptionsRequired = Required<Options>;

const config: OptionsRequired = { debug: true, log: true, cache: true }

// 4. Pick
type UserPreview = Pick<UserType, 'name' | 'email'>;
const u: UserPreview = { name: 'John', email: 'john@example.com' }

// 5. Omit
type UserWithoutEmail = Omit<UserType, 'email'>;
const userWithoutEmail: UserWithoutEmail = { id: 1, name: 'John', password: '123456' }

// 6. Record
type Role = 'admin' | 'user' | 'guest';
type PermissionsType = Record<Role, string[]>;
const permissions: PermissionsType = {
    admin: ['read', 'write', 'delete'],
    user: ['read', 'write'],
    guest: ['read']
}
type PermissionType2 = Record<Role, boolean>;
const permissions2: PermissionType2 = {
    admin: true,
    user: true,
    guest: true
}

// 7. ReturnType
function getUser() {
    return { id: 1, name: 'John', email: 'john@example.com' }
}

type User2 = ReturnType<typeof getUser>;
// { id: 1, name: 'John', email: 'john@example.com' }

// Criando seus próprios utility types
// Exemplo 1
type MyReturnType<T extends (...args:any) => any> = T extends (...args:any) => infer R ? R : never;

function hello() {
    return "Hello";
}

type A2 = MyReturnType<typeof hello>; // () => string => string