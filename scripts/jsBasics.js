/* 
    Mehrzeiliger
    Kommentar
*/

//Ich bin einzeilig

//So wenig Kommentare wie möglich, vo viele wie nötig
//Wollen eigentlich, dass unser Code für uns spricht 



//Console-Ausgaben:
//Wir können Texte, variablen Zahlen usw. direkt in der Konsole der Dev-Tools des Browser ausgeben 
console.log("Hallo Welt!"); //Einfache Debuggerausgabe (Hilfausgaben)
console.error("Da lief was schief"); //Error-Handling -> Fehlerausgabe
console.info("Ich bin eine Information!"); //Besondere Logausgaben -> Initalisierung der Datenbank wurde erfolgreich beendet.


//Variablen mit let

//Moderene Variante:

let firstName;
firstName = "Max";
//Syntax:
//let identifier = Wert

//Naming des Identifiers: Muss mit Buchstaben oder _ oder $ beginnen
//Identifier ist CaseSensetive -> let FirstName = "Maxi"; 

//CamelCase -> ersterNamingPart der Variable wird klein geschrieben 

let age = 18;

//Variablen die mit let definiert wurden, kann man später noch verändern
age = 19;
console.log(age); //19


//Konstanten
const lastName = "Mustermann" //Funktioniert wir bei let, Variableninhalt ist danach nicht mehr veränderbar

//Wie gebn wir eine Variable aus? 
console.log("Altersangabe: " + age); //19
console.log("Vornamen: " + firstName);
console.log("Nachname: " + lastName);

// Mit weiterem String kombinieren:
console.log("Hallo " + firstName + " " + lastName); //Hallo Max Mustermann 


//Anführungszeichen sollen ausgegeben werden
console.log('1.) Hallo Welt');
console.log("2.) Hallo Welt");

console.log('Er sagt: "Hallo Welt"');
console.log("Er sagt: 'Hallo Welt'");

//Das geht nicht!!!!!
//console.log("Er sagt: "Hallo Welter"");





//number
//Jeglicher Zahlenwert, egal ob mit oder ohne Komma
let zahl = 12;
let auchZahl = -12.5;
// Maximaler Wert: 1.7976931348623157e+308



//Artihmetischen Operatoren

// + Plus
// - Minus
// * Mal
// / Geteilt

zahl = zahl + 1;
console.log(zahl); //13

//Kurzschreibformen gibt es auch
zahl += 5; 
console.log(zahl); //18 


let zahl2 = 10;

console.log(zahl2++); //Zuerst wird die Variable ausgegeben und DANACH wird um den Wert 1 erhöht


zahl2 = 10;
zahl2 += 1; //11
console.log(++zahl2); //Zuerst wird der Wert um 1 erhöht und danach wird der Wert ausgegeben

//Modulo (Teilen mit Restbetrag)

console.log(254.6 * 13 % 4); //1.7999999999997272
console.log(92 % 5);


//Boolean oder Bool - Variable
//true oder false
let alleAnwesend = true; 
let kursEnde = false; 

//Es gibt aber auch andere Zustände, die eine Variable haben kann:

//null
let nichts = null;

// nichts = BekommeEinErgebnisAusMethode();
//Prüfen, ob ein Ergebnis vorhanden ist

if(nichts != null) {
    //mach was
}

if (nichts == null) {
    //müsste Initialisiert werden 
}

//undefined
let test; //Bedeutet dass die Variable definiert, aber nie initialisiert wurde 

//NaN
//Not a Number
//Für ungültige mathematische Operationen
console.log(test + 50);


//Variabentypen
console.log(typeof(firstName)); //string
console.log(typeof(alleAnwesend)); //bool
console.log(typeof(zahl)); //Number
console.log(typeof(auchZahl)); //Number

//Scope - Sichtbarkeiten (Gültigkeitsbereiche von Variablen)

let x;
var y;
const z = 5;

// 1. Unterschied: const muss sofort mit einem Wert initialisiert werden
// var und let können später initialisiert werden

x = 15;
y = 12;

//2. Unterschied: VAR legt ein globales Objekt an, LET hingegen nicht
// Mit globalen Objekten bitte sparsam sein. man möge den Sourcecode nicht als Spagetthi - Code evolutionieren lassen
// -> Clean Code 


//3. Unterschied: hoisting 
//  hoisting geht nur mit var
w = 12; 
console.log(w);

{
    let block1 = "Hallo!";
    var block2 = "Bye!";
    console.log(block1);
}

console.log(block1); // Hier scheitert der aufruf, da block1 nur innerhalb des blockes von Zeile 162 bis 166 bekannt ist
console.log(block2); // Das funktioniert, da var den Blockscope nicht kennt






























//Weiterführende Literatur:

// Design-Patterns: https://www.amazon.de/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752
// Clean Code: https://www.amazon.de/-/en/James-Padolsey/dp/1789957648




