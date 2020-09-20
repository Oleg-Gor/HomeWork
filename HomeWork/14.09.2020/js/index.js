

   var calculator = {
    x: '',
    y: '',
    read: function () {

        this.x = +prompt('Enter X', 10);
        this.y = +prompt('Enter Y', 5);
    },
    init: function (x,y) {

        this.x = x;
        this.y = y;
    },
    sum: function () {

        return this.x + this.y;
    },
    multi: function () {

        return this.x * this.y;

    },
    diff: function () {
        return this.x - this.y;

    },
    div: function () {
        return this.x / this.y;
    }

}; 


function HW_01() {

 

    calculator.read();
    alert(calculator.sum());
    alert(calculator.multi());
    alert(calculator.diff());
    alert(calculator.div());



    /*
        read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
        sum() возвращает сумму этих двух значений
        multi() возвращает произведение этих двух значений
        diff() возвращает разницу
        div() возвращает частное*/


}

function HW_02() {

    var coffeeMachine = {

        massage: 'Your coffee is ready!',
        start: function () {

            return setTimeout(alert(this.massage), 1000);
        }

    };

    coffeeMachine.start();

    /*
    Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), 
    при вызове которого – coffeeMachine.start() – 
    через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.
*/
}


function HW_03() {

    var user1 = {

        firstname: 'Oleg',
        lastname: 'Gorbulich',
    };
    var user2 = {

        firstname: 'Oleh',
        lastname: 'Horbulich',

    };


    function hello() {

        alert("Hello " + this.firstname + ' ' + this.lastname);

    }

    hello.call(user1);
    hello.call(user2);

    /*
   Создайте функцию hello(), которая выводит приветствие пользователю. 
   Создайте два объекта, содержащие поля firstname, lastname. 
   Используя метод call и функцию hello() приветствуйте каждого из пользователей персонально.
    */
}

function HW_04() {

    var array = {
        setValue: [1],
        getValue: function () {
            this.setValue.push(2);
            this.setValue.push(3);
            this.setValue.push(3);
            this.setValue.pop();
            return this.setValue;
        },

    };


    /*array
    .setValue([1])
    .push(2)
    .push(3)
    .push(3)
    .pop();*/

    var currentValue = array.getValue();
    console.log(currentValue); // [1, 2, 3]



    /* 
    Создайте объект array с методом инициализации начального значения массива, 
    c методами добавления, удаления последнего элемента массива и методом возврата текущего состояния массива. 
    Используйте концепцию chaining для создания цепочки вызовов.
    */


}


function HW_05() {

    var me = {
        x: 1,
        y: 0,

        getSum: function () {
            calculator.init(this.x, this.y);

            return this.x + ' + ' + this.y + ' = ' + calculator.sum();

        },

        getMulti: function () {
            calculator.init(this.x, this.y);

            return this.x + ' * ' + this.y + ' = ' + calculator.multi();


        },

        getDiv: function () {
            calculator.init(this.x, this.y);

            return this.x + ' / ' + this.y + ' = ' + calculator.div();

        },


    }


    

    alert(me.getSum());
    alert(me.getDiv());
    alert(me.getMulti());

    /*
    Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. 
    Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. 
    Для расчетов все методы используют функционал ранее созданного калькулятора.
    
    */

}



function HW_06() {


    var country = {
        name: 'Ukraine',
        language: 'ukrainian',
        capital: {
            name: 'Kyiv',
            population: 2907817,
            area: 847.66
        }
    };
    
    function format(start, end) {
        console.log(start + this.name + end);
    }



    format.call(country," ", " "); // Ukraine
    format.apply(country,['[',']']); // [Ukraine]
    format.call(country.capital," ", " "); // Kyiv
    format.apply(country.capital,['','']); // Kyiv
    format.apply(null,['',]); // undefined



    
}



function HW_07() {

var user = {
name:'John',
};

    function format(start, end) {
        console.log(start + this.name + end);
    }

function userFormat (a,b) {

var v = format.bind(user);

v(a,b);


}

    userFormat('<<<', '>>>'); // <<<John>>>


    (function (a,b){

        var v = format.bind(user,a,b);
    
        v();
    
         
    
    })('<<', '>>');
    
}


function HW_08 (){

var hello = concat.bind(null,'Hello',' ');

function concat (b, c, a){

console.log(b + c + a );


}


    hello('World'); // Hello World
    hello('John'); // Hello John



    /*Напишите функцию concat, которая соединяет две строки, 
    разделенные каким-то символом: разделитель и строки передаются в параметрах функции. 
    Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:*/



}