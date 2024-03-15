const fs = require('node:fs');


const text1 = fs.readFileSync('./file.txt', 'utf-8');
console.log("Segundo texto", text1);


console.log('Mientras...'); //Se Ejecuta antes


const text2 = fs.readFileSync('./file2.txt', 'utf-8');
console.log("Segundo texto", text2);


