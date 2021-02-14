//Задание 4.

//Создание прототипа
function ElectroDevice(name) {
  this.type = "electrical",
  this.name = name
}

//Функция включения
ElectroDevice.prototype.turnedOn = function(){
  console.log(`This device is turned on. It consumes ${this.powerW} W per hour.`)
}

//Функция выключения
ElectroDevice.prototype.turnedOff = function(){
  console.log("This device is turned off.")
}

//Создание электроприбора кофемашина
CoffeeMachine.prototype = new ElectroDevice()

//Присваиваем свойства кофемашины
function CoffeeMachine(name, model, powerW, color){
  this.name = name, 
    this.model = model,
    this.powerW = powerW,
    this.color = color
}

//Присваиваем метод кофемашины
CoffeeMachine.prototype.makeCoffee = function(nameCoffee){
  console.log(`Your ${nameCoffee} is ready!`)
}

//Создание экземпляра кофемашины
const bork = new CoffeeMachine("bork", "C701", 1000, "silver")



//Создание электроприбора гирлянда
Garland.prototype = new ElectroDevice()

//Присваиваем свойства гирлянды
function Garland(name, shape, powerW, ledNumber, lightColor){
  this.name = name, 
  this.shape = shape,
  this.powerW = powerW,
  this.ledNumber = ledNumber,
  this.lightColor = lightColor
}

//Присваиваем метод гирлянды
Garland.prototype.chooseMode = function(nameMode){
  console.log(`Your garland works in ${nameMode} mode.`)
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