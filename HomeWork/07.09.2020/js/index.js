function HW_00(HomeWork) {
    var HomeWorkArr = {
        HW_1: 'Создайте функцию p и a, которые будут служить короткими именами для prompt и alert соответственно, то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение в стандартном модальном окне. Напишите функцию d, которая будет служить коротким именем для debugger, то есть запускать процесс отладки. Используя эти псевдонимы получите значение из prompt и отобразите в alert. А процесс работы скрипта проконтролируйте с помощью функции, которая служит для дебага.',
        HW_2: 'Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), которая сравнивает два числа и возвращает большее:',
        HW_3: 'Используя синтаксис ES5, напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:',
        HW_4: 'Напишите функцию, которая в переданной строке ищет самое длинное слово и возвращает его длину.',
        HW_5: 'Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями, у некоторых есть поле middlename. Используя встроенные функции массивов: \nОтфильтруйте пользователей младше 18 лет \nДобавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname, если есть все три, и только firstname и lastname, если middlename нет\nСформируйте новый массив, который содержит только полное имя пользователей',
        HW_6: 'Не используя методы массива, напишите функцию аналог метода shift. Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.',
        HW_7: 'Не используя методы массива, напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.',
        HW_8: 'Напишите функцию аналог метода ES6 Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.',
        HW_9: 'Напишите функцию ask с тремя параметрами: question, defaultValue, callback. Функция ask запрашивает с помощью prompt вопрос question, ответ по умолчанию - defaultValue. Что делать с полученным значением - определяет callback',
        HW_10: 'Найдите и исправьте ошибки в коде:',
        HW_11: '“История в картинках”. Создайте массив тематически связанных строковых картинок. Перебирая массив в цикле с определенной задержкой (setTimeout) выводите на страницу один из элементов массива (одну из картинок). Тема - свободная, ограничена только набором доступных строковых картинок.',
    };

    alert(HomeWorkArr[HomeWork]);

}




function HW_01() {

    HW_00('HW_1');


    d();
    let name = p('Enter your name', 'Hello World - 2');
    a(name);

    a('Hello World. \n\nYou entered: ' + name);


    function d() {

        debugger;

    }

    function p(a, b) {

        prompt(a, b);
        return b;

    }

    function a(cos) {

        alert(cos);


    }




}


function HW_02() {

    HW_00('HW_2');

    let max = (a, b) => {

        if (a > b) {
            return a;
        } return b;


    };



    console.log(max(0, -1)); // 0


}

function HW_03() {

    HW_00('HW_3');

    let min = function () {
        let minI = arguments[0];
        for (let i = 0; i < arguments.length; i++) {


            if (arguments[i] < minI) {
                minI = arguments[i];

            } continue;


        }

        return minI;

    };


    console.log(min(0, -1, 100, 500, 100500)); // -1

}


function HW_04() {

    HW_00('HW_4');

    function findLongestWordLength(str) {
        let dln = 0;
        str = str.split(" ");
        for (let i = 0; i < str.length; i++) {

            for (let j = 0; j < str[i].length; j++) {
                if (str[i].length > dln) {

                    dln = str[i].length;

                } continue;


            }




        }
        return dln;

    }



    console.log(findLongestWordLength('Аргентина манит негра')); // 9


}



function HW_05() {

    HW_00('HW_5');
    let users = [
        { id: 1, firstname: 'Oleg_1', lastname: 'Gor_1', middlename: 'Fedorov_1', age: 10 },
        { id: 2, firstname: 'Oleg_2', lastname: 'Gor_2', age: 20 },
        { id: 3, firstname: 'Oleg_3', lastname: 'Gor_3', age: 30 },
        { id: 4, firstname: 'Oleg_4', lastname: 'Gor_4', middlename: 'Fedorov_4', age: 40 },
        { id: 5, firstname: 'Oleg_5', lastname: 'Gor_5', age: 18 },
        { id: 6, firstname: 'Oleg_6', lastname: 'Gor_6', age: 21 },
        { id: 7, firstname: 'Oleg_7', lastname: 'Gor_7', middlename: 'Fedorov_7', age: 15 },
        { id: 8, firstname: 'Oleg_8', lastname: 'Gor_8', age: 13 },
        { id: 9, firstname: 'Oleg_9', lastname: 'Gor_9', age: 12 },
        { id: 10, firstname: 'Oleg_10', lastname: 'Gor_10', middlename: 'Fedorov_10', age: 6 },
        { id: 11, firstname: 'Oleg_11', lastname: 'Gor_11', age: 8 },
        { id: 12, firstname: 'Oleg_12', lastname: 'Gor_12', age: 70 },

    ];





    let map = users.filter(function (min) {

        if (min.age < 18) { return true }
        else { return false }
    });

    console.log(map);
    //alert('первая часть');

    users.forEach(function (NM) {

        //debugger;
        if (NM.middlename !== undefined) {
            return NM.fullName = NM.firstname + " " + NM.middlename + " " + NM.lastname;
        } else { return NM.fullName = NM.firstname + " " + NM.lastname; }


    });
    console.log(users);
    //alert('первая часть');


    let con = users.map(function (NM) {


        return NM.fullName;
    });
    console.log(con);
    //alert('первая часть');



}



function HW_06() {

    HW_00('HW_6');

    let escape = [1, 2, 3, 4, 5];


    function del(a) {

        for (let i = 1; i < a.length; i++) {


            a[i - 1] = a[i];

        }
        a.length = a.length - 1;



    }

    del(escape);

    console.log(escape);


}


function HW_07() {

    HW_00('HW_7');


    let escape = [1, 2, 3, 4, 5];
    let escape2 = [6, 7, 8, 9, 10];

    function toEscape(escape, escape2) {
        for (let i = 0; i < escape2.length; i++) {

            escape[escape.length] = escape2[i];

        }




    }

    toEscape(escape, escape2);
    console.log(escape);
}


function HW_08() {

    HW_00('HW_8');





    var source = { firstname: 'Tom', age: 10 };
    var s = extend(source, { firstname: 'John' }, { lastname: 'Doe' });
    console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
    console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

    function extend(source, a, b) {



        for (var key in source) {

            for (let i = 1; i < arguments.length; i++) {

                for (var key2 in arguments[i]) {

                    if (key === key2) {
                        source[key] = arguments[i][key2];

                    } else {

                        source[key2] = arguments[i][key2];
                    }
                }
            }

        }
        return source;
    }



}



function HW_09() {
    HW_00('HW_9');





    ask('How old are you?', '10', function (response) {
        console.log(response);
    });


    function ask(question, defaultValue, callback) {

        let d = prompt(question, defaultValue);

        if (d !== defaultValue) callback(d);

    }


}

function HW_10() {
    HW_00('HW_10');


    function foo() {
        function bar(a) {
            let i = 3;
            return i + a;
        }

        for (var i = 0; i < 10; i++) {
            console.log(bar(i * 2));
        }
    }

    foo(); // 3 5 7 9 11 13 15 17 19 21





}


function HW_11 () {
HW_00 ('HW_11');

var emoji = [
    0x1F637,
    0x1F912,
    0x1F915,
    0x1F922,
    0x1F92E,
    0x1F927,
    0x1F975,
    0x1F976,
    0x1F974,
    0x1F635,
    0x1F92F,
]



for (let i=0; i<emoji.length; i++) {

    setTimeout(emoj, i*500, emoji[i]);
    
}



function emoj (a) {
    $('p').empty();


let emoj = String.fromCodePoint(a);
console.log(emoj);

let $HW_11 = $()
$('p').prepend(emoj);

}









}





