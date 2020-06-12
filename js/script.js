// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati.

// creo un alert che espone 5 numeri casuali da 1 a 100
var arrayNumeriCasuali = [];

for (var i = 0; i < 5; i++) {
  arrayNumeriCasuali.push(Math.floor(Math.random() * 100 ) + 1);
}

alert(arrayNumeriCasuali);
console.log(arrayNumeriCasuali);

// chiuso l'alert parte un timer di 30 secondi con setTimeout
setTimeout(chiediNumeri, 500); // TODO: cambiare valore dei ms

// passati 30 secondi creo un promp dentro un ciclo che
// chiede di inserire i 5 numeri
function chiediNumeri() {

  // creo una lista dove vengono inseriti i numeri scelti dall'utente
  var numeriInseriti = [];
  var numeriCorretti = [];
  var numeriErrati = [];


  // il ciclo si ferma quando i numeri inseriti arrivano a 5
  while (numeriInseriti.length < 5) {
    var numeroUtente = parseInt(prompt('Inserisci 5 numeri'));
    numeriInseriti.push(numeroUtente);

    // finito il ciclo stampo quanti e quali numeri sono stati indovinati
    if (numeriInseriti[i] === arrayNumeriCasuali[i]) {

      numeriCorretti.push(numeroUtente);
      console.log('i numeri corretti sono ' + numeriCorretti);
    } else {
      numeriErrati.push(numeroUtente);
      console.log('i numeri errati sono ' + numeriErrati);
    }
  }

  console.log('I numeri corretti inseriti sono: ' + numeriCorretti.length);


}
