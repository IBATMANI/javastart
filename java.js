//alert("Månen er grøn")
//alert("Mars er hvid")

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

// variabler, a, b, c og d har fået en værdi
var a = "Abasin";
var b = "Safi";
var d = " "
var c = a + d + b;

// Text til c og c-vaerdien bliver visses selv
document.getElementById("c").innerHTML = "Fulde navn: " + c;

// Textstoerrelse til c
document.getElementById('c').style.fontSize = '100px';
document.getElementById('c').style.color = 'pink';


const rum = ["Sol", "Venus", "Uranus", "Pluto"];
document.getElementById("rum").innerHTML = rum;
document.getElementById('rum').style.fontSize = '100px';
document.getElementById('rum').style.color = 'blue';

var text = "";
for (var i = 0; i < rum.length; i++) {
  text += rum[i] + "<br>";
}


const tal = [1, 2, 3, 4];
document.getElementById("tal").innerHTML = tal;
document.getElementById('tal').style.fontSize = '100px';
document.getElementById('tal').style.color = 'blue';

function myFunction(x, y) {
    if (y === undefined) {
      y = 100;
    }  
    return x * y;
  }

document.getElementById("percent").innerHTML = "Moms af 100Kr er  " + myFunction(0.25) + "Kr. ";
document.getElementById('percent').style.fontSize = '100px';
document.getElementById('percent').style.color = 'red';

function per(numA, numB) {
    return (numA / numB) * 100;
  }

console.log(per(30, 75));

