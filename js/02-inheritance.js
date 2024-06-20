/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Rectangle {
  constructor(width, height) {
    this.name = "Rectangle";
    this.width = width;
    this.height = height;
  }

  getInfo() {
    console.log(
      `Name: ${this.name}\nWidth: ${this.width}px\nHeight: ${this.height}px`
    );
  }

  calculatePerimetr() {
    return this.width * 2 + this.height * 2;
  }

  calculateArea() {
    return this.height * this.width;
  }
}

// extends - оператор для наслідування класів, фактично ви створюєте новий клас та в якості його прототипу запусуєте клас батька
class Square extends Rectangle {
  constructor(length) {
    // super - фукнція, яку обовʼязково треба викликати під час наслідування класів, ця фукнція викликає конструктор батьківсього класу (класу, від якого ви наслідуєтесь) для ініціалізації полів
    super(length, length);
    this.name = "Square";
  }
}

console.dir(Square);

const rec = new Rectangle(5, 10);
rec.getInfo();

console.log(rec.calculateArea());
console.log(rec.calculatePerimetr());

const square = new Square(5);
console.log(square);
square.getInfo();

console.log(square.calculateArea());
console.log(square.calculatePerimetr());
