console.log("Commencement du script JS");
/* fonction nombre entier aléatoire */
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*La variable contient un nombre aléatoire compris entre 1 et 100*/
var entier = entierAleatoire(1, 100);
console.log("Nombre choisi par l'ordinateur");
console.log(entier);
var gagné = false;
var i = 1;
function button() {
  var util = document.getElementById("choix").value;
  comparaison(entier, util);
  i++;
}
function comparaison(entier, util) {
  if (i > 5 && entier != util && i < 10 && entier <= 10){
    alert("Courage! C'est entre 1 et 10!");
  }
  if (i > 5 && entier != util && i < 10 && entier > 10 && entier <= 20){
    alert("Courage! C'est entre 11 et 20!");
  }
  if (i > 5 && entier != util && i < 10 && entier > 20 && entier <= 30){
    alert("Courage! C'est entre 21 et 30!");
  }
  if (i > 5 && entier != util && i < 10 && entier > 30 && entier <= 40){
    alert("Courage! C'est entre 31 et 40!");
  }
  if (i > 5 && entier != util && i < 10 && entier > 40 && entier <= 50){
    alert("Courage! C'est entre 41 et 50!");
  }
  if (i > 5 && entier != util && i < 10 && entier > 50 && entier <= 60){
    alert("Courage! C'est entre 51 et 60!");
  }
  if (i > 5 && entier != util && i < 10 && entier > 60 && entier <= 70){
    alert("Courage! C'est entre 61 et 70!");
  }
  if (i > 5 && entier != util && i < 10 && entier > 70 && entier <= 80){
    alert("Courage! C'est entre 71 et 80!");
  }
  if (i > 5 && entier != util && i < 10 && entier > 80 && entier <= 90){
    alert("Courage! C'est entre 81 et 90!");
  }
  if (i > 5 && entier != util && i < 10 && entier > 90 && entier <= 100){
    alert("Courage! C'est entre 91 et 100!");
  }
  if (util > entier) {
    // alert("Moins");
    document.getElementById("infos").innerHTML = "Moins";
    console.log("Nombre choisi par l'utilisateur");
    console.log(util);
    console.log("essai "+i);
  } else if (util < entier) {
    // alert("Plus");
    document.getElementById("infos").innerHTML = "Plus";
    console.log("Nombre choisi par l'utilisateur");
    console.log(util);
    console.log("essai "+i);
  } else if (isNaN(util)){
    // alert("Ce n'est pas un chiffre!");
    console.log("Nombre choisi par l'utilisateur");
    console.log(util);
    console.log("essai "+i);
    document.getElementById("infos").innerHTML = "Ce n'est pas un chiffre!";
  } else if (entier==util && i<= 10){
    document.getElementById("infos").innerHTML = "";
    console.log("Nombre choisi par l'utilisateur");
    console.log(util);
    console.log("essai "+i);
    var gagné = true;
    console.log("C'est gagné!");
    alert("C'est gagné!");
    console.log("Fin du script!");

  } else {
    console.log("Nombre choisi par l'utilisateur");
    console.log(util);
    console.log("Perdu");
    document.getElementById("infos").innerHTML = "";
    alert("Vous avez perdu! Vous avez utilisé vos 10 essais!");
    console.log("Fin du script!");
  }
  if (entier!=util) {
    var gagné = false;
  }
  if (entier==util) {
    var gagné = true;
  }
  if (i>= 10 && entier != util) {
    console.log("Perdu");
    document.getElementById("infos").innerHTML = "";
    alert("Vous avez perdu! Vous avez utilisé vos 10 essais!");
    console.log("Fin du script!");
  }
}
