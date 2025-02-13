// Car - це конструктор
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.greetings = function(args) {
      return `Good`;
    }
  }
  
  // carNewParams - це об'єкт, який не є прототипом
  const carNewParams = {
    make: "DeLorean",
    model: "DMC-12",
    year: 1981,
    greetings: function() {
      return `Ugly car`;    
    }
  }
  
  // Додавання методу до прототипу конструктора Car
  Car.prototype.goodEvening = function(args) {
      return `Bad ${args}`;
  };
  
  const car1 = new Car("Tesla", "Model S", 2020);
  const car2 = Object.assign(new Car(), car1, carNewParams);
  const car3 = {...car2} // Spread не копіює прототипи об'єкту

  console.log(car1.greetings(), "world!"); // Good world!
  console.log(car1.goodEvening("time traveler")); // Bad time traveler
  console.log(car2.greetings()); // Ugly car 
  
  // console.log(car3.goodEvening()); // car3.goodEvening is not a function
  // console.log(Car.greetings("world")); // error - метод, доданий до прототипу через Car.prototype.greetings, доступний лише для екземплярів конструктора, а не для самого конструктора.