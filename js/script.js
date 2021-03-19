// Chiedere all' utente il numero di km che vuole percorrere (numero)
var numeroKm = prompt( 'Quanti km devi percorrere?' );
console.log(numeroKm);

var numeroKmAsNumber = parseInt(numeroKm);
console.log(numeroKmAsNumber);

// Chiedere l' età del passeggero (numero)
var etàPasseggero = prompt( 'Qual è la tua età?' );
console.log(etàPasseggero);

var etàPasseggeroAsNumber = parseInt(etàPasseggero);
console.log(etàPasseggeroAsNumber);

// Calcolo prezzo del biglietto generico in base ai km (0.21 € al km) (numero)
var prezzoBiglietto = numeroKmAsNumber * 0.21;
console.log(prezzoBiglietto);

var nuovoPrezzoBiglietto = prezzoBiglietto.toFixed(2);
console.log(nuovoPrezzoBiglietto);

// Calcolo sconto 20% per minorenni e 40% over 65 (numero)

// calcolo per minorenni
var percentMinorenni = prezzoBiglietto * 20 / 100;
console.log(percentMinorenni);

var prezzoBigliettoMinorenni = prezzoBiglietto - percentMinorenni;
console.log(prezzoBigliettoMinorenni);

var nuovoPrezzoBigliettoMinorenni = prezzoBigliettoMinorenni.toFixed(2);
console.log(nuovoPrezzoBigliettoMinorenni);

// calcolo per over 65
var percentOver = prezzoBiglietto * 40 / 100;
console.log(percentOver);

var prezzoBigliettoOver = prezzoBiglietto - percentOver;
console.log(prezzoBigliettoOver);

var nuovoPrezzoBigliettoOver = prezzoBigliettoOver.toFixed(2);
console.log(nuovoPrezzoBigliettoOver);

// Calcolo prezzo biglietto in base all' età del passeggero (numero)

if (etàPasseggeroAsNumber > 65){
    alert('Il prezzo del tuo biglietto è ' + nuovoPrezzoBigliettoOver + '€');
}else if(etàPasseggeroAsNumber < 18){
    alert('Il prezzo del tuo biglietto è ' + nuovoPrezzoBigliettoMinorenni + '€');
}else{
    alert('Il prezzo del tuo biglietto è ' + nuovoPrezzoBiglietto + '€');
}