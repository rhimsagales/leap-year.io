let ids = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
let word = ids.map(id => document.getElementById(id));
let loading = document.getElementById("loading");
function typeWritingAnimation(word) {
    let index = 0;
    let reverseIndex = word.length - 1;
    let intervalID;
    let bsintervalID;

    let animation = function() {
        if (index < word.length) {
            word[index].style.display = "inline";
            index++;
        } else {
            clearInterval(intervalID);
            for (let i = 0; i < word.length; i++) {
                word[i].style.display = "inline";
            }
            setTimeout(function() {
                bsintervalID = setInterval(bspaceAnimation, 300);
            }, 1000);
        }
    }

    let bspaceAnimation = function() {
        if (reverseIndex >= 0) {
            word[reverseIndex].style.display = "none";
            reverseIndex--;
        } else {
            clearInterval(bsintervalID);
            
            // Restart the typeWritingAnimation after a delay
            setTimeout(function() {
                typeWritingAnimation(word);
            }, 1000);
        }
    }

    intervalID = setInterval(animation, 300);
}
document.addEventListener("DOMContentLoaded", function() {
    typeWritingAnimation(word);
});


let continueButton = document.getElementById("continue-button").onclick = 
    function goToMain () {
        location.href =  "../Html/main.html"
    };
