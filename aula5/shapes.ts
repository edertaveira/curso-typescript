export interface Shape {
  draw(): void;
}

export class Circle implements Shape {
  draw(): void {
    console.log("Drawing circle.");
  }
}


