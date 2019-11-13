window.onload = slideEffect();

function slideEffect(){
    console.log('work');
    function toggleButton(toggle){
        button.style.pointerEvents = toggle;
    }
    const animationSlider = document.getElementsByClassName('animationSlider')[0];
    const button = document.querySelector('.header__btn');
    // Block buttons until animation is finished
    toggleButton('none');
    animationSlider.classList.add('loadingScreen');
    setTimeout(function(){
        // Unblock buttons
        toggleButton('');
        animationSlider.classList.remove('loadingScreen');
    }, 1400);
};