import { readFile } from 'node:fs/promises';


const text = await readFile('./file.txt', 'utf-8')
console.log("primer texto", text)
    
console.log("mientras")

const text2 = await readFile('./file.txt', 'utf-8')
console.log("segundo texto", text2)
    

