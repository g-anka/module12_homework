//Задание 2.
//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.


let cat = {
  name: "Barsik",
  color: "black",
  fur: "fluffy",
  character: "lovely"
}


function checkProp(string, obj) {
   if(string in obj) {
      console.log(true);
   }
  else {
          console.log(false);
  }
}

checkProp("character", cat);
