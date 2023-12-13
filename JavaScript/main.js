let checkButton = document.getElementById('check');
let inputField = document.getElementById('input');
let result = document.getElementById('result')

checkButton.addEventListener('click', getYear);
inputField.addEventListener('keypress', enterKey);

function  enterKey(event) { //The event parameter is keyword that contains the information on the event that happen for example when the keypress happen it will carry the information regarding that event.
    if (event.key === "Enter") { //event.key is a property/variable of event that contains the information on what keyboard value is pressed for example if the user click "Enter" the event.key will carry out the value "Enter".
        event.preventDefault(); //Sometimes the key that being pressed has a default function, so we use preventDefault() to prevent that default function.
        checkButton.click(); //Lastly, we execute the click() which by the name itself is a function that will click the checkButton on the background.
        
        
        
    }
}
function getYear() {
    let userInput = inputField.value;
    let stringUserInput = inputField.value.toString();
    console.log(stringUserInput);
    if (userInput == "") {
        result.style.textAlign = "center";
        result.style.fontSize = "clamp(20px, 1.3vw, 35px)";
        result.textContent = "Sorry, but we can't accept null values.";
    }
    else if (stringUserInput.length < 4) {
        result.style.textAlign = "center";
        result.style.fontSize = "clamp(20px, 1.8vw, 35px)";
        result.textContent = "Please enter a valid year."
    }
    else {
        if ((userInput % 4) == 0){
            if ((userInput % 100) == 0) {
                if ((userInput % 400) == 0) {
                    result.style.textAlign = "center";
                    result.style.fontSize = "clamp(20px, 2vw, 35px)";
                    result.textContent = userInput + " is a Leap Year.";
                    return;
                }
                else {
                    result.style.textAlign = "center";
                    result.style.fontSize = "clamp(20px, 2vw, 35px)";
                    result.textContent = userInput + " is not a Leap Year.";
                }
            }
            else {
                result.style.textAlign = "center";
                result.style.fontSize = "clamp(20px, 2vw, 35px)";
                result.textContent = userInput + " is a Leap Year.";
            }
        }
        else {
            result.style.textAlign = "center";
            result.style.fontSize = "clamp(20px, 2vw, 35px)";
            result.textContent = userInput + " is not a Leap Year.";
        }
    }
}
const secondNav = document.getElementById('second-nav');
const hamburger = document.getElementById("hamburger");
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
        if (hamburger.classList.contains('active')){
            secondNav.style.display = "flex";
        }
        else {
            secondNav.style.display = "none";
        }
    })
        




