/*var lista_frutas = Array();

lista_frutas[0] = 'Maça';
lista_frutas[1] = 'Uva';
lista_frutas[2] = 'Banana';
lista_frutas[3] = 'Morango';

console.log(lista_frutas.sort());
*/

var lista_numeros = Array();

lista_numeros[0] = 12;
lista_numeros[1] = 40;
lista_numeros[2] = 3;
lista_numeros[3] = 7;
lista_numeros[4] = 19;
lista_numeros[5] = 1;

console.log(lista_numeros.sort(ordenaNumeros));

function ordenaNumeros(a,b){
	return a - b;
	// < 0 = a ordenado antes de b
	// > 0 = b ordenado depois de a
	// == ordem é mantida
}
