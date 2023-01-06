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





