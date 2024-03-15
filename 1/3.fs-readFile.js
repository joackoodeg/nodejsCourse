const fs = require('node:fs')


fs.readFile('./file.txt', 'utf-8', (err, text) => {
    console.log("Primer texto", text)
});


console.log('Mientras...'); //Se Ejecuta antes


fs.readFile('./file.txt', 'utf-8', (err, text) => {
    console.log("Segundo texto", text);
});

