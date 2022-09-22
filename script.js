let dé = document.getElementById("dice");
let dé1 = document.getElementById("dice1");
let dé2 = document.getElementById("dice2");
let dé3 = document.getElementById("dice3");
let dé4 = document.getElementById("dice4");
let dé5 = document.getElementById("dice5");
let dé6 = document.getElementById("dice6");
let tableau = [dé1, dé2, dé3, dé4, dé5, dé6];
let random = Math.floor(Math.random() * tableau.length);
let lancement = document.getElementById("btn");
lancement.addEventListener("click", () => {
  random = Math.floor(Math.random() * tableau.length);
  let randomTableau = tableau[random];
  switch (randomTableau) {
    case tableau[0]:
      console.log(1);
      dé1.style.display = "flex";
      dé.style.display = "none";
      dé2.style.display = "none";
      dé3.style.display = "none";
      dé4.style.display = "none";
      dé5.style.display = "none";
      dé6.style.display = "none";
      break;
    case tableau[1]:
      console.log(2);
      dé2.style.display = "flex";
      dé.style.display = "none";
      dé1.style.display = "none";
      dé3.style.display = "none";
      dé4.style.display = "none";
      dé5.style.display = "none";
      dé6.style.display = "none";

      break;
    case tableau[2]:
      console.log(3);
      dé3.style.display = "flex";
      dé.style.display = "none";
      dé2.style.display = "none";
      dé1.style.display = "none";
      dé4.style.display = "none";
      dé5.style.display = "none";
      dé6.style.display = "none";
      break;
    case tableau[3]:
      console.log(4);
      dé4.style.display = "flex";
      dé.style.display = "none";
      dé2.style.display = "none";
      dé3.style.display = "none";
      dé1.style.display = "none";
      dé5.style.display = "none";
      dé6.style.display = "none";
      break;
    case tableau[4]:
      console.log(5);
      dé5.style.display = "flex";
      dé.style.display = "none";
      dé2.style.display = "none";
      dé3.style.display = "none";
      dé4.style.display = "none";
      dé1.style.display = "none";
      dé6.style.display = "none";
      break;
    case tableau[5]:
      console.log(6);
      dé6.style.display = "flex";
      dé.style.display = "none";
      dé2.style.display = "none";
      dé3.style.display = "none";
      dé4.style.display = "none";
      dé5.style.display = "none";
      dé1.style.display = "none";
      break;

    default:
      console.log("Fin de transmission");
      break;
  }

  // if (randomTableau == tableau[0]) {
  //   console.log(1);
  //   (dé1.style.display = "flex") && (dé.style.display = "none");
  //   random = Math.floor(Math.random() * tableau.length);
  // } else if (randomTableau == tableau[1]) {
  //   console.log(2);
  //   (dé2.style.display = "flex") && (dé.style.display = "none");
  //   random = Math.floor(Math.random() * tableau.length);
  // } else if (randomTableau == tableau[2]) {
  //   console.log(3);
  //   (dé3.style.display = "flex") && (dé.style.display = "none");
  //   random = Math.floor(Math.random() * tableau.length);
  // } else if (randomTableau == tableau[3]) {
  //   console.log(4);
  //   (dé4.style.display = "flex") && (dé.style.display = "none");
  //   random = Math.floor(Math.random() * tableau.length);
  // } else if (randomTableau == tableau[4]) {
  //   console.log(5);
  //   (dé5.style.display = "flex") && (dé.style.display = "none");
  //   random = Math.floor(Math.random() * tableau.length);
  // } else if (randomTableau == tableau[5]) {
  //   console.log(6);
  //   (dé6.style.display = "flex") && (dé.style.display = "none");
  //   random = Math.floor(Math.random() * tableau.length);
  // }
});
