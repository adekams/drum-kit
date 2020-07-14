

function removeTransition(e){
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    //if key pressed not present on page, stop
    if (!audio) return;

    //when playing key, add style
    key.classList.add("playing");

    //reset playtime so key plays everytime it is called, regardless of if it is already playing or not
    audio.currentTime = 0;
    audio.play();
    
}

const keys = Array.from(document.querySelectorAll(".key"));

//remove transition style after playing
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

//listen for key and play
window.addEventListener('keydown', playSound);


