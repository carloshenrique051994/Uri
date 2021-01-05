var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n")

var [a, b, c] = valores.shift().split(" ")
var pi = 3.14159

var areaTriangulo = (a*c)/2
var areaCirculo = (Math.pow(c, 2)*pi)
var areaTrapezio = ((Number(a)+Number(b))*c)/2
var areaQuadrado = b*b
var areaRetangulo = a*b
console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}
CIRCULO: ${areaCirculo.toFixed(3)}
TRAPEZIO: ${areaTrapezio.toFixed(3)}
QUADRADO: ${areaQuadrado.toFixed(3)}
RETANGULO: ${areaRetangulo.toFixed(3)}`)
