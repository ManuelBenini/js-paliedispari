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


 // CONSEGNA - Palidroma

const invertBtn = document.getElementById('invert-btn');
  
invertBtn.addEventListener('click' , function(){

  let userWord = document.querySelector('#string').value;

  while(!isNaN(userWord)){
    alert('Non hai inserito una parola, riprovare')
    userWord = prompt('Inserisci la parola correttamente').trim();
    console.log('La parola inserita dall\'utente è:', userWord);
  }

  console.log('La parola inserita dall\'utente è:', userWord);

  if(userWord === reverseString(userWord)){
    console.log('La parola inserita dall\'utente -->', userWord , '<-- se invertita, risulta palindroma.');
  }else{
    console.log('La parola inserita dall\'utente -->', userWord , '<-- se invertita, non risulta palindroma.');
  }

});



//  CONSEGNA 2 - Pari e Dispari

const evenOddBtn = document.getElementById('even-odd-btn');

evenOddBtn.addEventListener('click', function(){

  let userEvenOdd = document.getElementById('even-odd').value.trim().toLowerCase();
  let userChoseFlag = false;
  let userNumberFlag = false;
  let userNumber = parseInt(document.getElementById('chosen-number').value.trim());

  if(userEvenOdd === 'pari' || userEvenOdd === 'dispari'){
    userChoseFlag = true;
  }

  while(userChoseFlag === false){
    alert('Non hai inserito la parola corretta, riprovare')
    userEvenOdd = prompt('Inserisci pari o dispari').trim();
    if(userEvenOdd === 'pari' || userEvenOdd === 'dispari'){
      userChoseFlag = true;
    }else{
      userChoseFlag = false;
    }
  }

  if(userNumber > 1 || userNumber <= 5){
    userNumberFlag = true;
  }

  while(userNumberFlag === false){
    
    if(isNaN(userNumber)){
    alert('Non hai inserito un numero, riprovare')
    userNumber = parseInt(prompt('Inserisci un numero').trim());
    }else if(userNumber < 1){
    alert('Hai inserito un numero minore di 1, riprovare')
    userNumber = parseInt(prompt('Inserisci un numero').trim());
    }else if(userNumber > 5){
    alert('Hai inserito un numero maggiore di 5, riprovare')
    userNumber = parseInt(prompt('Inserisci un numero').trim());
    }else{
      userNumberFlag = true;
    }
    
  }

  const sum = parseInt(userNumber + randomNumber(1,5));

  console.log('La scelta fatta dall\'utente è ->', userEvenOdd, '<-');
  console.log('Il numero inserito dall\'utente è', userNumber);
  console.log('La somma è', sum);

  if(userEvenOdd === 'pari' && evenOrOdd(sum)){
    alert('Hai vinto!')
    console.log('L\'utente ha vinto poichè ha scelto -> pari <- ed il numero risultante dalla somma con un numero casuale dato dal programma è pari!');
  }else if(userEvenOdd === 'dispari' && !evenOrOdd(sum)){
    alert('Hai vinto!')
    console.log('L\'utente ha vinto poichè ha scelto -> dispari <- ed il numero risultante dalla somma con un numero casuale dato dal programma è dispari!');
  }else{
    alert('Hai perso!')
    console.log('L\'utente ha perso poichè ha scelto ->', userEvenOdd, '<- ed il numero risultante dalla somma con un numero casuale dato dal programma non lo è');
  }

  console.log('Il numero è pari?', evenOrOdd(sum));
});


// FUNCTIONS 

// Inverti stringhe
  function reverseString(string) {
    const wordArray = string.split("");
    console.log('Questo è l\'array della parola', wordArray);
    const reverseArray = wordArray.reverse();
    console.log('Questo è l\'array invertito', reverseArray);
    const reversedString = reverseArray.join("")
    console.log('Questo è la stringa invertita', reversedString);
    return reversedString;
  }
//

// Estrattore numero random
  function randomNumber(min , max) {
    return Math.floor(Math.random() * (max - min) + min);
    
  }
//

// Controllo pari o dispari
  function evenOrOdd(number) {
    if(number % 2){
      return false;
    }else{
      return true;
    }
    
  }
//
