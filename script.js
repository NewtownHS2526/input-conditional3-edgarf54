// ============================================
// ACTIVITY 3: THE SOLAR SYSTEM QUIZ
// ============================================
// In this activity, you will create a quiz where users guess the 8 planets.
// Follow the TODO comments to complete each section.
// Hint: Remember "My Very Eager Mother Just Served Us Nachos"
// (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)
// ============================================

// --------------------------------------------
// STEP 1: SELECT DOM ELEMENTS
// --------------------------------------------
// We use document.querySelector() to "grab" HTML elements so we can 
// interact with them in JavaScript.
// 
// querySelector() takes a CSS selector as an argument:
//   - "#id-name" selects an element by its ID
//   - ".class-name" selects an element by its class
//
// TODO: Select the following three elements from the HTML:
//   1. The text input box (id="user-input")
//   2. The output div where correct answers appear (id="quiz-outputs")
//   3. The status message area (id="status")
// --------------------------------------------

const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

// This console.log helps us verify our selections worked correctly.
// Open the browser's Developer Tools (F12) to see the output.
console.log(textBox, outputBox, statusBox);

// --------------------------------------------
// STEP 2: CREATE VARIABLES TO TRACK GAME STATE
// --------------------------------------------
// We need variables to keep track of:
//   - The player's score (how many correct answers)
//   - Whether they found the secret bonus answer
//
// TODO: Create two variables:
//   1. A "score" variable initialized to 0
//   2. A "bonus" variable (boolean) initialized to false
// --------------------------------------------

let score = 0;
let pluto = false;

// --------------------------------------------
// STEP 3: CREATE THE ANSWER-CHECKING FUNCTION
// --------------------------------------------
// This function runs every time the user submits an answer.
// It checks the user's input against our list of correct answers.
//
// Key concepts used here:
//   - textBox.value: Gets the text the user typed
//   - innerHTML: Allows us to add HTML content to an element
//   - += operator: Adds to existing content (doesn't replace it)
//   - if/else if/else: Checks multiple conditions in order
// --------------------------------------------

const checkAnswer = () => {
  const currentAnswer = textBox.value;
  console.log("Checking", currentAnswer);
  // Match against boroughs.
  if (currentAnswer === "Earth") {
    outputBox.innerHTML += `<h3>Earth</h3><p>Its where we are</p>`;
    score += 1;
  } else if (currentAnswer === "Mercury") {
    outputBox.innerHTML += `<h3>Mercury</h3><p>The planet closest to the sun</p>`;
    score += 1;
  } else if (currentAnswer === "Venus" || currentAnswer === "The Bronx") {
    outputBox.innerHTML += `<h3>Venus</h3><p>sometimes called earths sister planet due to its similar size</p>`;
    score += 1;
  } else if (currentAnswer === "Mars") {
    outputBox.innerHTML += `<h3>Mars</h3><p>The planet we are most likely to inhabit next</p>`;
    score += 1;
  } else if (currentAnswer === "Jupiter") {
    outputBox.innerHTML += `<h3>Jupiter</h3><p>Best known for its storms. It even has an eye-like storm on its surface</p>`;
    score += 1;
  } else if (currentAnswer === "Saturn") {
    outputBox.innerHTML += `<h3>Saturn</h3><p>Best known for its massive rings. Its also the largest of all the planets</p>`;
    score += 1;
  } else if (currentAnswer === "Uranus") {
    outputBox.innerHTML += `<h3>Uranus</h3><p>The planet with the weird name. Also has small rings like Saturn</p>`;
    score += 1;
  } else if (currentAnswer === "Neptune") {
    outputBox.innerHTML += `<h3>Neptune</h3><p>The planet farthest from the sun, and is also the coldest.</p>`;
    score += 1;
  } else if (currentAnswer === "Pluto") {
    outputBox.innerHTML += `<h3>Pluto</h3><p>You found the dwarf planet!</p>`;
    pluto = true;
  } else {
    statusBox.innerHTML = `Sorry, but ${currentAnswer} is not a planet.`;
  }
  checkScore();
  // Reset the textBox
  textBox.value = "";
};

// --------------------------------------------
// STEP 4: CREATE THE SCORE-CHECKING FUNCTION
// --------------------------------------------
// This function checks if the player has won the game.
// It updates the status message based on their progress.
//
// TODO: Check two conditions:
//   1. If score equals 8, display a congratulations message
//   2. If score equals 8 AND they found the bonus, display a special message
//      and disable the input box (textBox.disabled = true)
// --------------------------------------------

const checkScore = () => {
  if (score === 8) {
    statusBox.innerHTML = "Congratulations, you found all 8 planets in our solar system!";
  }
  if (score === 8 && pluto) {
    statusBox.innerHTML =
      "A true astronomer! All 8 planets and the dwarf planet Pluto!";
    textBox.disabled = true;
  }
};

// --------------------------------------------
// STEP 5: ADD AN EVENT LISTENER
// --------------------------------------------
// Event listeners "listen" for specific events (like clicks, key presses, etc.)
// and run a function when that event occurs.
//
// addEventListener() takes two arguments:
//   1. The event type (as a string): "change", "click", "keydown", etc.
//   2. The function to run when the event happens
//
// The "change" event fires when the user changes the input and leaves the field
// (usually by pressing Enter or clicking elsewhere)
//
// TODO: Add an event listener to textBox that:
//   - Listens for the "change" event
//   - Calls the checkAnswer function when triggered
// --------------------------------------------

textBox.addEventListener("change", checkAnswer);