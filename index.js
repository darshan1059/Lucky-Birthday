var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");
var output = document.querySelector("#message");

checkButton.addEventListener("click", checkBirthDateIsLucky);

function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum && luckyNumber) {
        compareValues(sum, luckyNumber.value);
    } else {
        output.innerText = " Please enter both the fields";
    }
}

function calculateSum(dob) {
    let sum = 0;
    dob = dob.replaceAll("-", "");
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        output.innerText = "Your birthday is Lucky";
    } else {
        output.innerText = " Your birthday is not Lucky";
    }
}