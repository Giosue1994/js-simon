// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati.

// creo un alert che espone 5 numeri casuali da 1 a 100
var arrayNumeri = [];

for (var i = 0; i < 5; i++) {
  arrayNumeri.push(Math.floor(Math.random() * 100 ) + 1);
}

alert(arrayNumeri);
console.log(arrayNumeri);

// chiuso l'alert parte un timer di 30 secondi con setTimeout
setTimeout(chiediNumeri, 3000); // TODO: cambiare valore dei ms

// passati 30 secondi creo un promp dentro un ciclo che
// chiede di inserire i 5 numeri
function chiediNumeri() {

  // creo una lista dove vengono inseriti i numeri scelti dall'utente
  var numeriInseriti = [];

  // il ciclo si ferma quando i numeri inseriti arrivano a 5
  while (numeriInseriti.length < 5) {
    var numeroUtente = parseInt(prompt('Inserisci 5 numeri'));
    numeriInseriti.push(numeroUtente);
  }

  console.log(numeriInseriti);
}

// finito il ciclo stampo quanti e quali numeri sono stati indovinati
