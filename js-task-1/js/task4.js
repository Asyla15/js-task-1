//Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.//

/*let bauble = '112';
result = prompt(souvenir, [bauble]);

var user = '72';
console.log(user)

user = 112;
console.log(user)
*/

let souvenir = 75;
let trinkets = 112;

let buying1 = prompt("Сколько суверинов вы хотите купить?");
let buying2 = prompt("Сколько безделушек вы хотите купить?");


let total1 = (souvenir * buying1);
let total2 = (trinkets * buying2);

let total = (total1 + total2);
document.write("Ваша покупка составляет весом: " + total + " грамма" + "<br>");



