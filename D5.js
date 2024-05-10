/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets)

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
    
*/
const sortedPets = [...pets];

// Ordina gli elementi dell'array copiato in ordine alfabetico
sortedPets.sort();

console.log(sortedPets); // Output: ['cat', 'dog', 'hamster', 'redfish']

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const reversedPets = [...pets];

// Inverti l'ordine degli elementi della copia dell'array "pets"
reversedPets.reverse();

console.log(reversedPets); // Output: ['redfish', 'hamster', 'cat', 'dog']

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const firstPet = pets.shift();

// Aggiungi il primo elemento alla fine dell'array
pets.push(firstPet);

console.log(pets); // Output: ['cat', 'hamster', 'redfish', 'dog']

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
for (const car of cars) {
    car.licensePlate = generateLicensePlate(); // Aggiungi una license plate generata casualmente
  }
  
  console.log(cars);
  
  // Funzione per generare una license plate casuale
  function generateLicensePlate() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let licensePlate = '';
  
    // Genera tre lettere casuali
    for (let i = 0; i < 3; i++) {
      licensePlate += letters.charAt(Math.floor(Math.random() * letters.length));
    }
  
    // Aggiungi un trattino
    licensePlate += '-';
  
    // Genera tre numeri casuali
    for (let i = 0; i < 3; i++) {
      licensePlate += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
  
    return licensePlate;
  }

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
    brand: 'Toyota',
    model: 'Corolla',
    color: 'silver',
    trims: ['le', 'se', 'xle'],
  };
  
  // Aggiungi il nuovo oggetto alla fine dell'array "cars"
  cars.push(newCar);
  
  // Rimuovi l'ultimo elemento dalla proprietà "trims" di ogni auto
  for (const car of cars) {
    car.trims.pop();
  }
  
  console.log(cars);






/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (const car of cars) {
    justTrims.push(car.trims[0]);
  }
  
  console.log(justTrims);



/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (const car of cars) {
    if (car.color.charAt(0).toLowerCase() === 'b') {
      console.log('Fizz');
    } else {
      console.log('Buzz');
    }
  }
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;
while (numericArray[i] !== 32 && i < numericArray.length) {
  console.log(numericArray[i]);
  i++;
}



/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const alphabetItalian = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'z'];

const italianPositions = [];

for (const char of charactersArray) {
  switch (char) {
    case 'a':
      italianPositions.push(1);
      break;
    case 'b':
      italianPositions.push(2);
      break;
    case 'c':
      italianPositions.push(3);
      break;
    case 'd':
      italianPositions.push(4);
      break;
    case 'e':
      italianPositions.push(5);
      break;
    case 'f':
      italianPositions.push(6);
      break;
    case 'g':
      italianPositions.push(7);
      break;
    case 'h':
      italianPositions.push(8);
      break;
    case 'i':
      italianPositions.push(9);
      break;
    case 'l':
      italianPositions.push(10);
      break;
    case 'm':
      italianPositions.push(11);
      break;
    case 'n':
      italianPositions.push(12);
      break;
    case 'o':
      italianPositions.push(13);
      break;
    case 'p':
      italianPositions.push(14);
      break;
    case 'q':
      italianPositions.push(15);
      break;
    case 'r':
      italianPositions.push(16);
      break;
    case 's':
      italianPositions.push(17);
      break;
    case 't':
      italianPositions.push(18);
      break;
    case 'u':
      italianPositions.push(19);
      break;
    case 'v':
      italianPositions.push(20);
      break;
    case 'z':
      italianPositions.push(21);
      break;
    default:
      // Se il carattere non è presente nell'alfabeto italiano, inserisci 0
      italianPositions.push(0);
  }
}

console.log(italianPositions); // Output: [7, 12, 19, 21, 4]
