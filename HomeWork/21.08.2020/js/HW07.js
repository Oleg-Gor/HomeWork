'use strict';

function HW07() {
    var greeting, lang;
    greeting = "";
    lang = prompt("Введите один из трех языков: \'ru\', \'en\', \'de\'");

    if (lang == "ru") {
        greeting = "Привет Русский.";

    } else if (lang == "en") {
        greeting = "Привет Американец.";

    } else if (lang == "de") {
        greeting = "Привет Немец.";

    } else {
        greeting = "Наш сайт не поддерживает такой язык.";
    }

    alert(greeting + " — через IF");

    switch (lang) {
        case "ru": greeting = "Привет Русский. 2";

            break;

        case "en": greeting = "Привет Американец. 2";

            break;

        case "de": greeting = "Привет Немец. 2";

            break;




        default:

            greeting = "Наш сайт не поддерживает такой язык. 2";
            break;
    }

    alert(greeting + " — через Switch");

}

