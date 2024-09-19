var generateName = require("sillyname");

document.getElementById("button").addEventListener("click", function() {
    var name = generateName(); // Generate a new random name
    var header = document.getElementsByTagName("h1")[0];
    
    // Add an animation class to scale the text
    header.classList.add("animated");
    setTimeout(() => header.classList.remove("animated"), 500); // Remove class after animation
    
    header.innerText = `Your name is: ${name}`; // Display the generated name
});
