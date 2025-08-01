//
for(let i = 0; i <= 10; i++){
    if(i % 2 === 0)
        console.log(i);
    }

// bouton dynamique qui peut ajouter des choses
// HTML : id = getElementById or class = querySelector
const darkModeBtn = document.querySelector(".dark-mode-btn");
const message = document.querySelector(".dark-mode-msg");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    message.textContent = document.body.classList.contains("dark-mode") ? "Mode Nuit Activé" : "Mode Jour Activé";
});

// showLesson.js
let button = document.querySelector(".button-btn");  // Il récupère le bouton par son ID = lesson
let lessonContent = document.querySelector(".button-msg"); // Il récupère la div où le contenu de la leçon sera affiché
// Il ajoute un écouteur d'événement pour le clic sur le bouton
// Si vous cliquez sur le bouton, il va changer le contenu de la div lesson-content


function showMsg() {
    // Affiche le contenu de la leçon
    lessonContent.innerHTML = "<p>Bienvenue dans le cours de Javascript !</p><p>Dans ce cours, nous allons explorer les bases du langage, y compris les variables, les fonctions, et la manipulation du DOM.</p>";
    button.textContent = "⬆️ | Cacher le cours"; // Change le texte du bouton
}

function hideMsg() {
    // Cache le contenu de la leçon
    lessonContent.innerHTML = "";
    button.textContent = "⬇️ | Lire le cours"; // Change le texte du bouton
}

function toggleMsgContent() {
        // Faire un toggle du contenu de la leçon
    if(lessonContent.innerHTML === "") {
        showMsg(); // Appelle la fonction pour afficher le contenu de la leçon
    } else {
        hideMsg(); // Appelle la fonction pour cacher le contenu de la leçon
    }
}

button.addEventListener("click", function() {
    toggleMsgContent(); // Appelle la fonction pour afficher ou cacher le contenu de la leçon
});