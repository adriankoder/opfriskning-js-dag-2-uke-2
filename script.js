// const displayGreating = document.getElementById("displayGreating")
 
// function greeting(greet,name){
//   displayGreating.textContent= `${greet},${name}`
//     console.log(greeting+" "+name)
// }
// function test(firstName,LastName)
// {const adriancaracter = newCaracker(adrian,hindenes)

// this.firstName = firstName
// this.LastName = LastName
// console.log(test)
// greeting("good morning","adrian")
// greeting("good night","adrian")}


const additionalGreatings = document.getElementById("additionalGreatings");

function greeting(greet, name) {
  const message = `${greet}, ${name}`;
  displayGreating.textContent = message;
  // Legg til meldingen i additionalGreatings
  const newMessageElement = document.createElement("div");
  newMessageElement.textContent = message;
  additionalGreatings.appendChild(newMessageElement);
  

//   this.firstName = firstName;
//   this.lastName = lastName;
//   test("adrian","hindenes")

  
 
// greeting("Good morning");
//   greeting("Good night");
const person1 = new test("Adrian", "Hindenes");

// Display last name greetings
greeting("Good morning", person1.lastName);
greeting("Good night", person1.lastName);

}

// Test the function
greeting("Adrian"+""+"Hindenes");
nonsol.log(person1)
