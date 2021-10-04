"use strict";

/* Варианты в каждом блоке расставлены в порядке от более дешевого к более дорогому
    
    визитка - 10к - 5дней
    лендинг - 12к - 7 дней
    корпоративный - 20к - 20 дней
    интернет-магазин - 40к - 30 дней
    
    шаблонный - 5к - 3 день 
    индивидуальный - 10к - 10 дней
    WOW-дизайн - 15к - 15 дней
    
    адаптирован под ПК/ноутбуки - 5к - 2 дня
    адаптирован под планшеты - 8к - 5 дней
    адаптирован под телефоны - 10к - 8 дней
    полностью адаптивный сайт - 15к - 15 дней
*/

let syteType = prompt("Выберите тип сайта: \n 1 - визитка; \n 2 - лендинг; \n 3 - корпоративный; \n 4 - интернет-магазин.");

let syteDes = prompt("Выберите дизайн сайта: \n 1 - шаблонный; \n 2 - индивидуальный; \n 3 - WOW-дизайн.");

let syteAdapt = prompt("Выберите вариант адаптивности сайта: \n 1 - адаптирован под ПК/ноутбуки; \n 2 - адаптирован под планшеты; \n 3 - адаптирован под телефоны; \n 4 - полностью адаптивный сайт.");

let sytePrice = [
    [10, 12, 20, 40], //тип
    [5, 10, 15], //дизайн
    [5, 8, 10, 15], //адаптив
];  

let syteTime = [
    [5, 7, 20, 30], //тип
    [3, 10, 15], //дизайн
    [2, 5, 8, 15], //адаптив
];

// alert("Считаю...");

    let priceForType, timeForType;
if(syteType == 1) {
    priceForType = sytePrice[0][0],
    timeForType = syteTime[0][0];
}
else if(syteType == 2){
    priceForType = sytePrice[0][1],
    timeForType = syteTime[0][1];
}
else if(syteType == 3){
    priceForType = sytePrice[0][2],
    timeForType = syteTime[0][2];
}
else {
    priceForType = sytePrice[0][3],
    timeForType = syteTime[0][3];
}

    let priceForDes, timeForDes;
if(syteDes == 1) {
    priceForDes = sytePrice[1][0],
    timeForDes = syteTime[1][0];
}
else if(syteDes == 2){
    priceForDes = sytePrice[1][1],
    timeForDes = syteTime[1][1];
}
else{
    priceForDes = sytePrice[1][2],
    timeForDes = syteTime[1][2];
}

let priceForAdapt, timeForAdapt;
if(syteAdapt == 1) {
    priceForAdapt = sytePrice[2][0],
    timeForAdapt = syteTime[2][0];
}
else if(syteAdapt == 2){
    priceForAdapt = sytePrice[2][1],
    timeForAdapt = syteTime[2][1];
}
else if(syteAdapt == 3){
    priceForAdapt = sytePrice[2][2],
    timeForAdapt = syteTime[2][2];
}
else{
    priceForAdapt = sytePrice[2][3],
    timeForAdapt = syteTime[2][3];
}

// alert("Почти готово...");

let calculator = {
    calcSytePrice: priceForType + priceForDes + priceForAdapt,
    calcSyteTime: timeForType + timeForDes + timeForAdapt,
};

alert("Примерная стоимость: " + calculator["calcSytePrice"] + " тысяч рублей \n" + "Примерный срок: " + calculator["calcSyteTime"] + " дней");

