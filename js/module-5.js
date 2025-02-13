// Car - це конструктор - визначає функцію-конструктор для створення об'єктів
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
  
  // Додавання методу до прототипу конструктора Car - метод буде доступний лише для екземплярів, створених за допомогою цього конструктора.
  Car.prototype.goodEvening = function(args) {
      return `Bad ${args}`;
  };
  
  const car1 = new Car("Tesla", "Model S", 2020);
  const car2 = Object.assign(new Car(), car1, carNewParams);
  const car3 = {...car2}; // spread (...) створює поверхневу копію об'єкта, копіюючи лише властивості та методи, які безпосередньо належать об'єкту
  
  console.log(car1.greetings(), "world!"); // Good world!
  console.log(car1.goodEvening("time traveler")); // Bad time traveler
  console.log(car2.greetings()); // Ugly car 
  
  console.log(car3.greetings()); // Ugly car - тобто Spread копіює всі властивості та методи, які безпосередньо належать об'єкту car2, але не прототипи
  
  // console.log(car3.goodEvening()); // error `car3.goodEvening is not a function` - Spread не копіює прототипи об'єкту

  // console.log(Car.greetings("world")); // error - метод, доданий до прототипу через Car.prototype.greetings, доступний лише для екземплярів конструктора, а не для самого конструктора.