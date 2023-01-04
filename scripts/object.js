// Vordefinierte Objekte
// string
// arrays
// Math
// Date


//Thema: string



//strings
//Ist an sich eine Sonderform des Arrays
//Ist eine Aneinanderreihung von Buchstaben/Zahlen/Zeichen

let testString = "Ich bin ein Teststring";

//EIGENSCHAFTEN / PROPERTIES:
testString.length; // => Die Anzahl der Zeichen die im String enthalten sind 
console.log(testString.length);


//Wie spreche ich einzelne Buchstaben eines Strings an? 
//Wir können dafür die s.g. Bracket - Notation benutzen
// testString[index];
//Gibt und den Buchstaben an der entsprechenden Stelle des Strings zurück 

testString[0]; // => I

//letzte Stelle eine Strings
testString[testString.length - 1];



//METHODEN:


//toUpperCase / toLowerCase 
let upperString = testString.toUpperCase(); //Es wird eine Rückgabe in Großbuchstaben erfolgen 
let lowerString = testString.toLowerCase(); // ""                   in Kleinbuchstaben erfolgen


//identifier.slice(startpunkz, ?ende);
//Es wird ein neuer String zurückgegeben bei der index Startpunkt beginnt und 1 Stelle vor Ende endet
//Wenn ende nicht übergeben wird, wird deer String vom Startpunkt bis zum Ende des Strings zurückgegeben
//Wenn weder start noch Ende definiert werden, der der String komplett zurückgegeben 

let part1String = testString.slice(0,12);
// part1String besteht aus den Zeichen von testString[0] bis testString[11];
console.log("Slice-Beispiel -> testString.slice(0,12) : " + part1String);

let part2String = testString.slice(12);
console.log("Slice-Beispiel -> testString.slice(12) : " + part2String);

let partString3 = testString.slice();
// Enthält den kompletten Inhalt von testString



// identifier.split(?Seperator)
// Trennt den String in ein Array, wobei jeweils beim Seperator getrennt wird und der Seperator selbst ist nicht im Array  
// Wenn kein eperator übergeben wird, wird der gesamt Sting als ein Array Element zurückgegeben
// Verändert den orginalen String nicht 

let stringArr = testString.split(" ");
console.log('Split-Beispiel: testString.split(" ") ' + stringArr);

stringArr = testString.split("i");
console.log('stringArr = testString.split("i")' + stringArr);


//identiefier.charCodeAt(index);
//Gibt uns den Unicode-Wert des Buchstabens an Indexstelle index zurück 

let uniCodeC = testString.charCodeAt(1);
console.log('testString.charCodeAt(1):' + uniCodeC); //99 wird ausgegeben = kleiner C-Buchstabe


//identiefier.charAt(index);
//Gibt den Buchstabens an Indexstelle index zurück 



// indexOf / lastIndexOf
// identifier.indexOf(suchbegriff, ?starposition) //liefert erste Position des gesuchten Characters / String
// identifier.lastIndexOf(suchbegriff, ?startposition)
// indexOf gibt die erste gefundene Indexstelle des suchbegriffes zurück
// lastIndexOf() gibt die letzte gefunden Stelle zurück
// Falls der suchbegriff nicht enthalten ist geben beide -1 zurück



//Wir wollen eine Funktion schreiben, die einen String als PArameter enthält und us in der Konsole ausgibt,
//wieviele Klein oder Großbuchstaben im String enthalten sind
// Bsp: "Ich" => "Groß: 1 | Klein: 2"

//Prüfen eines Characters auf ein Kleinbuchstaben:

//else if (char.toUpperCase() === char) {
//    countUpper++;
//}

countCase("Wann wird Hertha BSC wieder Deutscher Meister");

//Lösung 1
function countCase(inputString) {
    let countLower = 0;
    let countUpper = 0;
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char.toUpperCase() === char.toLowerCase())
            continue; //Ist es ein Sonderzeichen -> Dann uninterssant für das Zählen 
        else if (char.toUpperCase() === char) { //Handelt es sich um ein Großbuchstaben
            countUpper++;
        }
        else {
            countLower++; //Kleinbuchstabe
        }
    }
    console.log(`Groß: ${countUpper} | Klein: ${countLower}`)
}


//Lösung 2
function countCaseAlt(inputString) {
    let countLower = 0;
    let countUpper = 0;
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char.toUpperCase() !== char.toLowerCase()) {
            if (char.toUpperCase() === char) {
                countUpper++;
            }
            else {
                countLower++;
            }
        }
    }
    console.log(`Groß: ${countUpper} | Klein: ${countLower}`)
}



//ARRAYS
//Sammlung von mehreren Werten innerhalb einer Variable 
//Können mit dem array literal oder mit dem Constructor arbeiten
//Können verschiedene Datentypen enthalten


//INITIALISIERUNG EINES ARRAY
//array literal
let literalArr = [1,2,3, "Wert", true, [1,5,10]] //Bsp. für ein zweidimensionales Array

//Via Constructor
let construtedArray = new Array(1,2,3,4,5,"Wert");

//Zugriff auf einzelene Elemente via Bracket-Notation 

console.log(literalArr[5]); // => [1,5,10]
console.log(literalArr[5][2]); // 10
console.log(construtedArray[5]); // Wert

//PROPERTIES bei einem Array
console.log(literalArr.length); // => 6
console.log(literalArr[5].length); // => 3
console.log(literalArr[3].length); //String Länge von Wert ausgeben? -> Ja er kann die String-Länge von 'Wert' ermitteln => Ausgabe: 4

// Können Werte eines Arrays neuzuweisen
literalArr[0] = 40;
console.log(literalArr[0]); // => 40

literalArr[0] = "Hallo";
console.log(literalArr[0]); // => "Hallo"


//METHODEN 

//Mithilfe von concat können wir Arrays miteinander verbinden 
let concatArr = literalArr.concat(construtedArray, literalArr[5]);

console.log(concatArr);
console.log(concatArr.length);

// arr.indexOf(Suchwert, ?Start)
// arr.lastIndexOf(Suchwert, ?Start)
// Nicht geeignet für Objekte 


let objectArr = [{ "name": "Test", "age": 20 }, { "name": "Test", "age": 15 }];
let testObj = { "name": "Test", "age": 20 }; // => -1
console.log(objectArr.indexOf({ "name": "Test", "age": 20 })); // -1


console.log(objectArr.findIndex(object => {
    return object.name === "Test" && object.age === 15;
}))

// Für Objekte:
// arr.findIndex(function)
// Am einfachsten mit lambdas
// Iteriert über jedes Element im Array
// https://bobbyhadz.com/blog/javascript-array-find-index-of-object-by-property


//arr.join(seperator)
//Gibt und einen neuen String zurück der aus den Array Elementen getrennt vom Seperator besteht
//Falss wir keinen Seperator übergeben wird ein , (Komma) benutzt
console.log(concatArr.join());

// arr.reverse()
// kippt die Reihenfolge des Array um
literalArr.reverse();
console.log(literalArr);


//arr.sort(?function)
//Sortiert das Array anhand der Funktion
//! Verändert das bestehende Array
//! Wird erst alles in strings umgewandelt und dann demenstrpechen alpabethisch sortiert

let numberArray = [1, 900, 1000, 999];
numberArray.sort();
console.log(numberArray); // => 1, 1000, 900, 999


numberArray.sort(
    (a, b) => b - a // sortiert absteigend
)
console.log(numberArray); // 1000, 999, 900, 1
// a - b würde aufsteigend sortieren



// Hinzufügen neuer Elemente in das Array

// arr.unshift(el1, el2, el3....elN);
// Fügt die Elemente am Anfang des Arrays ein
// Gibt die neue Länge des Arrays zurück
//! Verändert das bestehende Array
console.log(numberArray.unshift(10000, 5000, 2500)); // => 7


// arr.push(el1, el2, el3....elN)
// Fügt die Elemente am Ende des Arrays an
// Gibt die neue Länge des Arrays zurück
//! Verändert das bestehende Array
console.log(numberArray.push(0, -1, -25)); // => 10


// Entfernen von Elementen
//! Beide verändern das bestehende Array

// arr.shift()
// Entfernt das erste Element aus dem Array und gibt dieses Zurück

console.log(numberArray.shift()); // => 10000

// arr.pop()
// Entfernt das letzte Element aus dem Array und gibt dieses zurück

console.log(numberArray.pop()); // => -25


// arr.splice(?startposition, ?löschAnzahl, el1, el2, ...elN);
// Es wird beginnend bei startposition so viele Elemente entfernt wie in löschAnzahl definiert und neue Elemente werden an der Stell eingefügt, falls welche übergeben wurden
// Gibt die entfernten Elemente zurück
//! Verändert das bestehende Array

console.log(numberArray.splice(2, 4, 5, 12, 16, 28)); // => [1000, 999, 900, 1]


// arr.slice(?start, ?ende)
// Gibt ein neues Array zurück, das bei Index start beginnt und bei Index ende - 1 endet
let numberCopy = numberArray.slice(0, 7); // Gibt nur die ersten 7 Elemente des Arrays zurück

// Fals start und Ende weglassen wird das Array 1:1 kopiert
// Falls wir nur start übergeben beginnt das neue Array bei Index start und geht bis zum Ende des ursprünglichen Arrays
numberCopy = numberArray.slice(5);


// arr.toString()
// Methode gibt einen String zurück der aus den einzelnen Elemente des Arrays getrennt mit Komma besteht
// arr.toString() == arr.join()

console.log(numberCopy.toString());


//MATH - Library

// Stellt uns einige mathematische Funktionen und Konstanten zur Verfügung
// Konstanten
// Math.E => Eulerische Zahl
// Math.LN2 => Natürliche Logarithmus von 2
// Math.LN10 => Natürliche Logarithmus von 10
// Math.PI => Pi
// Math.SQRT2 => Quadratwurzel von 2



// Häufigstens Methoden von Math 


// Rundungsfunktionen
// Math.round(number) => Rundet auf die nächste Ganzzahl
// Kaufmännische runden
console.log(Math.round(2.5), Math.round(2.4));


// Math.ceil(number) => Rundet auf nächsthöhere oder gleiche Ganzzahl
console.log(Math.ceil(2.1), Math.round(3.0));


// Math.floor(number) => rundet auf die nächst niedrigere oder gleiche Ganzzahl
console.log(Math.floor(2.99), Math.floor(2.0));


// Math.pow(x,y) => x^y
console.log(Math.pow(2, 4)); // => 16

// Math.sqrt(number) => Quadratwurzel von number
console.log(Math.sqrt(16)); // => 4 

// Math.abs(number) => Gibt Betrag von number zurück
console.log(Math.abs(-5), Math.abs(12)); // 5 12


// Math.min()
// Math.max()
// Gibt uns jeweils die höchste bzw kleinste der übergebenen Zahlen zurück
console.log(Math.min(12, 8, -1), Math.max(100, 50, 230)); // -1 230



//Zufallsgenerator mit Ganzzahlen 
function randomNumberGenerator(maxNum) {
    return Math.floor((Math.random() * maxNum) + 1);
    // Generiert zufällige Zahlen zwischen 1 und maxNum
}




// Number
// Erlaubt es uns Strings in Zahlen umzuwandeln
// Und zusätzlich lässt es uns einige Randbedingungen prüfen

// Number.isNaN(variable)
// Gibt einfach true oder false zurück jenachdem ob NaN übergeben wurde

// Number.isFinite(number)
// Prüft ob die Zahl endlich ist

// Number.isInteger(number)
// Prüft ob die Zahl ganzzahlig ist

// Number.parseFloat(variable)
// Gibt die Eingabe als Gleitkommzahl zurück

// Number.parseInt(Variable)
// Gibt die Zahl als Ganzzahl zurück

// Falls die Zahl nicht umgewandelt werden kann wird NaN zurückgegeben
// Seperator muss ein . sein, ansonten wird alles danach abgetrennt
// Wenn eine Textfolge mit einer Zahl beginnt wird die Zahl erfolgreich umgewandelt und der Text abgetrennt
// Falls die Zeichenfolge mit Text beginnt und Zahlen enthält wird NaN zurückgegebn




// Date in JS
// Zählt intern mit ms, die seit dem 01.01.1970 vergangen sind

// Date Erstellung

let totay = new Date(); // Gibt das heutige Datum inklusive Timezone zurück

// Spezifisches Datum erstellen
// new Date(jahr, monat,?tag, ?stunden, ?minuten, ?sekunden, ?milisekunden)


let trialDate = new Date(2022);
// Wenn nur ein Parameter übergeben wird, wird es als Millisekunden seit dem 01.01.1970 gerechnet
// Mit zwei Parametern definieren wir jahr und monat

let trialDate2 = new Date(2022, 6)
// Monat beginnt bei 0


// Mittels Datumstring:
let trialDate3 = new Date("07-05-2022"); // 05.07.2022
// yyyy-MM-dd klappt in jedem Browser
// MM-dd-yyyy klappt in chrome, aber nicht in firefox



// Methoden mit get und set
// Jahr
trialDate.getFullYear(); // => Jahr als vierstellige Zahl
trialDate.setFullYear(2021); // Ändert das Jahr auf 2021
// Monat
trialDate.getMonth(); // => Monat zwischen 0 und 11

// Tag
trialDate.getDate(); // => Tag zwischen 1 und 31

// Stunden
trialDate.getHours(); // => Stunden zwischen 0 und 23

// Minuten
trialDate.getMinutes(); // => Minuten zwischen 0 und 59

// Sekunden
trialDate.getSeconds(); // => Sekunden zwischen 0 und 59



// Millisekunden
trialDate.getMilliseconds(); // Millisekunden zwischen 0 999
trialDate.getTime(); // => Milisekunden seit 01.01.1970

// Ohne set

// Wochentag
trialDate.getDay(); // => Gibt uns eine Zahl zwischen 0 und 6
// Sonntag = 0 | Samstag = 6

// Date.now()
Date.now(); // Gibt das derzeitige Datum als ms seit dem 01.01.1970 zurück