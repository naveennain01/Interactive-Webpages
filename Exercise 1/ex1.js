//Function to map the grade with entered number
function mapGrade() {
    var gradeInput = document.getElementById('gradeInput').value;
    var grade = parseFloat(gradeInput);
    var gradeResult = document.getElementById('gradeResult');
//Check if entered number is valid between 0 to 100
    if (isNaN(grade) || grade < 0 || grade > 100) {
        gradeResult.innerText = "Please enter a valid number.";
        return;
    }

    if (grade >= 90) {
        gradeResult.innerText = "Grade: A+";
    } else if (grade >= 80) {
        gradeResult.innerText = "Grade: A";
    } else if (grade >= 75) {
        gradeResult.innerText = "Grade: B+";
    } else if (grade >= 70) {
        gradeResult.innerText = "Grade: B";
    } else if (grade >= 65) {
        gradeResult.innerText = "Grade: C+";
    } else if (grade >= 60) {
        gradeResult.innerText = "Grade: C";
    } else if (grade >= 55) {
        gradeResult.innerText = "Grade: D+";
    } else if (grade >= 50) {
        gradeResult.innerText = "Grade: D";
    } else if (grade >= 40) {
        gradeResult.innerText = "Grade: E";
    } else {
        gradeResult.innerText = "Grade: F";
    }
}
