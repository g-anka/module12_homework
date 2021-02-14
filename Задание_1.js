//Задание 1.
//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.


let drink = {
  substance: "liquid"
}

let fanta = Object.create(drink);
fanta.name = "Fanta";
fanta.taste = "sweet";
fanta.color = "orange";

function showProp(obj) {
  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
       console.log("Ключ и значение только собственных свойств - " + key + " : " + obj[key])
    }
  }
}

showProp(fanta);