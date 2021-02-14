//Задание 5.

//Создание класса
class ElectroDevice {
  constructor (type, name) {
  this.type = "electrical";
  this.name = name;
}

//Функция включения
turnedOn() {
   console.log(`This device is turned on. It consumes ${this.powerW} W per hour.`);
}

//Функция выключения
turnedOff() {
  console.log("This device is turned off.")
}
}
//Создание электроприбора кофемашина
class CoffeeMachine extends ElectroDevice {
  constructor(name, model, powerW, color) {
    super();
    this.name = name;
    this.model = model;
    this.powerW = powerW;
    this.color = color
  }

makeCoffee(nameCoffee) {
  console.log(`Your ${nameCoffee} is ready!`)
}
}
//Создание экземпляра кофемашины
const bork = new CoffeeMachine("bork", "C701", 1000, "silver")



//Создание электроприбора гирлянда
class Garland extends ElectroDevice {
  constructor(name, shape, powerW, ledNumber, lightColor) {
    super();
    this.name = name;
    this.shape = shape;
    this.powerW = powerW;
    this.ledNumber = ledNumber;
    this.lightColor = lightColor
  }

chooseMode(nameMode) {
  console.log(`Your garland works in ${nameMode} mode.`)
}
}
//Создание экземпляра гирлянды
const neonNight = new Garland("Neon-Night", "curtain", 5, 500, "white warm")

//Проверка
console.log(neonNight);
console.log(bork);

bork.makeCoffee("latte");
bork.turnedOn(this.powerW);

neonNight.chooseMode("blink")
neonNight.turnedOn(this.powerW);