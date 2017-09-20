const fs = require('fs');
const http = require('http');
const querystring = require('querystring');


let animals;
let filtered;
let letterAnimals;
let animalLetter;
const firstLetter = process.argv[2];

fs.readFile('./animals.txt', 'utf-8', (err,data) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(data);

  letterAnimals = filterAnimals(data, firstLetter);
  // animals = data.split("\n");
  // filtered = animals.filter(animal => animal[0].toLowerCase() === firstLetter);
  // letterAnimals = filtered.join("\n");
});

const filterAnimals = (animalList, letter) => {
  animals = animalList.split("\n");
  const filteredAnimals = animals.filter(animal => 
    animal.startsWith(letter.toUpperCase())).join("\n");
  return filteredAnimals;
};

setTimeout(() => {
  fs.writeFile(`./${firstLetter}_animals.txt`, `${letterAnimals}`, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(letterAnimals);
      console.log(`${firstLetter}_animals created!`);
    }
  });
}, 100);

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



// const server = http.createServer((req, res) => {
//   res.write('hellO World');
//   res.end();
// });

// server.listen(8000, () => console.log("I'm listening on Port 8000! ^__^"));


// const server = http.createServer((req, res) => {
//   const query = req.url.split('?')[1];
  
//   if (query === 'undefined') {
//     fs.readFile('./animals.txt', 'utf-8', (err,data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       // console.log(data);
//     });
//   }

//   animalLetter = querystring.parse(query).letter;

//   console.log(animalLetter);
//   res.write(`${animalLetter}`);
//   res.end();
// });

// server.listen(8000, () => console.log('Listening on port 8000!'));
