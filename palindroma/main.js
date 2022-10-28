// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


const word = prompt("Inserisci una parola");

function palindrome(str) {
    
    for (let i = 0; i < str.length; i++) {
        
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
        
    }
    return true;  
}

console.log(palindrome(word));