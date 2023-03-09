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

// CLIENT FORM
const container = document.getElementById('container')

//creo tre variabili collegate agli input del form
const nameBox = document.querySelector('input[name="client-name"]')
const mileageBox = document.querySelector('input[name="mileage"]')
const ageBox = document.querySelector('input[name="age"]')

//creo una funzione che mi permetta di ricevere i dati del utente al click del bottone
const buttonCalc = document.querySelector('.generate')
console.log(buttonCalc);

const buttonCanc = document.querySelector('.cancel')
console.log(buttonCanc);

buttonCalc.addEventListener('click', function () {
    let clientName = nameBox.value;
    let mileage = mileageBox.value;
    let age = ageBox.value;

    console.log(clientName);
    console.log(mileage);
    console.log(age);

    // // CALCULATOR
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

    document.getElementById('print-nameclient').innerHTML = `
    <h2>${clientName}</h2>
    `
    document.getElementById('print-mileage').innerHTML = `
    <h4>${mileage}</h4>
    `
    document.getElementById('print-age').innerHTML = `
    <h4>${age}</h4>
    `
    document.getElementById('total-price').innerHTML = `
    <h2>${totalPrice}&euro;</h2>
    `
    document.getElementById('discount').innerHTML = `
    <h4>${discountApplied20}&euro;</h4>
    `

}
if (age > 64) {
    totalPrice -= discountApplied40;
    console.log(discountApplied40);

    document.getElementById('print-nameclient').innerHTML = `
    <h2>${clientName}</h2>
    `
    document.getElementById('print-mileage').innerHTML = `
    <h4>${mileage}</h4>
    `
    document.getElementById('print-age').innerHTML = `
    <h4>${age}</h4>
    `
    document.getElementById('total-price').innerHTML = `
    <h2>${totalPrice}&euro;</h2>
    `
    document.getElementById('discount').innerHTML = `
    <h4>${discountApplied40}&euro;</h4>
    `

}
else{
    totalPrice = totalPrice;

    document.getElementById('print-nameclient').innerHTML = `
    <h2>${clientName}</h2>
    `
    document.getElementById('print-mileage').innerHTML = `
    <h4>${mileage}</h4>
    `
    document.getElementById('print-age').innerHTML = `
    <h4>${age}</h4>
    `
    document.getElementById('total-price').innerHTML = `
    <h2>${totalPrice}&euro;</h2>
    `
}

console.log(totalPrice);
}
 )

buttonCanc.addEventListener('click', function () {
    let clientName = "";
    let mileage = "";
    let age = "";
    let totalPrice ="";
    let discountApplied20 ="";
    let discountApplied40 ="";

    console.log(clientName);
    console.log(mileage);
    console.log(age);

    document.getElementById('print-nameclient').innerHTML = `
    <h2>${clientName}</h2>
    `
    document.getElementById('print-mileage').innerHTML = `
    <h4>${mileage}</h4>
    `
    document.getElementById('print-age').innerHTML = `
    <h4>${age}</h4>
    `
    document.getElementById('total-price').innerHTML = `
    <h2>${totalPrice}</h2>
    `
    document.getElementById('discount').innerHTML = `
    <h4>${discountApplied20}</h4>
    `
    document.getElementById('discount').innerHTML = `
    <h4>${discountApplied40}</h4>
    `
}
 )


