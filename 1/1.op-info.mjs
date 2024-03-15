import { freemem, uptime } from 'node:os';

console.log("Free RAM: ", freemem()/1024/1024);
console.log("Time: ", uptime()/60/60)