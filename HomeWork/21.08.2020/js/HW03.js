'use strict';

function HW03() {

    var moneyYou, moneyFriend, moneySumm;
    const ticket = 20000;
    const beer = 15;

    moneyYou = +prompt("Введите сколько у Вас денег", '');
    moneyFriend = +prompt("Введите сколько денег у вашего друга", "");
    moneySumm = moneyYou + moneyFriend;



    if (moneySumm >= ticket * 2) {
        alert("Вам хватит денег на билеты и учебу, у Вас сумма " + moneySumm + " грн. \n на один билет нужно " + ticket + " грн.");

    } else if (moneySumm >= beer) {
        alert("Вам хватит денег на " + Math.floor(moneySumm / beer) + " бутылок пива. \nодна бутылка стоит " + beer + " грн., у Вас всего " + moneySumm + " грн. а билет на одного стоит " + ticket + " грн.");
    } else {
        alert("Похожу у Вас нет денег даже на пиво, т.к. у вас с другом всего " + moneySumm + " грн. \n при этом одна бутылка стоит " + beer + " грн. а один билет на самолет " + ticket + " грн.");

    }


}