//Objects

//An sich eine Sammlung von Schlüssel:Wert - Paaren 
//Diese Schlüssel nennen wir Properties

//Außer wenn es sich bei den Werten dieser properties um Funktionen handelt
//Dann sprechen wir von Methoden 

//Wie initialisiere ich ein Objekt?

const objectLiteral = {
    "name" : "Max Mustermann",
    "age" : 19,
    "employed":true,
    "cityOfOrigin" : "Munich"
};

//Property - Namen können auch ohne "" oder '' definiert werden 
//Anführungszeichen sind erst absolut notwendig, wenn es sich beim prop-Namen nicht um einen gültigen JS-Identifier handelt 
//Kann mit oder ohne trailing Komma definiert werden

//2. constructor
const constructedObject = new Object();
// Erstellt ein bis dato leeres Objekt

//3. shorthand 
//Gibt es ES6

let person2Name = "Erika Musterfrau";
let person2Age  = 22;
let person2Employed = true;
let person2CityOfOrigin = "Vienna";

const shorthand = {
    person2Name,
    person2Age,
    person2Employed,
    person2CityOfOrigin
};

//Beim shorthand wird nur der Indentifier der Varibale zum Namen des Props und der Wert der Variable wird der Wert des Props

//Wie greife ich auf eine Props eines Objekts zu? 

//1.) Bracket-Notation 
//    Objekte verfügen nicht über Indizes


console.log(objectLiteral["name"]); //Max Mustermann
console.log(shorthand["person2Name"]); //Erika Musterfrau 
// Die Bracket Notation funktioniert immer, auch wenn es sich beim Namen des Props um keinen gültigen Identifier handelt, z.B. wenn dieser leerzeichen enthält

//2. dot-Notation 

console.log(objectLiteral.cityOfOrigin);
console.log(shorthand.person2CityOfOrigin);
// Die dot-Notation funktioniert nur mir Prop-Namen, die gültige JS-Identifier sind
// console.log(objectLiteral.city of Origin);
// Würde nicht gehen,da Leerzeichen im Prop-Namen enthalten sind



// Wie erstelle ich dynamische Props?
// dynamische Props sind Props, die wir nach der Erstellung des Objektes hinzufügen

constructedObject.name = "Test Testmann";
constructedObject.age = 45;
constructedObject.employed = true;
constructedObject["cityOfOrigin"] = "Berlin";

// Wir weisen einfach einem Prop einen Wert zu
// Falls das prop noch nicht exisitiert wird es neuerstellt
// Falls es bereits existiert wird es überschrieben



// Wie erstelle ich einen Objekt-Constructor?
// Constructor sind fast normale funktionen
// Die Besonderheiten: this und kein return

//Einschub Methode anfügen

function introduce() {
    console.log(`Hallo! Mein Name ist ${this.Name} und ich bin ${this.age}Jahre alt`);
}

function Person (nameProp, age, employed, cityOfOrigin) {
    this.name = nameProp;
    this.age = age;
    this.employed = employed;
    this.cityOfOrigin = cityOfOrigin;
    this.introduce = introduce; //Methode introduce wird dem Objekt Person zugewiesen. 
}

// Wie rufe ich diesen Constructor auf?
// Bei Constructors brauchen wir das new Keyword

const person1 = new Person("Hannes Preishuber" , 47, true, "Burghausen");
const person2 = new Person("Luke Skywalker", 24, false, "Tattooin");
// Ohne das new-Keyword wird undefined zurückgegeben, da wir keinen return haben
// d.h. damit der Construcotr wie gewollt funktioniert benötigen wir das new-Keyword

console.log(person1.name);
console.log(person2.cityOfOrigin);




// Moderne Variante des Konstruktors:
// Ist syntactic Sugar, d.h. es ist eine rein sytnaktische Verbesserung mit keiner Änderung an der Funktionalität

// Mit dem Keyword class:

class PersonAlt {

    xyz = 123;

    constructor (nameProp, age, employed, cityOfOrigin) {
        this.name = nameProp;
        this.age = age;
        this.employed = employed;
        this.cityOfOrigin = cityOfOrigin;
    }

    introduceSelf() {
        console.log(`Hallo mein Name ist ${this.name} und ich bin ${this.age} Jahre alt`);
    }
}

const person3 = new PersonAlt("Luke Skywalker2", 49, true, "Cologne");


// Übung:
// Erstelle eine Klasse Auto
// Sie soll folgende Props besitzen:

// marke
// modell
// motorStatus (boolean)
// derzeitigeGeschw
// maximaleGeschw

// derzeitige Geschwindigkeit soll bei der erstellung immer 0 sein
// motorStatus soll bei der Erstellung immer false sein

// Methoden 1:
// anAbschalten
// Die Methode soll nur den motorStatus ändern

// Methode 2:
// Beschleunige(neueGeschw)
// Diese Methode soll die derzeitige Geschwindigkeit auf neueGeschw setzen, außer wenn diese die maximale Geschwindigkeit 
// überschreiten würde

