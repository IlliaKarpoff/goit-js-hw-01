/* Задание 2
Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

Сравни эти значения и по результатам выведи:

Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.*/

'use strict';
const total = 100;
const ordered = prompt("Сколько товаров хотите заказать?");
if (ordered > total) {
  console.log("На складе недостаточно тoваров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер!");
}