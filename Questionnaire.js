// ----------- Données --------------

var reponse1 = {numero: 1, libelle: "hr", valeur: false};
var reponse2 = {numero: 2, libelle: "h2", valeur: false};
var reponse3 = {numero: 3, libelle: "h1", valeur: true};


var question1 = {
    numero: 1,
    intitule: "En HTML, comment s'appelle la balise titre ?",
    reponses: [
        reponse1,
        reponse2,
        reponse3
        
    ]
}

var question2 = {
    numero: 2,
    intitule: "Par quoi commençons une page html ?",
    reponses: [
        {numero: 4, libelle: "/*", valeur: false},
        {numero: 5, libelle: "!", valeur: true},
        {numero: 6, libelle: "//", valeur: false},
        
    ]
}

var question3 = {
    numero: 3,
    intitule: "Quel est la balise pour indiquer la tête de page en HTML ?",
    reponses: [
        {numero: 7, libelle: "header", valeur: true},
        {numero: 8, libelle: "body", valeur: false},
        
        
    ]
}

var questions = [question1, question2, question3];

// ----------- Traitements --------------
// --- à partir du tableau "questions"

// Affichage en console des intitulés de chaque question, ainsi que des libellés des réponses associées
var len = questions.length;
for(var i = 0; i < len; i++) {
    console.log(questions[i].intitule);

    var len2 = questions[i].reponses.length;
    for(var j = 0; j < len2; j++) {
        console.log(questions[i].reponses[j].libelle);
    }
}

var htmlString = "";
// Alternative avec boucle "foreach"
for(var question of questions) {
    htmlString += "<div><h2>" + question.intitule + "</h2>";
    for(var reponse of question.reponses) {
        htmlString += "<div class=\question";
        htmlString += "<div><input type=\"radio\" name=\"quest" + question.numero + "\" id=\"q"  + question.numero + "r" + reponse.numero + "\" value=\"rep" + reponse.numero + "\">";
        htmlString += "<label for=\"\">" + reponse.libelle + "</label>";
        htmlString += "</div>";
    }
    htmlString += "</div>";
}

var conteneur = document.getElementById("questions");
conteneur.innerHTML = htmlString;

var formulaire = document.getElementById("formulaire");
formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    
    var radios = document.querySelectorAll("input[type=radio]:checked");
    //console.log(radios);

    for(var choix of radios) {
        var numReponse = choix.value.substr(3);

        for(var question of questions) {
            for(var reponse of question.reponses) {
                if(numReponse == reponse.numero && reponse.valeur) {
                    console.log(question.numero + " : BONNE REPONSE");
                    
                    var label = choix.parentElement.childNodes[1];
                    label.style.color = "green";
                    label.style.fontWeight = "bold";
                }
            }
        }
    }
});