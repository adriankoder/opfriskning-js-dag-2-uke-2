function test() {
    this.firstname = "adrian"
    this.lastname = "hindenes"
}

function greeting(greet, name) {
    const message = `${greet}, ${name}`;
    displayGreating.textContent = message;

    const newmessageelement = document.createElement("div");
newmessageelement.textContent = message;
additionalGreetings.appendChild(newmessageelement);
}
const displayGreating = document.getElementById("displayGreating");
const additionalGreetings = document.createElement("div");
document.body.appendChild(additionalGreetings);

const person1 = new test();
greeting("Good morning", person1.lastname);
greeting("Good night", person1.lastname);
greeting("Hello", person1.firstname + " " + person1.lastname);
console.log(person1);