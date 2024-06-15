let person={
    city:'London',
    calculateAge:function(){
       return new Date().getFullYear();

    },
    greet:function(){return 'Have a nice day'}
}

let john = Object.create(person);

console.log('john',john);

// Person objects methods showed in john prototype

console.log('greet',john.greet());

// set name  property to john

john.name='john';

console.log('john',john);

console.log(typeof new Object());

// mozilla

const personn = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(personn);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  me.printIntroduction();
  // Expected output: "My name is Matthew. Am I human? true"


  // 222
  //Classical inheritance with Object.create()
  // Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
  }
  
  // superclass method
  Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
  };
  
  // Rectangle - subclass
  function Rectangle() {
    Shape.call(this); // call super constructor.
  }
  
  // subclass extends superclass
  Rectangle.prototype = Object.create(Shape.prototype, {
    // If you don't set Rectangle.prototype.constructor to Rectangle,
    // it will take the prototype.constructor of Shape (parent).
    // To avoid that, we set the prototype.constructor to Rectangle (child).
    constructor: {
      value: Rectangle,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  
  const rect = new Rectangle();
  
  console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
  console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
  rect.move(1, 1); // Logs 'Shape moved.'
  

  ///333
//   o = {};
//   // Is equivalent to:
//   o = Object.create(Object.prototype);
  
  p = Object.create(Object.prototype, {
    // foo is a regular data property
    foo: {
      writable: true,
      configurable: true,
      value: "hello",
    },
    // bar is an accessor property
    bar: {
      configurable: false,
      get() {
        return 10;
      },
      set(value) {
        console.log("Setting `o.bar` to", value);
      },
    },
  });
  console.log(p);
  // Create a new object whose prototype is a new, empty
  // object and add a single property 'p', with value 42.
  o = Object.create({}, { p: { value: 42 } });
  console.log(o);

  
