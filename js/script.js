// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo due caselle di input e almeno un bottone per inviare i dati in pagina, in cui l’utente potrà inserire i dati e poi visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// {MY SCRIPT}

// creo due variabili che conterranno i dati in input del utente. (Valore di ritorno di un prompt)
let mileage = prompt("Inserisci la quantità di km che vuoi percorrere");
let age = prompt("Inserisci la tua età");

console.log(mileage + age);

// creo una constante contenente il prezzo fisso per km
const priceForKm = 0.21;

console.log(priceForKm);
// calcolo il costo totale sulla base di km da percorrere e prezzo per km
let totalPrice = (mileage * priceForKm).toFixed(2);

console.log(totalPrice);

// creo due constanti contenenti i possibili sconti che verranno applicati sul prezzo del biglietto
const discount20 = 0.20;
const discount40 = 0.40;

//creo due variabili che calcoleranno lo sconto da applicare sul prezzo finale
let discountApplied20 = (totalPrice * discount20).toFixed(2);
let discountApplied40 = totalPrice * discount40.toFixed(2);

// creo più condizioni che mi permettano di verificare -se e quale- sconto applicare al utente, sulla base delle informazioni che utente mi ha fornito
if (age < 18) {
    totalPrice -= discountApplied20;
    console.log(discountApplied20);

    document.getElementById('final-price').innerHTML = `
    <h2>${totalPrice}&euro;</h2>
    `
    document.getElementById('mileage').innerHTML = `
    <h4>${mileage}</h4>
    `
    document.getElementById('age').innerHTML = `
    <h4>${age}</h4>
    `
    document.getElementById('discount').innerHTML = `
    <h4>${discountApplied20}</h4>
    `

}
if (age > 64) {
    totalPrice -= discountApplied40;
    console.log(discountApplied40);
    document.getElementById('final-price').innerHTML = `
    <h2>${totalPrice}&euro;</h2>
    `
    document.getElementById('mileage').innerHTML = `
    <h4>${mileage}</h4>
    `
    document.getElementById('age').innerHTML = `
    <h4>${age}</h4>
    `
    document.getElementById('discount').innerHTML = `
    <h4>${discountApplied40}</h4>
    `
}
else{
    totalPrice = totalPrice;
    document.getElementById('final-price').innerHTML = `
    <h2>${totalPrice}&euro;</h2>
    `
    document.getElementById('mileage').innerHTML = `
    <h4>${mileage}</h4>
    `
    document.getElementById('age').innerHTML = `
    <h4>${age}</h4>
    `
}

console.log(totalPrice);

