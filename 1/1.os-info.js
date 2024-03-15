const os = require('node:os')

console.log("Free RAM: ", os.freemem()/1024/1024);
console.log("Time: ", os.uptime()/60/60)

