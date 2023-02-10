// Conversão de real para Dólar e de real para Bitcoin

var real = 64; // Altere para qualquer valor inteiro que você quiser
var cotacaoDoDolar = 5.32;
var bitcoin = 119639.19;

var realParaDolar = real * cotacaoDoDolar;
realParaDolar = realParaDolar.toFixed(2);

var realParaBitcoin = real * bitcoin;
realParaBitcoin = realParaBitcoin.toFixed(2);

var pessoa = "Olá J.A o valor é de: "; // Substitua o nome dentro das aspas pelo seu nome

alert(pessoa + realParaBitcoin); // Altere as opções entre realParaDolar ou realParaBitcoin


// Conversão de anos luz para metro 


var anoLuz = 1; // Altere para qualquer valor inteiro que você quiser
var anoLuzEmMetro = 9460730777119564.00;
var conversao = anoLuz * anoLuzEmMetro;
conversao = conversao.toFixed(2);
var pessoa2 = "J.A\n"; // Substitua o nome dentro das aspas pelo seu nome

if (anoLuz == 1) {
alert(pessoa2 + anoLuz + " ano luz" + " em metros é igual a: " + conversao + " metros"
)
} else {

alert(pessoa2 + anoLuz + " anos luz" + " em metros é igual a: " + conversao + " metros"
)
}