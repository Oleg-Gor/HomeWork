'use strict';

function HW10() {

    var x = +prompt('x', 0);
    var error;

    switch (x) {
        case 0: error = 'На ноль делить нельзя'; break;
        case 1: error = 'На единицу делить бессмысленно'; break;
        case NaN: error = 'Не математическая операция'; break;
        default:
            break;
    }



    if (error) {
        alert(error);
    } else if (isNaN(100 / x)) {

        alert('Не математическая операция');
    } else {
        alert(100 / x);
    }


}