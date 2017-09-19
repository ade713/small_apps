const fs = require('fs');
let animals;
let filtered;
let letterAnimals;
const firstLetter = process.argv[2];

fs.readFile('./animals.txt', 'utf-8', (err,data) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(data);

  animals = data.split("\n");
  filtered = animals.filter(animal => animal[0].toLowerCase() === firstLetter);
  // console.log(filtered);
  letterAnimals = filtered.join("\n");
  console.log('HELLO', letterAnimals);
});

fs.writeFile(`./${firstLetter}_animals.txt`, `${letterAnimals}`, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(letterAnimals);
    console.log(`${firstLetter}_animals created!`);
  }
});

// fs.readFile('./animals.txt', 'utf-8', (err,data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// fs.writeFile('./example.txt', 'I will be written to example.txt.', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file successfully written!");
//   }
// });

// console.log(process.argv[3]);


