const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers); 

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for(let x = 0; x < teachers.length ; x++) {

   if(teachers[x].length >= 5) {
    longNames.push(teachers[x]);  
   }
}

console.log(longNames); 

// 3. Rimuovi 'Ed' dall'array teachers

//Nome che voglio rimuovere
const nameToremove = "Ed"; 
// cerco la posizione di Ed all'interno dell'array e la salvo in una variabile
const index = teachers.indexOf(nameToremove); 
//console.log(index);

//contro che il nome sia nell' array 
if( index !== -1) {
  teachers.splice(index,1);
}

console.log(teachers); 

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

const nameResearch = "Fabio"; 
let found = false ; 

for( let x = 0 ; x < teachers.length ; ++x) {
  if(teachers[x] === nameResearch) {
found = true ; 
  }
}

const isFabioPresent = found ; 
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = (teachers.join());
console.log(teachersString); 
 