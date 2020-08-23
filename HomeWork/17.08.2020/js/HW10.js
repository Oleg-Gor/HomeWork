'use string';

function HW10() {

var x, y, z;

x = prompt ("Введите высоту первой колонки в формате \"00px\" ", "");
x = +x.substring(0, x.length - 2);

y = prompt ("Введите высоту второй колонки в формате \"00px\" ", "");
y = +y.substring(0, y.length - 2);

z = prompt ("Введите высоту третьей колонки в формате \"00px\" ", "");
z = +z.substring(0, z.length - 2);

alert( "10. Высота первой колонки " + x + " px \n"
+ "Высота второй колонки " + y + " px \n" 
+ "Высота третьей колонки " + z + " px \n\n" 
+ "Самая высокая колонка в: " + Math.max(x,y,z) + " px \n"  );

}
//  