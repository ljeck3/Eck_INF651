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