alert("Bonjour ! Nous allons créer une histoire loufoque en 5 étapes !")
var i = 1;
var j = 4;
var story = "Je m'appelle ";
var firstname = prompt("étape " + i + ": quel est votre prénom ? Il vous restera ensuite " + j + " question(s)")
story += firstname;
story += ".<br>Je suis originaire de la planète "
i++;
j--;
var planet = prompt("étape " + i + ": quelle est votre planète préférée ? Il vous restera ensuite " + j + " question(s)")
story += planet;
story += ".<br>J'ai "
i++;
j--;
var age = parseInt(prompt("étape " + i + ": quel est votre âge ? Il vous restera ensuite " + j + " question(s)"))
age *= 100;
story += age;
story += " ans.<br>Je suis venu sur Terre avec une soucoupe volante de marque "
i++;
j--;
var carMark = prompt("étape " + i + ": quelle est la marque de votre voiture ? Il vous restera ensuite " + j + " question(s)")
story += carMark;
story += ".<br>Je suis accompagné d'un alien "
i++;
j--;
var colorPreferred = prompt("étape " + i + ": quelle est votre couleur préférée ? Il vous restera ensuite " + j + " question(s)")
story += colorPreferred;
story += "."
