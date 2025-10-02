interface Car {
  drive(): void;
}

class Sedan implements Car {
  drive(): void {
    console.log("Driving a sedan");
  }
}

class SUV implements Car {
  drive(): void {
    console.log("Driving a SUV");
  }
}

class CarFactory {
  static createCar(type: "sedan" | "suv"): Car {
    if (type === "sedan") return new Sedan();
    if (type === "suv") return new SUV();
    throw new Error("Invalid car type");
  }
}

const car1 = CarFactory.createCar("sedan");
const car2 = CarFactory.createCar("suv");

car1.drive();
car2.drive();