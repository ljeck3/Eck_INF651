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