// Cookies in js
// Sind ein Prop vom document
// document.cookie gibt uns einen String zurück in dem alle cookies enthalten sind und mit ; getrennt wurden
// cookies werden in Schlüssel=Wert-Paaren gespeichert
// cookies können auch in den Browser-Dev Tools unter dem Reiter Anwendung => Speicher => Cookies ausgelsen werden

// Funktionen um Cookies zu erstellen, anzuzeigen und zu löschen:


//Erstellen eines Cookies 
function setCookie(cookieName, cookieValue, expireDays=0) {
    const currentDate = new Date().getTime();
    // Gibt uns die nötigen Millisekunden um das entsprechende Datum zu generieren
    const expireDate = new Date().setTime(currentDate + (expireDays*24*60*60*1000));
    // Erstellt das Datum und fügt es in den String ein
    const expiration = `expires=${new Date(expireDate).toUTCString()};`;
    console.log(expiration);
    // Hier wird der Cookie gesetzt
    document.cookie = `${cookieName}=${cookieValue};SameSite=None;Secure;${expiration}`;
}

function getCookies() {
    const cookies = document.cookie;
    document.querySelector("#output").innerText = cookies;
}

function deleteCookie(cookieName) {
    // Wenn wir einen Cookie löschen wollen, müssen wir das expiration Date auf ein Datum in der Vergangenheit setzen
    document.cookie = `${cookieName}=; expires=${new Date(0).toUTCString()}`;
}

//Wird als erstes Ausgeführt

//Zuerst wird der Button ("Cookies Anzeigen") mit der Methode -> getCookies verbunden 

const showCookie = document.querySelector("#showCookies");
showCookie.addEventListener("click", getCookies); //Button-Klick -> getCookies wird ausgeführt


//Delete-Button wird mit der Delete-Methode verknüpft
const deleteCookies = document.querySelector("#deleteCookies");
deleteCookies.addEventListener("click", () => { //Button-Klick -> deleteCookies wird ausgeführtg
    deleteCookie("consent");
});

//Banner -> Wollen wir ein Cookie setzen (Ja-Button) mit der Methode setCookies verbunden 
const consentCookies = document.querySelector("#consent");
consentCookies.addEventListener("click", () => {
    
    //Erstellen des Cookies 
    setCookie("consent", "yes", 50);

    //Ausblendung des Cookie-Banners, nachdem Cookie gesetzt wurde 
    document.querySelector(".cookie-banner").style.display = "none";
});

// Versteckt das cookie "banner" falls der cookie bereits gesetzt ist
function showBanner() {
        const cookies = document.cookie;
        if (cookies.includes("consent")) {
            document.querySelector(".cookie-banner").style.display = "none";
        }
        else {
            document.querySelector(".cookie-banner").style.display = "block";
            document.querySelectorAll(".cookie-banner");
        }
}

// Event wird ausgelöst, sobald die Seite fertig geladen hat
window.addEventListener("load", showBanner);

deleteCookies.addEventListener("click", showBanner);





//BEISPIEL Local- und Session-Storage

// Session&LocalStorage
// Gültigkeit:
// SessionStorage nur während der Browsersitzung
// LocaleStorage gilt solange bis er gelöscht wird

// Daten werden nicht an den Server übertragen
// Pro Verbindung, d.h. bei http und https Seiten zwei getrennte Storages
// Maximale Größe: OS und Browser abhängig, laut HTML5 Spezifikation sollten es bis zu 5MB sein

//Wird die API von dem aktuellen Browser unterstüzt
if (window.localStorage != null) {
    
    //Setzten von Werten
    window.localStorage.setItem("schlüssel", "localStorage - 123");
    window.sessionStorage.setItem("schlüssel", "sessionStorage - 123");

    //Herauslesen von Werten
    console.log("Ausgabe von SessionStorage ->: " + window.sessionStorage.getItem("schlüssel"));
    console.log("Ausgabe von SessionStorage ->: " + window.sessionStorage["schlüssel"]); //Funktionalität ist identisch 

    console.log("Ausgabe von localStorage ->: " + window.localStorage.getItem("schlüssel"));
    console.log("Ausgabe von localStorage ->: " + window.localStorage["schlüssel"]); //Funktionalität ist identisch 

}

