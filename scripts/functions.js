
//Funktionen 
//Syntax: 

//function identifier(optional Parameter) {code_block}

console.log("Hallo Welt"); // Ausgabe von Hallo Welt
console.clear(); //Lösche den Bildschirmausgabe 

//Erstellen einer einfachen Funktion ohne Rückgabe
//Solche Funktionen geben in JS standardmäßig undefinied zurück

function greeter() {
    console.log("Hallo Welt");
}
greeter();

//Erstellen einer einfachen Funktion mit Rückgabe 

function greetPerson(name) {
    return "Hello " + name; 
}

// Funktionne können auch anderen FUnktionen als Parameter übergeben werden
console.log(greetPerson("Max Mustermann"));


function multiplier(numOne, numTwo) {
    return numOne * numTwo;
}

let ergebnis1 = multiplier(5, 25);
let ergebnis2 = multiplier(9, 99);
    
//Alias für Methode
console.log("Alias Sample:")
let testX = multiplier;
console.log(testX(12, 44));




// default-Werte
// Falls eine Funktion mit zu wenigen Parametern aufgerufen wird, können wir sie mit default-Parametern, also Fallback werten

function divide(numOne = 1, numTwo = 1) {
    return numOne / numTwo;
}

let erg = divide(12,3); //4
console.log(erg);

erg = divide(12);


console.log(erg); //12
console.log(divide()); //1





// Kontrollstrukturen
// if
// Bedingter Block
// Syntax:
// if (Bedingung) {Code_Block}
// Können bleiebig verschachtelt werden
// Der Blockinhalt wird nur ausgeführt, falls die Bedingung wahr ist

let numberOne = 20;
let numberTwo = 30;

if (numberOne < numberTwo) {
    console.log(`${numberOne} ist kleiner als ${numberTwo}`);
} // else if muss immer auf if folgen
else if (numberOne > numberTwo) {
    console.log(`${numberOne} ist größer als ${numberTwo}`);
} //else wird ausgeführt falls der vorangehende if Block oder else if block falsch war
else {
    console.log(`${numberOne} ist gleich groß wie ${numberTwo}`);
}


// Vergleichs-Operatoren in JS:

// == selber Wert
// === selber Wert und selber Typ
// != ungleicher Wert
// !== ungleicher Wert oder Typ
// Empfehlung zu === und !==
// < kleiner als
// > größer als
// <= kleiner gleich
// >= größer gleich

function IsEven(number) {

    number += 2;
    console.log(number);
    return number % 2 === 0;
}

let stringNumber = "4";
let integerNumber = 4;

console.log(IsEven(stringNumber));
console.log(IsEven(integerNumber));


if(stringNumber == integerNumber) {
    console.log("string Number und integer Number haben den selben WERT");
}
else {
    console.log("string Number und integer Number haben nicht den selben WERT");
}


if (stringNumber === integerNumber) {
    console.log("string Number und integer Number haben den selben WERT und Typ");
}
else {
    console.log("string Number und integer Number haben nicht den selben WERT und Typ");
}


//Kurzschreibform von if -> Ternary
// Ternary Operator
// Kurzschreibweise für if-Blöcke
// Syntax: (Bedingung) ? code-Block falls Wahr : code-Block falls falsch


function IsEven(number){
    return (number % 2 === 0) ? true : false; 
}

//oder Zweites Beispiel:
let textausgabe = (integerNumber % 2 == 0) ? "Ist durch 2 Teilbar" : "Mist ungerade Zahl!";



// switch-Case
// Vergleicht den Wert einer Variable oder direkt einen Wert mit mehreren Möglichkeiten

//Syntax:
/* switch(variable) {
    case 1:
        code Fall 1;
        break;
    case 2:
        code Fall 2;
        break;
    default:
        code Falls kein Fall eintrat
}
*/

switch (numberOne) {
    case 10:
        console.log("Zahl ist 10");
        break; // Ist wichtig, da sonst alles nach dem ersten eingetretenen Fall ausgeführt wird
    case 20:
        console.log("Zahl ist 20");
        break;
    case 30:
        console.log("Zahl ist 30");
        break;
    default:
        console.log("Zahl hat einen unerwarteten Wert");
    // Beim default benötigen wir kein break, da danach nichts mehr kommt
}


// Loops | Schleifen in JS


// BESCHREIBUNG: Ermöglichen das mehrfache ausführen eines Code-Blocks bis ein bestimmte Bedingung eintritt


// Kopfgesteuerte Schleife:
// BESCHREIBUNG:
//      -   Bedingung der Schleife steht in der Kopfzeile
//      -   Kann sein, dass die Schleife gar nicht ausgeführt wird  
// Schleifentypen: 
// - for
// - while


// Fußgesteuerte Schleife:
//BESCHREIBUNG: 
// -    Bedingung erst in der Fußzeile geprüft
// -    Schleife wird immer mindestens einmal ausgeführt


// do...while


// for-Schleife
// Syntax:


function countTo(limit) { 
    console.log("Schleife startet:");
    for (let i = 0; i <= limit; i++) {
        console.log(i);
    }
    console.log("Schleife beendet:");
}

countTo(10);


// Verschachtelte Schleifen:
// Funktionieren wie eine Uhr
// Bevor der Stundenzeiger eins weiter tickt muss der Minuten Zeiger eine Umdrehung machen und bevor der Minuten Zeiger eins weiter tickt muss der Skeunden Zeiger einen ganzen Durchlauf machen
function clock() {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 60; j++) {
            for (let k = 0; k < 60; k++) {
                console.log(`${i}:${j}:${k}`);
            }
        }
    }
}


// FizzBuzz
// Jede Zahl die nur durch 3 teilbar ist wird mit Fizz betitelt
// Jede Zahl die nur durch 5 teilbar ist wird mit Buzzz betitelt
// Zahlen die sowohl durch 3 als auch 5 teilbar sind werden mit FizzBuzz betitelt
// Alle anderen Zahlen werden normal ausgegeben
// Wir wollen nun eine Funktion schreiben, die eine Obergrenze übergeben bekommt bis zu der gezählt werden soll
// und jede dieser Zahlen soll dann auf ihre Teilbarkeit durch 3 und 5 geprüft werden und nach den obigen Regeln in der Konsole ausgegeben werden



for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }




let i = 1;
do {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }

  i++;
} while (i <= 100);


//break und contine bei Schleifen 
for (let i = 0; i < 11; i++) {
    
    if (i % 2 === 0) {
        console.log(i + " is eine gerade Zahl")
        continue; //Breche hier ab und gehe in den nächsten Schleifen-Interval 
    }
    else if (i === 7)
    {
        break; //Schleife wird abgebrochen 
    }
}



// Rekursiven Funktionen
// Funktionen, die sich in ihrem Körper selbst aufrufen
// Müssen immer eine BEdingung enthalten, damit es keine endlos Schleife wird
// Können schnell inneffizient werden, da es viele Funktionsaufrufe sind

function faculty(limit) {
    if (limit < 2) {
        return 1;
    }
    else {
        return limit * faculty(limit - 1);
    }
}



//Lambda - Funktionen
//Alternativen zu den anonymen Funktionen

//Anonyme Funktionen sind Funktionen ohne identifier
// Weißt man im normalfall einer Variable zu, damit sie wiederverwendbar sind
// Einfache anonyme Funktion


let sum = function (numOne, numTwo) {return numOne * numTwo};

//Wird via Alias 'sum' aufgerufen
let ergebnis3 = sum(8,9);

//Sind identisch zu normalen Funktionen 

//Lambdas sind die kompakte Alternative zu den anonymen Funktoinen 
//Pfeilfunktionen 

let quadruple = (a) => a*4;
let square = (a) => a*a;

console.log(square(12));

function vervierfachen (a) {
    let ergebnis = a * 4;
    return ergebnis;
}

function quadrieren (a) {
    return a * a;
}


// Lambdas werden meistens als Parameter für andere Funktionen benutzt 

// wenn eine Lambda Funktion mehrzeilig wird, verliert sie einige ihrer Vorteile
let mehrzeilig = (a, b) => {
    a *=2; // a = a * 2;
    b *=2;
    return a *b;
}

console.log(mehrzeilig(3,4)); //48


