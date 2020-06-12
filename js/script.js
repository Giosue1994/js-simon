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

// passati 30 secondi creo un promp dentro un ciclo che
// chiede di inserire i 5 numeri

// finito il ciclo stampo quanti e quali numeri sono stati indovinati
