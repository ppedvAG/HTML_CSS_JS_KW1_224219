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




