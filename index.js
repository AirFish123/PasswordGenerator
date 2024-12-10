const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
"^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",
".","?","/"];




let themeBtn = document.querySelector(".theme-button")

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let numberInput = document.getElementById("number-input-id")



let copyMessage = document.getElementById("copy-password-text")

let generatePassword = document.getElementById("generate-password-button")

generatePassword.textContent = "GENERATE PASSWORDS"
copyMessage.textContent = ""

passwordOne.textContent = ""
passwordTwo.textContent = ""

themeBtn.textContent = "Dark mode"


function modeDarkLight() {
    let bodyDiv = document.querySelector(".body-div")
    bodyDiv.classList.toggle("body-div-dark-mode")

    if (themeBtn.textContent === "Dark mode"){
    themeBtn.textContent = "Light mode"
    } else {themeBtn.textContent = "Dark mode"}

    let paragraph = bodyDiv.querySelector("p")
    paragraph.classList.toggle("p-dark-mode")

    let paragraph2 = document.getElementById("copy-password-text")
    paragraph2.classList.toggle("p-dark-mode")

    let numberDark = document.querySelector(".number-input")
    numberDark.classList.toggle("number-input-dark")

    let toggleDark = bodyDiv.querySelector(".theme-button")
    toggleDark.classList.toggle("theme-button-dark")


    let pwlengthDark = bodyDiv.querySelector(".password-length-text")
    pwlengthDark.classList.toggle("password-length-text-dark")

    let numfieldDark = bodyDiv.querySelector(".number-field")
    numfieldDark.classList.toggle("number-field-dark")

    let altText = bodyDiv.querySelector(".alternative-text")
    altText.classList.toggle("alternative-text-dark")

    let altTextTwo = bodyDiv.querySelector(".alternative-text-two")
    altTextTwo.classList.toggle("alternative-text-two-dark")

    let passwordBorder = bodyDiv.querySelector(".generated-password-block")
    passwordBorder.classList.toggle("generated-password-block-dark")
}

function generatePasswords() {
    
    copyMessage.textContent = "Click on password to copy"
    passwordOne.textContent = ""
    passwordTwo.textContent = ""
    generateRandomPassword()

    generatePassword.style.backgroundColor = "#065F46";
    setTimeout(() => {
        generatePassword.removeAttribute("style");
    }, 100);
    
}
// Click on password to copy

function generateRandomPassword() {
    let passwordLength = numberInput.value
        
    if (passwordLength <= 0) {
        copyMessage.textContent ="Set password length"

    } else {
        for (i = 0; i < passwordLength; i++) {
            let passwordOneCharacter = Math.floor(Math.random()*characters.length)
            let passwordTwoCharacter = Math.floor(Math.random()*characters.length)
            passwordOne.textContent += characters[passwordOneCharacter]
            passwordTwo.textContent += characters[passwordTwoCharacter]

        }

    }
}

function copyPasswordOne() {
    if (passwordOne.textContent.trim() !== "") {
    copyMessage.textContent = "Copied to clipboard!"
    navigator.clipboard.writeText(passwordOne.innerText);

    passwordOne.style.backgroundColor = "black";
    setTimeout(() => {
        passwordOne.removeAttribute("style");
    }, 100);

    setTimeout(() => {
        copyMessage.textContent ="Click on password to copy";
    }, 800);

    // passwordOne.style.marginLeft = "300px"
    // passwordOne.style.transition = "1s"
    }
}

function copyPasswordTwo() {

    if (passwordTwo.textContent.trim() !== "") {
    copyMessage.textContent = "Copied to clipboard!"
    navigator.clipboard.writeText(passwordTwo.innerText);

    passwordTwo.style.backgroundColor = "black";
    setTimeout(() => {
        passwordTwo.removeAttribute("style");
    }, 100);

    setTimeout(() => {
        copyMessage.textContent ="Click on password to copy";
    }, 800);

    }



}
