// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(number) {
    if(number % 2 === 0){
        return true;
    }
    return false;
    
}


const evenOdd = prompt("Scegli tra pari o dispari");

const userNumber = Number(prompt("Scegli un numero tra 1 e 5"));

const cpuNumber = getRndInteger(1, 5);

console.log(cpuNumber);


const total = userNumber + cpuNumber;

console.log(total);

console.log(isEven(total));

if ((isEven(total) && evenOdd == "pari") || (!isEven(total) && evenOdd == "dispari")) {
    console.log("hai vinto");

} else {
    console.log("hai perso");

}

