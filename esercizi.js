class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compareAge(x) {
    if (this.age > x.age) {
      return this.firstName + " è più vecchio di " + x.firstName;
    } else if (this.age < x.age) {
      return x.firstName + " è più vecchio di " + this.firstName;
    } else return "hanno la stessa età";
  }
}

const daniele = new User("Daniele", "Sanzari", "28", "Roma");
console.log(daniele);

const pinco = new User("Pinco", "Pallino", "99", "Polo Nord");
console.log(pinco);

const francesco = new User("Francesco", "Rossi", "18", "Cagliari");
console.log(francesco);

const davide = new User("Davide", "Esposito", "49", "Napoli");
console.log(davide);

const luca = new User("Luca", "Bianchi", "67", "Milano");
console.log(luca);

console.log(daniele.compareAge(pinco));
console.log(pinco.compareAge(francesco));
console.log(francesco.compareAge(davide));
console.log(davide.compareAge(luca));
console.log(luca.compareAge(daniele));
