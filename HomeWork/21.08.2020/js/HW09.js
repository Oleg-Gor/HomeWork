'use strict';

function HW09() {

    var lang, day, result;

    day = new Date().getDay();
    lang = confirm("Выбирайте \"OK\", если Ваш язык Русский и \"Oтмена\", если English");




    if (lang) {
        switch (day) {
            case "0":
                alert("Воскресенье - русс");
                break;

            case 1:
                alert("Понедельник - русс");
                break;
            case 2:
                alert("Вторник - русс");
                break;

            case 3:
                alert("Среда - русс");
                break;
            case 4:
                alert("Четверг - русс");
                break;
            case 5:
                alert("Пятница - русс");
                break;
            case 6:
                alert("Суббота - русс");
                break;
            default:
                break;
        }

    } else {
        switch (day) {
            case 0:
                alert("Воскресенье - English");
                break;

            case 1:
                alert("Понедельник - English");
                break;
            case 2:
                alert("Вторник - English");
                break;

            case 3:
                alert("Среда - English");
                break;
            case 4:
                alert("Четверг - English");
                break;
            case 5:
                alert("Пятница - English");
                break;
            case 6:
                alert("Суббота - English");
                break;
            default:
                break;
        }


    }


}