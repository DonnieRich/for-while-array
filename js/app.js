// Generatore casuale di numeri UNICI

const min = 1;
const max = 15;
const randomNumbers = 15;

const randomViewed = [];

while (randomViewed.length < randomNumbers) {
    // Genero un numero casuale
    const randomNumber = Math.floor(Math.random() * max) + min;

    if (randomViewed.includes(randomNumber) === false) {
        randomViewed.push(randomNumber);
    }
}

console.log("Random Viewed", randomViewed);

/**
 * filtrare da un array i numeri ripetuti, per ottenere un secondo array senza ripetizioni
 */

// result => [99, 5, 27, 1, 87, 36, 41, 77]

const originalNumbers = [99, 5, 27, 99, 1, 87, 36, 5, 41, 77, 5]; // array[number]
// const originalNumbers = [99, 99, 99, 99, 99, 99];
const filteredNumbers = []; // array

for (let i = 0; i < originalNumbers.length; i++) {

    const originalNumber = originalNumbers[i]; // number 99

    // if (filteredNumbers.includes(originalNumber) === false) {
    //     filteredNumbers.push(originalNumber);
    // } else {
    //     duplicateNumbers.push(originalNumber);
    // }

    let isDuplicate = false;
    for (let j = 0; j < filteredNumbers.length; j++) {

        if (filteredNumbers[j] === originalNumber) {
            isDuplicate = true;
        }

    }

    if (isDuplicate === false) {
        filteredNumbers.push(originalNumber);
    }


}
console.log("Original Numbers", originalNumbers);
console.log("Filtered Numbers", filteredNumbers);