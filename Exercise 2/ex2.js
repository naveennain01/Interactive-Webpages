let positiveCount = 0;
let negativeCount = 0;

function countNumbers() {
    let input = document.getElementById("numberInput").value.trim();
    
    // Clear previous result
    document.getElementById("result").innerHTML = "";
    
    // Check if input is empty
    if (input === "") {
        alert("Please enter a number.");
        return;
    }

    // Convert input to number
    let number = parseFloat(input);

    // Check if input is a valid number
    if (isNaN(number)) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }

    // Check if number is zero to stop
    if (number === 0) {
        document.getElementById("result").innerHTML = `
            <p>Positive numbers entered: ${positiveCount}</p>
            <p>Negative numbers entered: ${negativeCount}</p>
        `;
        document.getElementById("numberInput").disabled = true;
        return;
    }

    // Count positive and negative numbers
    if (number > 0) {
        positiveCount++;
    } else {
        negativeCount++;
    }

    // Clear input field
    document.getElementById("numberInput").value = "";
}

