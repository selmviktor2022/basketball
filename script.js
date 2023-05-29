const shotToGuestEl = document.querySelector("#shotToGuest");
const resultOfHomeEl = document.querySelector("#resultOfHome");
const shotToHomeEl = document.querySelector("#shotToHome");
const resultOfGuestEl = document.querySelector("#resultOfGuest");

let sumOfHome = 0;
let sumOfGuest = 0;

shotToGuestEl.addEventListener("click",function() {
    let randomPoint = Math.floor(Math.random() * 4);
    console.log("Home: " + randomPoint );
    sumOfHome += randomPoint;
    console.log("Sum of home:" + sumOfHome);
    resultOfHomeEl.textContent = sumOfHome;
});


shotToHomeEl.addEventListener("click",function() {
    let randomPoint = Math.floor(Math.random() * 4);
    console.log("Guest: " + randomPoint);
    sumOfGuest += randomPoint;
    console.log("Sum of guest:" + sumOfGuest);
    resultOfGuestEl.textContent = sumOfGuest;
    
});