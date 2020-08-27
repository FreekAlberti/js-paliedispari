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
