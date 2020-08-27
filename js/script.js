//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("scrivi una parola");
var conteggio = 0;
var palindroma = false;
for (var i = parola.length - 1; i >= 0; i--) {
  if (parola[i] == parola[conteggio]) {
    palindroma =true;
  }
  conteggio++;
}
if (palindroma == true) {
  console.log("palindroma");
} else {
  console.log("non palindroma");
}

/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

var scelta = prompt("scrivi pari o dispari");
var numeroUtente = parseInt(prompt("inserisci un numero tra 1 e 5"));

var numCpu = Math.floor(Math.random() * (5 - 1) + 1);

var somma = numCpu + numeroUtente;
var pariDispari = false;
if (somma % 2 == 0) {
  pariDispari = true;
}
console.log("il tuo numero é " + numeroUtente + ", il numero del computer é " + numCpu + ".");
console.log("la somma é " + somma + ".");
console.log("hai scelto " + scelta + ".");

if ((pariDispari == true) && (scelta == "pari") || (pariDispari == false) && (scelta == "dispari")) {
  console.log("ha vinto l'utente");
} else {
  console.log("ha vinto il computer");
}
