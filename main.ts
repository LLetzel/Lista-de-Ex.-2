var input = require("prompt-sync")();
// Escreva com suas palavras para que serve o comando IF
// O comando IF, serve para que numa lógica de programação, SE uma determinada condição ocorrer, o código executa alguma ação, SENÃO outra.

//Faça um programa que peça um nome de usuário e verifique SE o usuario digitado é 'Admin'. Caso seja printe 'Bem vindo', caso contrário printe 'Usuário não encontrado'
var nome = input("Digite o usuário: ");
if(nome == "Admin"){
  console.log("Bem vindo");
}else{
  console.log("Usuário não encontrado");
}
console.log("----------------------------------------------")

//Faça um loop usando while ou for que conte de 0 a 10
var sla = 0;
while (sla < 10) {
  sla++;
  console.log(sla);
}

console.log("----------------------------------------------")


//Faça um loop que conte de 0 até N, sendo que N é um numero que o usuário escolhe
var letzel = 0;
var numq = Number(input('Digite um número: '))
while(letzel < numq) {
  letzel++;
  console.log(letzel)
}
console.log("----------------------------------------------")

//Faça um loop que conte de 100 até 1.
var num = 101;
while (num > 1) {
  num = num - 1;
  console.log(num)
}
console.log("----------------------------------------------")

//Faça um loop que some todos os numeros de 1 até 100.
var dias = 0;
var valor = 0;
while (dias < 100) {
  dias++; 
  valor = valor + dias;
}
console.log(valor);

console.log("----------------------------------------------")

//Faça um loop que some todos os numeros PARES de 1 até 100. 
var somalia = 0;
for (var i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    somalia = somalia + i;
  }
}
console.log(somalia);

console.log("----------------------------------------------")

//Faça um loop que printe apenas os numeros que são divisíveis por 3 e 5
var vez = 0; 
while (vez > 100) {
  if (vez % 3 == 0 || vez % 5 == 0){
    console.log(vez);
    vez++;
  } else {
    vez++;
  }
}

console.log("----------------------------------------------")

//Explique com suas palavras o que é uma matriz
// A matriz é basicamente um conjunto de variaveis

//Crie uma matriz com 3 linhas e 3 colunas
var matriz = [
  [1, 2, 3, 4 ],
  [5, 6, 7, 8 ],
  [9, 10, 11,12]
]

//Acesse o 2° item da 1° linha da matriz
console.log(matriz[0][1]);

//Acesse o 3° item da 4° linha da matriz
console.log(matriz[2][3]);
console.log("----------------------------------------------")
//Faça um loop FOR que leia as linhas da matriz
for (var i = 0; i < matriz.length; i++) {
  console.log(matriz[i]);
}
console.log("----------------------------------------------")

//Faça um loop FOR dentro de um loop FOR para ler irem por item de uma matriz
for (var l = 0; l < matriz.length; l++) {
  for (var d = 0; d < matriz[i].length; d++) {
    console.log(matriz[l][d]);
  }
}

console.log("----------------------------------------------")
//Escreva com suas palavras o que é um função
// Uma função é um "bloco de código" que pode ser chamado e executado várias vezes


//Faça uma função que printe 'Ola mundo' e chame ela
function helloword(){
  console.log("Ola mundo");
}
helloword();

console.log("----------------------------------------------");

//Faça uma função que receba um texto como parametro e mostre o print 'O texto de parametro é: ' e concatene com o numero 
function eoletzel(texto: string){
  return ("O texto de parametro é: " + texto);
}
console.log(eoletzel("Letzel gato"));

console.log("----------------------------------------------");
//Faça uma função que receba como parametro o texto '10,58' e que ele retorne o número 10.58.
function pokipoki(parametro: string) {
  return Number(parametro.replace(",", "."));
}
console.log(pokipoki("10,58"));

