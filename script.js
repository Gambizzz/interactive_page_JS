// FONCTIONNALITÉ 1
let click = document.querySelector('footer');
function showMsg() {
  console.log("clique");
}
click.addEventListener("click", showMsg);

// FONCTIONNALITÉ 1-BIS
let count = 0;
function incrementClick() {
  updateDisplay(++count);
}

// FONCTIONNALITÉ 2
let menu = document.querySelector("#navbarHeader");
let menuBtn = document.querySelector(".navbar-toggler");

menuBtn.addEventListener("click", function() {
  menu.classList.toggle("collapse");
});

// FONCTIONNALITÉ 3
let firstCard = document.querySelectorAll(".card")[0];
let editBtn = document.querySelectorAll(".btn-outline-secondary")[0];
editBtn.addEventListener("click", function() {
  firstCard.style = "color:red";
});

// FONCTIONNALITÉ 4
let secondCard = document.querySelectorAll(".card")[1];
let secondEditBtn = document.querySelectorAll(".btn-outline-secondary")[1];
secondEditBtn.addEventListener("click", function() {
  if (secondCard.style.color == "green") {
    secondCard.style.color = "";
  }
  else {
    secondCard.style.color = "green";
  }
});

// FONCTIONNALITÉ 5
let head = document.querySelector("header");
let link = document.querySelector("link");
head.addEventListener("dblclick", function(){
    if (link.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
        link.href = "";
    }
    else {
        link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    }
});

// FONCTIONNALITÉ 6
let viewBtn = document.querySelectorAll(".btn-success");
for (let i = 0; i < viewBtn.length; i++) {
  viewBtn[i].addEventListener("mouseenter", function () {
    let cardImage = document.querySelectorAll(".card-img-top")[i];
    let cardText = document.querySelectorAll(".card-text")[i];

    cardText.toggleAttribute("hidden");
    if (cardImage.style.width === "20%") {
      cardImage.style.width = "100%";
    }
    else {
      cardImage.style.width = "20%";
    }
  });
}

// FONCTIONNALITÉ 7
let cardsRight = document.querySelector(".album > .container > .row");
let moveForward = document.querySelector(".btn.btn-secondary.my-2");

moveForward.addEventListener("click", function()  {
    cardsRight.insertBefore(cardsRight.lastElementChild, cardsRight.firstElementChild);
});

// FONCTIONNALITÉ 8
let cardsLeft = document.querySelector(".album > .container > .row");
let moveBack = document.querySelector(".btn.btn-primary.my-2");

moveBack.removeAttribute("href")
moveBack.addEventListener("click", function()  {
    cardsLeft.insertBefore(cardsLeft.firstElementChild, cardsLeft.lastElementChild.nextSibling);
});

// FONCTIONNALITÉ 9
let logo = document.getElementsByClassName("navbar-brand d-flex align-items-center")[0];
let body = document.body

let onLogo = function (event) {
    if (event.key === "a") {
        body.className = ""
        body.classList.add("col-4");

    }
    else if (event.key === "y") {
        body.className = ""
        body.classList.add("col-4", "offset-md-4");
    }
    else if (event.key === "p") {
        body.className = ""
        body.classList.add("col-4", "offset-md-8");
    }
    else if (event.key === "b") {
        body.className = ""
    }
}
logo.addEventListener("keypress", onLogo)