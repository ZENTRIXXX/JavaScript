// 1
let user = {
  name: "Azizbek",
  showName: function () {
    console.log(this.name);
  }
};
user.showName();

// 2
let person = {
  age: 13,
  showAge: function () {
    console.log(this.age);
  }
};
person.showAge();

// 3
let number = {
  a: 10,
  b: 5,
  sum: function () {
    console.log(this.a + this.b);
  }
};
number.sum();

// 4
let city = {
  name: "Namangan",
  showCity: function () {
    console.log(this.name);
  }
};
city.showCity();

// 5
let year = {
  year: 2012,
  showyear: function () {
    console.log(this.year);
  }
};
year.showyear();


// ===== Constructor function =====

// 1
function User(name, age) {
  this.name = name;
  this.age = age;
}
let user1 = new User("Ali", 14);
console.log(user1.name);

// 2
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}
let user2 = new Student("Aziz", 7);
console.log(user2.grade);

// 3
function Phone(model, price) {
  this.model = model;
  this.price = price;
}
let phone1 = new Phone("Redmi", 200);
console.log(phone1.model);

// 4
function Car(name, color) {
  this.name = name;
  this.color = color;
}
let car1 = new Car("Nexia", "Oq");
console.log(car1.color);

// 5
function Book(title, author) {
  this.title = title;
  this.author = author;
}
let book1 = new Book("Alpomish", "Xalq og‘zaki ijodi");
console.log(book1.title);
