var input = require("fs").readFileSync("stdin", "utf-8");

var n = Number(3.14159)
var raio = Number(input);
var area = Math.pow(raio, 2) * n
console.log(`A=${area.toFixed(4)}`)