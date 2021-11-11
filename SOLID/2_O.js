//  Open–Closed Principle

/**
 *  O in SOLID means:
 *  ENG: "Software entities ... should be open for extension, but closed for modification."
 *  UA: Програмні сутності повинні бути відкритими для розширення, але закритими для змін.
 *  Розширення певного класу/інтерфейсу може здійснюватись через його успадкування.
 *  **/

// good case to add a parent, to which we will add new extentions

class Shape {
    area() {
        throw new Error('Area method should be implemented.');
    }
}

// bad case without extends

class Square  extends Shape{
    constructor(size) {
        super()
        this.type = 'square';
        this.size = size;
    }

    // Added area()
    area() {
        return this.size ** 2;
    }
}

// We need do add another shape Rectangle. O/C principle is broken when we need to change sum function every time.
class Rect extends Shape{
    constructor(width, height) {
        super();
        this.type = 'square';
        this.width = width;
        this.height = height;
    }

    // Added area()
    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape{
    constructor(radius) {
        super();
        this.type = 'circle';
        this.radius = radius;
    }
    // Added area()
    area() {
        return (this.radius ** 2) * Math.PI;
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes;
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            if(shape.type === 'circle') {
                acc += (shape.radius ** 2) * Math.PI;
            } else if (shape.type === 'square') {
                acc += shape.size ** 2;
            }
            return acc;
        }, 0);
    }

}

const calc = new AreaCalculator([
    new Square(5),
    new Square(2),
    new Circle(3),
    new Square(1),
    new Circle(6)
]);

console.log(calc.sum());
