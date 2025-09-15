console.log("----------Even Number Finder (while loop)----------")
function evenFinder() {
    let i = 1
    while (i<51) {
        if (i%2 == 0) {
            console.log(i)
        }
        i++
    }
}

//----------PIN Validator (do-while loop)----------
function pinValidator() {
    const pin = 1306;
    let guess;

    do {
        guess = parseInt(prompt("What is the PIN?"));

        if (guess === pin) {
            document.getElementById("result")
            .textContent = `Success! You entered the correct pin: ${pin}`;
            return;
         }
    } while (guess !== pin);
}

//----------Multiplication Table (for loop + continue----------
function multiplyTable() {
    let input = parseInt(prompt("Enter a number:"));

    for (let i = 0; i < 11; i++) {
        let product = (input * i);
        if (product%5 == 0)  {
            continue;
        }
        console.log(`${input} X ${i} = ${product}`);
    }
    alert("Check results in the console.")
} 

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

//---------- +/- Checker (if-else)----------
function monthFinder() {
    let input = parseInt(prompt("Enter a number between 1 and 12 to see the corresponding month:"));

    switch (input) {
        case 1:
            console.log("January is the 1st month.");
            break;
        case 2:
            console.log("February is the 2nd month.");
            break;
        case 3:
            console.log("March is the 3rd month.");
            break;
        case 4:
            console.log("April is the 4th month.");
            break; 
        case 5:
            console.log("May is the 5th month.");
            break;
        case 6:
            console.log("June is the 6th month.");
            break;
        case 7:
            console.log("July is the 7th month.");
            break;
        case 8:
            console.log("August is the 8th month.");
            break;
        case 9:
            console.log("September is the 9th month.");
            break;
        case 10:
            console.log("October is the 10th month.");
            break;
        case 11:
            console.log("November is the 11th month.");
            break;
        case 12:
            console.log("December is the 12th month.");
            break; 
        default:
            console.log("Invalid input");
    }
}
