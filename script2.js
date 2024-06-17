const displaygreetingAdrian = document.getElementById('displayGreeting');
const additionalGreatings = document.getElementById('additionalGreatings');

function greeting(greet,name) {
    const message = `${greet}, ${name}`;
    displaygreetingAdrian.textContent = message;

    const newMessageElement = document.createElement("div")
    newMessageElement.textContent = message}


function greetAdrian(greet, name) {
    const message = `${greet}, ${name}`;
    const displaygreetingAdrian = document.createElement("div");
    displaygreetingAdrian.textContent = message;
    document.body.appendChild(displaygreetingAdrian);
}

// Initial greetings
greeting("good morning", "Adrian");
greetAdrian("good night", "Adrian");
