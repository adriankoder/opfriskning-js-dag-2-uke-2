const displaygreetingAdrian = document.getElementById('displayGreeting');
const additionalGreatings = document.getElementById('additionalGreatings');

function greeting(greet,name) {
    const message = `${greet}, ${name}`;
    displaygreetingAdrian.textContent = message;

    const newMessageElement = document.createElement("div")
    newMessageElement.textContent = message}


    function greetAdrian(greet, name) {
        this.greet = greet; // Lagrer greet og name i this for å bruke senere
        this.name = name;
    
        const message = `${this.greet}, ${this.name}`;
        const displaygreetingAdrian = document.createElement("div");
        displaygreetingAdrian.textContent = message;
        document.body.appendChild(displaygreetingAdrian);
    }
    

// Initial greetings
greeting("good morning", "Adrian");
greetAdrian("good night", "Adrian");
