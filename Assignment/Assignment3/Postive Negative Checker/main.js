//---------- +/- Checker (if-else)----------
function posNeg() {
    let input = parseInt(prompt("Enter a number:"));
    let squareRoot = Math.sqrt(input);

    if (isNaN(squareRoot)) {
        alert("The number is negative.");
    }else {
        alert("The number is positive.");
    }
}