var typingSpeed = 80
var textLenghtValue = 0

// ------------------------------------------------------------------
function typeFunction(element, text, index) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeFunction(element, text, index), typingSpeed); 
    }
}

// ------------------------------------------------------------------
// Title
const title = document.getElementById("headerTitle");
function cylceTypingEffect() {
    title.innerHTML = ""
    typeFunction(title, "EASILY CREATE PAGE", textLenghtValue) 
}
setInterval(cylceTypingEffect, 5000)
cylceTypingEffect()

