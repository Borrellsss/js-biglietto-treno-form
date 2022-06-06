/*
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero
di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina
(formattato con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

// *DICHIARAZIONE VARIABILI PROGRAMMA*
// !USER NAME!
let userName = document.getElementById("user-name").value;

// !USER KMS!
let userKm = parseInt(document.getElementById("user-kms").value);

// !USER AGE!
let userAge = document.getElementById("user-age").value;

// !TICKET PRICES!
let pricePerKm = 0.21;

let ticketPrice = userKm * pricePerKm;

let ticketDiscounted;

// !MORE DATA!
let ticketType;

let ticketTrain = Math.floor(Math.random() * 10) + 1;

let ticketCode = Math.floor(Math.random() * 10000) + 1;

// !BUTTONS!
const formSubmit = document.getElementById("form-button");

const formReset = document.getElementById("form-reset-button");

// *LOGICA PROGRAMMA*
// !DISCOUNT CONDITIONS!
if (userAge === "minorenne") {
    ticketDiscounted = ticketPrice * 0.8;
    ticketType = "Biglietto Under18";
} else if (userAge === "over65") {
    ticketDiscounted = ticketPrice * 0.6;
    ticketType = "Biglietto over65";
} else {
    ticketDiscounted = ticketPrice
    ticketType = "Biglietto Standard";
}


// !FIRST EVENT LISTENER!
formSubmit.addEventListener("click",
    function () {
        document.querySelector(".ticket-result").classList.add("active");
        document.querySelector(".user-ticket-name").innerHTML = userName;
        document.querySelector(".user-ticket-type").innerHTML = ticketType;
        document.querySelector(".user-ticket-train").innerHTML = ticketTrain;
        document.querySelector(".user-ticket-code").innerHTML = ticketCode;
        document.querySelector(".user-ticket-price").innerHTML = `${ticketDiscounted.toFixed(2)}€`;
    }
)

// !SECOND EVENT LISTENER!
formReset.addEventListener("click",
    function () {
        document.querySelector(".ticket-result").classList.remove("active");
        userName = document.getElementById("user-name").value = "";
        userKm = document.getElementById("user-kms").value = "";
        userAge = document.getElementById("user-age").value = "";
        document.querySelector(".user-ticket-name").innerHTML = "";
        document.querySelector(".user-ticket-type").innerHTML = "";
        document.querySelector(".user-ticket-train").innerHTML = "";
        document.querySelector(".user-ticket-code").innerHTML = "";
        document.querySelector(".user-ticket-price").innerHTML = "";
    }
)