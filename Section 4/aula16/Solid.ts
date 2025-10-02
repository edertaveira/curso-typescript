/**
 *
 * S -> Single Responsibility Principle
 * O -> Open/Closed Principle
 * L -> Liskov Substitution Principle
 * I -> Interface Segregation Principle
 * D -> Dependency Inversion Principle
 *
 *
 */

// Single Responsibility Principle

class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  constructor(private users: User[]) {}
}

// Open/Closed Principle

class User2 {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

// Liskov Substitution Principle

class User3 {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

class User4 extends User3 {
  password: string;

  constructor(name: string, email: string, password: string) {
    super(name, email);
    this.password = password;
  }
}

function login(user: User3) {
  console.log(user.name, user.email);
}

login(new User4("John", "john@example.com", "123456"));

// Interface Segregation Principle

interface Aves {
  andar(): void;
}

interface Passaros {
  voar(): void;
}

class Pinguim implements Aves {
  andar(): void {
    console.log("Pinguim andando");
  }
}


// Dependency Inversion Principle

interface Database {
  connect(): void;
}

class MySQLDatabase implements Database {
  connect(): void {
    console.log("Conectando ao MySQL");
  }
}

class PostgreSQLDatabase implements Database {
  connect(): void {
    console.log("Conectando ao PostgreSQL");
  }
}

class MongoDBDatabase implements Database {
  connect(): void {
    console.log("Conectando ao MongoDB");
  }
}

function connectToDatabase(database: Database) {
  database.connect();
}

connectToDatabase(new MySQLDatabase());
connectToDatabase(new PostgreSQLDatabase());
connectToDatabase(new MongoDBDatabase());