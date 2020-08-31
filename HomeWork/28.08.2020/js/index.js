
function HW_00() {

    //let $HW_00 = $('.radio');

    $('.radio').css('display', 'block');
    $('#but').css('display', 'none');

}




function HW_01() {


    $("#HW_00").empty();

    let $HW_01 = $('#HW_00');
    //$HW_01.replaceWith('');

    $HW_01.prepend('<p>1. Нарисуйте блок-схему, иллюстрирующую алгоритм приготовления чашечки чая.</в> <p><img src="img/shem.jpg" alt=""></p>');



}


function HW_02() {
    $("#HW_00").empty();

    let $HW_02 = $('#HW_00');
    //$HW_02.replaceWith('');
    let line = "";


    for (let i = 1; i < 20; i++) {

        if (i % 2 == 0) {

            let sum = i * i;
            line = (line + sum + '&nbsp;&nbsp;&nbsp;');
        }

    }

    $HW_02.prepend("<div class=\"shest\">" + line + " <div class=\"shest\">");

    $HW_02.prepend('<p>2. Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика.</p>');


}



function HW_03() {

    $("#HW_00").empty();

    let $HW_03 = $('#HW_00');
    //$HW_02.replaceWith('');

    let result = true;

    for (; result;) {

        result = confirm("Нажми \"ОК\", чтобы продолжить цикл.\n\nили \"Отмена\", чтобы завершить.\n\n");
    }



    $HW_03.prepend('<p>3. Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok.</p>');


}



function HW_04() {
    $("#HW_00").empty();

    let $HW_04 = $('#HW_00');
    //$HW_02.replaceWith('');
    let sum = 0;
    let result = +prompt("Введите любое положительное число", "100");

    if (typeof result == "number" && result > 0) {
        for (let i = 0; i <= result; i++) {

            if (i % 2 == 0) {
                continue;

            }
            sum += i;

        }

    }

    alert("Сумма нечетных чисел " + sum);




    $HW_04.prepend('<p>4. В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа до диапазона, введенного пользователем. Результат отобразите в окне alert.</p>');


}




function HW_05() {
    $("#HW_00").empty();

    let $HW_05 = $('#HW_00');
    let result;

    //debugger;
    for (i = 0; ; i++) {
        result = Math.random();
        if (result > 0.99) break;
        //debugger;
    }

    alert("Кол-во итераций " + i + "\n\nЧисло прерывания " + result + "\n\n");

    $HW_05.prepend('<p>5. Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.99. Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.</p>');


}


function HW_06() {
    $("#HW_00").empty();

    let $HW_06 = $('#HW_00');

    let result = "";

    for (i = 1; i <= 11; i++) {

        if (i % 2 > 0) {
            result += " . ";

        } else if (i % 2 == 0) {

            result += " # ";
        }

    }

    alert(result);

    $HW_06.prepend('<p>6. Сформируйте строку вида ".#.#.#.#.#." чередованием символов . и # в каждой итерации с помощью цикла for. После выхода из цикла распечатайте полученную строку.</p>');


}


function HW_07() {
    $("#HW_00").empty();


    let $HW_07 = $('#HW_00');

    let result;


    let wight_D = prompt("Укажите ширину доски", "12");
    let hight_D = prompt("Укажите высоту доски", "5");


    for (let i = 1; i <= hight_D; i++) {




        if (i % 2 !== 0) {
            result = "";
            for (let z = 1; z <= wight_D; z++) {
                if (z % 2 > 0) {
                    result += " . ";

                } else if (z % 2 == 0) {

                    result += " # ";
                }


            }


            $HW_07.prepend("<div class=\"shest\">" + result + " <div class=\"shest\"> </br>");

        }



        if (i % 2 == 0) {
            result = "";
            for (let z = 1; z <= wight_D; z++) {
                if (z % 2 > 0) {
                    result += " # ";

                } else if (z % 2 == 0) {

                    result += " . ";
                }


            }


            $HW_07.prepend("<div class=\"shest\">" + result + " <div class=\"shest\"> </br>");

        }



    }





    $HW_07.prepend('<p>7.  Используя вложенные циклы, сформируйте строку чередованием символов . и # таким образом, чтобы получилась шахматный узор. Для перевода строки используйте символ . Код должен поддерживать легкое изменение размеров доски.</p>     <p>.#.#.#.#.#.#</p>      <p> #.#.#.#.#.#.</p>          <p>.#.#.#.#.#.#</p>              <p>#.#.#.#.#.#.</p>                  <p>.#.#.#.#.#.#</p></p>');


}

function HW_08() {
    $("#HW_00").empty();

    let $HW_08 = $('#HW_00');
    let j = 0;
    let z = 1;
    let sum = 0;
    let line = " ";

    let limit = prompt("Введите длину ряда Фибоначчи ", "10");

    for (i = 0; i <= limit; i++) {

        line += (sum + '&nbsp;&nbsp;&nbsp;');


        sum = j + z;



        z = j;
        j = sum;



    }
    $HW_08.prepend("<div class=\"shest\">" + line + " <div class=\"shest\">");



    $HW_08.prepend('<p>8. С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13...</p>');



}

function HW_09() {

    $("#HW_00").empty();
    let $HW_09 = $('#HW_00');

    let sum = 0;
    let mid = 0;
    let j = 0;
    for (; ;) {

        let price = +prompt("введите любое число", "5");

        if (price) {
            j = j + 1;
            sum += price;
            mid = sum / j;
        } else break;

    }
    alert("Кол-во вводов чисел = " + j + "\n\nСумма значений  = " + sum + "\n\nСреднее арифметическое  = " + mid + "\n\n");

    $HW_09.prepend('<p>Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена. После выхода из цикла распечатайте количество введенных чисел, их общую сумму и среднее арифметическое.</p>');


}

function HW_10() {
    $("#HW_00").empty();

    let $HW_10 = $('#HW_00');
    $('table').css('display', 'block');
    $('div table').css('border', '1');
    //$("#root table").css("border","1");
    $('#root table tr').css({ 'height': '10px', 'background': ' #eee' });
    $('#root table td').css('width', '10px');
    $('table td').css('border', '1px solid black')




    $('tr:lt(6)').css('background', '#106B63');
    $('tr:gt(5):lt(3)').css('background', '#E7C610');
    $('tr:gt(8):lt(3)').css('background', '#C64A08');
    $('tr:gt(11):lt(3)').css('background', '#B43100');

    $('tr:gt(14):lt(4)').css('background', '#102173');

    $('.none').css('background', 'white');
    $('.none').css('border', '0px solid black')



    $HW_10.prepend('Используя поиск по селекторам из раздела \“Селекторы\” справочника и jQuery-функцию css, задайте стили элементам таблицы в блоке #content. Редактировать HTML нельзя, CSS не нужен. Последовательность команд:');


}

function HW_11() {
    $("#HW_00").empty();

    let $HW_11 = $('#HW_00');

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            console.log(i + j);
        }
    }


    $HW_11.prepend('<p>11. Найдите и исправьте ошибки в коде:</в> <p><img src="img/snimok.jpg" alt=""></p>');


}



function HW_12() {
    $("#HW_00").empty();
    //debugger;
    let $HW_12 = $('#HW_00');

    const j = 31;
    let g = Math.round(j / 2);
    let w = Math.round(j / 2);
    //let c = 1;
    let d = 1;

    //debugger;

    for (let i = 1; i <= Math.round(j / 2); i++) {
        //debugger;
     
        let line = "";
        let c = 1;
      
        for (let z = 1; z < w; z++) {

            line = (line + ".");

        }


        do {

            line = (line + "#");
            c++;

        } while (c <= d);


        for (z = 1; z < w; z++) {

            line = (line + ".");

        }
        //debugger;


   

        console.log(line);
        g = g - 2;
        w = w - 1;
        d = d + 2;
       // c = c-1;
      



    }
    //debugger;

    $HW_12.prepend('Level Up. Сформируйте строку в виде треугольника-елочки:');



}




