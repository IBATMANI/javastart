alert("Månen er grøn")
alert("Mars er hvid")

// background farve skifter
document.body.style.backgroundColor = "yellow";


// Text til siden, som finder byId
document.getElementById('java').style.fontSize = '100px';

// Text til x og y
document.getElementById("x").innerHTML = "x = 500 ";
document.getElementById("y").innerHTML = "y = 2000: ";

// Textstoerrelse til x og y
document.getElementById('x').style.fontSize = '100px';
document.getElementById('y').style.fontSize = '100px';

// variabler, x, y og z har fået en værdi
var x = 500;
var y = 2000;
var z = x + y;

// Text til z og z-vaerdien bliver visses selv
document.getElementById("z").innerHTML = "Resultat af z er: " + z;

// Textstoerrelse til z
document.getElementById('z').style.fontSize = '100px';

// Text til x og y
document.getElementById("a").innerHTML = "Abasin";
document.getElementById("b").innerHTML = "Safi";

// Textstoerrelse til x og y
document.getElementById('a').style.fontSize = '100px';
document.getElementById('b').style.fontSize = '100px';

// variabler, x, y og z har fået en værdi
var a = "Abasin";
var b = "Safi";
var d = " "
var c = a + d + b;

// Text til z og z-vaerdien bliver visses selv
document.getElementById("c").innerHTML = "Fulde navn: " + c;

// Textstoerrelse til z
document.getElementById('c').style.fontSize = '100px';
document.getElementById('c').style.color = 'pink';
