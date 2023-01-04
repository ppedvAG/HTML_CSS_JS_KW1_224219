// Events bei Javascript

// Entweder per Attribut
// Siehe HTML

// Best-Practice:
// node.addEventListener("typDesEvents", function, ?true)

// WIr brauchen:
// das Element, das auf das Event achten soll
// das Element das input erhalten soll

let username = document.querySelector("#username");
let output = document.querySelector("#output");

username.addEventListener("keyup", e =>  {
    console.log(e.target.value);
    output.innerText = e.target.value;
})

// change => wenn der inhalt verändert wurde
// click => wenn es angeklickt wird
// keyup/keydown beim loslassen/drücken der Taste
// blur => Verlassen des Elements
// focus => Betreten des Elements, also wenn es im focus steht


// Bubbling zum Vorteil nutzen um weniger Code zu schreiben

let wrapper = document.querySelector("#wrapper");

/*
document.body.addEventListener("click", e=> {alert("Ich wurde geklickt body")}, true);
wrapper.addEventListener("click", e=> {alert("Ich wurde geklickt -> div")}, true);
wrapper.addEventListener("click", e=> {
    alert(`Button ${e.target.value} wurde geklickt`);
});*/


function sayHi() {
    console.log("Hi");
    alert("Hallo :-)");
};

document.querySelector("#d").addEventListener("click", sayHi);
