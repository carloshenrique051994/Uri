var input = require("fs").readFileSync("stdin","utf-8");

var raio =  Number(input)
var pi = 3.14159
volume = (4/3) * pi * (Math.pow(raio, 3))
console.log(`VOLUME = ${volume.toFixed(3)}`)