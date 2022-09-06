// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = "abcdefghijklmnopqrstuvwxyz";
var charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var charSpecial = "!@,#$%&*{}[]/\\+=";

var allAnswers = [];
var result = '';
var passLength = [];


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {



    passLength = prompt("How many characters would you like your password to be? (8-128)")
    if (passLength < 8 || passLength > 128) {
        alert("Please enter a valid number.");
        writePassword()
    } else {
        specifyPassword();
        return passLength
    }



    function specifyPassword() {
        var passLower = confirm("Would you like to include lowercase characters?");
        var passUpper = confirm("Would you like to include uppercase characters?");
        var passNumber = confirm("Would you like to include numbers?");
        var passSpecial = confirm("Would you like to include special characters?");



        if (!passLower && !passUpper && !passNumber && !passSpecial) {
            alert("Plese select at least one option.")
            writePassword()
        } else {
            if (passLower) { allAnswers += characters }
            if (passUpper) { allAnswers += charactersUpper }
            if (passNumber) { allAnswers += numbers }
            if (passSpecial) { allAnswers += charSpecial }

            console.log(allAnswers)
            return allAnswers,
                randomize()
        }


    }


}


function randomize() {
    for (var i = 0; i < passLength; i++) {
        result += allAnswers.charAt(Math.floor(Math.random() *
            allAnswers.length));
    }
    console.log(result);
    document.getElementById("password").innerHTML = result;
}



