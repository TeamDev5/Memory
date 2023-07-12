const divResultat = document.querySelector("#resultat");

var tabJeu = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
// var tabResultat = [
//   [2, 8, 5, 3],
//   [1, 7, 4, 2],
//   [3, 4, 8, 6],
//   [5, 1, 6, 7],
// ];
var tabResultat = genereTableauAleatoire();

var oldSelection = [];
var nbAffiche = 0;
var ready = true;

afficherTableau();

function afficherTableau() {
  var txt = "";

  for (var i = 0; i < tabJeu.length; i++) {
    txt += "<div>";
    for (var j = 0; j < tabJeu[i].length; j++) {
      if (tabJeu[i][j] === 0) {
        txt +=
          "<button class='btn btn-success m-2' style='width:120px;height:120px' onClick='verif(\"" +
          i +
          "-" +
          j +
          "\")'>Afficher</button>";
      } else {
        txt +=
          "<img src='" +
          getImage(tabJeu[i][j]) +
          "' style='width:100px;height:100px' class='m-3'>";
      }
    }
    txt += "</div>";
  }

  divResultat.innerHTML = txt;
}

function getImage(valeur) {
  var imgtxt = "image/";
  switch (valeur) {
    case 1:
      imgtxt += "cow.png";
      break;
    case 2:
      imgtxt += "dog.png";
      break;
    case 3:
      imgtxt += "elephant.png";
      break;
    case 4:
      imgtxt += "giraffe.png";
      break;
    case 5:
      imgtxt += "panda.png";
      break;
    case 6:
      imgtxt += "penguin.png";
      break;
    case 7:
      imgtxt += "pig.png";
      break;
    case 8:
      imgtxt += "zebra.png";
      break;
    default:
      console.log("cas non pris en compte");
  }
  return imgtxt;
}

function verif(boutton) {
  if (ready) {
    nbAffiche++;

    var ligne = boutton.substr(0, 1);
    var colonne = boutton.substr(2, 1);

    tabJeu[ligne][colonne] = tabResultat[ligne][colonne];
    afficherTableau();

    if (nbAffiche > 1) {
      ready = false;
      setTimeout(() => {
        if (
          tabJeu[ligne][colonne] !=
          tabResultat[oldSelection[0]][oldSelection[1]]
        ) {
          tabJeu[ligne][colonne] = 0;
          tabJeu[oldSelection[0]][oldSelection[1]] = 0;
        }
        afficherTableau();
        ready = true;
        nbAffiche = 0;
        oldSelection = [ligne, colonne];
      }, 500);
    } else {
      oldSelection = [ligne, colonne];
    }
  }
}

function genereTableauAleatoire() {
  var tab = [];

  var nbImagePosition = [0, 0, 0, 0, 0, 0, 0, 0];

  for (var i = 0; i < 4; i++) {
    var ligne = [];
    for (var j = 0; j < 4; j++) {
      var fin = false;
      while (!fin) {
        var randomImage = Math.floor(Math.random() * 8);
        if (nbImagePosition[randomImage] < 2) {
          ligne.push(randomImage + 1);
          nbImagePosition[randomImage]++;
          fin = true;
        }
      }
    }

    tab.push(ligne);
  }

  return tab;
}

// rejouerBtn.addEventListener("click", () => {
//     bonnesLettresArr.splice(0);
//     mauvaisesLettresArr.splice(0);
  
//     if (jeuTermine) {
//       clearTimeout();
//       jeuTermine = false;
//     }
  
//     motSelectionne = mots[Math.floor(Math.random() * mots.length)];
  
//     afficherMot();
//     updateMauvaisesLettresE1();
  
//     popup.style.display = "none";
//   });
  
//   afficherMot();
