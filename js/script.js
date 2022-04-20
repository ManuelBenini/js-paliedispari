/*
  CONSEGNA - Palidroma
  1a - Chiedere all’utente di inserire una parola
  2a - Creare una funzione per capire se la parola inserita è palindroma
  Bonus: L’inserimento avviene tramite un campo input

  CONSEGNA 2 - Pari e Dispari
  1b - L’utente sceglie pari o dispari
  2b - inserisce un numero da 1 a 5.
  3b - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  4b - Sommiamo i due numeri
  5b - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  6b -Dichiariamo chi ha vinto.
  Bonus: L’inserimento avviene tramite un campo input
*/

const invertBtn = document.getElementById('invert-btn');
  

invertBtn.addEventListener('click' , function(){

  let userWord = document.querySelector('#string').value;

  while(!isNaN(userWord)){
    alert('Non hai inserito una parola, riprovare')
    userWord = prompt('Inserisci la parola correttamente').trim();
    console.log('La parola inserita dall\'utente è:', userWord);
  }

  if(userWord === reverseString(userWord)){
    console.log('La parola inserita dall\'utente -->', userWord , '<-- se invertita, risulta palindroma.');
  }else{
    console.log('La parola inserita dall\'utente -->', userWord , '<-- se invertita, non risulta palindroma.');
  }

  function reverseString(string) {
    const wordArray = string.split("");
    console.log('Questo è l\'array della parola', wordArray);
    const reverseArray = wordArray.reverse();
    console.log('Questo è l\'array invertito', reverseArray);
    const reversedString = reverseArray.join("")
    console.log('Questo è la stringa invertita', reversedString);
    return reversedString;
  }
});




