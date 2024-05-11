// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create a single box
function createBox() {
    const container = document.getElementById("container");
    const box = document.createElement("div");
    box.className = "box";
    box.style.left = getRandomNumber(0, container.offsetWidth - 30) + "px";
    box.style.top = getRandomNumber(0, container.offsetHeight - 30) + "px";
    box.addEventListener("mouseover", removeBox);
    container.appendChild(box);
}

// Function to remove box when mouseover
function removeBox(event) {
    event.target.remove();
    if (document.querySelectorAll(".box").length === 1) {
        alert("Last child!");
    }
}

// Function to create multiple boxes
function createMultipleBoxes(numberOfBoxes) {
    for (let i = 0; i < numberOfBoxes; i++) {
        createBox();
    }
}

// Event listener for button click to create more boxes
document.getElementById("createBoxesBtn").addEventListener("click", function() {
    createMultipleBoxes(100);
});

// Initial creation of 100 boxes
createMultipleBoxes(100);
