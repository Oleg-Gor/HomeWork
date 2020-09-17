function HW_00 (HWnumber) {

var HWmass = [
    'Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит максимальное и минимальное и возвращает их ',
    'Напишите функцию checkNumber, которая получает на вход как параметр массив любых значений и возвращает true, если все элементы - числа, и false - если в массиве хотя бы  одно не число. Для проверки массива используйте метод every или some',
    'Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:',
    'Напишите функцию extraCube, которая принимает в качестве параметра или число, или массив числовых значений и возвращает либо куб числа, либо массив кубов, в зависимости от типа входящего параметра (typeof). Для расчета куба числа вместо встроенного метода Math.pow используйте собственную функцию.',
    'Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:',
    'Дан массив, элементами которого могут быть любые значения, включая другие массивы. Напишите функцию flat, которая рекурсивно “разворачивает” переданный массив на глубину depth, указанную в параметре функции. По умолчанию flat поднимает элементы на одну глубину (то есть если depth не указан).',
    'Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения текущей временной метки и служит для замера времени выполнения другого кода:',
    'Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и возвращает функцию, которая добавляет к первому параметру второй. Функция работает по следующему принципу:',
 
];



$('p').empty();



$('p').eq(HWnumber-1).empty().append(HWmass[HWnumber-1]).css('color', 'red');

console.clear();




};




function HW_01() {

HW_00 (1);

    function highAndLow(arr) {

        let mass = arr.split(' ');
        result = [];

        result.push(Math.max(...mass));
        result.push(Math.min(...mass));

        return result;


    }

    var result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");

    console.log(result); // "542 -214"   


}


function HW_02() {


    HW_00 (2);
    function checkNumber(a) {

        return a.every(a => Number(a));


    }



    console.log(checkNumber([1, 2, '3', 'a'])); // false
    console.log(checkNumber([1, 2, '3', '4'])); // true



}


function HW_03() {
    HW_00 (3);
    function cubeFor(a) {
        let summ = 1;
        for (let i = 1; i <= 3; i++) {

            summ *= a;

        }
        return summ;


    }




    function cube(x) {
        return pow(x, 3);
    }

    function pow(x, n) {
        if (n === 1) {
            return x;
        } else {
            return x * pow(x, n - 1);
        }
    }









    console.log(cube(2)); // 8  
    console.log(cubeFor(2)); // 8 


}

function HW_04() {

    HW_00 (4);
    function extraCube(a) {

        if (typeof a == "object") {
            //debugger;
            a = a.map(function cube(element) { return pow(element, 3); });

            return a;

        } else if (typeof a == "number") { return pow(a, 3); }

    }
    function pow(x, n) {
        if (n === 1) {
            return x;
        } else {
            return x * pow(x, n - 1);
        }
    }

    console.log(extraCube(2)); // 8
    console.log(extraCube([0, 1, 2, 3])); // [0, 1, 8, 27]


}


function HW_05() {

    HW_00 (5);
    function sum(a) {



        return f(arguments, arguments.length - 1);

        function f(a, b) {

            //debugger;       

            if (b == 0) {

                return a[0];

            } else { return a[b] + f(a, b - 1); }


        }



    }


    console.log(sum(1, 2, 3, 4, 5)); // 15

}


function HW_06() {

    HW_00 (6);

    function flat(arr, count = 1) {
        //debugger;
        var final = [];


        (function flat2(arr, count) {
            if (count >= 0) {
                arr.forEach(function (element) {
                    if (Array.isArray(element)) { flat2(element, count - 1); }
                    else { final.push(element); }


                });
            } else { final.push(arr); }


        })(arr, count);
        return final;
    }





    var data1 = [1, 2, [3, 4, [5, 6]]];

    console.log(flat(data1)); // [1, 2, 3, 4, [5, 6]]

    var data2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
    console.log(flat(data2, 1)); // [1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]]
    console.log(flat(data2, 2)); // [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]
    console.log(flat(data2, 3)); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]]
    console.log(flat(data2, 4)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log(flat(data2, 0)); // [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
    console.log(flat(data2, 5)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


}

function HW_07() {
    HW_00 (7);

    function createTimer() {

        var time1 = performance.now();

        return function () {



            

            var time2 = performance.now();

            return time2 - time1;
        };


    }

    var timer = createTimer();
    alert('!');// код, время выполнения которого нужно измерить
    alert(timer()); // время в мкс от начала выполнения createTimer() до момента вызова timer()



}


function HW_08() {

    HW_00 (8);
    function createAdder(a) {

        

        return function (b) {

            return a + b;


        };


    }





    var hello = createAdder('Hello, ');
    alert(hello('John')); // Hello, John
    alert(hello('Harry')); // Hello, Harry

    var plus = createAdder(5);
    alert(plus(1)); // 6
    alert(plus(5)); // 10






}