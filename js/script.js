//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("scrivi una parola");

function parolaPalindroma(par) {
var conteggio = 0;
var palindroma = false;
for (var i = par.length - 1; i >= 0; i--) {
  if (par[i] == par[conteggio]) {
    palindroma = true;
  } else {
    palindroma = false;
    break;
  }
  conteggio++;
}
return palindroma;
}

var palONonPal = parolaPalindroma(parola);

if (palONonPal == true) {
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

function genNum(){
  return Math.floor(Math.random() * (5 - 1) + 1);
}

var numCpu = genNum();

var somma = numCpu + numeroUtente;

function numPariDispari(num) {
var pariDispari = false;
if (somma % 2 == 0) {
  pariDispari = true;
}
return pariDispari;
}

var sommaPariDispari = numPariDispari(somma);

console.log("il tuo numero é " + numeroUtente + ", il numero del computer é " + numCpu + ".");
console.log("la somma é " + somma + ".");
console.log("hai scelto " + scelta + ".");

if ((sommaPariDispari == true) && (scelta == "pari") || (sommaPariDispari == false) && (scelta == "dispari")) {
  console.log("ha vinto l'utente");
} else {
  console.log("ha vinto il computer");
}
