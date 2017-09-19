const fs = require('fs');
let animals;
const firstLetter = process.argv[2];

fs.readFile('./animals.txt', 'utf-8', (err,data) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(data);
  console.log(firstLetter + 'ap');

  animals = data.split("\n");
  
});

// fs.writeFile('./example.txt', 'I will be written to example.txt.', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file successfully written!");
//   }
// });

// console.log(process.argv[3]);


// fs.readFile('./animals.txt', 'utf-8', (err,data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });
