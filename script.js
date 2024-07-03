let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

// Add event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleInput(e.target.textContent);
  });
});

// Add event listener for keyboard input
document.addEventListener("keydown", (e) => {
  let key = e.key;

  // Check if the pressed key is a valid input
  let validInputs = /[0-9+\-*\/.=]|Enter|Backspace|Delete/;

  if (validInputs.test(key)) {
    // Handle special cases for some keys
    if (key === "Enter") {
      key = "="; // Map Enter key to "=" for consistency
    } else if (key === "Backspace" || key === "Delete") {
      key = key === "Backspace" ? "<" : "C"; // Map Backspace to "<" and Delete to "C"
    }

    handleInput(key);
  }
});

// Function to handle input (both from keyboard and button clicks)
function handleInput(inputValue) {
  if (inputValue === "C") {
    input.innerText = "";
  } else if (inputValue === "<") {
    input.innerText = input.innerText.slice(0, -1);
  } else if (inputValue === "=") {
    try {
      input.innerText = eval(input.innerText);
    } catch (error) {
      input.innerText = "Error";
    }
  } else {
    input.innerText += inputValue;
  }   

  // Adjust font size based on input length
  if (input.innerText.length > 25) {
    input.style.fontSize = "1em"; // Decrease font size
  } else if(input.innerText.length>9) {  
    input.style.fontSize = "1.5em"; // Default font size
  } 
  else{
    input.style.fontSize = "4em";
  }

  input.scrollLeft = input.scrollWidth;
}
