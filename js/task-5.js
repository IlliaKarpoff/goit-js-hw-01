// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

"use strict";
const myCountry = prompt("Enter your country");
let cost;

if (myCountry != null) {
  switch (myCountry.toLowerCase()) {
    case "china":
      cost = 100;
      alert(`Delivery in ${myCountry} will cost ${cost} credits.`);
      break;

    case "chili":
      cost = 250;
      alert(`Delivery in ${myCountry} will cost ${cost} credits.`);
      break;

    case "australia":
      cost = 170;
      alert(`Delivery in ${myCountry} will cost ${cost} credits.`);
      break;

    case "india":
      cost = 80;
      alert(`Delivery in ${myCountry} will cost ${cost} credits.`);
      break;

    case "jamaica":
      cost = 120;
      alert(`Delivery in ${myCountry} will cost ${cost} credits.`);
      break;

    default:
      alert("Delivery in your country is not possible");
  }
}