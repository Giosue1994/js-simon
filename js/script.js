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

alert('Tieni a mente questi numeri per 30 secondi: ' + arrayNumeriCasuali);
console.log('Numeri da indovinare ', arrayNumeriCasuali);

// chiuso l'alert parte un timer di 30 secondi con setTimeout
setTimeout(chiediNumeri, 500); // TODO: cambiare valore dei ms

// passati 30 secondi creo un promp dentro un ciclo che
// chiede di inserire i 5 numeri
function chiediNumeri() {

  // creo due liste dove vengono inseriti i numeri scelti dall'utente e i numeri individuati
  var numeriInseriti = [];
  var numeriIndividuati = [];

  // il ciclo si ferma quando i numeri inseriti arrivano a 5
  while (numeriInseriti.length < 5) {
    var numeroUtente = parseInt(prompt('Inserisci 5 numeri'));
    numeriInseriti.push(numeroUtente);
      }

      // creo un ciclo che controlla i numeri da indovinare i quelli inseriti dall'utente
      for (var j = 0; j < arrayNumeriCasuali.length; j++) {

        for (var k = 0; k < numeriInseriti.length; k++) {

          // se sono uguali vengono inseriti nella lista dei numeri individuati
          if (numeriInseriti[k] === arrayNumeriCasuali[j]) {
            numeriIndividuati.push(numeriInseriti[k]);
          }

        }
      }

  console.log('Numeri inseriti dall\'utente ' + numeriInseriti);

  //stampo quanti e quali numeri sono stati indovinati
  console.log('Sono stati indovinati ' + numeriIndividuati.length + ' numeri.');
  console.log('I numeri individuati sono: ' + numeriIndividuati);

}
