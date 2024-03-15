const fs = require('node:fs/promises')

fs.readFile('./file.txt', 'utf-8')
    .then(text => {console.log("Primer texto", text)})

console.log('Mientras...'); //Se Ejecuta antes


fs.readFile('./file.txt', 'utf-8')
    .then(text => {console.log("Segundo texto", text)})