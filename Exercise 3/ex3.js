//Function to check if reverse number is same as the entered number
function checkReverse() {
    var numberInput = document.getElementById('numberInput').value;
    var checkResult = document.getElementById('checkResult');

//Check if entered number is valid positive number
    if ( isNaN(numberInput) || numberInput < 1 ) {
        checkResult.innerText = "Please enter a valid positive number.";
        return;
     }

    var reverseNumber = 0;
    var originalNumber = numberInput;
      
         while (numberInput>0) {
         var digit = numberInput % 10;
         reverseNumber = reverseNumber*10 + digit;
         numberInput = parseInt(numberInput/10);
         }       

       if (originalNumber == reverseNumber){
        checkResult.innerText = " Yes ";
         }
       else {
        checkResult.innerText = " No ";
        }
    
}
