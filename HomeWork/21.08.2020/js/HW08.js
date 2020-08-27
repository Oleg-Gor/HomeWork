'use strict';

function HW08() {

    var month;

    month = +new Date().getMonth();

    switch (month) {
        case 11:
        case 0:
        case 1:
            alert("зима " + (month + 1) + " месяц");
            break;
        case 2:
        case 3:
        case 4:
            alert("весна " + (month + 1) + " месяц");
            break;

        case 5:
        case 6:
        case 7:
            alert("лето - " + (month + 1) + " месяц");
            break;
        case 8:
        case 9:
        case 10:
            alert("осень " + (month + 1) + " месяц");
            break;

        default:
            break;
    }








}