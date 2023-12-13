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
const disableScreen = document.getElementById('disable-screen');

const sentOne = document.getElementById('sent-alertOne');
const firstSentButton = document.getElementById('first-button');
firstSentButton.addEventListener('click', function displaySuccessSent () {
    disableScreen.style.display = "flex"
    disableScreen.style.zIndex = "8";
    sentOne.style.scale = "1";
    function displayNone() {
        disableScreen.style.display = "none"
        disableScreen.style.zIndex = "-15";
        sentOne.style.scale = "0";
        
    
    }
    setTimeout(displayNone, 2000);
})

const sentTwo = document.getElementById('sent-alertTwo');
const secondSentButton = document.getElementById('second-button');
secondSentButton.addEventListener('click', function displaySuccessSentTwo () {
    disableScreen.style.display = "flex"
    disableScreen.style.zIndex = "8";
    sentTwo.style.scale = "1";
    function displayNoneTwo() {
        disableScreen.style.display = "none"
        disableScreen.style.zIndex = "-15";
        sentTwo.style.scale = "0";
        
    
    }
    setTimeout(displayNoneTwo, 2000);
})