
  const displaygreetingAdrian = document.getElementById('displayGreeting');
  const additionalGreatings = document.getElementById('additionalGreatings');

  function greetingAdrian(greet, name) {
    // Create the message
    const message = `${greet}, ${name}`;

    // Display the greetingAdrian message in the displaygreetingAdrian element
    displaygreetingAdrian.textContent = message;

    // Create a new message element
    const newMessageElement = document.createElement("div");
    newMessageElement.textContent = message;

    // Add the new message element to the additionalGreatings container
    additionalGreatings.appendChild(newMessageElement);
  }

 
function Person(greet, name) {
  this.greet = greet;
  this.name = name;

  this.greetingAdrian = function() {
    // Create the message
    const message = `${this.greet}, ${this.name}`;

    // Display the greeting message in the displaygreetingAdrian element
    displaygreetingAdrian.textContent = message;

    // Create a new message element
    const newMessageElement = document.createElement("div");
    newMessageElement.textContent = message;

    // Add the new message element to the additionalGreatings container
    additionalGreatings.appendChild(newMessageElement);
  };
}

// Create a new person object
const person1 = new Person("hei", "Adrian");

// Use the greeting method
person1.greetingAdrian(); // Displays "hei, Adrian"

// Create more greetings
const person2 = new Person("Good morning", "Adrian");
person2.greetingAdrian(); // Displays "Good morning, Adrian"

const person3 = new Person("Good night", "Adrian");
person3.greetingAdrian(); // Displays "Good night, Adrian"

// Example of creating a new message element
const newMessageElementAdrian = document.createElement("div");
newMessageElementAdrian.textContent = "Adrian Hindenes";
additionalGreatings.appendChild(newMessageElementAdrian);

console.log(person1);
