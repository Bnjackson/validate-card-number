//Listens for click on button
document.getElementById("submit-button").addEventListener("click", (event) => {
    const input = document.getElementById("input"); 
    console.log(typeof input.value);
    checkInputLength(input);
});

function checkInputLength(input) {
    if(input.value.length === 15 || input.value.length === 16) {
        validateNumber(input.value)
    }
    else {
        input.style.border = "red 2px solid";
        console.log("Not valid length")
    }
}

//Calculates total
function validateNumber(cardNumber) {
    let total = 0;
    let odd;
    for(let i = cardNumber.length - 1; i >= 0; i--) {
        //cardNumber is a string so must be converted to add to total.
        const convertedElement = parseInt(cardNumber[i]);
        if(i === cardNumber.length - 1) {
            total += convertedElement;
            odd = i % 2 ? true : false;
        }
        else if(odd === true && i === 0) {
            calcDouble(convertedElement);
        }
        else if(odd === false && i % 2) {
            calcDouble(convertedElement);
        }
        else if(odd === true && i % 2 === 0) {
            calcDouble(convertedElement);
        }
        else {
            total += convertedElement;
        }
    }
    function calcDouble(num) {
        const doubledNumber = num * 2;
        if(doubledNumber > 9) {
            total += doubledNumber - 9;
        }
        else {
            total += doubledNumber;
        }
    }
    total % 10 === 0 ? showResults(true, total) : showResults(false, total);
}

function showResults(boolean, total) {
    const resultDiv = document.getElementById("result-container");
    if(boolean === true) {
        document.getElementById("validOrNot").innerHTML = "true";
        document.getElementById("input").style.border = "green 2px solid";
    }
    else {
        document.getElementById("validOrNot").innerHTML = "false";
        document.getElementById("input").style.border = "red 2px solid";
    }
    document.getElementById("result").innerText = total;
    resultDiv.style.display = "block";
}