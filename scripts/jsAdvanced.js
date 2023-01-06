//Class in JS
//Syntatic Sugar für Objekt-Erstellung




//Rückblick: Wie vor dem Keyword 'class' Klassen definiert wurden 
function myoutput() {
    console.log(`Hi my Name is ${this.name}`);
}

function ThePerson(name) {
    this.name = name;
    this.introduce = myoutput;
}

console.log("Beispiel 1");
const p1 = new ThePerson("Max");
//p1.name; //Max
p1.introduce();


class AdvancedPerson {
    
    //mit dem hashtag definiere ich ein privates Feld 
    //kann nur intern in der Klasse verwendet werden. Von aussen ist dieses Feld nicht aufrufbar
    #age;

    constructor(firstname, lastname, age, gender) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.age = age;
        this.gender = gender;
    }

    //Propertie kapselt die private Membervariable #age. 
    //Zusätzlich kann man via Property gewährleisten, dass valide Werte übergeben werden  
    set age(newAge) {
        console.log("setter wurde aufgerufen");

        //
        if (newAge < this.age) {
            console.error("Man kann nicht jünger werden!");
        }
        else {
            this.#age = newAge;
        }
    }

    get age() {
        console.log("Getter wird aufgerufen");
        return this.#age;
    }

    // Es können auch private Methoden erstellt werden
    #introduce() {
        return `Vor der Pause: Hi my name is ${this.firstName} ${this.lastName}!`;
    }

    //public Methode und druft die private MEthode #introduce auf 
    introduceSelf() {
        console.log(this.#introduce());
        return this.#introduce();
    }
}


const p2 = new AdvancedPerson ("Max", "Mustermann", 29, "male");

p2.introduceSelf();


class Student extends AdvancedPerson {
    
    constructor(firstName, lastName, age, genger, schoolClass) {
        super(firstName, lastName, age, genger)

        this.schoolClass = schoolClass;
    }

    showGrade() {
        return Math.floor(Math.random() * 6) + 1;
    }

    introduceSelf() {
        super.introduceSelf();
        console.log(`My name is ${this.firstName} and I'm in class ${this.schoolClass}`);
    }

     // Trick zur Überladung: https://www.geeksforgeeks.org/function-overloading-in-javascript/
     //Überladen ist einer Methode ist in JS nicht vorgesehen -> es gibt aber ein Workarround (Trick) ->
     introduceSelf(test) {
        console.log(test);
    }
    
}

const student1 = new Student("Otto", "Walkes", 55, "male", "11b");
student1.introduceSelf();


// Erstellt eine Klasse Teacher, die von Person abgeleitet wird und zusätzlich ein private field mit subject hat
// Die Methode introduceSelf() soll erweiter oder überschrieben werden um zusätzlich das subject anzuzeigen
// Zusätzlich einen getter und setter für subject erstellen

class Teacher extends AdvancedPerson {
    #subject;
    constructor(firstName, lastName, age, genger, subject) {
        super(firstName, lastName, age, genger)

        this.subject = subject;
    }

     //Propertie kapselt die private Membervariable #age. 
    //Zusätzlich kann man via Property gewährleisten, dass valide Werte übergeben werden  
    set subject(newSubject) {
        console.log("setter wurde aufgerufen");
        this.#subject = newSubject;
      
    }

    get subject() {
        console.log("Getter wird aufgerufen");
        return this.#subject;
    }


    introduceSelf() {
        console.log(`My name is ${this.firstName} and I'm the teacher in ${this.subject}`);
    }
}


const teacher = new Teacher("Otto", "Walkes", 55, "male", "History");
teacher.introduceSelf();


//Lambdas
//sind kürzere alternativen zu den anonymen Funktionen
//Nennt mann auch Pfeil oder Arrow Functions
//Werden häufig als Parameter für andere Funktionen benutzt
//Sparen function Keyword, Klammern und return ein... solange sie einzeilig sind

const add = (num1, num2) => num1 + num2;
let sum = add(5,8);


//ARRAYS

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Jede einzelne Nummer wird via logNumber ausgegeben
function logNumber(num) {
    console.log(num);
}
numArray.forEach(logNumber); 

console.log("Jetzt mit lambda:")

//Lambda
numArray.forEach((num, index) => {
    console.log("Nummer: " + num + "| Index: " + index );
});


let evenNums = numArray.filter((num) => num % 2 === 0);
let oddNums = numArray.filter((num) => num % 2 !== 0);

console.table(evenNums);


// arr.map(callback)
// Gibt ein neues Array zurück, das aus den Elementen des Arrays besteht auf denen die callback Funktion angewendet wurde
evenNums = evenNums.map((num) => num*2);
console.log("Map-Ergebnis: ");
console.log(evenNums);

// arr.reduce(callback(mit zwei Parametern))
// Iteriert über das Array und gibt einen einzigen Wert zurück

sum = numArray.reduce((sum, number) => sum + number);
console.log("reduce-Ergebnis: ");
console.log(sum);



// arr.every(callback)
// Gibt true zurück, falls der callback bei jedem Element des Arrays true ergibt

//Ist jede Zahl größer als der Wert 0 -> stimmt (true wird zurück gegeben)
console.log(
    numArray.every((num) => num > 0)
);
console.log("every-Ergebnis: ");
// arr.some(callback)
// Gibt true zurück, falls der callback bei mindestens einem element true ergibt
console.log(evenNums.some(
    num => num > 8
));

console.log("----------------------------------------------");
// arr.fill(neuerWert, Startindex, Endindex )
// startindex ist inkludiert endindex nicht


//BUG in JS? 
//console.log("fill-Ergebnis: ");
//evenNums.fill(Math.random() * 20, 3);
//console.log(evenNums);

let emptyArr = new Array(20);
emptyArr.fill(5, 0, 3);
console.log(emptyArr);


// In Kombi mit .forEach() können wir unser Array mit Zufallswerten füllen
emptyArr.forEach((number, index) => {
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    emptyArr.fill(randomNumber, index);
});
console.log(emptyArr);


function* numGenerator(limit) {
    for (let i = 0; i < limit; i++) {
        yield i;
    }
} //Wir verlassen am Ende die Function

const numbers = numGenerator(10);

let step = numbers.next();

// step ist nun ein Objekt mit value: 1 und done: false
console.log(step);
console.log(step.value);

step = numbers.next();
// step ist nun ein Objekt mit value: 1 und done: false
console.log(step);
console.log(step.value);

console.log(numbers);
// Können nun so lange numbers.next() aufurufen bis die Endbedingung erreicht ist
// Ab dann ist das objekt value: undefined und done: true
// Anwendungsfall: id-Generator
